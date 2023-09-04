import React, { useEffect, useState } from 'react';
import StickyMenu from '../../../../components/UI/StickyMenu/StickyMenu';
import './Laws.scss';
import LawsRouter from '../../../../components/LawsRouter';
import { useLocation } from 'react-router-dom';
import { lawsCategories } from '../../../../utils/navigation';
import { getCategoriesArray, getPreviousCategory } from '../../../../utils/categories';
import CategoriesMenu from '../../../../components/CategoriesMenu/CategoriesMenu';
import BtnCategoriesBack from '../../../../components/UI/buttons/btnCategoriesBack/BtnCategoriesBack';
import InfoFilter from '../../../../components/InfoFilter/InfoFilter';

const Laws = () => {
  const
    [linksList, setLinksList] = useState([]),
    [prevCategoryName, setPrevCategoryName] = useState(''),
    [prevCategoryPath, setPrevCategoryPath] = useState(''),
    location = useLocation()

  useEffect(() => {
    setLinksList(getCategoriesArray(lawsCategories, location))

    setPrevCategoryName(getPreviousCategory(lawsCategories, location).name)
    setPrevCategoryPath(getPreviousCategory(lawsCategories, location).path)
  }, [location, prevCategoryPath, prevCategoryName])

  return (
    <div className="tabs-page">

      <div className="tabs-menu">
        <StickyMenu>
          {prevCategoryPath &&
            <BtnCategoriesBack path={prevCategoryPath}>{prevCategoryName}</BtnCategoriesBack>
          }
          <CategoriesMenu categories={linksList} />
        </StickyMenu>
      </div>

      <div className="tabs-content">
        <InfoFilter />

        <LawsRouter />
      </div>

    </div>
  );
};

export default Laws;