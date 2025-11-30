import React, { useRef, useState } from "react";
import "../styles/polaroid.css"
import Smile1 from "../assets/smile1.jpg";
import Smile2 from "../assets/smile2.jpg";
import Smile3 from "../assets/smile3.jpg";
import Smile4 from "../assets/smile4.jpg";
import FirstVc from "../assets/firstVC.jpg";

// export default function PolaroidSection() {
//   return (
//     <div className="polaroid-section">

//       <div className="polaroid-container">

//         <div className="polaroid-card tilt-left">
//           <img src="/img1.jpg" alt="photo1" />
//           <p>My favourite amizu.</p>
//         </div>

//         <div className="polaroid-card tilt-center">
//           <img src="/img2.jpg" alt="photo2" />
//           <p>This one still lives in mina.</p>
//         </div>

//         <div className="polaroid-card tilt-right">
//           <img src="/img3.jpg" alt="photo3" />
//           <p>You look like the thinnīt map 😌</p>
//         </div>

//       </div>

//       <h3 className="polaroid-caption">
//         You are the calm I didn’t know I needed.
//       </h3>

//     </div>
//   );
// }

export default function PolaroidsSection({ videoSrc, onOpenGift = () => {} }) {
  const rightRef = useRef(null);
  const heartRef = useRef(null);

  const [showText, setShowText] = useState(false);
  const [popped, setPopped] = useState(false);

  // 🧨 BURST EFFECT
  function createBurst() {
    const container = rightRef.current;
    const heart = heartRef.current;
    if (!container || !heart) return;

    const rect = heart.getBoundingClientRect();
    const parent = container.getBoundingClientRect();

    const cx = rect.left + rect.width / 2 - parent.left;
    const cy = rect.top + rect.height / 2 - parent.top;

    for (let i = 0; i < 26; i++) {
      const p = document.createElement("div");
      p.className = "burst-heart";
      p.style.left = `${cx}px`;
      p.style.top = `${cy}px`;

      const angle = (Math.PI * 2 * i) / 26;
      const dist = 90 + Math.random() * 90;

      p.style.setProperty("--tx", `${Math.cos(angle) * dist}px`);
      p.style.setProperty("--ty", `${Math.sin(angle) * dist}px`);

      container.appendChild(p);

      requestAnimationFrame(() => p.classList.add("animate"));
      setTimeout(() => p.remove(), 900);
    }
  }

  // CLICK EVENT
  function handleClickHeart() {
    if (popped) return;

    setPopped(true);
    const heart = heartRef.current;
    heart.classList.add("popped");

    setTimeout(() => {
      createBurst();
      heart.classList.add("disappear");
    }, 250);

    setTimeout(() => setShowText(true), 800);
  }

  return (
    <div className="bike-intro-container">
      {/* LEFT SIDE */}
      {/* <div className="bike-left">
        <div className="video-card">
          <video src={videoSrc} controls className="bike-video" />
          <p className="video-caption">
            Our bike ride — the moment that changed everything
          </p>
        </div>
      </div> */}
      <div className="polaroid-section">
        <div className="polaroid-container">
          <div className="polaroid-card tilt-right">
            <img src={FirstVc} alt="photo3" />
            <p>
              Your shy little face on this first video call… Made even my busy
              office feel warm. 😌
            </p>
          </div>
          {/* <div className="polaroid-card tilt-left">
            <img src={Smile1} alt="photo1" />
            <p>My favourite amizu.</p>
          </div> */}

          <div className="polaroid-card tilt-center">
            <img src={Smile2} alt="photo2" />
            <p>
              You untied your hair just because I asked… and my heart had no
              idea how to handle that beauty.
            </p>
          </div>

          <div className="polaroid-card tilt-right">
            <img src={Smile3} alt="photo3" />
            <p>
              You said you were busy… but you still gave me the cutest
              work-from-home view ever.😌
            </p>
          </div>
          <div className="polaroid-card tilt-right">
            <img src={Smile4} alt="photo3" />
            <p>
              Whenever I talk to you… the sky, the moon, the stars— they all
              feel like a backdrop made just to make you look even more
              beautiful to me.
            </p>
          </div>
        </div>

        <h3 className="polaroid-caption">
          The pictures may be a little blurry… but the memories are crystal
          clear. Those nights when we smiled, laughed, and forgot the world— I
          want that happiness with you for the rest of my life.”
        </h3>
      </div>

      {/* RIGHT SIDE */}
      <div className="heart-right" ref={rightRef}>
        {/* {!popped && (
          <p className="hint-text">Tap the heart to reveal our story</p>
        )} */}

        {/* PERFECT SVG HEART */}
        {/* <div
          ref={heartRef}
          className={`heart-svg ${popped ? "popped" : "beat"}`}
          onClick={handleClickHeart}
          dangerouslySetInnerHTML={{
            __html: `
              <svg viewBox="0 0 32 29.6" width="100%" height="100%">
                <path fill="#ff2d4f" d="
                  M23.6,0c-3.4,0-6.4,2.6-7.6,4C14.8,2.6,11.8,0,8.4,0
                  C3.8,0,0,3.8,0,8.4c0,9.5,16,21.2,16,21.2S32,17.9,32,8.4
                  C32,3.8,28.2,0,23.6,0z">
                </path>
              </svg>
            `,
          }}
        ></div> */}

        {/* REVEALED TEXT */}
        {/* {showText && (
          <div className="intro-text visible">
            <p className="intro-line small">
              Our story didn’t need many moments…
            </p>
            <h2 className="intro-line large">
              One meeting was enough to make me choose you.
            </h2>

            <button className="open-gift-btn" onClick={onOpenGift}>
              Open Your Gift 🎁
            </button>
          </div>
        )} */}
      </div>
    </div>
  );
}
