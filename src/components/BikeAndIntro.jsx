import React, { useRef, useState } from "react";
import { logEvent } from "../utils/logEvent";
import now from "../utils/helper";
export default function BikeAndIntro({
  videoSrc = "/your-bike-video.mp4",
  onOpenGift = () => {},
}) {
  const rightRef = useRef(null);
  const heartRef = useRef(null);

  const [showText, setShowText] = useState(false);
  const [popped, setPopped] = useState(false);

  function createBurst() {
    const container = rightRef.current;
    const heart = heartRef.current;
    if (!container || !heart) return;

    const rect = heart.getBoundingClientRect();
    const parent = container.getBoundingClientRect();

    const cx = rect.left + rect.width / 2 - parent.left;
    const cy = rect.top + rect.height / 2 - parent.top;

    for (let i = 0; i < 22; i++) {
      const el = document.createElement("div");
      el.className = "burst-item heart";
      el.style.left = `${cx}px`;
      el.style.top = `${cy}px`;
      const angle = (Math.PI * 2 * i) / 22;
      const dist = 80 + Math.random() * 150;
      el.style.setProperty("--tx", `${Math.cos(angle) * dist}px`);
      el.style.setProperty("--ty", `${Math.sin(angle) * dist}px`);
      container.appendChild(el);
      requestAnimationFrame(() => el.classList.add("animate"));
      setTimeout(() => el.remove(), 1300);
    }
  }

  function handleClickHeart() {
    if (popped) return;
    setPopped(true);
    const h = heartRef.current;
    if (h) h.classList.add("click-pop");
    setTimeout(() => {
      createBurst();
      if (h) h.classList.add("disappear");
    }, 250);
    setTimeout(() => setShowText(true), 800);
  }

  return (
    <div className="bike-intro-container">
      <div className="bike-left">
        <div className="video-card slide-video-wrap">
          <video
            src={videoSrc}
            controls
            className="bike-video"
            onPlay={() => logEvent("bike_video_played",{
               timestamp: String(now()), 
            })}
            onPause={() => logEvent("bike_video_paused",{
               timestamp: String(now()), 
            })}
            onEnded={() => logEvent("bike_video_finished",{
               timestamp: String(now()), 
            })}
          />
          <p className="video-caption">
            Our bike ride — the moment that changed everything
          </p>
        </div>
      </div>

      <div className="heart-right" ref={rightRef}>
        {!popped && (
          <p className="hint-text">Tap the heart to reveal our story</p>
        )}

        <div
          ref={heartRef}
          className={`main-heart beat ${popped ? "popped" : ""}`}
          onClick={handleClickHeart}
          role="button"
          aria-label="Reveal story"
        />

        {showText && (
          <div className="intro-text visible">
            <p className="intro-line small">
              Our story didn’t need many moments…
            </p>
            <h2 className="intro-line large">
              One meeting was enough to make me choose you.
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
