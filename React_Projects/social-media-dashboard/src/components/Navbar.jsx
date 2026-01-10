import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { currentUser, logout } = useAuth();

  return (
    <nav className={`flex justify-between p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <Link to="/" className="text-xl font-bold">Social App</Link>
      <div className="flex items-center space-x-4">
        {currentUser ? (
          <>
            <Link to="/profile">Profile</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
        <button onClick={toggleTheme}>
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;