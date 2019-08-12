import reducer from './audioReducer';

import {
  CREATE_BASE_AUDIO_CONTEXT_AND_ANALYSER,
  START_CREATION_AUDIO_DATA,
  CREATE_AUDIO_DATA,
  PLAY_PAUSE_SOUND_FROM_FILE,
  CREATE_STREAME_DATA,
  START_MUTE_STREAME_AUDIO,
  MERGE_CANVAS_WIDTH,
} from '../actions/types';

const FAKE_REDUCER = 'FAKE_REDUCER';

const initialState = {
  // graphic canvas
  widthCanvas: 980,
  heightCanvas: 150,
  // audio from file
  trackName: null,
  audioContext: null,
  analyser: null,
  sound: null,
  loading: false,
  // from stream
  voice: null,
  playPauseState: false,
  startMuteState: false,
};

jest.mock('pizzicato', () => {
  const mockPizzicato = jest.fn();
  mockPizzicato.context = jest.fn(() => {});
  mockPizzicato.context.createAnalyser = jest.fn(() => 'analyser');
  return {
    __esModule: true,
    default: mockPizzicato,
  };
});

describe('TEST AUDIO REDUCERS', () => {
  const state = {
    ...initialState,
  };

  it('should dispatch reducer CREATE BASE AUDIOCONTEXT AND ANALYSER:', () => {
    const action = {
      type: CREATE_BASE_AUDIO_CONTEXT_AND_ANALYSER,
    };

    expect(reducer(state, action)).toEqual({
      ...state,
    });
  });

  it('should dispatch reducer START CREATE AUDIO DATA', () => {
    const action = {
      type: START_CREATION_AUDIO_DATA,
      payload: {
        loading: true,
      },
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      ...action.payload,
    });
  });


  it('should dispatch reducer CREATE AUDIO DATA', () => {
    const action = {
      type: CREATE_AUDIO_DATA,
      payload: {
        trackName: 'someTrackName',
        sound: 'someSoundName',
      },
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      ...action.payload,
    });
  });

  it('should dispatch reducer PLAY PAUSE SOUND FROM FILE', () => {
    const action = {
      type: PLAY_PAUSE_SOUND_FROM_FILE,
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      playPauseState: !state.playPauseState,
    });
  });

  it('should dispatch reducer CREATE STREAME DATA', () => {
    const action = {
      type: CREATE_STREAME_DATA,
      payload: {
        voice: 'voice',
      },
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      ...action.payload,
    });
  });

  it('should dispatch reducer START_MUTE_STREAME_AUDIO', () => {
    const action = {
      type: START_MUTE_STREAME_AUDIO,
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      startMuteState: !state.startMuteState,
    });
  });

  it('should dispatch reducer MERGE CANVAS WIDTH', () => {
    const action = {
      type: MERGE_CANVAS_WIDTH,
      payload: {
        widthCanvas: 100,
      },
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      ...action.payload,
    });
  });

  it('should dispatch reducer PASS FAKE REDUCER', () => {
    const action = {
      type: FAKE_REDUCER,
    };

    expect(reducer(state, action)).toEqual({
      ...state,
    });
  });
});
