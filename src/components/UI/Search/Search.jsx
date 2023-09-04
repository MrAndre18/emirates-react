import React from 'react';
import classes from './Search.module.scss';
import { ReactComponent as SearchIcon } from '../../../assets/images/svg/search.svg';

const Search = (props) => {
  return (
    <div className={classes['search']}>
      <input
        className={classes['search-input']}
        type="search"
        name="search"
        placeholder={`Искать в ""`}
        {...props}
      />
      <div className={classes['search-icon']}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;