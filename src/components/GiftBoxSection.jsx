import React, { useState } from "react";
import "../styles/giftbox.css";
import saree1 from "../assets/saree1.jpg"; // replace with your animated married image
// import SurpriseImg2 from "../assets/surprise2.png"; 
// import SurpriseImg3 from "../assets/surprise3.png";

export default function GiftBoxSection() {
  const [activeGift, setActiveGift] = useState(null);

  const gifts = [
    {
      title: "Future Us Married",
      img: saree1,
      hint: "See Your Future 💍",
    },
    {
      title: "A Special Gift",
      img: saree1,
      hint: "A Special Gift 🎁",
    },
    {
      title: "Peek Inside",
      img: saree1,
      hint: "Peek Inside ✨",
    },
  ];

  return (
    <div className="giftbox-section">

      <h2 className="giftbox-title">Your Gift Box Surprise 🎁</h2>

      <div className="giftbox-row">
        {gifts.map((g, i) => (
          <div key={i} className="gift-box" onClick={() => setActiveGift(g)}>
            <div className="box-top"></div>
            <div className="box-body"></div>
            <p>{g.hint}</p>
          </div>
        ))}
      </div>

      {activeGift && (
        <div className="gift-modal" onClick={() => setActiveGift(null)}>
          <div className="modal-content">
            <img src={activeGift.img} alt="surprise" />
            <h3>{activeGift.title}</h3>
            <button className="close-btn">Close</button>
          </div>
        </div>
      )}

    </div>
  );
}
