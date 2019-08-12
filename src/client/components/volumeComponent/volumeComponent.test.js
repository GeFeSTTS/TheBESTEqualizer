import React from 'react';
import { shallow } from 'enzyme';
import { VolumeComponent } from './volumeComponent';

describe('TEST VOLUME SLIDER', () => {
  let VolumeComponentWrapper;

  const props = {
    min: 0,
    max: 1,
    step: 0.001,
    onChange: () => {},
    value: 0,
    audioData: { sound: {}, voice: {} },
  };

  beforeEach(() => {
    VolumeComponentWrapper = shallow(<VolumeComponent {...props} />);
  });

  it('is render component', () => {
    expect(VolumeComponentWrapper.find('.SwitcherContainer')).toHaveLength(1);
  });

  it('render component correctly', () => {
    expect(VolumeComponentWrapper).toMatchSnapshot();
  });

  it('should call function after change', () => {
    const instance = VolumeComponentWrapper.instance();
    const spySwitching = jest.spyOn(instance, 'changeVolume');

    VolumeComponentWrapper.setState({ volumeValueSound: 0.8 });
    VolumeComponentWrapper.instance().forceUpdate();
    VolumeComponentWrapper.find('Slider').simulate('change', 1);

    expect(spySwitching).toHaveBeenCalled();
  });

  it('should we return sound as track in getDerivedStateFromProps', () => {
    VolumeComponentWrapper.setProps({ audioData: { sound: { playing: true }, voice: null } });

    expect(VolumeComponentWrapper).toHaveLength(1);
  });

  it('should we return sound as voice in getDerivedStateFromProps', () => {
    VolumeComponentWrapper.setProps({ audioData: { sound: null, voice: { playing: true } } });

    expect(VolumeComponentWrapper).toHaveLength(1);
  });
});
