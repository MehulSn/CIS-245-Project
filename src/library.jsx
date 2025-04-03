import React, { useState } from 'react';
import { Star, Clock, Users, Trophy } from "lucide-react";
import './styles.css';

const LibraryPage = () => {
    const filterSections = [
        { id: 'Multiplayer', label: 'Multiplayer' },
        { id: 'Adventure', label: 'Adventure' },
        { id: 'Action', label: 'Action' },
        { id: 'Fantasy', label: 'Fantasy' },
        { id: 'Sports', label: 'Sports' },
        { id: 'Open World', label: 'Open World' }
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

    const images = [
        "/api/placeholder/640/360",
        "/api/placeholder/640/360",
        "/api/placeholder/640/360",
        "/api/placeholder/640/360",
        "/api/placeholder/640/360"
    ];

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
                stars.push(<Star key={i} className="star-full" size={16} />);
            } else if (i === fullStars && hasHalfStar) {
                stars.push(<Star key={i} className="star-half" size={16} />);
            } else {
                stars.push(<Star key={i} className="star-empty" size={16} />);
            }
        }
        return stars;
    };

    return (
        <div className="container">
            <div className="left-section">
                <h2>Filters</h2>
                {filterSections.map((section) => (
                    <div key={section.id} className="filter-item">{section.label}</div>
                ))}
                
                <h2 className="games-title">Games</h2>
                <div className="game-grid">
                    {["33 Immortals", "Starfield", "Baldur's Gate 3", "Cyberpunk 2077"].map((game, index) => (
                        <div key={index} className="game-card">
                            <img src="/api/placeholder/200/120" alt={game} className="game-image" />
                            <h2>{game}</h2>
                            <p>PC Game</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="right-section">
                <h1>{gameData.title}</h1>
                <img src={images[currentImage]} alt="Game" className="main-image" />
                <div className="thumbnail-gallery">
                    {images.map((img, index) => (
                        <button key={index} onClick={() => handleImageClick(index)} className={currentImage === index ? 'active' : ''}>
                            <img src={img} alt="Thumbnail" />
                        </button>
                    ))}
                </div>
                
                <div className="tags">
                    {gameData.tags.map((tag, index) => (
                        <div key={index} className="tag">{tag}</div>
                    ))}
                </div>
                
                <div className="description">
                    <h2>Game Description</h2>
                    <p>{gameData.description}</p>
                </div>
                
                <div className="ratings">
                    {renderStars(gameData.rating)}
                    <span>{gameData.rating}/5.0</span>
                </div>
                
                <div className="details">
                    <p><Clock size={14} /> {gameData.playTime}</p>
                    <p><Users size={14} /> {gameData.players}</p>
                    <p><Trophy size={14} /> Difficulty: {gameData.difficulty}</p>
                </div>
            </div>
        </div>
    );
};

export default LibraryPage;
