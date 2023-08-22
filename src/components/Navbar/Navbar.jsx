import React from 'react';
import '../UI/LinkNavigation.scss';
import { Link } from 'react-router-dom';

const Navbar = ({ navigation }) => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">

        {navigation.map((item, index) =>
          <li key={index} className="navigation-item">
            <Link
              to={item.path}
              className='navigation-link'
            >
              {item.name}
            </Link>
          </li>
        )}

      </ul>
    </nav>
  );
};

export default Navbar;