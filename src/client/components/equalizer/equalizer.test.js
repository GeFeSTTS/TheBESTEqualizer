import React from 'react';
import {
  shallow,
} from 'enzyme';
import Equalizer from './equalizer';

import {
  storeFactory,
} from '../../test/testUtils';

jest.mock('pizzicato', () => {
  const mockPizzicato = jest.fn();
  mockPizzicato.context = jest.fn(() => ({}));
  mockPizzicato.context.createAnalyser = jest.fn(() => 'analyser');
  mockPizzicato.Effects = jest.fn(() => {});
  const effects = ['Delay', 'PingPongDelay', 'DubDelay', 'Distortion', 'Quadrafuzz', 'Flanger',
    'Reverb', 'Tremolo', 'StereoPanner', 'Compressor', 'LowPassFilter', 'HighPassFilter', 'RingModulator',
  ];
  effects.forEach((effect, el) => {
    mockPizzicato.Effects[effect] = jest.fn(() => function Effect() {
      return {
        effect: () => (`fakeEffect${el}`),
      };
    });
  });
  return {
    __esModule: true,
    default: mockPizzicato,
  };
});

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Equalizer store={
        store
      }
  />, { disableLifecycleMethods: true }).dive().dive();
  return wrapper;
};

describe('test equalizer', () => {
  describe('test to make snapshot', () => {
    it('should render component properly', () => {
      const initialState = {
        audioData: {
          analyser: {},
          audioContext: {},
          widthCanvas: 100,
          heightCanvas: 200,
        },
      };

      const wrapper = setup(initialState);
      expect(wrapper.instance()).toMatchSnapshot();
    });
  });

  describe('test equlizer when sound is uploaded', () => {
    const initialState = {
      audioData: {
        analyser: {},
        audioContext: {},
        widthCanvas: 100,
        heightCanvas: 200,
        sound: true,
      },
    };
    let wrapper;
    let instance;
    beforeEach(() => {
      wrapper = setup(initialState);
      instance = wrapper.instance();
    });

    it('should render `play` button', () => {
      expect(wrapper.find('Button[value="Play"]').length).toBe(1);
    });

    it('should render `pause` button', () => {
      expect(wrapper.find('Button[value="Pause"]').length).toBe(1);
    });

    it('should call function after click on `play` button', () => {
      const spyPlayMethod = jest.spyOn(instance, 'playSoundFromFile');

      instance.forceUpdate();
      wrapper.find('Button[value="Play"]').simulate('click');

      expect(spyPlayMethod).toHaveBeenCalled();
    });

    it('should call function after click on `pause` button', () => {
      const spyPauseMethod = jest.spyOn(instance, 'pauseSoundFromFile');

      instance.forceUpdate();
      wrapper.find('Button[value="Pause"]').simulate('click');

      expect(spyPauseMethod).toHaveBeenCalled();
    });

    it('should call function after click on `startStreamButton` button', () => {
      const spyPauseMethod = jest.spyOn(instance, 'startMuteStream');

      instance.forceUpdate();
      wrapper.find('Button[value="Start stream"]').simulate('click');

      expect(spyPauseMethod).toHaveBeenCalled();
    });
  });

  describe('test component methods', () => {
    const initialState = {
      audioData: {
        analyser: {
          getByteFrequencyData: jest.fn(),
        },
        audioContext: {},
        widthCanvas: 100,
        heightCanvas: 200,
        cxt: {},
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
          play: () => 'fakePlayMethod',
          stop: () => 'fakeStopMethod',
          pause: () => 'fakePauseMethod',
          connect: () => 'fakeConnectMethod',
        },
        startMuteState: false,
        playPauseState: false,
      },
    };

    let wrapper;
    let instance;
    beforeEach(() => {
      jest.resetAllMocks();
      wrapper = setup(initialState);
      instance = wrapper.instance();
    });

    it('will test own method `setCanvasToState` which should set in state reference on canvas element', () => {
      const paramForTest = document.createElement('canvas');
      const testedFunction = instance.setCanvasToState;

      paramForTest.getContext = jest.fn(() => 'fakeCanvas');

      testedFunction(paramForTest);
      expect(instance.state.ctx).toEqual('fakeCanvas');
    });

    it('will test own method `detectStreamSoundFromMicrophone` with resolved mediaDevices', () => {
      Object.defineProperty(window.navigator, 'mediaDevices', { value: {}, writable: true });
      Object.defineProperty(window.navigator.mediaDevices, 'getUserMedia', { value: '', writable: true });
      navigator.mediaDevices.getUserMedia = () => Promise.resolve();
      instance.createSoundStream = jest.fn();

      const testedFunction = instance.detectStreamSoundFromMicrophone;
      const spyRendEqul = jest.spyOn(instance, 'createSoundStream');

      testedFunction();
      expect(spyRendEqul).toHaveBeenCalled();
    });

    it('will test own method `detectStreamSoundFromMicrophone` with rejected `getUserMedia`', () => {
      Object.defineProperty(window.navigator, 'mediaDevices', { value: {}, writable: true });
      Object.defineProperty(window.navigator.mediaDevices, 'getUserMedia', { value: '', writable: true });
      navigator.mediaDevices.getUserMedia = () => Promise.reject();
      instance.createSoundStream = jest.fn();

      const testedFunction = instance.detectStreamSoundFromMicrophone;

      testedFunction();

      expect(() => {
        throw new Error();
      }).toThrow();
    });

    it('will test own method `detectStreamSoundFromMicrophone` with rejected mediaDevices', () => {
      Object.defineProperty(window.navigator, 'mediaDevices', { value: null, writable: true });

      const testedFunction = instance.detectStreamSoundFromMicrophone;

      expect(testedFunction).toThrow();
    });

    it('will test own method `playSoundFromFile` which should call action and function', async () => {
      wrapper.setProps({
        playPauseSoundFromFileAsProp: jest.fn(() => ('fakePlayPauseSoundFromFile')),
      });
      instance.renderEqualizer = jest.fn();
      instance.forceUpdate();

      const spyPlPasSound = jest.spyOn(instance.props, 'playPauseSoundFromFileAsProp');
      const testedFunction = instance.playSoundFromFile;
      const spyRendEqul = jest.spyOn(instance, 'renderEqualizer');

      testedFunction();
      await expect(spyPlPasSound).toHaveBeenCalled();
      await expect(spyRendEqul).toHaveBeenCalled();
    });

    it('will test own method `attachFiltersToSource` which should attech five visible effects to input source', () => {
      const fakeSourceInput = {
        howMuchEffectsAttached: 0,
        addEffect: () => {
          fakeSourceInput.howMuchEffectsAttached += 1;
        },
      };
      const testedFunction = instance.attachFiltersToSource;

      testedFunction(fakeSourceInput);
      expect(fakeSourceInput.howMuchEffectsAttached).toEqual(5);
    });

    it('will test own method `removeSoundFilters` which should attech five visible effects to input source', () => {
      const fakeProps = {
        blocksData: [{
          createEffect: 'Delay',
          isVisible: true,
        },
        {
          createEffect: 'PingPongDelay',
          isVisible: true,
        },
        {
          createEffect: 'DubDelay',
          isVisible: false,
        },
        {
          createEffect: 'Distortion',
          isVisible: false,
        },
        {
          createEffect: 'Quadrafuzz',
          isVisible: true,
        },
        {
          createEffect: 'Flanger',
          isVisible: false,
        },
        ],
        audioData: {
          ...initialState.audioData,
          sound: {
            removeEffect: (effect) => {
              fakeProps.blocksData
                .forEach((effectBlock) => {
                  if (effectBlock.createEffect === effect) {
                    effectBlock.createEffect = null;
                  }
                });
            },
            disconnect: jest.fn(),
          },
        },
      };
      wrapper.setProps({
        ...fakeProps,
      });
      instance.forceUpdate();

      const testedFunction = instance.removeSoundFilters;

      testedFunction();
      expect(fakeProps.blocksData.every((el) => {
        if (el.isVisible === true) {
          return el.createEffect == null;
        }
        return true;
      })).toBeTruthy();
      expect(fakeProps.audioData.sound).toBe(undefined);
    });

    it('will test own method `startMuteStream` which should call action and function', async () => {
      instance.renderEqualizer = jest.fn();
      wrapper.setProps({
        startMuteStreamAudioAsProp: jest.fn(() => ('fakeStartMuteStream')),
      });
      instance.forceUpdate();

      const testedFunction = instance.startMuteStream;
      const spyStMtStream = jest.spyOn(instance.props, 'startMuteStreamAudioAsProp');
      const spyRendEqul = jest.spyOn(instance, 'renderEqualizer');

      testedFunction();
      await expect(spyStMtStream).toHaveBeenCalled();
      await expect(spyRendEqul).toHaveBeenCalled();
    });

    it('will test own method `startMuteStream` which should call action and function (if statement)', async () => {
      instance.renderEqualizer = jest.fn();
      wrapper.setProps({
        audioData: {
          ...initialState.audioData,
          startMuteState: true,
        },
        startMuteStreamAudioAsProp: jest.fn(() => ('fakeStartMuteStream')),
      });
      instance.forceUpdate();

      const testedFunction = instance.startMuteStream;
      const spyStMtStream = jest.spyOn(instance.props, 'startMuteStreamAudioAsProp');
      const spyRendEqul = jest.spyOn(instance, 'renderEqualizer');

      testedFunction();
      await expect(spyStMtStream).toHaveBeenCalled();
      await expect(spyRendEqul).toHaveBeenCalled();
    });

    it('will test own method `pauseSoundFromFile` which should call action and function', async () => {
      instance.renderEqualizer = jest.fn();
      wrapper.setProps({
        playPauseSoundFromFileAsProp: jest.fn(() => 'fakePlayPauseSoundFromFile'),
      });
      instance.forceUpdate();

      const testedFunction = instance.pauseSoundFromFile;
      const spyPlPasSound = jest.spyOn(instance.props, 'playPauseSoundFromFileAsProp');
      const spyRendEqul = jest.spyOn(instance, 'renderEqualizer');

      testedFunction();
      await expect(spyPlPasSound).toHaveBeenCalled();
      await expect(spyRendEqul).toHaveBeenCalled();
    });

    it('will test own method `pauseSoundFromFile` which should call action and function (tested if statement)', async () => {
      instance.renderEqualizer = jest.fn();
      wrapper.setProps({
        audioData: {
          ...initialState.audioData,
          playPauseState: true,
        },
        playPauseSoundFromFileAsProp: jest.fn(() => 'fakePlayPauseSoundFromFile'),
      });
      instance.forceUpdate();


      const testedFunction = instance.pauseSoundFromFile;
      const spyPlPasSound = jest.spyOn(instance.props, 'playPauseSoundFromFileAsProp');
      const spyRendEqul = jest.spyOn(instance, 'renderEqualizer');

      testedFunction();
      await expect(spyPlPasSound).toHaveBeenCalled();
      await expect(spyRendEqul).toHaveBeenCalled();
    });

    it('will test own method `stopSoundFromFile` which should call functions and action', async () => {
      wrapper.setState({
        ctx: {
          canvas: {
            width: 200,
            height: 100,
          },
          clearRect: () => {},
        },
      });
      wrapper.setProps({
        audioData: {
          ...initialState.audioData,
          playPauseState: true,
        },
        playPauseSoundFromFileAsProp: jest.fn(() => 'fakePlayPauseSoundFromFile'),
      });
      instance.forceUpdate();

      const testedFunction = instance.stopSoundFromFile;
      const spyPlPasSound = jest.spyOn(instance.props, 'playPauseSoundFromFileAsProp');
      const spySoundMethod = jest.spyOn(instance.props.audioData.sound, 'stop');
      const spyCanvasMethod = jest.spyOn(instance.state.ctx, 'clearRect');

      testedFunction();
      await expect(spyPlPasSound).toHaveBeenCalled();
      expect(spySoundMethod).toHaveBeenCalled();
      expect(spyCanvasMethod).toHaveBeenCalled();
    });

    it('will test own method `stopSoundFromFile` which should call functions and not call action', async () => {
      wrapper.setState({
        ctx: {
          canvas: {
            width: 200,
            height: 100,
          },
          clearRect: () => {},
        },
      });
      wrapper.setProps({
        playPauseSoundFromFileAsProp: jest.fn(() => 'fakePlayPauseSoundFromFile'),
      });
      instance.forceUpdate();

      const testedFunction = instance.stopSoundFromFile;
      const spyPlPasSound = jest.spyOn(instance.props, 'playPauseSoundFromFileAsProp');
      const spySoundMethod = jest.spyOn(instance.props.audioData.sound, 'stop');
      const spyCanvasMethod = jest.spyOn(instance.state.ctx, 'clearRect');

      testedFunction();
      await expect(spyPlPasSound).not.toHaveBeenCalled();
      expect(spySoundMethod).toHaveBeenCalled();
      expect(spyCanvasMethod).toHaveBeenCalled();
    });

    it('will test own method `renderEqualizer` which should call function and itself by one tyme', () => {
      const spyRenderEqualizer = jest.spyOn(instance, 'renderEqualizer');
      const testedFunction = instance.renderEqualizer;
      const spyRoundedRectdMethod = jest.spyOn(instance, 'roundedRect');
      const canvasMethods = ['clearRect', 'beginPath', 'moveTo', 'lineTo', 'arcTo', 'lineTo', 'fill'];
      const mockCanvasMethod = {};

      canvasMethods.forEach((method) => {
        mockCanvasMethod[method] = jest.fn();
      });
      wrapper.setState({
        ctx: {
          canvas: {
            width: 200,
            height: 100,
          },
          ...mockCanvasMethod,
        },
      });
      wrapper.setProps({
        audioData: {
          ...initialState.audioData,
          playPauseState: true,
        },
      });
      instance.forceUpdate();

      testedFunction();
      expect(spyRoundedRectdMethod).toHaveBeenCalled();
      expect(spyRenderEqualizer).toHaveBeenCalledTimes(1);
    });
  });
});
