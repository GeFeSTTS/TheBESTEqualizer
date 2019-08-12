import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cloudIcon } from '../../../assets/icons/icons';

import './uploadButton.css';

const UploadButton = (props) => {
  const { handleInfoFromSound } = props;
  return (
    <div>
      <label htmlFor="file" className="UploadButtonLabel">
        { cloudIcon }
        Upload song
        <input
          name="uplodSoundInput"
          type="file"
          id="file"
          accept="audio/mp3"
          onChange={handleInfoFromSound}
        />
      </label>
    </div>
  );
};

UploadButton.propTypes = {
  handleInfoFromSound: PropTypes.func.isRequired,
};

export default connect()(UploadButton);
