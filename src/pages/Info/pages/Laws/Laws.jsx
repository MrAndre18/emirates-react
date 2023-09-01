import React, { useEffect, useState } from 'react';
import StickyMenu from '../../../../components/UI/StickyMenu/StickyMenu';
import './Laws.scss';
import LawsRouter from '../../../../components/LawsRouter';
import { useLocation } from 'react-router-dom';
import { lawsCategories } from '../../../../utils/navigation';
import { getCategoriesArray } from '../../../../utils/categories';
import CategoriesMenu from '../../../../components/CategoriesMenu/CategoriesMenu';

const Laws = () => {
  const
    [linksList, setLinksList] = useState([]),
    location = useLocation()

  useEffect(() => {
    setLinksList(getCategoriesArray(lawsCategories, location))
  }, [location])

  return (
    <div className="tabs-page">

      <div className="tabs-menu">
        <StickyMenu>
          <CategoriesMenu categories={linksList} />
        </StickyMenu>
      </div>

      <div className="tabs-content">
        <LawsRouter />
      </div>

    </div>
  );
};

export default Laws;