import React from 'react';
import SubmitButton from '../UI/buttons/SubmitButton/SubmitButton';
import './InfoFilter.scss';
import Search from '../UI/Search/Search';

const InfoFilter = () => {
  return (
    <form className='filter'>
      <div className="filter-search">
        <Search />
      </div>

      <div className="filter-submit">
        <SubmitButton>Поиск</SubmitButton>
      </div>
    </form>
  );
};

export default InfoFilter;