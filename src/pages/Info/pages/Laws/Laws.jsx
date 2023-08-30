import React from 'react';
import StickyMenu from '../../../../components/StickyMenu/StickyMenu';
import './Laws.scss';
import LawsRouter from '../../../../components/LawsRouter';

const Laws = () => {
  return (
    <div className="tabs-page">

      <div className="tabs-menu">
        <StickyMenu />
      </div>

      <div className="tabs-content">
        <LawsRouter />
      </div>

    </div>
  );
};

export default Laws;