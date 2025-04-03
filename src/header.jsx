import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();  // Get current route

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const headerItems = [
    { name: 'Discover', path: '/home' },
    { name: 'Library', path: '/library' },
    { name: 'New', path: '/home#new', sectionId: 'new' },
    { name: 'Categories', path: '/category' },
    { name: 'News', path: '/news' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // navigate(/search?query=${encodeURIComponent(searchQuery)});
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-black shadow-md">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img 
          src="/api/placeholder/150/50" 
          alt="Logo" 
          className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
        />
      </Link>

      {/* Navigation Items */}
      <nav className="flex items-center space-x-6">
        {headerItems.map((item) => (
          item.sectionId && location.pathname === '/home' ? (
            // If already on /home, scroll instead of navigating
            <button
              key={item.name}
              onClick={() => scrollToSection(item.sectionId)}
              className="text-gray-300 transition-all duration-300 transform hover:scale-110 hover:text-white"
            >
              {item.name}
            </button>
          ) : (
            // Normal Link navigation
            <Link
              key={item.name}
              to={item.path}
              className="text-gray-300 transition-all duration-300 transform hover:scale-110 hover:text-white"
            >
              {item.name}
            </Link>
          )
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
