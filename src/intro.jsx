import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VideoCarousel from './VideoCarousal';
import CreateButton from './CreateButton';
import trialVid from './assets/Harry_Potter.mp4';
const products = [
  {
    id: 'assassins-creed',
    name: "Assassin's Creed Shadows",
    videoUrl: '/path/to/assassins-creed-video.mp4',
    coverImage: '/path/to/assassins-creed-cover.jpg'
  },
  {
    id: 'another-game',
    name: 'Another Game Title',
    videoUrl: '/path/to/another-game-video.mp4',
    coverImage: '/path/to/another-game-cover.jpg'
  },
  {
    id: 'third-game',
    name: 'Third Game Title',
    videoUrl: '/path/to/third-game-video.mp4',
    coverImage: '/path/to/third-game-cover.jpg'
  },
  {
    id: 'fourth-game',
    name: 'Fourth Game Title',
    videoUrl: '/path/to/fourth-game-video.mp4',
    coverImage: '/path/to/fourth-game-cover.jpg'
  },
  {
    id: 'fifth-game',
    name: 'Fifth Game Title',
    videoUrl: '/path/to/fifth-game-video.mp4',
    coverImage: '/path/to/fifth-game-cover.jpg'
  }
];

const IntroPage = () => {
  const [muted, setMuted] = useState(true);
  
  const handleUnmute = () => {
    setMuted(!muted);
  };

  const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const [isMobileView, setIsMobileView] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);
    
    // Handle responsive behavior
    useEffect(() => {
      const handleResize = () => {
        setIsMobileView(window.innerWidth < 768);
        setShowSidebar(window.innerWidth >= 768);
      };
      
      // Initial check
      handleResize();
      
      // Add event listener
      window.addEventListener('resize', handleResize);
      
      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    // Automatic product rotation
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentProductIndex((prev) => (prev + 1) % products.length);
      }, 5000);
      return () => clearInterval(intervalId);
    }, []);
  
    // Select a specific product
    const selectProduct = (index) => {
      setCurrentProductIndex(index);
      // On mobile, auto-hide sidebar after selection
      if (isMobileView) {
        setShowSidebar(false);
      }
    };
  
    const currentProduct = products[currentProductIndex];
  
    // Toggle sidebar on mobile
    const toggleSidebar = () => {
      setShowSidebar(!showSidebar);
    };
  
    const [isCreateHovered, setIsCreateHovered] = useState(false);

  
  return (
    <div className="block md:grid md:grid-cols-2 w-full h-screen overflow-hidden">
      {/* Left Section - Video Background */}
      <div className="w-full h-1/2 md:h-full relative">
        <div className="w-full h-full relative">
          <video
            autoPlay
            loop
            muted={muted}
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={trialVid} type="video/mp4" />
          </video>
          
          {/* Title */}
          <div className="absolute top-8 left-8 text-white">
            <h1 className="font-montserrat font-extrabold text-2xl sm:text-3xl md:text-4xl">Epic Games Store</h1>
          </div>
          
          {/* Play Button */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
            <button className="text-xl sm:text-2xl px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-blue-500 text-white hover:scale-110 transition duration-300">
              <Link to="/home">Play</Link>
            </button>
          </div>
          
          {/* Mute Button */}
          <button
            className="absolute bottom-4 left-4 text-white bg-gray-800 px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base"
            onClick={handleUnmute}
          >
            {muted ? 'Unmute' : 'Mute'}
          </button>
        </div>
      </div>
      
      {/* Right Section - Carousel and Button */}
      <div className="w-full h-1/2 md:h-full bg-green-100 p-4 md:p-8 overflow-y-auto">
        <div className="w-full max-w-lg mx-auto mt-8">
        <div className="w-full h-screen flex flex-col bg-gray-900 text-white overflow-hidden">
      
      {/* Header with Product Name and Toggle Button */}
      <div className="flex justify-between items-center py-3 px-4 bg-gray-800">
        <div className="text-lg md:text-2xl font-bold truncate">
          {currentProduct.name}
        </div>
        {isMobileView && (
          <button 
            onClick={toggleSidebar}
            className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm font-medium"
          >
            {showSidebar ? 'Hide Menu' : 'Show Menu'}
          </button>
        )}
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 w-full relative overflow-hidden">
        
        {/* Video Area (Expands to fill space) */}
        <div className={`${showSidebar && isMobileView ? 'hidden' : 'flex-1'} bg-black flex items-center justify-center`}>
          <video 
            key={currentProduct.id}
            src={currentProduct.videoUrl} 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted
            playsInline
          />
        </div>

        {/* Right Sidebar (Scrollable Thumbnails) */}
        <div 
          className={`
            ${isMobileView 
              ? showSidebar ? 'absolute inset-0 z-10' : 'hidden' 
              : 'w-1/5 min-w-[120px] max-w-[200px]'
            } 
            bg-gray-800 overflow-y-auto
          `}
        >
          {/* Mobile View Close Button */}
          {isMobileView && showSidebar && (
            <div className="sticky top-0 bg-gray-900 p-2 text-right">
              <button 
                onClick={toggleSidebar}
                className="bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded text-sm"
              >
                Close
              </button>
            </div>
          )}
          
          {/* Product Thumbnails */}
          <div className={isMobileView ? 'grid grid-cols-2 gap-2 p-2' : ''}>
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`
                  ${isMobileView 
                    ? 'p-2' 
                    : 'p-2 border-b'
                  }
                  cursor-pointer
                  ${currentProductIndex === index 
                    ? 'bg-blue-600 border-blue-400' 
                    : 'hover:bg-gray-700 border-gray-600'}
                `}
                onClick={() => selectProduct(index)}
              >
                <div className="flex flex-col items-center">
                  <img 
                    src={product.coverImage} 
                    alt={product.name} 
                    className={`
                      ${isMobileView ? 'w-16 h-16' : 'w-12 h-12'}
                      object-cover mb-1 rounded
                    `}
                  />
                  <span className="text-xs font-semibold text-center">{product.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Dots for Mobile */}
      {isMobileView && !showSidebar && (
        <div className="flex justify-center py-2 bg-gray-800">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => selectProduct(index)}
              className={`mx-1 w-3 h-3 rounded-full ${
                currentProductIndex === index ? 'bg-blue-600' : 'bg-gray-600'
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
          <div className="mt-6">
          <div className="w-full flex justify-center py-4 bg-gray-700">
        <button
          onMouseEnter={() => setIsCreateHovered(true)}
          onMouseLeave={() => setIsCreateHovered(false)}
          className={`
            bg-blue-500 text-white py-3 px-6 rounded-md 
            transition-all duration-300 shadow-lg 
            hover:bg-blue-600
            ${isCreateHovered ? 'w-[300px] scale-105' : 'w-[250px]'}
            `}
            >
          Create
        </button>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;