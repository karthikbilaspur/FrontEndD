import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Settings from './pages/Settings';
import { useTheme } from './contexts/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;