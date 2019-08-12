import React from 'react';

import {
  MainPageHeader,
  Equalizer,
  TrackDuration,
  ComponentWithSliders,
} from '../../components';

import './main.css';

const Main = () => (
  <div className="main">
    <MainPageHeader />
    <Equalizer />
    <TrackDuration />
    <ComponentWithSliders />
  </div>
);

export default Main;
