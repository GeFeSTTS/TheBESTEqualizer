import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PlayButton = (props) => {
  const { hadlesound } = props;
  return (
    <button type="button" onClick={hadlesound} className="PlayButton">
      Play
    </button>
  );
};

PlayButton.propTypes = {
  hadlesound: PropTypes.func.isRequired,
};

export default connect()(PlayButton);
