import React, { useContext } from 'react';
import Logo from '../UI/logo/Logo';
import Burger from '../UI/burger/Burger';
import Navbar from '../Navbar/Navbar';
import { pages } from '../../utils/navigation';
import { languages } from '../../utils/dropdownsItems';
import './Header.scss';
import Dropdown from '../UI/dropdown/Dropdown';
import { HeaderMenuStateContext } from '../../context/context';

const Header = () => {
  const
    { headerMenuIsOpen } = useContext(HeaderMenuStateContext),
    headerMenuClasses = ["header-menu"]

  if (headerMenuIsOpen) {
    headerMenuClasses.push('header-menu--active')
  }

  return (
    <header className="header">
      <div className="header-body">

        <div className="header-logo">
          <Logo href='/' />
        </div>

        <div className="header-burger">
          <Burger />
        </div>

        <div className={headerMenuClasses.join(' ')}>
          <div className="header-navbar">
            <Navbar navigation={pages} />
          </div>

          <div className="header-language">
            <Dropdown itemsList={languages} />
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;