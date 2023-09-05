import React from 'react';
import classes from './Search.module.scss';
import { ReactComponent as SearchIcon } from '../../../assets/images/svg/search.svg';

const Search = (props) => {
  return (
    <div className={classes['search']}>
      <label className={classes['search-label']}>
        <input
          className={classes['search-input']}
          type="search"
          name="search"
          autoComplete='off'
          {...props}
        />
        <span className={classes['search-label__text']}>Искать в &laquo;{'Недвижимость'}&raquo;</span>
      </label>
      <div className={classes['search-icon']}>
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;