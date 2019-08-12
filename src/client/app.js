import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Routers from './routers';
import './app.css';

const app = (
  <Provider store={store}>
    <Routers />
  </Provider>
);

export default app;

ReactDOM.render(app, document.getElementById('root'));
