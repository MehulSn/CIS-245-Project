import React, { useState } from 'react';
import { Star, Clock, Users, Trophy } from "lucide-react";
import './styles.css';

const LibraryPage = () => {
  
    const games = [
        {
            "id": "game1",
            "title": "Grand Theft Auto V Enhanced",
            "genres": ["Multiplayer", "Action", "Open World"],
            "pics": ["/images/GTA1.jpg", "/images/GTA2.jpg", "/images/GTA3.jpg", "/images/GTA4.jpg", "/images/GTA5.jpg"],
            "price": 4000,
            "ratings": 4.5,
            "playtime": "20+ hours",
            "players": "100,856 players",
            "difficulty": "High",
            "description": "Grand Theft Auto V Enhanced: Welcome to Los Santos..."
        },
        {
            "id": "game2",
            "title": "EA SPORTS WRC",
            "genres": ["Racing", "Sports"],
            "pics": ["/images/EA1.jpg", "/images/EA2.jpg", "/images/EA3.jpg", "/images/EA4.jpg", "/images/EA5.png"],
            "price": 4000,
            "ratings": 4.5,
            "playtime": "20+ hours",
            "players": "50,000 players",
            "difficulty": "Medium",
            "description": "Build the car of your dreams in our biggest rally game ever..."
        },
        {
            "id": "game3",
            "title": "EA SPORTS FC 25 Standard Edition",
            "genres": ["Sports", "Football"],
            "pics": ["/images/EAS1.jpg","/images/EAS2.jpg","/images/EAS3.png","/images/EAS4.png","/images/EAS5.jpg"],
            "vids": [],
            "price":4000,
            "ratings":  4.5,
            "playtime":20,
            "players":100856,
            "difficulty": "high",
            "description": "EA SPORTS FC 25 gives you more ways to win for the club..."
          },
          {
            "id": "game4",
            "title": "Harry Potter: Quidditch Champions",
            "genres": ["Sports", "Fantasy"],
            "pics": ["/images/Potter1.png","/images/Potter2.jpg","/images/Potter3.jpg","/images/Potter4.jpg","/images/Potter5.png"],
            "vids": [],
            "price":4000,
            "ratings":  4.5,
            "playtime":20,
            "players":100856,
            "difficulty": "high",
            "description": "Your next chapter takes flight! Immerse yourself in the enchanting world of Quidditch..."
          },
          {
            "id": "game5",
            "title": "DOOM Eternal Deluxe Edition",
            "genres": ["Action", "Shooter"],
            "pics": ["/images/DOOM1.jpg","/images/DOOM2.png","/images/DOOM3.jpg","/images/DOOM4.jpg","/images/DOOM5.jpg"],
            "vids": [],
            "price":4000,
            "ratings":  4.5,
            "playtime":20,
            "players":100856,
            "difficulty": "high",
            "description": "Hell’s armies have invaded Earth. Become the Slayer in an epic single-player campaign..."
          }
    ];
    
    const [selectedGame, setSelectedGame] = useState(games[0]);
    const [currentImage, setCurrentImage] = useState(0);

    const handleGameClick = (game) => {
        setSelectedGame(game);
        setCurrentImage(0);
    };

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
                <h2 className="games-title">Games</h2>
                <div className="game-grid">
                    {games.map((game) => (
                        <div key={game.id} className="game-card" onClick={() => handleGameClick(game)}>
                            <img src={game.pics[0]} alt={game.title} className="game-image" />
                            <h3>{game.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="right-section">
                <h1>{selectedGame.title}</h1>
                <img src={selectedGame.pics[currentImage]} alt={selectedGame.title} className="main-image" />
                <div className="thumbnail-gallery">
                    {selectedGame.pics.map((img, index) => (
                        <button key={index} onClick={() => handleImageClick(index)} className={currentImage === index ? 'active' : ''}>
                            <img src={img} alt="Thumbnail" />
                        </button>
                    ))}
                </div>

                <div className="tags">
                    {selectedGame.genres.map((tag, index) => (
                        <div key={index} className="tag">{tag}</div>
                    ))}
                </div>

                <div className="description">
                    <h2>Game Description</h2>
                    <p>{selectedGame.description}</p>
                </div>

                <div className="ratings">
                    {renderStars(selectedGame.ratings)}
                    <span>{selectedGame.ratings}/5.0</span>
                </div>

                <div className="details">
                    <p><Clock size={14} className="icons" /> {selectedGame.playtime}+ hours</p>
                    <p><Users size={14} className="icons" /> {selectedGame.players} players</p>
                    <p><Trophy size={14} className="icons" /> Difficulty: {selectedGame.difficulty}</p>
                </div>

                <div className="buttons">
                    <button className="launch-button">Launch Game</button>
                    <button className="uninstall-button">Uninstall</button>
                </div>
            </div>
        </div>
    );
};

export default LibraryPage;
