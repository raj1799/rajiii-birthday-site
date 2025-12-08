import React, { useState } from "react";
import "../styles/giftbox.css";

import saree1 from "../assets/saree1.jpg";
import { logEvent } from "../utils/logEvent";
// GIFT BOX IMAGES
import gift1 from "../assets/gift1.jpg";
import gift2 from "../assets/gift2.jpg";
import gift3 from "../assets/gift3.png";
import skydiving from "../assets/skydiving.jpg";
import kurumugil from "../assets/kurumugil.mp3";

export default function GiftBoxSection() {
  const [activeGift, setActiveGift] = useState(null);

  const gifts = [

    {
      id: 2,
      title:
        "He can jump from 15,000 ft without fear…but the moment he thinks of you, his heart forgets how to breathe. Because falling for you was the highest, safest jump he ever took. Your special gift — don’t lose him.",
      img: skydiving,
      hint: "A Special Gift 🎁",
      boxImg: gift3,
      type: "image",
    },
    {
      id: 3,
      title: "Peek Inside",
      img: saree1,
      hint: "second song for you✨",
      boxImg: gift3,
      type: "song",
      song: kurumugil,
    },
        {
      id: 1,
      title: "Future Us Married",
      img: saree1,
      letter:
        "This is how our future looks… and it’s more beautiful than anything I ever dreamed of.",
      hint: "Letter for you.",
      boxImg: gift3,
      type: "letter",
    },
  ];
  const handleOnclick = (gift, index) => {
    console.log("Clicked:", gift, index);
    setActiveGift(gift);
    logEvent(`opened_gift_box_${gift.id}`);
  };

  return (
    <div className="giftbox-section">
      <h2 className="giftbox-title" style={{ padding:"10px" }}>Come Closer… Peek Inside 😉💕 🎁</h2>

      <div className="giftbox-row">
        {gifts.map((g, i) => (
          <div key={i} className="gift-box" onClick={() => handleOnclick(g, i)}>
            <img src={g.boxImg} className="gift-img" alt="gift box" />
            <p>{g.hint}</p>
          </div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      {activeGift && (
        <div className="gift-modal" onClick={() => setActiveGift(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent modal close
          >
            {/* ============ TYPE 1: LETTER BOX ============ */}
            {activeGift.type === "letter" && (
              <div className="letter-frame">
                {/* <img src={activeGift.img} alt="surprise" className="letter-photo" /> */}
                <h3 className="letter-title">How Can I Love Someone Else?</h3>
                <p className="letter-text">
                  I don’t know how to explain this… but my days still begin with
                  you, and my nights still end with you. You asked me to move
                  on, to let you go, to love someone else… but how do I teach my
                  heart a language it never learned? I didn’t fall for you
                  because it was easy, I fell for you because you were the only
                  person who made my lonely world feel like home. And now you
                  stand at a distance, telling me your parents are strict,
                  telling me you don’t want me to wait, telling me you don’t
                  want to be a burden… but you’ll never understand that loving
                  you never felt like waiting or wasting time. It was the only
                  place where my heart felt right. And don’t fool yourself by
                  saying you don’t love me. I’ve felt your heart, your care,
                  your fear of losing me, your silence that speaks louder than
                  any words you’ve ever said. I know it’s hard… I know your
                  world is heavy… but love was never meant to be carried alone.
                  If you let me, we can carry it together. We can make it work—
                  not because it’s easy, but because it’s real. If I ever marry
                  someday, how do I explain to that person that my heart still
                  whispers your name between every silence? How do I give my
                  mornings to someone else when my soul still wakes up searching
                  for you? How do I sleep beside someone new when every dream
                  still belongs to you? You think you're protecting me— but all
                  you’re doing is asking me to forget the person I never learned
                  to live without. I don’t blame you. I know your world is
                  difficult, I know your choices are chained, I know you're
                  breaking inside just as much as I am… But if loving you is a
                  mistake, it’s the only mistake I want to keep making in this
                  lifetime. Because some people you don’t move on from. Some
                  people become a part of the way you breathe. And for me, that
                  person will always be you.
                </p>
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
            {activeGift.type === "song" && (
              <div className="song-modal">
                <img src={activeGift.img} alt="Her" className="modal-image" />

                <audio
                  src={activeGift.song}
                  autoPlay
                  controls
                  className="song-player"
                  onPlay={() => logEvent("song_started")}
                  onPause={() => logEvent("song_paused")}
                />

                <p className="">I’ve seen this picture a thousand times, but every time feels new… and I’ve kissed it five thousand times because it feels like kissing you❤️</p>
              </div>
            )}

            <button
              className="gift-close-btn"
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
