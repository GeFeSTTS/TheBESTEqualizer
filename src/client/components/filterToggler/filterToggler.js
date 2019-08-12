import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './filterToggler.css';
import { attachFiltersToSource, removeSourceFilters } from '../../helpers/equalizerAuxMethods';

export const FilterToggler = (props) => {
  const [toggler, setToggler] = useState(false);
  const {
    audioData: {
      voice,
      sound,
    },
    blocksData,
  } = props;
  const onToggler = () => {
    setToggler(!toggler);
    if (toggler) {
      removeSourceFilters(voice, blocksData);
      attachFiltersToSource(sound, blocksData);
    } else {
      removeSourceFilters(sound, blocksData);
      attachFiltersToSource(voice, blocksData);
    }
  };

  return (
    <div className="modesElement">
      <span className="labels">Sound</span>
      <label htmlFor="toggler" className="switch">
        <input id="toggler" type="checkbox" onClick={onToggler} />
        <span className="slider" />
      </label>
      <span className="labels">Voice</span>
    </div>
  );
};

FilterToggler.propTypes = {
  audioData: PropTypes.instanceOf(Object).isRequired,
  blocksData: PropTypes.instanceOf(Array).isRequired,
  voice: PropTypes.instanceOf(Object),
  sound: PropTypes.instanceOf(Object),
};

const mapStateToProps = state => ({
  audioData: state.audioData,
  blocksData: state.blocksData,
});

export default connect(mapStateToProps)(FilterToggler);
