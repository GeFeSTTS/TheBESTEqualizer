import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { logoutIcon } from '../../assets/icons/icons';
import './logout.css';
import Button from '../button';
import { clearAudioDataState } from '../../store/actions/audioActions';

class Logout extends Component {
    SignOut = () => {
      const { history, clearAudioDataStateAsProp, audioData: { sound, voice } } = this.props;
      if (sound) {
        sound.stop();
        voice.stop();
      }
      clearAudioDataStateAsProp();
      localStorage.clear();
      history.push('/');
    }

    render() {
      return (
        <Button
          className="ButtonStyleTemplate"
          icon={logoutIcon}
          value="Logout"
          onClick={this.SignOut}
        />
      );
    }
}

Logout.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
  audioData: PropTypes.instanceOf(Object).isRequired,
  clearAudioDataStateAsProp: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  audioData: state.audioData,
});

export default connect(mapStateToProps, {
  clearAudioDataStateAsProp: clearAudioDataState,
})(withRouter(Logout));
