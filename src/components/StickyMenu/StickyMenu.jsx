import React, { useEffect, useState } from 'react';
import './StickyMenu.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { lawsCategories } from '../../utils/navigation';

const StickyMenu = () => {
  const
    [linksList, setLinksList] = useState(lawsCategories),
    location = useLocation(),
    currentLocation = location.pathname.split('/').slice(-1)[0]

  const getcurrentList = list => {
    let isRoot = true

    list.forEach(element => {
      const current = element.path.split('/').slice(-1)[0]

      if (current === currentLocation) {
        isRoot = false

        if (element.children) {
          //console.log(element.children);
          return element.children
        } else {
          return []
        }
      }

      if (element.children) getcurrentList(element.children)
    });

    if (isRoot) {
      console.log(list);
      return list
    }
  }

  getcurrentList(lawsCategories)

  // useEffect(() => {
  //   setLinksList(getcurrentList(lawsCategories))
  // }, [currentLocation])

  return (
    <nav className="menu-sticky">
      <ul className="menu-sticky-list">
        {linksList.map((link, index) =>
          <li key={index} className="menu-sticky-item">
            <NavLink
              className="menu-sticky-link"
              to={link.path}
            //onClick={() => link.children && setLinksList(link.children)}
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