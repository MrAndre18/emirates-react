import React from 'react';
import TabsHeader from '../UI/tabsHeader/TabsHeader';
import './Tabs.scss';

const Tabs = ({ tabs, body }) => {
  return (
    <div className="tabs">
      <TabsHeader tabs={tabs} />

      <div className="tabs-body">
        {body}
      </div>
    </div>
  );
};

export default Tabs;