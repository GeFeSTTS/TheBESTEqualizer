import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setVisibility } from '../../store/actions/blocksActions';
import BlockOfSliders from '../blockOfSliders';
import { checkTickIcon } from '../../assets/icons/icons';
import './alllBlocks.css';
import ToggleZone from '../toggleZone/toggleZone';

class AllBlocks extends Component {
  toggleSourceFilters = (filterName) => {
    const { setVisibility, blocksData, audioData } = this.props;
    setVisibility(filterName);
    blocksData.forEach(({ createEffect, isVisible, name }) => {
      if (filterName === name) {
        if (audioData.onToggle) {
          isVisible ? audioData.voice.removeEffect(createEffect)
            : audioData.voice.addEffect(createEffect);
        } else {
          isVisible ? audioData.sound && audioData.sound.removeEffect(createEffect)
            : audioData.sound && audioData.sound.addEffect(createEffect);
        }
      }
    });
  };

  render() {
    const { blocksData } = this.props;
    return (
      <div className="SlidersComponent__main--container">
        <div className="AllSliders">
          <ToggleZone>
            <div className="ListOfEffects">

              {
                blocksData.map(({ name, isVisible }) => (
                  <button
                    className="Effect"
                    key={name}
                    type="button"
                    id={name}
                    name={name}
                    onClick={() => this.toggleSourceFilters(name)}
                  >
                    {name}
                    {' '}
                    {isVisible ? checkTickIcon : ''}
                  </button>
                ))
              }
            </div>
          </ToggleZone>
          <div className="Sliders">
            {blocksData.map(({
              name, effects, isVisible,
            }) => (isVisible
              ? (
                <BlockOfSliders
                  name={name}
                  effects={effects}
                  key={name}
                />
              )
              : null))}
          </div>
        </div>
      </div>
    );
  }
}

AllBlocks.propTypes = {
  audioData: PropTypes.instanceOf(Object),
  blocksData: PropTypes.instanceOf(Array),
  setVisibility: PropTypes.func,
};

const mapStateToProps = state => ({
  blocksData: state.blocksData,
  audioData: state.audioData,
  sound: state.audioData.sound,
  voice: state.audioData.voice,
});

export default connect(mapStateToProps, { setVisibility })(AllBlocks);
