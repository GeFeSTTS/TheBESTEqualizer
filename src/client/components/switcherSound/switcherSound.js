import React, { Component, Fragment } from 'react';
import 'react-rangeslider/lib/index.css';
import './switcherSound.css';
import Slider from 'react-rangeslider';
import { connect } from 'react-redux';

export class SwitcherSound extends Component {
  state = {
    volumeValueTrack: 0.5,
    volumeValueVoice: 0.5,
    track: null,
    voice: null,
  };

  static getDerivedStateFromProps(props, state) {
    const { audioData: { sound, voice } } = props;
    const { volumeValueTrack, volumeValueVoice } = state;
    if (sound && voice) {
      sound.volume = volumeValueTrack;
      voice.volume = volumeValueVoice;
      return { track: sound, voice };
    }
    return null;
  }

  changeTracksVolume = () => {
    const {
      volumeValueTrack, volumeValueVoice, track, voice,
    } = this.state;
    const switcherTrackSound = 1 - volumeValueTrack;
    const switcherVoiceSound = 1 - volumeValueVoice;
    track.volume = switcherTrackSound;
    voice.volume = switcherVoiceSound;
  }

  changeVolume = (volumeValueTrack) => {
    const revertVolumeValueTrack = 1 - volumeValueTrack;
    this.setState({
      volumeValueTrack: parseFloat(volumeValueTrack.toFixed(2)),
      volumeValueVoice: parseFloat(revertVolumeValueTrack.toFixed(2)),
    }, () => this.changeTracksVolume());
  }

  render() {
    const { volumeValueTrack } = this.state;
    const minSliderVolume = 0;
    const maxSliderVolume = 1;
    const stepSliderVolume = 0.001;
    return (
      <div className="SwitcherContainer">
        <Fragment>
          <span>Track</span>
          <Slider
            className="SwitcherContainer--slider"
            value={volumeValueTrack}
            min={minSliderVolume}
            max={maxSliderVolume}
            step={stepSliderVolume}
            onChange={this.changeVolume}
          />
          <span className="voiceText">Voice</span>
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  audioData: state.audioData,
});

export default connect(mapStateToProps)(SwitcherSound);
