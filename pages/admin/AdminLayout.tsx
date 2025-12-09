
import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { HomeIcon, BuildingOfficeIcon, NewspaperIcon, Cog6ToothIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

const AdminLayout: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const navItems = [
    { to: '/admin', text: 'Dashboard', icon: HomeIcon },
    { to: '/admin/properties', text: 'Properties', icon: BuildingOfficeIcon },
    { to: 'news', text: 'News', icon: NewspaperIcon },
    { to: 'settings', text: 'Settings', icon: Cog6ToothIcon },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-gray-700">
          Olympia<span className="text-red-500">Admin</span>
        </div>
        <nav className="flex-grow p-4">
          <ul>
            {navItems.map(item => (
              <li key={item.text}>
                <NavLink
                  to={item.to}
                  end={item.to === '/admin'}
                  className={({ isActive }) => `flex items-center px-3 py-2 my-1 rounded-md transition-colors ${isActive ? 'bg-red-600' : 'hover:bg-gray-700'}`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
          <button onClick={handleLogout} className="w-full flex items-center px-3 py-2 text-left rounded-md hover:bg-gray-700">
            <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
