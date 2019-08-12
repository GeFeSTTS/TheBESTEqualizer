import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({
  onClick, className, icon, value, type, disabled,
}) => (
  <button
    type={type}
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {icon}
    {' '}
    {value}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.instanceOf(Object),
  value: PropTypes.node,
  disabled: PropTypes.string,
};

export default Button;
