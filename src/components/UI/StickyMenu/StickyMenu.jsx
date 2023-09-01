import React from 'react';
import classes from './StickyMenu.module.scss';

const StickyMenu = ({ children }) => {
  return (
    <nav className={classes["menu-sticky"]}>
      {children}
    </nav>
  );
};

export default StickyMenu;