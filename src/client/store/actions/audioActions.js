import {
  CREATE_BASE_AUDIO_CONTEXT_AND_ANALYSER,
  START_CREATION_AUDIO_DATA,
  CREATE_AUDIO_DATA,
  PLAY_PAUSE_SOUND_FROM_FILE,
  CREATE_STREAME_DATA,
  START_MUTE_STREAME_AUDIO,
  MERGE_CANVAS_WIDTH,
  CLEAR_AUDIODATA_STATE,
} from './types';

// audio data actions
export const createBaseAudioContextAndAnalyser = data => dispatch => dispatch({
  type: CREATE_BASE_AUDIO_CONTEXT_AND_ANALYSER,
  payload: data,
});
export const startCreationAudioData = () => dispatch => dispatch({
  type: START_CREATION_AUDIO_DATA,
});
export const createAudioData = data => dispatch => dispatch({
  type: CREATE_AUDIO_DATA,
  payload: data,
});
export const playPauseSoundFromFile = () => dispatch => dispatch({
  type: PLAY_PAUSE_SOUND_FROM_FILE,
});
export const createStreamData = data => dispatch => dispatch({
  type: CREATE_STREAME_DATA, payload: data,
});
export const startMuteStreamAudio = () => dispatch => dispatch({
  type: START_MUTE_STREAME_AUDIO,
});
export const mergeCanvasWidth = eventInput => dispatch => dispatch({
  type: MERGE_CANVAS_WIDTH,
  payload: eventInput.target.value,
});
export const clearAudioDataState = () => dispatch => dispatch({
  type: CLEAR_AUDIODATA_STATE,
});
