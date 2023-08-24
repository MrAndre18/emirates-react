import React, { useContext } from 'react';
import classes from './Logo.module.scss';
import { Link } from 'react-router-dom';
import { HeaderMenuStateContext } from '../../../context/context';

const Logo = ({ href }) => {
  const { setHeaderMenuIsOpen } = useContext(HeaderMenuStateContext)

  return (
    <Link
      to={href}
      className={classes['logo']}
      onClick={() => setHeaderMenuIsOpen(false)}
    >
      <span className={classes['logo-title']}>EmiratesLaw</span>
      <span className={classes['logo-subtitle']}>Real Help</span>
    </Link>
  )
}

export default Logo