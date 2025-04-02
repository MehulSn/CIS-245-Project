import React, { useState, useEffect } from 'react';
import { Star, Clock, Users, Trophy, Tag } from "lucide-react";

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
        <div className="flex flex-col">
            {/* Hero Section with Video Background */}
            <div className="flex w-full h-screen">
                {/* Left Section - 75% Width */}
                <div className="w-3/4 h-full relative overflow-hidden">
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
                        <div className="hidden md:block bg-black/50 overflow-y-auto h-full">
                            {products.map((product, index) => (
                                <div
                                    key={product.id}
                                    className={`
                                    p-2 md:p-4 cursor-pointer border-b border-white/10
                                    ${currentProductIndex === index ? 'bg-white/20' : 'hover:bg-white/10'}
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

                {/* Right Section - 25% Width with fixed height and scrollable content */}
                <div className="w-1/4 bg-gray-200 h-screen overflow-y-auto">
                    <div className="w-full max-w-full mx-auto bg-gray-100 p-2 sm:p-4 rounded-lg shadow-lg">
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

                        {/* Ratings and Info - Improved spacing and alignment */}
                        <div className="bg-gray-300 p-3 sm:p-4 rounded-lg">
                            <h2 className="text-lg sm:text-xl font-bold mb-3">Ratings & Details</h2>

                            {/* Star Rating Section - Fixed alignment */}
                            <div className="flex items-center mb-3">
                                <div className="flex mr-2">
                                    {renderStars(gameData.rating)}
                                </div>
                                <span className="text-base sm:text-lg font-bold">{gameData.rating.toFixed(1)}/5.0</span>
                            </div>

                            {/* Game Details - Better spacing */}
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <Clock className="mr-3 text-blue-600" size={18} />
                                    <span className="text-sm sm:text-base">{gameData.playTime}</span>
                                </div>

                                <div className="flex items-center">
                                    <Users className="mr-3 text-green-600" size={18} />
                                    <span className="text-sm sm:text-base">{gameData.players}</span>
                                </div>

                                <div className="flex items-center">
                                    <Trophy className="mr-3 text-yellow-600" size={18} />
                                    <span className="text-sm sm:text-base">Difficulty: {gameData.difficulty}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* First Category Section - MOVED OUTSIDE THE VIDEO SECTION */}
            <div className="w-full bg-blue-500 p-2">
                <div className="bg-white w-full">
                    {/* Category Name */}
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Action Games
                        </h2>
                    </div>

                    {/* Container for Items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                        {/* Game Items */}
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-black rounded-lg overflow-hidden shadow-lg">
                                {/* Game Image */}
                                <img
                                    src="/api/placeholder/400/250"
                                    alt="Game preview"
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
                        ))}
                    </div>
                </div>
            </div>

            {/* Second Category Section */}
            <div className="w-full bg-blue-500 p-2">
                <div className="bg-white w-full">
                    {/* Category Name */}
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Adventure Games
                        </h2>
                    </div>

                    {/* Container for Items */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                        {/* Game Items */}
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-black rounded-lg overflow-hidden shadow-lg">
                                {/* Game Image */}
                                <img
                                    src="/api/placeholder/400/250"
                                    alt="Game preview"
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
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;