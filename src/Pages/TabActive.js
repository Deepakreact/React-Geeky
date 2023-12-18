import React, { useState } from 'react';

const TabActive = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <div className="tabs">
        <div
          className={activeTab === 1 ? 'tab active' : 'tab'}
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </div>
        <div
          className={activeTab === 2 ? 'tab active' : 'tab'}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </div>
        <div
          className={activeTab === 3 ? 'tab active' : 'tab'}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 1 && <div>Content for Tab 1</div>}
        {activeTab === 2 && <div>Content for Tab 2</div>}
        {activeTab === 3 && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
};

export default TabActive;
