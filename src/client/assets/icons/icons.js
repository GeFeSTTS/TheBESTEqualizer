import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCog,
  faUpload,
  faSave,
  faUser,
  faStop,
  faPlay,
  faPause,
  faFlag,
  faMusic,
  faTimes,
  faCloudUploadAlt,
  faCheck,
  faVolumeUp,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

export const settingsIcon = <FontAwesomeIcon icon={faCog} className="icon" />;
export const uploadIcon = <FontAwesomeIcon icon={faUpload} className="icon" />;
export const saveIcon = <FontAwesomeIcon icon={faSave} className="icon" />;
export const userIcon = <FontAwesomeIcon icon={faUser} className="icon" />;
export const stopIcon = <FontAwesomeIcon icon={faStop} className="icon" />;
export const playIcon = <FontAwesomeIcon icon={faPlay} className="icon" />;
export const pauseIcon = <FontAwesomeIcon icon={faPause} className="icon" />;
export const startStreamIcon = <FontAwesomeIcon icon={faFlag} className="icon" />;
export const musicIcon = <FontAwesomeIcon icon={faMusic} className="icon" />;
export const cancelIcon = <FontAwesomeIcon icon={faTimes} className="icon" />;
export const cloudIcon = <FontAwesomeIcon icon={faCloudUploadAlt} className="icon" />;
export const volumeIcon = <FontAwesomeIcon icon={faVolumeUp} className="icon" />;
export const checkTickIcon = <FontAwesomeIcon icon={faCheck} />;
export const cancelWindowIcon = <FontAwesomeIcon icon={faTimes} />;
export const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;
