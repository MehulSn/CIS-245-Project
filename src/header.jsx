import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const headerItems = [
    { name: 'Discover', path: '/discover' },
    { name: 'Library', path: '/library' },
    { name: 'New', path: '/new' },
    { name: 'Categories', path: '/categories' },
    { name: 'News', path: '/news' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-white shadow-md">
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
          <Link
            key={item.name}
            to={item.path}
            className="text-gray-700 transition-all duration-300 transform hover:scale-110 hover:text-gray-900"
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex items-center">
        <input 
          type="text" 
          placeholder="Search" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-3 py-2 border-2 border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
        />
        <button 
          type="submit" 
          className="bg-gray-400 text-white px-4 py-2 border-2 border-l-0 border-gray-300 rounded-r-md hover:bg-gray-500 transition-colors flex items-center justify-center"
        >
          <Search size={20} />
        </button>
      </form>
    </header>
  );
};

export default Header;