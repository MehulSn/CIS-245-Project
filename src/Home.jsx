import React, { useState, useEffect } from 'react';
import CarouselwithText from './CarousalwithText';
import { Star, Clock, Users, Trophy, Tag } from "lucide-react";

const HomePage = () => {
  const filterSections = [
    { id: 'events', label: 'Events' },
    { id: 'price', label: 'Price' },
    { id: 'genre', label: 'Genre' },
    { id: 'features', label: 'Features' },
    { id: 'types', label: 'Types' },
    { id: 'platform', label: 'Platform' },
    { id: 'subscriptions', label: 'Subscriptions' }
  ];

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

  const [currentProductIndex, setCurrentProductIndex] = useState(0);


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
  };

  const currentProduct = products[currentProductIndex];
  const gameData = {
    title: "Cosmic Adventures",
    description: "Embark on an epic journey through the stars in this action-packed adventure game. Explore mysterious planets, battle alien creatures, and uncover the secrets of the universe. With stunning graphics and an immersive storyline, Cosmic Adventures offers countless hours of gameplay for both casual and hardcore gamers.",
    rating: 4.5,
    playTime: "20+ hours",
    players: "1-4 players",
    difficulty: "Medium",
    tags: ["Adventure", "Sci-Fi", "Action", "Multiplayer", "Strategy"]
  };

  // Sample images for the gallery
  const images = [
    "/api/placeholder/640/360",
    "/api/placeholder/640/360",
    "/api/placeholder/640/360",
    "/api/placeholder/640/360",
    "/api/placeholder/640/360"
  ];

  // State to track which image is currently displayed
  const [currentImage, setCurrentImage] = useState(0);

  // Handle image thumbnail click
  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  // Generate star rating display
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="text-yellow-500 fill-yellow-500" size={20} />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<Star key={i} className="text-yellow-500 fill-yellow-500 opacity-50" size={20} />);
      } else {
        stars.push(<Star key={i} className="text-gray-300" size={20} />);
      }
    }
    return stars;
  };


  return (
    <div className="w-full h-screen min-h-screen overflow-hidden grid grid-cols-[15%_60%_25%]">
      {/* First Section - 15% Width */}
      <div className="w-full h-full bg-black text-gray-300 p-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Filters</h2>
        </div>

        {filterSections.map((section) => (
          <div
            key={section.id}
            className="border-b border-black py-3 flex justify-between items-center cursor-pointer hover:bg-black"
          >
            <span>{section.label}</span>
          </div>
        ))}
      </div>

      {/* Second Section - 60% Width */}
      <div className="w-full h-full bg-black p-4 overflow-y-auto">
        <CarouselwithText></CarouselwithText>
        <div className="w-full bg-black p-2">
          <div id="new" className="bg-black w-full bg-gray-900">
            {/* Category Name */}
            <div className="p-4 ">
              <h2 className="text-2xl font-semibold text-white">
                New Games
              </h2>
            </div>

            {/* Container for Items */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-4">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-black rounded-lg overflow-hidden shadow-lg w-full"
                >
                  {/* Game Image */}
                  <img
                    src="/path/to/33-immortals-image.jpg"
                    alt="33 Immortals"
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                  />

                  {/* Game Details Section */}
                  <div className="p-2 sm:p-4 bg-black text-white">
                    <div className="flex items-center justify-between">
                      {/* Game Title and Platform */}
                      <div className="flex-grow">
                        <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1 truncate">
                          33 Immortals
                        </h2>
                        <div className="text-[10px] sm:text-xs opacity-70">
                          PC Game
                        </div>
                      </div>

                      {/* Price/Purchase Section */}
                      <div className="flex flex-col sm:flex-row items-end sm:items-center space-x-0 sm:space-x-2 space-y-1 sm:space-y-0">
                        <span className="text-sm sm:text-lg font-semibold">
                          ₹719
                        </span>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm transition-colors">
                          Buy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="bg-black rounded-lg overflow-hidden shadow-lg w-full"
              >
                {/* Game Image */}
                <img
                  src="/path/to/33-immortals-image.jpg"
                  alt="33 Immortals"
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
                />

                {/* Game Details Section */}
                <div className="p-2 sm:p-4 bg-black text-white">
                  <div className="flex items-center justify-between">
                    {/* Game Title and Platform */}
                    <div className="flex-grow">
                      <h2 className="text-base sm:text-lg md:text-xl font-bold mb-1 truncate">
                        33 Immortals
                      </h2>
                      <div className="text-[10px] sm:text-xs opacity-70">
                        PC Game
                      </div>
                    </div>

                    {/* Price/Purchase Section */}
                    <div className="flex flex-col sm:flex-row items-end sm:items-center space-x-0 sm:space-x-2 space-y-1 sm:space-y-0">
                      <span className="text-sm sm:text-lg font-semibold">
                        ₹719
                      </span>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm transition-colors">
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Third Section - 25% Width - Changed to dark theme */}
      <div className="w-full h-full bg-black p-4 overflow-y-auto">
        <div className="w-full max-w-full mx-auto bg-black p-2 sm:p-4 rounded-lg shadow-lg">
          {/* Game Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-white">{gameData.title}</h1>

          {/* Main Image Showcase */}
          <div className="mb-2 sm:mb-4 bg-black rounded-lg overflow-hidden">
            <img
              src={images[currentImage]}
              alt={`${gameData.title} screenshot ${currentImage + 1}`}
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
            />
          </div>

          {/* Thumbnail Gallery - Always 5 in one row */}
          <div className="flex justify-between mb-3 sm:mb-6 space-x-1 sm:space-x-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => handleImageClick(index)}
                className={`w-1/5 rounded-md overflow-hidden border-2 ${currentImage === index ? 'border-blue-500' : 'border-gray-700'}`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-8 sm:h-12 md:h-16 object-cover"
                />
              </button>
            ))}
          </div>

          {/* Categories - Always 5 in one row */}
          <div className="flex justify-between mb-3 sm:mb-6 space-x-1 sm:space-x-2">
            {gameData.tags.slice(0, 5).map((tag, index) => (
              <div key={index} className="w-1/5 bg-black text-gray-300 p-1 sm:p-2 rounded-md text-center text-xs sm:text-sm truncate">
                {tag}
              </div>
            ))}
          </div>

          {/* Game Description */}
          <div className="bg-black p-2 sm:p-4 rounded-lg mb-3 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-white">Game Description</h2>
            <p className="text-gray-300 text-sm sm:text-base">{gameData.description}</p>
          </div>

          {/* Ratings and Info - Improved spacing and alignment */}
          <div className="bg-black p-3 sm:p-4 rounded-lg">
            <h2 className="text-lg sm:text-xl font-bold mb-3 text-white">Ratings & Details</h2>

            {/* Star Rating Section - Fixed alignment */}
            <div className="flex items-center mb-3">
              <div className="flex mr-2">
                {renderStars(gameData.rating)}
              </div>
              <span className="text-base sm:text-lg font-bold text-white">{gameData.rating.toFixed(1)}/5.0</span>
            </div>

            {/* Game Details - Better spacing */}
            <div className="space-y-2">
              <div className="flex items-center">
                <Clock className="mr-3 text-blue-400" size={18} />
                <span className="text-sm sm:text-base text-gray-300">{gameData.playTime}</span>
              </div>

              <div className="flex items-center">
                <Users className="mr-3 text-green-400" size={18} />
                <span className="text-sm sm:text-base text-gray-300">{gameData.players}</span>
              </div>

              <div className="flex items-center">
                <Trophy className="mr-3 text-yellow-400" size={18} />
                <span className="text-sm sm:text-base text-gray-300">Difficulty: {gameData.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;