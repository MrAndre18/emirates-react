import React from 'react';
import './StickyMenu.scss';
import { NavLink } from 'react-router-dom';

const StickyMenu = ({ linksList }) => {
  return (
    <nav className="menu-sticky">
      <ul className="menu-sticky-list">
        {linksList.map((link, index) =>
          <li key={index} className="menu-sticky-item">
            <NavLink
              className="menu-sticky-link"
              to={link.path}
            >
              {link.name}
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default StickyMenu;