import React from 'react';

const GameCard = () => {
  return (
    <div className="w-72 bg-black rounded-lg overflow-hidden shadow-lg">
      {/* Game Image */}
      <img 
        src="/path/to/33-immortals-image.jpg" 
        alt="33 Immortals" 
        className="w-full h-auto object-cover"
      />
      
      {/* Game Details Section */}
      <div className="p-4 bg-black text-white">
        <div className="flex items-center justify-between">
          {/* Game Title and Platform */}
          <div>
            <h2 className="text-xl font-bold mb-1">
              33 Immortals
            </h2>
            <div className="text-xs opacity-70">
              PC Game
            </div>
          </div>
          
          {/* Price/Purchase Section */}
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold">
              ₹719
            </span>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full text-sm transition-colors">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;