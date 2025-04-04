import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CarouselwithText from './CarousalwithText';
import { Star, Clock, Users, Trophy } from "lucide-react";
import games from './data.json';

const HomePage = () => {
  const [selectedGame, setSelectedGame] = useState(null);

  const FilterItems = [
    { name: 'Multiplayer' },
    { name: 'Adventure' },
    { name: 'Action' },
    { name: 'Fantasy' },
    { name: 'Sports' },
    { name: 'Open World' }
  ];

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

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
      {/* Sidebar Filters */}
      <div className="w-full h-full bg-black text-gray-300 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold text-white mb-4">Filters</h2>
        {FilterItems.map((filter, index) => (
          <Link
            key={index}
            to={`/category#${filter.name}`}
            className="block border-b border-gray-700 py-3 cursor-pointer hover:bg-gray-800 text-white"
          >
            {filter.name}
          </Link>
        ))}
      </div>

      {/* Games List */}
      <div className="w-full h-full bg-black p-4 overflow-y-auto">
        <CarouselwithText />
        <h2 className="text-2xl font-semibold text-white p-4">Games</h2>
        <div id="new" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
          {games.map((game) => (
            <div key={game.id} className="bg-black rounded-lg shadow-lg cursor-pointer" onClick={() => handleGameClick(game)}>
              <img src={game.pics[0]} alt={game.title} className="w-full h-40 object-cover" />
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

      {/* Game Details Section */}
      {selectedGame && (
        <div className="w-full h-full bg-black p-4 overflow-y-auto">
          <div className="w-full max-w-full mx-auto bg-black p-4 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-white">{selectedGame.title}</h1>
            <img src={selectedGame.pics[0]} alt={selectedGame.title} className="w-full h-56 object-cover mb-4" />
            <div className="flex mb-4 space-x-2">
              {selectedGame.pics.slice(0, 5).map((img, index) => (
                <img key={index} src={img} alt={`Thumbnail ${index}`} className="w-1/5 h-16 object-cover rounded-md" />
              ))}
            </div>
            <div className="flex space-x-2 mb-4">
              {selectedGame.genres.slice(0, 5).map((tag, index) => (
                <div key={index} className="bg-gray-800 text-white px-3 py-1 rounded-md text-xs">{tag}</div>
              ))}
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2 text-white">Game Description</h2>
              <p className="text-gray-300 text-sm">{selectedGame.description}</p>
            </div>
            {/* Ratings and Info - Improved spacing and alignment */}
            <div className="bg-black p-3 sm:p-4 rounded-lg">
              <h2 className="text-lg sm:text-xl font-bold mb-3 text-white">Ratings & Details</h2>

              {/* Star Rating Section - Fixed alignment */}
              <div className="flex items-center mb-3">
                <div className="flex mr-2">
                  {renderStars(selectedGame.ratings)}
                </div>
                <span className="text-base sm:text-lg font-bold text-yellow-500">{selectedGame.ratings}/5.0</span>
              </div>

              {/* Game Details - Better spacing */}
              <div className="space-y-2">
                <div className="flex items-center">
                  <Clock className="mr-3 text-yellow-500" size={18} />
                  <span className="text-sm sm:text-base text-gray-300">{selectedGame.playtime} hours</span>
                </div>

                <div className="flex items-center">
                  <Users className="mr-3 text-yellow-500" size={18} />
                  <span className="text-sm sm:text-base text-gray-300">{selectedGame.players} players</span>
                </div>

                <div className="flex items-center">
                  <Trophy className="mr-3 text-yellow-500" size={18} />
                  <span className="text-sm sm:text-base text-gray-300">Difficulty: {selectedGame.difficulty}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;