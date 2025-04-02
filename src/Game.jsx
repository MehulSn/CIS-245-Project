import React, { useState, useEffect } from 'react';
import { Star, Clock, Users, Trophy, Tag } from "lucide-react";

const GamePage = () => {
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

    const comments = [
        {
            id: 1,
            name: "Sarah Johnson",
            rating: 5,
            date: "March 25, 2025",
            comment: "Absolutely loved this product! It exceeded all my expectations and the quality is outstanding. Would definitely recommend to anyone looking for a reliable solution."
        },
        {
            id: 2,
            name: "Michael Chen",
            rating: 4,
            date: "March 20, 2025",
            comment: "Great value for money. The product works as advertised and customer service was very helpful when I had questions about setup."
        },
        {
            id: 3,
            name: "Jessica Williams",
            rating: 3.5,
            date: "March 15, 2025",
            comment: "Decent product with some room for improvement. It does what it's supposed to do, but the interface could be more intuitive."
        },
        {
            id: 4,
            name: "David Rodriguez",
            rating: 4.5,
            date: "March 10, 2025",
            comment: "Very impressed with how quickly this was delivered and how easy it was to set up. The only small issue I had was with the documentation, which could be clearer in some sections."
        }
    ];

    return (
        <div className="flex w-full h-screen overflow-hidden">
            {/* Left section - 75% width with proper overflow handling */}
            <div className="w-3/4 bg-blue-100 p-4 overflow-auto">
                <div className="w-full mx-auto bg-gray-100 p-2 sm:p-4 rounded-lg shadow-lg">
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
            </div>

            {/* Right section - 25% width with proper overflow handling */}
            <div className="w-1/4 bg-gray-100 p-4 overflow-auto">
                <div className="w-full">
                    <h2 className="text-xl font-bold mb-4 text-gray-800">Customer Reviews</h2>

                    <div className="space-y-4">
                        {comments.map((comment) => (
                            <div key={comment.id} className="border rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                    <div className="mb-2 sm:mb-0">
                                        <h3 className="text-base font-semibold text-gray-800">{comment.name}</h3>
                                        <div className="flex items-center mt-1">
                                            {renderStars(comment.rating)}
                                            <span className="ml-2 text-xs text-gray-600">{comment.rating}</span>
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-500">{comment.date}</div>
                                </div>

                                <p className="text-sm text-gray-700 mt-2">{comment.comment}</p>
                            </div>
                        ))}
                    </div>

                    {/* Simple pagination */}
                    <div className="flex justify-center mt-6">
                        <nav className="inline-flex rounded-md shadow">
                            <a href="#" className="px-2 py-1 rounded-l-md border border-gray-300 bg-white text-xs font-medium text-gray-500 hover:bg-gray-50">
                                Previous
                            </a>
                            <a href="#" className="px-2 py-1 border-t border-b border-gray-300 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50">
                                1
                            </a>
                            <a href="#" className="px-2 py-1 border-t border-b border-gray-300 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50">
                                2
                            </a>
                            <a href="#" className="px-2 py-1 border-t border-b border-gray-300 bg-white text-xs font-medium text-gray-700 hover:bg-gray-50">
                                3
                            </a>
                            <a href="#" className="px-2 py-1 rounded-r-md border border-gray-300 bg-white text-xs font-medium text-gray-500 hover:bg-gray-50">
                                Next
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GamePage;