import React from "react";
import "../styles/polaroid.css"
import Smile1 from "../assets/smile1.jpg";
import Smile2 from "../assets/smile2.jpg";
import Smile3 from "../assets/smile3.jpg";
import Smile4 from "../assets/smile4.jpg";
import FirstVc from "../assets/firstVC.jpg";
import Bow from "../assets/bow.jpg"

export default function PolaroidsSection() {

  const cards = [
    {
      img: FirstVc,
      text: "Your shy little face on this first video call… Made even my busy office feel warm. 😌",
    },
    {
      img: Smile2,
      text: "You untied your hair just because I asked… and my heart had no idea how to handle that beauty.",
    },
    {
      img: Smile3,
      text: "You said you were busy… but you still gave me the cutest work-from-home view ever. 😌",
    },
    {
      img: Smile4,
      text: "Whenever I talk to you… the sky, the moon, the stars— they all feel like a backdrop made just to make you look even more beautiful to me.",
    },
  ];

  return (
    <div className="bike-intro-container">
      <div className="polaroid-section">
        
        <div className="polaroid-container">
          {cards.map((card, i) => (
            <div key={i} className="polaroid-card tilt-right">

              {/* WRAPPER COVER */}
              <div className="gift-cover">
                <div className="gift-pattern"></div>
                <div className="ribbon-vertical"></div>
                <div className="ribbon-horizontal"></div>
                <div  className="ribbon-bow"
  style={{ backgroundImage: `url(${Bow})` }}></div>
              </div>

              {/* ACTUAL IMAGE */}
              <img src={card.img} alt="photo" />

              {/* CAPTION */}
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <h3 className="polaroid-caption">
          The pictures may be a little blurry… but the memories are crystal clear.
          Those nights when we smiled, laughed, and forgot the world— I want that
          happiness with you for the rest of my life.
        </h3>
      </div>
    </div>
  );
}
