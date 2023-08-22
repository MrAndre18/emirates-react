import React from 'react';
import classes from './Logo.module.scss';
import { Link } from 'react-router-dom';

const Logo = ({ href }) => {
  return (
    <Link
      to={href}
      className={classes['logo']}
    >
      <span className={classes['logo-title']}>EmiratesLaw</span>
      <span className={classes['logo-subtitle']}>Real Help</span>
    </Link>
  )
}

export default Logo