import React from 'react';
import { Redirect } from 'react-router-dom';

const CheckAuth = (ComponentToProtect) => {
  const AuthWrapper = () => {
    const token = localStorage.getItem('_token');
    const currentRout = window.location.pathname;
    if (currentRout === '/') {
      return token ? <Redirect to="/main" /> : <ComponentToProtect />;
    }
    return token ? <ComponentToProtect /> : <Redirect to="/" />;
  };
  return AuthWrapper;
};

export default CheckAuth;
