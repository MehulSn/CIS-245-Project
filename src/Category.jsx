import React, { useState, useEffect } from 'react';
import Marvel1 from './assets/marvel1.jpg'
import Marvel from './assets/Marvel.mp4'
import Harry1 from './assets/harry1.png'
import Harry from './assets/Harry_Potter.mp4'
import Wukong1 from './assets/Wukong1.jpg'
import Wukong from './assets/Wukong.mp4'
import Creed1 from './assets/Creed1.png'
import Creed from './assets/Creed.mp4'
import Inn1 from './assets/Inn1.png'
import Inn from './assets/Inn.mp4'
import games from './data.json'

const categories = [
    "Multiplayer", "Adventure", "Action", "Fantasy", "Sports", "Open World"
  ];
const products = [
    {
      id: 'assassins-creed',
      name: "Assassin's Creed Shadows",
      description: "ENTER FEUDAL JAPAN - Explore the captivating open world of feudal Japan...",
    price: '₹4,999',
      videoUrl: Creed,
      coverImage: Creed1
    },
    {
      id: 'another-game',
      name: 'Harry Potter: Quidditch Champions',
      description: "Your next chapter takes flight! Immerse yourself in the enchanting world of Quidditch...",
    price: '₹4,999',
      videoUrl: Harry,
      coverImage: Harry1
    },
    {
      id: 'third-game',
      name: 'Innsmouth 22',
      description: "In this visual novel, the main character, Lorenzo Righi, is invited to a meeting of History Scholars...",
    price: '₹4,999',
      videoUrl: Inn,
      coverImage: Inn1
    },
    {
      id: 'fourth-game',
      name: 'Black Myth: Wukong',
      description: "Black Myth: Wukong is an action RPG rooted in Chinese mythology...",
    price: '₹4,999',
      videoUrl: Wukong,
      coverImage: Wukong1
    },
    {
      id: 'fifth-game',
      name: 'Marvel’s Spider-Man 2',
      description: "Spider-Sense tingling… Mask-up for more thrilling web-slinging heroics...",
    price: '₹4,999',
      videoUrl: Marvel,
      coverImage: Marvel1
    }
  ];


const CategoryPage = () => {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const currentProduct = products[currentProductIndex];

    const selectProduct = (index) => {
        setCurrentProductIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProductIndex((prevIndex) =>
                (prevIndex + 1) % products.length
            );
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);
   
    return (
        <div className="flex flex-col bg-black">
    {/* Hero Section with Video Background */}
    <div className="flex w-full h-screen">
        {/* Left Section - 75% Width */}
        <div className="w-full h-full relative overflow-hidden">
            {/* Background Video */}
            <video
                key={currentProduct.id}
                src={currentProduct.videoUrl}
                className="absolute top-0 left-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
            />

            {/* Overlay Gradient */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/90 to-black/30"></div>

            {/* Content Overlay */}
            <div className="relative z-10 flex flex-col md:grid md:grid-cols-[80%_20%] h-full">
                {/* Left Side - Game Details (80% width) */}
                <div className="flex flex-col justify-center p-4 md:p-8 lg:p-12 min-h-[300px]">
                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-2 md:mb-4 min-h-[2em]">
                        {currentProduct.name}
                    </h1>
                    <p className="text-sm md:text-base lg:text-xl text-white/80 mb-4 md:mb-6 max-w-2xl min-h-[4em]">
                        {currentProduct.description}
                    </p>
                    <div className="space-x-2 md:space-x-4">
                        <button className="bg-yellow-500 text-black px-3 py-2 md:px-6 md:py-3 rounded-md text-sm md:text-base font-semibold hover:bg-yellow-400">
                            Buy Now
                        </button>
                        <button className="border border-yellow-500 text-yellow-500 px-3 py-2 md:px-6 md:py-3 rounded-md text-sm md:text-base font-semibold hover:bg-yellow-500/10">
                            Add to Wishlist
                        </button>
                    </div>
                </div>

                {/* Right Side - Game List (20% width) */}
                <div className="hidden md:block bg-black/80 overflow-y-auto h-full">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className={`
                            p-2 md:p-4 cursor-pointer border-b border-gray-800
                            ${currentProductIndex === index ? 'bg-blue-500' : 'hover:bg-blue-700'}
                            `}
                            onClick={() => selectProduct(index)}
                        >
                            <div className="flex items-center">
                                <img
                                    src={product.coverImage}
                                    alt={product.name}
                                    className="w-10 h-10 md:w-16 md:h-16 object-cover mr-2 md:mr-4 rounded"
                                />
                                <div>
                                    <span className="text-xs md:text-sm font-semibold text-white block">
                                        {product.name}
                                    </span>
                                    <span className="text-[10px] md:text-xs text-yellow-500">
                                        {product.price}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>

    {/* First Category Section - MOVED OUTSIDE THE VIDEO SECTION */}
    <div className="w-full bg-black p-2">
      {categories.map((category) => {
        const filteredGames = games.filter((game) => game.genres.includes(category));
        return (
          <div key={category} className="bg-black w-full mb-6">
            {/* Category Name */}
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-white">{category} Games</h2>
            </div>

            {/* Container for Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
              {/* Game Items */}
              {filteredGames.length > 0 ? (
                filteredGames.map((game) => (
                  <div key={game.id} className="bg-black rounded-lg overflow-hidden shadow-lg border border-gray-800">
                    {/* Game Image */}
                    <img
                      src={game.pics[0] || "/api/placeholder/400/250"}
                      alt={game.title}
                      className="w-full h-auto object-cover"
                    />
                    {/* Game Details Section */}
                    <div className="p-4 bg-black text-white">
                      <div className="flex items-center justify-between">
                        {/* Game Title and Platform */}
                        <div>
                          <h2 className="text-xl font-bold mb-1">{game.title}</h2>
                          <div className="text-xs text-gray-400">PC Game</div>
                        </div>

                        {/* Price/Purchase Section */}
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-semibold text-yellow-500">₹{game.price}</span>
                          <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full text-sm transition-colors">
                            Buy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-white">No games available in this category.</p>
              )}
            </div>
          </div>
        );
      })}
    </div>

</div>
    );
};

export default CategoryPage;