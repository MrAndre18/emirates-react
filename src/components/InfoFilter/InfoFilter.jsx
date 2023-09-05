import React from 'react';
import SubmitButton from '../UI/buttons/SubmitButton/SubmitButton';
import './InfoFilter.scss';
import Search from '../UI/Search/Search';
import Tags from '../Tags/Tags';

const InfoFilter = ({ tags }) => {
  return (
    <div className='filter'>
      <form className='filter-form'>
        <div className="filter-search">
          <Search />
        </div>

        <div className="filter-submit">
          <SubmitButton>Поиск</SubmitButton>
        </div>
      </form>

      {tags && <div className="filter-tags">
        <Tags tags={tags} />
      </div>}

      <p className="filter-count">
        Найдено записей: <span className="filter-count__value">3</span>
      </p>
    </div>
  );
};

export default InfoFilter;