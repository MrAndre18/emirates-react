import React from 'react';
import classes from './TabsHeader.module.scss';
import { NavLink } from 'react-router-dom';

const TabsHeader = ({ tabs }) => {
  return (
    <div className={classes["tabs-header"]}>
      <nav className={classes["tabs-navigation"]}>
        {tabs.map((item, index) =>
          <NavLink
            to={item.path}
            key={index}
            className={classes['tabs-navigation__item']}
          >
            {item.name}
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default TabsHeader;