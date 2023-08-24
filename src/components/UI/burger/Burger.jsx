import React, { useContext } from 'react';
import classes from './Burger.module.scss';
import { HeaderMenuStateContext } from '../../../context/context';

const Burger = () => {
  const
    burgerClasses = [classes['burger']],
    { headerMenuIsOpen, setHeaderMenuIsOpen } = useContext(HeaderMenuStateContext)

  if (headerMenuIsOpen) {
    burgerClasses.push(classes['burger--active'])
  }

  return (
    <div
      className={burgerClasses.join(' ')}
      onClick={() => setHeaderMenuIsOpen(!headerMenuIsOpen)}
    >
      <div className={classes['burger-circle']}></div>
      <div className={classes['burger-item']}></div>
    </div>
  );
};

export default Burger;