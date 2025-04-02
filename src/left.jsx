import React, { useState } from "react";
import { Link } from "react-router-dom";
import trialVid from "../assets/gameStoreVid.mp4";
import unrealVid from "../assets/unrealEngine.mp4";

import styles from "./IntroPage.module.css";

function LeftWin({ muted, children }) {
  return (
    <div className={styles.videoContainer}>
      <div className={styles.actualVid}>
        <video
          autoPlay
          loop
          muted={muted ? true : false}
          className={styles.video}
        >
          <source src={trialVid} type="video/mp4" />
        </video>
        {children}
        <div className={styles.buttonContainer}>
          <button>
            <Link to={"/IntroPage"} />
            Play
          </button>
        </div>
      </div>
      <div className={styles.overlayTitle}>
        <h1 className={styles.title}>Epic Games Store</h1>
      </div>
    </div>
  );
}

const vidsArray = [
  {
    src: unrealVid,
    title: "Unreal Engine",
    description:
      "Powerful game development platform used by professionals worldwide.",
  },
  {
    src: trialVid,
    title: "Fortnite",
    description:
      "Popular battle royale game that revolutionized the gaming industry.",
  },
  {
    src: trialVid,
    title: "Epic Store",
    description:
      "Digital distribution platform for games and game development tools.",
  },
  {
    src: trialVid,
    title: "Game Development",
    description:
      "Explore the world of creating interactive digital experiences.",
  },
];

function RightWin({ muted }) {
  let [currentIndex, setCurrentIndex] = useState(0);

  const handleNextVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === vidsArray.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevVideo = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? vidsArray.length - 1 : prevIndex - 1
    );
  };

  const handleSelectVideo = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className={styles.videoContainer}>
        <div className={styles.actualVid}>
          <video
            key={currentIndex}
            autoPlay
            loop
            muted={muted ? true : false}
            className={styles.video}
          >
            <source src={vidsArray[currentIndex].src} type="video/mp4" />
          </video>
        </div>

        <div className={styles.overlayTitle}>
          <h1 className={styles.title}>{vidsArray[currentIndex].title}</h1>

          <div className={styles.description}>
            {vidsArray[currentIndex].description}
          </div>
        </div>

        <div className={styles.selectorButtons}>
          <button onClick={handlePrevVideo} className={styles.carouselButton}>
            ←
          </button>
          {vidsArray.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSelectVideo(index)}
              className={`${styles.selectorDot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
            />
          ))}
          <button onClick={handleNextVideo} className={styles.carouselButton}>
            →
          </button>
        </div>

        <div className={styles.buttonContainer}>
          <button>
            <Link to={"/IntroPage"} />
            Play
          </button>
        </div>
      </div>
    </div>
  );
}

export default function IntroPage() {
  let [muted, setMuted] = useState(true);

  function handleUnmute() {
    setMuted(!muted);
  }

  return (
    <main className={styles.introMain}>
      <div className={styles.leftDiv}>
        <LeftWin muted={muted}>
          <button className={styles.unmuteButton} onClick={handleUnmute}>
            trial-unmute
          </button>
        </LeftWin>
      </div>
      <div className={styles.rightDiv}>
        <RightWin muted={muted}>
          <button className={styles.unmuteButton} onClick={handleUnmute}>
            trial-unmute
          </button>
        </RightWin>
      </div>
    </main>
  );
}
