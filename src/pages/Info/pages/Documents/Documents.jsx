import React, { useEffect, useState } from 'react';
import StickyMenu from '../../../../components/UI/StickyMenu/StickyMenu';
import { useLocation } from 'react-router-dom';
import { getCategoriesArray } from '../../../../utils/categories';
import { documentsCategories } from '../../../../utils/navigation';
import CategoriesMenu from '../../../../components/CategoriesMenu/CategoriesMenu';

const Documents = () => {
  const
    [linksList, setLinksList] = useState([]),
    location = useLocation()

  useEffect(() => {
    setLinksList(getCategoriesArray(documentsCategories, location))
  }, [location])

  return (
    <div className="tabs-page">
      <div className="tabs-menu">
        <StickyMenu>
          <CategoriesMenu categories={linksList} />
        </StickyMenu>
      </div>

      <div className="tabs-content">
        Documents
      </div>
    </div>
  );
};

export default Documents;