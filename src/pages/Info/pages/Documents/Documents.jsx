import React from 'react';
import StickyMenu from '../../../../components/StickyMenu/StickyMenu';

const Documents = () => {
  return (
    <div className="tabs-page">
      <div className="tabs-menu">
        <StickyMenu />
      </div>

      <div className="tabs-content">
        Documents
      </div>
    </div>
  );
};

export default Documents;