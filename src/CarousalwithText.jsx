import React, { useState, useEffect } from 'react';

const products = [
  {
    id: 'assassins-creed',
    name: "Assassin's Creed Shadows",
    description: "Become a lethal shinobi and powerful legendary samurai as you explore a beautiful open world in a time of chaos.",
    price: '₹4,999',
    videoUrl: '/path/to/assassins-creed-video.mp4',
    coverImage: '/path/to/assassins-creed-cover.jpg'
  },
  {
    id: 'another-game',
    name: 'Another Game Title',
    description: 'Game description goes here with a bit more text to ensure consistent layout and prevent any unexpected shifts.',
    price: '₹3,999',
    videoUrl: '/path/to/another-game-video.mp4',
    coverImage: '/path/to/another-game-cover.jpg'
  }
];

const CarouselwithText = () => {
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
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 to-transparent"></div>

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
            <button className="bg-white text-black px-3 py-2 md:px-6 md:py-3 rounded-md text-sm md:text-base font-semibold hover:bg-gray-200">
              Buy Now
            </button>
            <button className="border border-white text-white px-3 py-2 md:px-6 md:py-3 rounded-md text-sm md:text-base font-semibold hover:bg-white/10">
              Add to Wishlist
            </button>
          </div>
        </div>

        {/* Right Side - Game List (20% width) */}
        <div className="hidden md:block bg-black/50 overflow-y-auto">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`
                p-2 md:p-4 cursor-pointer border-b border-white/10
                ${currentProductIndex === index 
                  ? 'bg-white/20' 
                  : 'hover:bg-white/10'}
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
                  <span className="text-[10px] md:text-xs text-white/70">
                    {product.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselwithText;