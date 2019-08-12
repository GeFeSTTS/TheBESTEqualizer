import React from 'react';
import { shallow } from 'enzyme';
import { FilterToggler } from './filterToggler';

describe('Filter Toggler', () => {
  const props = {
    audioData: {
      sound: {
        effects: ['Delay', 'Flanger', 'Reverb', 'Tremolo', 'Stereo panner'],
        removeEffect: jest.fn(),
        addEffect: jest.fn(),
      },
      voice: {
        effects: [],
        removeEffect: jest.fn(),
        addEffect: jest.fn(),
      },
    },
    blocksData: [
      {
        name: 'Delay',
        isVisible: true,
      },
      {
        name: 'Ping-Pong Delay',
        isVisible: false,
      },
      {
        name: 'Dub Delay',
        isVisible: false,
      },
      {
        name: 'Distortion',
        isVisible: false,
      },
      {
        name: 'Quadrafuzz',
        isVisible: false,
      },
      {
        name: 'Flanger',
        isVisible: true,
      },
      {
        name: 'Reverb',
        isVisible: true,
      },
      {
        name: 'Tremolo',
        isVisible: true,
      },
      {
        name: 'Stereo panner',
        isVisible: true,
      },
      {
        name: 'Compressor',
        isVisible: false,
      },
      {
        name: 'Low-Pass Filter',
        isVisible: false,
      },
      {
        name: 'High-Pass Filter',
        isVisible: false,
      },
      {
        name: 'Ring Modulator',
        isVisible: false,
      },
    ],
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<FilterToggler {...props} />);
  });

  it('should render filterToggler element', () => {
    expect(wrapper.find('.modesElement')).toHaveLength(1);
  });

  it('should render filterToggler properly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke onToggler function that attach voice filters', () => {
    wrapper.find('#toggler').simulate('click');
    expect(props.audioData.voice.addEffect).toHaveBeenCalled();
  });

  it('should invoke onToggler function that attach sound filters', () => {
    wrapper.find('#toggler').simulate('click');
    wrapper.find('#toggler').simulate('click');
    expect(props.audioData.sound.addEffect).toHaveBeenCalled();
  });
});
