import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, Users, Trophy } from "lucide-react";
import gamesData from './data.json';

const GamePage = () => {
    const navigate = useNavigate();
    const gameId = localStorage.getItem("gameid"); // ✅ Get ID from localStorage

    const [game, setGame] = useState(null);

    
    const [currentImage, setCurrentImage] = useState(0);

    const handleImageClick = (index) => {
        setCurrentImage(index);
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

    useEffect(() => {
        if (gameId) {
            const selectedGame = gamesData.find(g => g.id.toString() === gameId);

            setGame(selectedGame || null);
        }
    }, [gameId]);

    if (!game) {
        return (
            <div className="text-white text-center mt-10">
                Game not found or no game selected.
            </div>
        );
    }


    return (
        <div className="flex w-full h-screen overflow-hidden">
            {/* Left section */}
            <div className="w-3/4 bg-black p-4 overflow-auto">
                <div className="w-full mx-auto bg-black p-4 rounded-lg shadow-lg">
                    <h1 className="text-3xl font-bold mb-4 text-white">{game.title}</h1>

                    <div className="mb-4 bg-black rounded-lg overflow-hidden">
                        <img
                            src={game.pics[currentImage]}
                            alt={`${game.title} screenshot ${currentImage + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex justify-between mb-6 space-x-2">
                        {game.pics.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => handleImageClick(index)}
                                className={`w-1/5 rounded-md overflow-hidden border-2 ${currentImage === index ? 'border-purple-500' : 'border-black'}`}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>

                    <div className="flex justify-between mb-6 space-x-2">
                        {game.tags?.slice(0, 5).map((tag, index) => (
                            <div key={index} className="w-1/5 bg-black text-gray-200 p-2 rounded-md text-center text-sm truncate">
                                {tag}
                            </div>
                        ))}
                    </div>

                    <div className="bg-black p-4 rounded-lg mb-6">
                        <h2 className="text-xl font-bold mb-2 text-white">Game Description</h2>
                        <p className="text-gray-300 text-base">{game.description}</p>
                    </div>

                    <div className="bg-black p-4 rounded-lg">
                        <h2 className="text-xl font-bold mb-4 text-white">Ratings & Details</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center">
                                <div className="flex mr-2">
                                    {renderStars(game.rating)}
                                </div>
                                <span className="text-lg font-bold text-white">{game.ratings}/5.0</span>
                            </div>

                            <div className="space-y-2 text-base text-gray-300">
                                <div className="flex items-center">
                                    <Clock className="mr-2 text-purple-400" size={16} />
                                    <span>{game.playTime}</span>
                                </div>
                                <div className="flex items-center">
                                    <Users className="mr-2 text-green-400" size={16} />
                                    <span>{game.players}</span>
                                </div>
                                <div className="flex items-center">
                                    <Trophy className="mr-2 text-yellow-400" size={16} />
                                    <span>Difficulty: {game.difficulty}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right section - Reviews */}
            <div className="w-1/4 bg-black p-4 overflow-auto">
                <h2 className="text-xl font-bold mb-4 text-white">Customer Reviews</h2>
                <div className="space-y-4">
                    {game.comments?.map((comment) => (
                        <div key={comment.id} className="rounded-lg p-3 shadow-sm hover:shadow-md bg-black">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-200">{comment.name}</h3>
                                    <div className="flex items-center mt-1">
                                        {renderStars(comment.rating)}
                                        <span className="ml-2 text-xs text-gray-400">{comment.rating}</span>
                                    </div>
                                </div>
                                <div className="text-xs text-gray-500">{comment.date}</div>
                            </div>
                            <p className="text-sm text-gray-400 mt-2">{comment.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GamePage;
