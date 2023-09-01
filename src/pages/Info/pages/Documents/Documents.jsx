import React, { useEffect, useState } from 'react';
import StickyMenu from '../../../../components/StickyMenu/StickyMenu';
import { useLocation } from 'react-router-dom';
import { getCategoriesArray } from '../../../../utils/categories';
import { documentsCategories } from '../../../../utils/navigation';

const Documents = () => {
  const
    [linksList, setLinksList] = useState([]),
    location = useLocation(),
    currentCategory = location.pathname.split('/').filter(el => el !== '').slice(-1)[0]

  useEffect(() => {
    setLinksList(getCategoriesArray(documentsCategories, currentCategory))
  }, [location])

  return (
    <div className="tabs-page">
      <div className="tabs-menu">
        <StickyMenu linksList={linksList} />
      </div>

      <div className="tabs-content">
        Documents
      </div>
    </div>
  );
};

export default Documents;