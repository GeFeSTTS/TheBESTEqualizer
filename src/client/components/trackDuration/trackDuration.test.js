import React from 'react';
import { shallow } from 'enzyme';
import { TrackDuration } from './trackDuration';

describe('TEST DURATION SLIDER', () => {
  let TrackDurationWrapper;
  const props = {
    tooltip: false,
    min: 0,
    max: 1,
    step: 0.001,
    audioData: {
      sound: {
        pause: () => (
          'fakePauseMethod'
        ),
        play: () => (
          'fakePlayMethod'
        ),
        stop: () => 'fakePauseMethod',
      },
      voice: {
        pause: () => (
          'fakePauseMethod'
        ),
        play: () => (
          'fakePlayMethod'
        ),
        stop: () => 'fakePauseMethod',
      },
    },
    onChangeStart: () => {},
    onChange: () => {},
    onChangeComplete: () => {},
    value: 0,
  };

  beforeEach(() => {
    TrackDurationWrapper = shallow(<TrackDuration {...props} />);
  });

  it('is render component', () => {
    expect(TrackDurationWrapper.find('.DurationContainer')).toHaveLength(1);
  });

  it('render component correctly', () => {
    expect(TrackDurationWrapper).toMatchSnapshot();
  });

  it('should call function after change', () => {
    const instance = TrackDurationWrapper.instance();
    const spySwitching = jest.spyOn(instance, 'setCurrentTime');

    TrackDurationWrapper.setState({ currentTime: 200 });
    TrackDurationWrapper.find('Slider').simulate('change', 300);

    expect(spySwitching).toHaveBeenCalled();
  });

  it('should song play again if onToggle will false', () => {
    const instance = TrackDurationWrapper.instance();
    const spySwitching = jest.spyOn(instance, 'setPlayOnSound');

    TrackDurationWrapper.setState({ onToggle: false, currentTime: 200, duration: 300 });
    TrackDurationWrapper.find('Slider').simulate('changeComplete', 300);

    expect(spySwitching).toHaveBeenCalled();
  });

  it('should song pause if onToggle will true', () => {
    const instance = TrackDurationWrapper.instance();
    const spySwitching = jest.spyOn(instance, 'setPauseOnSound');

    TrackDurationWrapper.setState({ onToggle: true, currentTime: 200, duration: 300 });
    TrackDurationWrapper.find('Slider').simulate('changeStart', 250);

    expect(spySwitching).toHaveBeenCalled();
  });

  it('should song stop if current time will more then duration', () => {
    TrackDurationWrapper.setProps({ currentDifference: 100, currentTime: 200 });
    const instance = TrackDurationWrapper.instance();
    const spySwitching = jest.spyOn(instance, 'calculateCurrentTime');

    TrackDurationWrapper.setState({ duration: 100, playing: true });
    TrackDurationWrapper.find('Slider').simulate('change', 1);

    expect(spySwitching).toHaveBeenCalled();
  });

  it('should duration from audio Data will assign in state', () => {
    TrackDurationWrapper.setProps({
      audioData: {
        sound: {
          sourceNode: {
            buffer: {
              duration: 200,
            },
          },
        },
        voice: {},
      },
    });
    TrackDurationWrapper.setState({ startPlayTime: new Date(), loading: false });

    expect(TrackDurationWrapper.state().duration).toEqual(200);
  });

  it('should time start from zero if we load another song', () => {
    const instance = TrackDurationWrapper.instance();
    const spySwitching = jest.spyOn(instance, 'calculateCurrentTime');

    TrackDurationWrapper.setState({ currentTime: 200, duration: 100, playing: true });
    TrackDurationWrapper.setProps({ currentDifference: 100 });
    TrackDurationWrapper.find('Slider').simulate('change', 1);

    expect(spySwitching).toHaveBeenCalled();
  });

  it('should startPlayTime setting again if song will changed', () => {
    TrackDurationWrapper.setState({ trackName: 'Song1', currentTime: 0, duration: 200 });
    TrackDurationWrapper.setState({
      trackName: 'Song2', currentTime: 0, duration: 200, timeForTest: new Date(),
    });

    expect(TrackDurationWrapper.state().startPlayTime).toBeTruthy();
  });
});
