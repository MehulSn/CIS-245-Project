import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import Epics from './assets/Epic.png';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigation = (item) => {
    if (item.sectionId) {
      if (location.pathname !== '/home') {
        navigate('/home'); // Navigate first
        setTimeout(() => scrollToSection(item.sectionId), 300); // Delay scrolling
      } else {
        scrollToSection(item.sectionId); // Scroll immediately if already on home
      }
    } else {
      navigate(item.path);
    }
  };

  const headerItems = [
    { name: 'Discover', path: '/home' },
    { name: 'Library', path: '/library' },
    { name: 'Games', path: '/home#new', sectionId: 'new' },
    { name: 'Categories', path: '/category' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-black shadow-md">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img 
          src={Epics}
          alt="Logo" 
          className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
        />
      </Link>

      {/* Navigation Items */}
      <nav className="flex items-center space-x-6">
        {headerItems.map((item) => (
          <button
            key={item.name}
            onClick={() => handleNavigation(item)}
            className="text-gray-300 transition-all duration-300 transform hover:scale-110 hover:text-white"
          >
            {item.name}
          </button>
        ))}
      </nav>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex items-center">
        <input 
          type="text" 
          placeholder="Search" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 border-2 border-gray-600 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent w-64 placeholder-gray-400"
        />
        <button 
          type="submit" 
          className="bg-gray-700 text-white px-4 py-2 border-2 border-l-0 border-gray-600 rounded-r-md hover:bg-gray-600 transition-colors flex items-center justify-center"
        >
          <Search size={20} />
        </button>
      </form>
    </header>
  );
};

export default Header;
