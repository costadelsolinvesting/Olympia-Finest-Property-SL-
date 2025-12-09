
import React from 'react';
import { useData } from '../../contexts/DataContext';

const AdminDashboardPage: React.FC = () => {
    const { properties, newsPosts } = useData();

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Total Properties</h2>
            <p className="text-4xl font-bold text-red-600 mt-2">{properties.length}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">News Articles</h2>
            <p className="text-4xl font-bold text-red-600 mt-2">{newsPosts.length}</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Site Status</h2>
            <p className="text-xl font-bold text-green-600 mt-2">Online</p>
        </div>
      </div>
       <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-700">Welcome Admin!</h2>
            <p className="mt-2 text-gray-600">From this dashboard, you can manage properties, news articles, and site settings. Use the navigation on the left to get started.</p>
        </div>
    </div>
  );
};

export default AdminDashboardPage;
