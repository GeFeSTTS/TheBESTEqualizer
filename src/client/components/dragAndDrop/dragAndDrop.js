import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import { createAudioData, playPauseSoundFromFile } from '../../store/actions/audioActions';
import { uploadSoundInfoFromFile } from '../../helpers/equalizerAuxMethods';

import './dragAndDrop.css';

const DragAndDrop = (props) => {
  const maxSize = 10000000;
  return (
    <div className="container">
      <Dropzone
        onDrop={eventFromInputFile => uploadSoundInfoFromFile(eventFromInputFile, props)}
        accept="audio/mp3"
        minSize={0}
        maxSize={maxSize}
      >
        {({
          getRootProps, getInputProps, isDragActive, isDragReject,
        }) => (
          <div {...getRootProps()} className="containerForInput">
            <input {...getInputProps()} />
            {!isDragActive && 'Click here or drop a file to upload!'}
            {isDragActive && !isDragReject && 'Drop it like it\'s hot!'}
            {isDragReject && 'File type not accepted, sorry!'}
          </div>
        )
      }
      </Dropzone>
    </div>
  );
};

DragAndDrop.propTypes = {
  createAudioDataAsProp: PropTypes.func.isRequired,
  playPauseSoundFromFileAsProp: PropTypes.func.isRequired,
  audioData: PropTypes.instanceOf(Object).isRequired,
  sound: PropTypes.instanceOf(Object),
  attachFiltersToSource: PropTypes.func,
};

const mapStateToProps = state => ({
  audioData: state.audioData,
  blocksData: state.blocksData,
});

export default connect(mapStateToProps, {
  createAudioDataAsProp: createAudioData,
  playPauseSoundFromFileAsProp: playPauseSoundFromFile,
})(DragAndDrop);
