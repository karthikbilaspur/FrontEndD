import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <button onClick={toggleTheme} className="bg-blue-500 text-white p-2 rounded-md">
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  );
};

export default Settings;