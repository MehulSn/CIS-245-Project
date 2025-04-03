import React, { useState } from 'react';
import CarouselwithText from './CarousalwithText';
import { Star, Clock, Users, Trophy } from "lucide-react";
import games from './data.json';

const HomePage = () => {
  // State to track selected game
  const [selectedGame, setSelectedGame] = useState(null);

  // Function to handle game click
  const handleGameClick = (game) => {
    setSelectedGame(game);
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
    <div className={`w-full h-screen min-h-screen overflow-hidden grid ${selectedGame ? "grid-cols-[15%_60%_25%]" : "grid-cols-[15%_85%]"}`}>
      {/* First Section - Filters */}
      <div className="w-full h-full bg-black text-gray-300 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold text-white mb-4">Filters</h2>
        {["Multiplayer", "Adventure", "Action", "Fantasy", "Sports", "Open World"].map((label, index) => (
          <div key={index} className="border-b border-black py-3 cursor-pointer hover:bg-black">{label}</div>
        ))}
      </div>

      {/* Second Section - Games List (Expands when no game is selected) */}
      <div className="w-full h-full bg-black p-4 overflow-y-auto">
        <CarouselwithText />
        <h2 className="text-2xl font-semibold text-white p-4">New Games</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
          {games.map((game) => (
            <div key={game.id} className="bg-black rounded-lg shadow-lg cursor-pointer" onClick={() => handleGameClick(game)}>
              <img src={game.pics[0] || "/path/to/default-image.jpg"} alt={game.title} className="w-full h-40 object-cover" />
              <div className="p-4 bg-black text-white">
                <h2 className="text-lg font-bold mb-1">{game.title}</h2>
                <div className="text-xs opacity-70">{game.genres.join(", ")}</div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg font-semibold">₹{game.price}</span>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm">Buy</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Third Section - Game Details (Only Shows When a Game is Selected) */}
      {selectedGame && (
        <div className="w-full h-full bg-black p-4 overflow-y-auto">
          <div className="w-full max-w-full mx-auto bg-black p-4 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-white">{selectedGame.title}</h1>
            <img src={selectedGame.pics[0]} alt={selectedGame.title} className="w-full h-56 object-cover mb-4" />
            
            {/* Thumbnail Gallery */}
            <div className="flex mb-4 space-x-2">
              {selectedGame.pics.slice(0, 5).map((img, index) => (
                <img key={index} src={img} alt={`Thumbnail ${index}`} className="w-1/5 h-16 object-cover rounded-md" />
              ))}
            </div>

            {/* Categories */}
            <div className="flex space-x-2 mb-4">
              {selectedGame.genres.slice(0, 5).map((tag, index) => (
                <div key={index} className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs">{tag}</div>
              ))}
            </div>

            {/* Game Description */}
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2 text-white">Game Description</h2>
              <p className="text-gray-300 text-sm">{selectedGame.description}</p>
            </div>

            {/* Ratings and Game Details */}
            <div className="mb-4">
              <h2 className="text-xl font-bold text-white">Ratings & Details</h2>
              <div className="flex items-center mb-2">{renderStars(selectedGame.rating)} <span className="ml-2 text-white">{selectedGame.rating}/5</span></div>
              <div className="text-gray-300"><Clock className="inline mr-2" size={18} />{selectedGame.playTime}</div>
              <div className="text-gray-300"><Users className="inline mr-2" size={18} />{selectedGame.players}</div>
              <div className="text-gray-300"><Trophy className="inline mr-2" size={18} />Difficulty: {selectedGame.difficulty}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
