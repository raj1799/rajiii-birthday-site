import React, { useRef, useState } from "react";
import "../styles/songSlide.css";
import Feet from "../assets/feet.jpg"; // replace with her photo
import NeeKavithaigala from "../assets/Nee-Kavithaigala.mp3"; // replace with her song
import { logEvent } from "../utils/logEvent";
export default function SongSlide() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlaying(true);
      logEvent("song_1_played", {
        timestamp: Date.now(),
      });
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlaying(false);
      logEvent("song_1_paused", {
        timestamp: Date.now(),
      });
    }
  };

  return (
    <div className="song-slide">
      {/* Background Image */}
      <img src={Feet} className="song-bg" alt="bg" />

      {/* Overlay Content */}
      <div className="song-content">
        <h2 className="song-title">A Song for You… 💖</h2>
        <p className="song-subtitle">
          Every time I hear this song… it reminds me of you.
        </p>

        {/* Play / Pause Button */}
        {!playing ? (
          <button className="play-btn" onClick={handlePlay}>
            ▶ Play our song 💗
          </button>
        ) : (
          <button className="play-btn pause" onClick={handlePause}>
            ❚❚ Pause 💞
          </button>
        )}

        {/* Audio */}
        <audio ref={audioRef} src={NeeKavithaigala} />
      </div>

      {/* Floating Hearts */}
      <div className="floating-hearts">
        <span>💗</span>
        <span>💖</span>
        <span>💕</span>
        <span>💘</span>
      </div>
    </div>
  );
}
