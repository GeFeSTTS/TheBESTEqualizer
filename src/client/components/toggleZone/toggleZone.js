import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import './toggleZone.css';

const ToggleZone = ({ children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <Fragment>
      <button className="toggle__button" onClick={() => setVisible(!visible)}>
        { visible ? 'Hide Effects' : 'Show Effects' }
      </button>
      <div className={`toggle ${visible ? 'visible' : ''}`}>
        { children }
      </div>
    </Fragment>
  );
};

ToggleZone.propTypes = {
  children: PropTypes.element,
};

export default ToggleZone;
