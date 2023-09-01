import React, { useEffect, useState } from 'react';
import StickyMenu from '../../../../components/StickyMenu/StickyMenu';
import './Laws.scss';
import LawsRouter from '../../../../components/LawsRouter';
import { useLocation } from 'react-router-dom';
import { lawsCategories } from '../../../../utils/navigation';
import { getCategoriesArray } from '../../../../utils/categories';

const Laws = () => {
  const
    [linksList, setLinksList] = useState([]),
    location = useLocation(),
    currentCategory = location.pathname.split('/').filter(el => el !== '').slice(-1)[0]

  useEffect(() => {
    setLinksList(getCategoriesArray(lawsCategories, currentCategory))
  }, [location])

  return (
    <div className="tabs-page">

      <div className="tabs-menu">
        <StickyMenu linksList={linksList} />
      </div>

      <div className="tabs-content">
        <LawsRouter />
      </div>

    </div>
  );
};

export default Laws;