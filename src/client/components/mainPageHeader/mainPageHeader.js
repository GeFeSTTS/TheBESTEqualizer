import React, { Component } from 'react';
import { userIcon } from '../../assets/icons/icons';
import logo from '../../assets/images/logo.svg';
import Logout from '../logout';
import './mainPageHeader.css';

class MainPageHeader extends Component {
  state = {
    userName: '',
  }

  componentDidMount() {
    const userName = localStorage.getItem('username');
    this.setState({ userName });
  }

  render = () => (
    <section className="MainPageHeaderContainer">
      <div className="AppLogoContainer">
        <img src={logo} alt="logo" />
        <span className="Node">nodes</span>
      Equalizer
      </div>
      <div className="UserNameAndLogout">
        <div className="UserName">
          {userIcon}
          <span>{this.state.userName}</span>
        </div>
        <Logout />
      </div>
    </section>
  )
}

export default MainPageHeader;
