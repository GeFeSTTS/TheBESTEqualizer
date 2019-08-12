import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import configureMockStore from 'redux-mock-store';
import Pizzicato from 'pizzicato';
import OneSlider from './slider';

configure({ adapter: new Adapter() });
const mockStore = configureMockStore();
const blocksData = [
  {
    name: 'Delay',
    effects: {
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
    },
    createEffect: new Pizzicato.Effects.Delay({
      feedback: 0,
      time: 0,
      mix: 0,
    }),
    isVisible: true,
  },
  {
    name: 'Ping-Pong Delay',
    effects: {
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
    },
    createEffect: new Pizzicato.Effects.PingPongDelay(
      {
        feedback: 0,
        time: 0,
        mix: 0,
      },
    ),
    isVisible: false,
  },
  {
    name: 'Dub Delay',
    effects: {
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      time: {
        value: 0,
        minValue: 0,
        maxValue: 5,
        step: 0.001,
      },
      cutoff: {
        value: 0,
        minValue: 0,
        maxValue: 4000,
        step: 100,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
    },
    createEffect: new Pizzicato.Effects.DubDelay(
      {
        feedback: 0,
        time: 0,
        cutoff: 0,
        mix: 0,
      },
    ),
    isVisible: false,
  },
  {
    name: 'Distortion',
    effects: {
      gain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Distortion({
      gain: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Quadrafuzz',
    effects: {
      lowGain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      midLowGain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      midHighGain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      highGain: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Quadrafuzz({
      lowGain: 0,
      midLowGain: 0,
      midHighGain: 0,
      highGain: 0,
      mix: 0,
    }),
    isVisible: true,
  },
  {
    name: 'Flanger',
    effects: {
      time: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      speed: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      depth: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      feedback: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Flanger({
      time: 0,
      speed: 0,
      depth: 0,
      feedback: 0,
      mix: 0,
    }),
    isVisible: true,
  },
  {
    name: 'Reverb',
    effects: {
      time: {
        value: 0,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
      decay: {
        value: 0,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 3,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Reverb({
      time: 0,
      decay: 0,
      mix: 0,
    }),
    isVisible: true,
  },
  {
    name: 'Tremolo',
    effects: {
      speed: {
        value: 0,
        minValue: 0,
        maxValue: 20,
        step: 0.01,
      },
      depth: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.Tremolo({
      speed: 0,
      depth: 0,
      mix: 0,
    }),
    isVisible: false,
  },
  {
    name: 'Stereo panner',
    effects: {
      pan: {
        value: 0,
        minValue: -1,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.StereoPanner({
      pan: 0,
    }),
    isVisible: true,
  },
  {
    name: 'Compressor',
    effects: {
      threshold: {
        value: 0,
        minValue: -100,
        maxValue: 0,
        step: 1,
      },
      knee: {
        value: 0,
        minValue: 0,
        maxValue: 40,
        step: 1,
      },
      attack: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
      release: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.001,
      },
      ratio: {
        value: 1,
        minValue: 1,
        maxValue: 20,
        step: 1,
      },
    },
    createEffect: new Pizzicato.Effects.Compressor({
      threshold: 0,
      knee: 0,
      attack: 0,
      release: 0,
      ratio: 1,
    }),
    isVisible: false,
  },
  {
    name: 'Low-Pass Filter',
    effects: {
      frequency: {
        value: 22050,
        minValue: 10,
        maxValue: 22050,
        step: 1,
      },
      peak: {
        value: 0.0001,
        minValue: 0.0001,
        maxValue: 20,
        step: 0.0001,
      },
    },
    createEffect: new Pizzicato.Effects.LowPassFilter({
      frequency: 22050,
      peak: 0.0001,
    }),
    isVisible: false,
  },
  {
    name: 'High-Pass Filter',
    effects: {
      frequency: {
        value: 10,
        minValue: 10,
        maxValue: 22050,
        step: 1,
      },
      peak: {
        value: 0.0001,
        minValue: 0.0001,
        maxValue: 20,
        step: 0.0001,
      },
    },
    createEffect: new Pizzicato.Effects.HighPassFilter({
      frequency: 10,
      peak: 0.0001,
    }),
    isVisible: false,
  },
  {
    name: 'Ring Modulator',
    effects: {
      speed: {
        value: 0,
        minValue: 0,
        maxValue: 2000,
        step: 1,
      },
      distortion: {
        value: 0.2,
        minValue: 0.2,
        maxValue: 50,
        step: 0.0001,
      },
      mix: {
        value: 0,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    },
    createEffect: new Pizzicato.Effects.RingModulator({
      speed: 0,
      distortion: 0.2,
      mix: 0,
    }),
    isVisible: false,
  },
];
const store = mockStore({ blocksData });

jest.mock('pizzicato', () => {
  const mockPizzicato = jest.fn(() => 'Pizzicato');
  mockPizzicato.Effects = jest.fn(() => 'Effects');
  const effects = ['Delay', 'PingPongDelay', 'DubDelay', 'Distortion', 'Quadrafuzz', 'Flanger',
    'Reverb', 'Tremolo', 'StereoPanner', 'Compressor', 'LowPassFilter', 'HighPassFilter', 'RingModulator'];
  effects.forEach((effect) => {
    mockPizzicato.Effects[effect] = jest.fn(() => ({ effect: () => {} }));
  });
  return {
    __esModule: true,
    default: mockPizzicato,
  };
});


describe('<OneSlider />', () => {
  const props = {
    blockName: 'Delay',
    effectName: 'feedback',
    effectValues: {
      value: 0,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
    },
  };

  it('loads pressets', () => {
    const wrapper = mount(
      <Provider store={store}>
        <OneSlider {...props} />
      </Provider>,
    );
    const newProps = {
      effectValues: {
        value: 0.5,
        minValue: 0,
        maxValue: 1,
        step: 0.01,
      },
    };
    wrapper.setProps({ children: <OneSlider {...newProps} /> });
    wrapper.update();
    expect(wrapper.find('OneSlider').instance().state.sliderValue).toEqual(0.5);
  });

  it('should change value on slider', () => {
    const wrapper = mount(
      <Provider store={store}>
        <OneSlider {...props} />
      </Provider>,
    ).find('OneSlider');
    wrapper.instance().setEffectsValue(0.3);
    expect(wrapper.instance().state.sliderValue).toEqual(0.3);
  });

  it('matches snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <OneSlider {...props} />
      </Provider>,
    ).dive();

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
