import Pizzicato from 'pizzicato';

import {
  CREATE_BASE_AUDIO_CONTEXT_AND_ANALYSER,
  START_CREATION_AUDIO_DATA,
  CREATE_AUDIO_DATA,
  PLAY_PAUSE_SOUND_FROM_FILE,
  CREATE_STREAME_DATA,
  START_MUTE_STREAME_AUDIO,
  MERGE_CANVAS_WIDTH,
  CLEAR_AUDIODATA_STATE,
} from '../actions/types';

const audioContext = Pizzicato.context;
const analyser = audioContext.createAnalyser();

const initialState = {
  // graphic canvas
  widthCanvas: 980,
  heightCanvas: 150,
  // audio from file
  trackName: null,
  audioContext,
  analyser,
  sound: null,
  loading: false,
  // from stream
  voice: null,
  playPauseState: false,
  startMuteState: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_BASE_AUDIO_CONTEXT_AND_ANALYSER:
      return {
        ...state,
      };
    case START_CREATION_AUDIO_DATA:
      return {
        ...state,
        loading: true,
      };
    case CREATE_AUDIO_DATA: {
      const {
        trackName, sound,
      } = action.payload;
      return {
        ...state,
        trackName,
        sound,
        loading: false,
      };
    }
    case PLAY_PAUSE_SOUND_FROM_FILE:
      return {
        ...state,
        playPauseState: !state.playPauseState,
      };
    case CREATE_STREAME_DATA: {
      const { voice } = action.payload;
      return {
        ...state,
        voice,
      };
    }
    case START_MUTE_STREAME_AUDIO:
      return {
        ...state,
        startMuteState: !state.startMuteState,
      };
    case MERGE_CANVAS_WIDTH: {
      let { widthCanvas } = action.payload;
      widthCanvas = parseInt(widthCanvas, 10);
      return {
        ...state,
        widthCanvas,
      };
    }
    case CLEAR_AUDIODATA_STATE: {
      return {
        ...initialState,
      };
    }
    default: return state;
  }
}
