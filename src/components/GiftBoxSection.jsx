import React, { useState } from "react";
import "../styles/giftbox.css";

import saree1 from "../assets/saree1.jpg";

// GIFT BOX IMAGES
import gift1 from "../assets/gift1.jpg";
import gift2 from "../assets/gift2.jpg";
import gift3 from "../assets/gift3.png";

export default function GiftBoxSection() {
  const [activeGift, setActiveGift] = useState(null);

  const gifts = [
    {
      id: 1,
      title: "Future Us Married",
      img: saree1,
      letter: "This is how our future looks… and it’s more beautiful than anything I ever dreamed of.",
      hint: "See Your Future 💍",
      boxImg: gift3,
      type: "letter",
    },
    {
      id: 2,
      title: "A Special Gift",
      img: saree1,
      hint: "A Special Gift 🎁",
      boxImg: gift3,
      type: "image",
    },
    {
      id: 3,
      title: "Peek Inside",
      img: saree1,
      hint: "Peek Inside ✨",
      boxImg: gift3,
      type: "message",
    },
  ];

  return (
    <div className="giftbox-section">

      <h2 className="giftbox-title">Your Gift Box Surprise 🎁</h2>

      <div className="giftbox-row">
        {gifts.map((g, i) => (
          <div
            key={i}
            className="gift-box"
            onClick={() => setActiveGift(g)}
          >
            <img src={g.boxImg} className="gift-img" alt="gift box" />
            <p>{g.hint}</p>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {activeGift && (
        <div
          className="gift-modal"
          onClick={() => setActiveGift(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent modal close
          >

            {/* ============ TYPE 1: LETTER BOX ============ */}
            {activeGift.type === "letter" && (
              <div className="letter-frame">
                {/* <img src={activeGift.img} alt="surprise" className="letter-photo" /> */}
                <h3 className="letter-title">{activeGift.title}</h3>
                <p className="letter-text">{activeGift.letter}</p>
              </div>
            )}

            {/* ============ TYPE 2: IMAGE-ONLY SURPRISE ============ */}
            {activeGift.type === "image" && (
              <>
                <img src={activeGift.img} alt="gift" className="modal-image" />
                <h3>{activeGift.title}</h3>
              </>
            )}

            {/* ============ TYPE 3: MESSAGE SURPRISE ============ */}
            {activeGift.type === "message" && (
              <>
                <h3>{activeGift.title}</h3>
                <p className="modal-message">
                  Something cute or teasing can appear here…  
                  You tell me what to put 😉
                </p>
              </>
            )}

            <button
              className="close-btn"
              onClick={() => setActiveGift(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
