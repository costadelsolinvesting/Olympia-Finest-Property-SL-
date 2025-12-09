
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const AdminSettingsPage: React.FC = () => {
  const { theme, setTheme } = useTheme();

  // NOTE: Full dynamic theme switching with Tailwind requires more complex setup (e.g., CSS variables, plugins, or JIT safe-listing).
  // This component provides the UI, but the actual theme application is simplified for this project.
  // We'll primarily stick to the red accent color as per the prompt. This page serves as a placeholder for this functionality.

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(prev => ({...prev, accentColor: e.target.value}));
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Site Settings</h1>
      
      <div className="p-6 bg-white rounded-lg shadow-md space-y-6 max-w-lg">
        <div>
          <h2 className="text-xl font-semibold mb-4">Theme Customization</h2>
          <p className="text-sm text-gray-600 mb-4">
            Customize the look and feel of your website. Note: For this demo, color changes are placeholders and the site will maintain its red accent theme.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label htmlFor="accentColor" className="block text-sm font-medium text-gray-700">Accent Color</label>
            <div className="mt-1 flex items-center space-x-3">
              <input 
                type="color" 
                id="accentColor"
                name="accentColor"
                value={theme.accentColor === 'red' ? '#DC2626' : theme.accentColor} // Default to red hex
                onChange={handleColorChange}
                className="h-10 w-10 p-1 border border-gray-300 rounded-md cursor-pointer"
              />
              <select 
                value={theme.accentColor} 
                onChange={(e) => setTheme(prev => ({...prev, accentColor: e.target.value}))}
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              >
                  <option value="red">Red (Default)</option>
                  <option value="blue">Blue</option>
                  <option value="green">Green</option>
                  <option value="indigo">Indigo</option>
              </select>
            </div>
            <p className="text-xs text-gray-500 mt-1">Select a predefined color or pick your own.</p>
          </div>
          
          <div>
            <label htmlFor="font" className="block text-sm font-medium text-gray-700">Font Scheme</label>
             <select 
                id="font"
                value={theme.font.body} 
                onChange={(e) => setTheme(prev => ({...prev, font: { headings: 'Poppins', body: e.target.value }}))}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
              >
                  <option value="Lato">Lato / Poppins (Default)</option>
                  <option value="Roboto">Roboto / Montserrat</option>
                  <option value="Open Sans">Open Sans / Raleway</option>
              </select>
          </div>
        </div>
        
        <div className="flex justify-end pt-4 border-t">
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage;
