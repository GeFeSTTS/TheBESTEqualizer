import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchRequest from '../../helpers/fetchRequest';
import { HOST } from '../../helpers/constants';
import { setPresetValue } from '../../store/actions/blocksActions';
import { addNewPresetsFromDB } from '../../store/actions/presetsAction';

import './presetsDropdownSelector.css';

class PresetsDropdownSelector extends Component {
  componentDidMount() {
    const { addNewPresetsFromDB } = this.props;
    fetchRequest.get(`${HOST}/titles`)
      .then(response => addNewPresetsFromDB(response.data.userPresets));
  }

  componentDidUpdate(prevProps) {
    const { blocksData, audioData } = this.props;
    if (audioData.trackName !== null && blocksData !== prevProps.blocksData) {
      const prevBlocksData = prevProps.blocksData;
      prevBlocksData.forEach(({ createEffect }) => {
        audioData.sound.removeEffect(createEffect);
      });
      blocksData.forEach(({ createEffect, isVisible }) => {
        isVisible && audioData.sound.addEffect(createEffect);
      });
    }
  }

  handleSelectorChange = (event) => {
    const { setPresetValue, blocksData } = this.props;
    setPresetValue(event.target.value, blocksData);
  };

  render() {
    const { presetsData } = this.props;
    const listOfPresets = (
      presetsData.map((value, i) => <option className="option" key={i} value={value}>{value}</option>)
    );

    return (
      <select
        className="SlidersComponent__header--selector"
        onChange={this.handleSelectorChange}
      >
        {listOfPresets}
      </select>
    );
  }
}

const mapStateToProps = state => ({
  blocksData: state.blocksData,
  presetsData: state.presetsData,
  audioData: state.audioData,
});

PresetsDropdownSelector.propTypes = {
  blocksData: PropTypes.instanceOf(Array),
  audioData: PropTypes.instanceOf(Object),
  presetsData: PropTypes.instanceOf(Array),
  setPresetValue: PropTypes.func,
  addNewPresetsFromDB: PropTypes.func,
};

export default connect(mapStateToProps, {
  setPresetValue,
  addNewPresetsFromDB,
})(PresetsDropdownSelector);
