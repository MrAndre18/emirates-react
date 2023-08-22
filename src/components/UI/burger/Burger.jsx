import React from 'react';
import classes from './Burger.module.scss';

const Burger = () => {
  return (
    <div className={classes['burger']}>
      <div className={classes['burger-circle']}></div>
      <div className={classes['burger-item']}></div>
    </div>
  );
};

export default Burger;