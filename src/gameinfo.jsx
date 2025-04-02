import React, { useState } from "react";
import { Star, Clock, Users, Trophy, Tag } from "lucide-react";

const GameShowcase = () => {
  // Sample game data
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
    <div className="w-full max-w-4xl mx-auto bg-gray-100 p-2 sm:p-4 rounded-lg shadow-lg">
      {/* Game Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-gray-800">{gameData.title}</h1>

      {/* Main Image Showcase */}
      <div className="mb-2 sm:mb-4 bg-gray-200 rounded-lg overflow-hidden">
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
            className={`w-1/5 rounded-md overflow-hidden border-2 ${currentImage === index ? 'border-blue-500' : 'border-transparent'}`}
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
          <div key={index} className="w-1/5 bg-gray-700 text-white p-1 sm:p-2 rounded-md text-center text-xs sm:text-sm truncate">
            {tag}
          </div>
        ))}
      </div>

      {/* Game Description */}
      <div className="bg-gray-300 p-2 sm:p-4 rounded-lg mb-3 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Game Description</h2>
        <p className="text-gray-800 text-sm sm:text-base">{gameData.description}</p>
      </div>

      {/* Ratings and Info */}
      <div className="bg-gray-300 p-2 sm:p-4 rounded-lg">
        <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Ratings & Details</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {/* Star Rating */}
          <div className="flex items-center">
            <div className="flex mr-2">
              {renderStars(gameData.rating)}
            </div>
            <span className="text-base sm:text-lg font-bold">{gameData.rating.toFixed(1)}/5.0</span>
          </div>
          
          {/* Game Details */}
          <div className="space-y-1 sm:space-y-2 text-sm sm:text-base">
            <div className="flex items-center">
              <Clock className="mr-2 text-blue-600" size={16} />
              <span>{gameData.playTime}</span>
            </div>
            
            <div className="flex items-center">
              <Users className="mr-2 text-green-600" size={16} />
              <span>{gameData.players}</span>
            </div>
            
            <div className="flex items-center">
              <Trophy className="mr-2 text-yellow-600" size={16} />
              <span>Difficulty: {gameData.difficulty}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameShowcase;