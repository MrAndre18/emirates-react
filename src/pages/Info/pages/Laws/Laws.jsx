import React, { useEffect, useState } from 'react';
import StickyMenu from '../../../../components/StickyMenu/StickyMenu';
import './Laws.scss';
import LawsRouter from '../../../../components/LawsRouter';
import { useLocation } from 'react-router-dom';
import { lawsCategories } from '../../../../utils/navigation';

const Laws = () => {
  const
    [linksList, setLinksList] = useState([]),
    location = useLocation()

  const getCurrentCategory = (path) => {
    const current = path.slice(-1)
    // console.log("🚀 ~ file: Laws.jsx:17 ~ getCurrentCategory ~ current:", current)
    // console.log("🚀 ~ file: Laws.jsx:22 ~ setCategory ~ currentLocationPath:", path)

    path.forEach(element => {
      console.log(element);
      if (element === current) {
        
      }
    });
  }

  const setCategory = () => {
    const locationPath = location.pathname.split('/').filter(el => el !== '')
    
    lawsCategories.forEach(element => {
      if (locationPath.indexOf(element.path) !== -1) {
        const
          currentLocationIndex = locationPath.indexOf(element.path),
          currentLocationPath = locationPath.slice(currentLocationIndex)
        
        getCurrentCategory(currentLocationPath)

        return
      } else {
        setLinksList(lawsCategories)
      }
    });
  }

  useEffect(() => {
    setCategory()
    
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