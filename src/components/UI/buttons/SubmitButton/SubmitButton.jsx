import React from 'react';
import classes from './SubmitButton.module.scss';

const SubmitButton = ({ children }) => {
  return (
    <button className={classes['submit-btn']}>{children}</button>
  );
};

export default SubmitButton;