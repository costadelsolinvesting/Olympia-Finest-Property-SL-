
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const AdminLoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder authentication
    if (username === 'admin' && password === 'password') {
      login();
      navigate('/admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Olympia<span className="text-red-600">Admin</span> Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="text-sm font-bold text-gray-600 block">Username</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              placeholder="admin"
            />
          </div>
          <div>
            <label htmlFor="password"className="text-sm font-bold text-gray-600 block">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
              placeholder="password"
            />
          </div>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          <div>
            <button type="submit" className="w-full py-2 px-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
