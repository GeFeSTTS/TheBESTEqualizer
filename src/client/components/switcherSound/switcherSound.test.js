import React from 'react';
import { shallow } from 'enzyme';
import { SwitcherSound } from './switcherSound';

describe('TEST SOUND SWITCHER', () => {
  let switcherSoundComponent;
  const props = {
    min: 0,
    max: 1,
    step: 0.001,
    onChange: () => {},
    audioData: { sound: {}, voice: {} },
  };

  beforeEach(() => {
    switcherSoundComponent = shallow(<SwitcherSound {...props} />);
  });

  it('is render component', () => {
    switcherSoundComponent.setState({ volumeValueTrack: 0 });
    expect(switcherSoundComponent).toHaveLength(1);
  });

  it('render component correctly', () => {
    switcherSoundComponent.setState({ volumeValueTrack: 0 });
    switcherSoundComponent.find('Slider');
    expect(switcherSoundComponent).toMatchSnapshot();
  });

  it('should call function after change', () => {
    switcherSoundComponent.setState({ volumeValueTrack: 0.8 });
    const instance = switcherSoundComponent.instance();

    const spySwitching = jest.spyOn(instance, 'changeVolume');
    switcherSoundComponent.instance().forceUpdate();
    switcherSoundComponent.find('Slider').simulate('change', 1);
    expect(spySwitching).toHaveBeenCalled();
  });

  it('should we return null in getDerivedStateFromProps', () => {
    switcherSoundComponent.setProps({ audioData: { sound: null, voice: {} } });
    switcherSoundComponent.setState({ volumeValueTrack: 0 });
    expect(switcherSoundComponent).toHaveLength(1);
  });
});
