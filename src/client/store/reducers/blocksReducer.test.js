import reducer from './blocksReducer';
import * as actionTypes from '../actions/types';

const DEFAULT_REDUCER = 'DEFAULT_REDUCER';

const initialState = [
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
    isVisible: true,
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
    isVisible: false,
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
];

jest.mock('pizzicato', () => {
  const mockPizzicato = jest.fn(() => 'Pizzicato');
  mockPizzicato.Effects = jest.fn(() => 'Effects');
  mockPizzicato.Effects.Delay = jest.fn(() => 'Delay');
  mockPizzicato.Effects.PingPongDelay = jest.fn(() => 'PingPongDelay');
  mockPizzicato.Effects.DubDelay = jest.fn(() => 'DubDelay');
  mockPizzicato.Effects.Distortion = jest.fn(() => 'Distortion');
  mockPizzicato.Effects.Quadrafuzz = jest.fn(() => 'Quadrafuzz');
  mockPizzicato.Effects.Flanger = jest.fn(() => 'Flanger');
  mockPizzicato.Effects.Reverb = jest.fn(() => 'Reverb');
  mockPizzicato.Effects.Tremolo = jest.fn(() => 'Tremolo');
  mockPizzicato.Effects.StereoPanner = jest.fn(() => 'StereoPanner');
  mockPizzicato.Effects.Compressor = jest.fn(() => 'Compressor');
  mockPizzicato.Effects.LowPassFilter = jest.fn(() => 'LowPassFilter');
  mockPizzicato.Effects.HighPassFilter = jest.fn(() => 'HighPassFilter');
  mockPizzicato.Effects.RingModulator = jest.fn(() => 'RingModulator');
  return {
    __esModule: true,
    default: mockPizzicato,
  };
});

describe('blocks reducer', () => {
  it('should dispatch reducer Delay BLOCK SET_VISIBILITY to FALSE', () => {
    const action = {
      type: actionTypes.SET_VISIBILITY,
      blockName: 'Delay',
    };
    expect(reducer(initialState, action)[0].isVisible).toEqual(false);
  });

  it('should dispatch reducer Compressor BLOCK SET_VISIBILITY to TRUE', () => {
    const action = {
      type: actionTypes.SET_VISIBILITY,
      blockName: 'Compressor',
    };
    expect(reducer(initialState, action)[0].isVisible).toEqual(true);
  });

  it('should dispatch reducer PASS FAKE REDUCER', () => {
    const action = {
      type: DEFAULT_REDUCER,
    };
    expect(reducer(initialState, action)).toEqual([...initialState]);
  });
});
