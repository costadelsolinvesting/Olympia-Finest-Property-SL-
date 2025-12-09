
import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../contexts/DataContext';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

const AdminNewsPage: React.FC = () => {
  const { newsPosts, setNewsPosts } = useData();

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this news post?')) {
      setNewsPosts(newsPosts.filter(p => p.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Manage News</h1>
        <Link to="/admin/news/new" className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
          Add New Post
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3">Title (EN)</th>
              <th scope="col" className="px-6 py-3">Category (EN)</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {newsPosts.map(post => (
              <tr key={post.id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">{post.date}</td>
                <td className="px-6 py-4 font-medium text-gray-900">{post.title.en}</td>
                <td className="px-6 py-4">{post.category.en}</td>
                <td className="px-6 py-4 flex space-x-2">
                  <Link to={`/admin/news/edit/${post.id}`} className="text-blue-600 hover:text-blue-800">
                    <PencilIcon className="w-5 h-5"/>
                  </Link>
                  <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:text-red-800">
                    <TrashIcon className="w-5 h-5"/>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminNewsPage;
