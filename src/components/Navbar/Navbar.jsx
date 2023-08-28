import React, { useContext } from 'react';
import '../UI/LinkNavigation.scss';
import { NavLink } from 'react-router-dom';
import { HeaderMenuStateContext } from '../../context/context';

const Navbar = ({ navigation }) => {
  const { setHeaderMenuIsOpen } = useContext(HeaderMenuStateContext)

  return (
    <nav className="navigation">
      <ul className="navigation-list">

        {navigation.map((item, index) =>
          <li key={index} className="navigation-item">
            <NavLink
              to={item.path}
              className='navigation-link'
              onClick={() => setHeaderMenuIsOpen(false)}
            >
              {item.name}
            </NavLink>
          </li>
        )}

      </ul>
    </nav>
  );
};

export default Navbar;