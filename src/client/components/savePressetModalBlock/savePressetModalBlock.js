import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ModalSavePressetesWindow from './modalSavePressetesWindow';
import BackgroundUnderModelWindow from './backgroundUnderModelWindow';

const SavePressetModalBlock = ({ showHideModalBlock }) => {
  const autoFocusModalSavePressetesWindow = (elementFromRef) => {
    if (elementFromRef) {
      elementFromRef.focus();
    }
  };

  return (
    <Fragment>
      <ModalSavePressetesWindow
        showHideModalBlock={showHideModalBlock}
        refFocus={autoFocusModalSavePressetesWindow}
      />
      <BackgroundUnderModelWindow backgroundClick={showHideModalBlock} />
    </Fragment>
  );
};


SavePressetModalBlock.propTypes = {
  showHideModalBlock: PropTypes.func,
};

export default SavePressetModalBlock;
