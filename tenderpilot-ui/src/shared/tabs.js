// Tabs.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  const navigate = useNavigate();

  const handleTabClick = (tabId, path) => {
    onTabChange(tabId);
    navigate(path); // Update the URL path
  };

  return (
    <div className="flex">
      {tabs.map(tab => (
        <Link
          key={tab.id}
          to={tab.path}
          className={`p-2 ${activeTab === tab.id ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleTabClick(tab.id, tab.path)}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
};

export default Tabs;
