import React, { useState, useEffect } from 'react';
import { Star, Clock, Users, Trophy, Tag } from "lucide-react";

const LibraryPage = () => {
    const filterSections = [
        { id: 'events', label: 'Events' },
        { id: 'price', label: 'Price' },
        { id: 'genre', label: 'Genre' },
        { id: 'features', label: 'Features' },
        { id: 'types', label: 'Types' },
        { id: 'platform', label: 'Platform' },
        { id: 'subscriptions', label: 'Subscriptions' }
    ];

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
                stars.push(<Star key={i} className="text-yellow-500 fill-yellow-500" size={16} />);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<Star key={i} className="text-yellow-500 fill-yellow-500 opacity-50" size={16} />);
            } else {
                stars.push(<Star key={i} className="text-gray-300" size={16} />);
            }
        }
        return stars;
    };

    return (
        <div className="flex w-full h-screen overflow-hidden">
            {/* Left section - 40% width */}
            <div className="w-2/5 h-full overflow-hidden">
    <div className="w-full h-full bg-black text-white px-3 py-4 overflow-y-auto">
        <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold">Filters</h2>
        </div>

        <div>
            {filterSections.map((section) => (
                <div
                    key={section.id}
                    className="border-b border-black py-2 px-2 flex justify-between items-center cursor-pointer hover:bg-black transition-colors"
                >
                    <span className="text-sm">{section.label}</span>
                </div>
            ))}
        </div>

        <h2 className="text-lg font-bold mt-4 mb-3">Games</h2>
        
        {/* Game Cards Grid - Two cards per row */}
        <div className="grid grid-cols-2 gap-2">
            {/* Game Card 1 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg mb-2">
                {/* Game Image */}
                <img 
                    src="/api/placeholder/200/120" 
                    alt="33 Immortals" 
                    className="w-full h-24 object-cover"
                />
                
                {/* Game Details Section */}
                <div className="p-2 bg-black text-white">
                    <div>
                        <h2 className="text-xs font-bold mb-0.5">
                            33 Immortals
                        </h2>
                        <div className="text-xs opacity-70">
                            PC Game
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Game Card 2 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg mb-2">
                {/* Game Image */}
                <img 
                    src="/api/placeholder/200/120" 
                    alt="Starfield" 
                    className="w-full h-24 object-cover"
                />
                
                {/* Game Details Section */}
                <div className="p-2 bg-black text-white">
                    <div>
                        <h2 className="text-xs font-bold mb-0.5">
                            Starfield
                        </h2>
                        <div className="text-xs opacity-70">
                            PC Game
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Game Card 3 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg mb-2">
                {/* Game Image */}
                <img 
                    src="/api/placeholder/200/120" 
                    alt="Baldur's Gate 3" 
                    className="w-full h-24 object-cover"
                />
                
                {/* Game Details Section */}
                <div className="p-2 bg-black text-white">
                    <div>
                        <h2 className="text-xs font-bold mb-0.5">
                            Baldur's Gate 3
                        </h2>
                        <div className="text-xs opacity-70">
                            PC Game
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Game Card 4 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg mb-2">
                {/* Game Image */}
                <img 
                    src="/api/placeholder/200/120" 
                    alt="Cyberpunk 2077" 
                    className="w-full h-24 object-cover"
                />
                
                {/* Game Details Section */}
                <div className="p-2 bg-black text-white">
                    <div>
                        <h2 className="text-xs font-bold mb-0.5">
                            Cyberpunk 2077
                        </h2>
                        <div className="text-xs opacity-70">
                            PC Game
                        </div>
                    </div>
                </div>
            </div>
            {/* Game Card 5 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg mb-2">
                {/* Game Image */}
                <img 
                    src="/api/placeholder/200/120" 
                    alt="Baldur's Gate 3" 
                    className="w-full h-24 object-cover"
                />
                
                {/* Game Details Section */}
                <div className="p-2 bg-black text-white">
                    <div>
                        <h2 className="text-xs font-bold mb-0.5">
                            Baldur's Gate 3
                        </h2>
                        <div className="text-xs opacity-70">
                            PC Game
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Game Card 6 */}
            <div className="bg-black rounded-lg overflow-hidden shadow-lg mb-2">
                {/* Game Image */}
                <img 
                    src="/api/placeholder/200/120" 
                    alt="Cyberpunk 2077" 
                    className="w-full h-24 object-cover"
                />
                
                {/* Game Details Section */}
                <div className="p-2 bg-black text-white">
                    <div>
                        <h2 className="text-xs font-bold mb-0.5">
                            Cyberpunk 2077
                        </h2>
                        <div className="text-xs opacity-70">
                            PC Game
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/* Right section - 60% width */}
<div className="w-3/5 h-full bg-black overflow-hidden">
    <div className="h-full overflow-y-auto p-4">
        <div className="bg-black p-3 rounded-lg shadow-md">
            {/* Game Title */}
            <h1 className="text-xl font-bold mb-3 text-white">{gameData.title}</h1>

            {/* Main Image Showcase */}
            <div className="mb-3 bg-black rounded-lg overflow-hidden">
                <img
                    src={images[currentImage]}
                    alt={`${gameData.title} screenshot ${currentImage + 1}`}
                    className="w-full h-40 object-cover"
                />
            </div>

            {/* Thumbnail Gallery - Always 5 in one row */}
            <div className="flex justify-between mb-3 space-x-1">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => handleImageClick(index)}
                        className={`w-1/5 rounded-md overflow-hidden border-2 ${currentImage === index ? 'border-purple-500' : 'border-black'}`}
                    >
                        <img
                            src={img}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-10 object-cover"
                        />
                    </button>
                ))}
            </div>

            {/* Categories - Always 5 in one row */}
            <div className="flex justify-between mb-3 space-x-1">
                {gameData.tags.slice(0, 5).map((tag, index) => (
                    <div key={index} className="w-1/5 bg-black text-white p-1 rounded-md text-center text-xs truncate border border-black">
                        {tag}
                    </div>
                ))}
            </div>

            {/* Game Description */}
            <div className="bg-black p-3 rounded-lg mb-3 border border-black">
                <h2 className="text-base font-bold mb-1 text-white">Game Description</h2>
                <p className="text-white text-xs">{gameData.description}</p>
            </div>

            {/* Ratings and Info */}
            <div className="bg-black p-3 rounded-lg border border-black">
                <h2 className="text-base font-bold mb-2 text-white">Ratings & Details</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {/* Star Rating */}
                    <div className="flex items-center">
                        <div className="flex mr-2">
                            {renderStars(gameData.rating)}
                        </div>
                        <span className="text-sm font-bold text-white">{gameData.rating.toFixed(1)}/5.0</span>
                    </div>

                    {/* Game Details */}
                    <div className="space-y-1 text-xs text-white">
                        <div className="flex items-center">
                            <Clock className="mr-1 text-purple-400" size={14} />
                            <span>{gameData.playTime}</span>
                        </div>

                        <div className="flex items-center">
                            <Users className="mr-1 text-green-400" size={14} />
                            <span>{gameData.players}</span>
                        </div>

                        <div className="flex items-center">
                            <Trophy className="mr-1 text-yellow-400" size={14} />
                            <span>Difficulty: {gameData.difficulty}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> </div>
    );
};

export default LibraryPage;