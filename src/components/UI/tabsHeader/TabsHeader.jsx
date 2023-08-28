import React, { useRef } from 'react';
import classes from './TabsHeader.module.scss';
import { NavLink } from 'react-router-dom';

const TabsHeader = ({ tabs }) => {
  const tabsBgRef = useRef()

  const moveBG = () => {
    const
      bg = tabsBgRef,
      navigation = bg.current.offsetParent,
      currentItem = navigation.querySelector('[aria-current=page]')
    // const newParams = {
    //   left: e.target.offsetLeft,
    //   top: e.target.offsetTop,
    //   width: e.target.offsetWidth,
    //   height: e.target.offsetHeight,
    // }

    const newParams = {
      left: '',
      top: '',
      width: '',
      height: '',
    }

    console.log(currentItem);

    tabsBgRef.current.style.left = newParams.left + 'px';
    tabsBgRef.current.style.top = newParams.top + 'px';
    tabsBgRef.current.style.width = newParams.width + 'px';
    tabsBgRef.current.style.height = newParams.height + 'px';
  }

  const test = () => {
    console.log('test');
  }

  return (
    <div className={classes["tabs-header"]}>
      <nav className={classes["tabs-navigation"]}>
        <div ref={tabsBgRef} className={classes["tabs-bg"]}></div>
        {tabs.map((item, index) =>
          <NavLink
            to={item.path}
            key={index}
            className={classes['tabs-navigation__item']}
            onClick={moveBG}
          >
            {item.name}
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default TabsHeader;