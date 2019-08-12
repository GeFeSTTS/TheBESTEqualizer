import Pizzicato from 'pizzicato';

const createSoundInfoInState = (sound, file, props) => {
  const { audioData: { analyser } } = props;
  sound.connect(analyser);
  props.createAudioDataAsProp({
    sound,
    trackName: file.name,
  });
};

export const attachFiltersToSource = (sourceInput, blocksData) => sourceInput
  && blocksData.forEach((
    {
      createEffect,
      isVisible,
    },
  ) => isVisible && sourceInput.addEffect(createEffect));

export const removeSourceFilters = (sourceInput, blocksData) => sourceInput
&& blocksData.forEach(({ createEffect, isVisible }) => isVisible
  && sourceInput.removeEffect(createEffect));

const removeSoundFilters = (props) => {
  const { audioData: { sound }, playPauseSoundFromFileAsProp } = props;
  sound.effects.length && props.blocksData.forEach((
    {
      createEffect,
      isVisible,
    },
  ) => isVisible && sound.removeEffect(createEffect));
  sound.playing && playPauseSoundFromFileAsProp();
  sound.stop();
};

export const uploadSoundInfoFromFile = (eventFromInputFile, props) => {
  const {
    audioData: {
      sound: storeSound,
      onToggle,
    },
    blocksData,
    startCreationAudioDataAsProp,
  } = props;
  startCreationAudioDataAsProp && startCreationAudioDataAsProp();
  const [file] = eventFromInputFile.length ? eventFromInputFile : eventFromInputFile.target.files;
  const fileName = file.name;
  const fileExtension = fileName.substring((fileName.lastIndexOf('.')) + 1);
  if (fileExtension === 'mp3') {
    const audioFile = new Audio(URL.createObjectURL(file));
    const sound = new Pizzicato.Sound({
      source: 'file',
      options: {
        path: audioFile.src,
        loop: true,
      },
    }, () => {
      storeSound && removeSoundFilters(props);
      !onToggle && attachFiltersToSource(sound, blocksData);
      createSoundInfoInState(sound, file, props);
    });
  }
};
