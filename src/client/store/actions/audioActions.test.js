import {
  CREATE_AUDIO_DATA,
  START_CREATION_AUDIO_DATA,
  PLAY_PAUSE_SOUND_FROM_FILE,
  CREATE_STREAME_DATA,
  START_MUTE_STREAME_AUDIO,
  MERGE_CANVAS_WIDTH,
} from './types';

import {
  createAudioData,
  startCreationAudioData,
  playPauseSoundFromFile,
  createStreamData,
  startMuteStreamAudio,
  mergeCanvasWidth,
} from './audioActions';

describe('TEST AUDIO ACTIONS', () => {
  const dispatch = jest.fn(action => action);
  it('should dispatch action CREATE AUDIO DATA', () => {
    const expectedAction = {
      type: CREATE_AUDIO_DATA,
      payload: 'audioData',
    };
    expect(createAudioData('audioData')(dispatch))
      .toEqual(expectedAction);
  });

  it('should dispatch action START CREATION AUDIO DATA', () => {
    const expectedAction = {
      type: START_CREATION_AUDIO_DATA,
    };

    expect(startCreationAudioData()(dispatch))
      .toEqual(expectedAction);
  });

  it('should dispatch action PLAY OR PAUSE SOUND FROM FILE', () => {
    const expectedAction = {
      type: PLAY_PAUSE_SOUND_FROM_FILE,
    };

    expect(playPauseSoundFromFile()(dispatch))
      .toEqual(expectedAction);
  });

  it('should dispatch action CREATE STREAME DATA', () => {
    const expectedAction = {
      type: CREATE_STREAME_DATA,
    };

    expect(createStreamData()(dispatch))
      .toEqual(expectedAction);
  });

  it('should dispatch action START MUTE STREAME VOICE', () => {
    const expectedAction = {
      type: START_MUTE_STREAME_AUDIO,
    };

    expect(startMuteStreamAudio()(dispatch))
      .toEqual(expectedAction);
  });

  it('should dispatch action MERGE CANVAS WIDTH', () => {
    const event = {
      preventDefault() {},
      target: { value: 500 },
    };

    const expectedAction = {
      type: MERGE_CANVAS_WIDTH,
      payload: 500,
    };

    expect(mergeCanvasWidth(event)(dispatch))
      .toEqual(expectedAction);
  });
});
