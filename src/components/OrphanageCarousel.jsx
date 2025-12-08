import React, { useState } from "react";
import "../styles/orphanageCarousel.css";
import { logEvent } from "../utils/logEvent";
import now from "../utils/helper";
export default function OrphanageCarousel() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      title: "A Birthday Wish Bigger Than Us… 💛",
      text: `This year, I wanted to celebrate your birthday
in a way that feels like you…

Soft… warm… full of meaning.

You’ve given me so many moments
that made my world brighter —

So I wanted to do something
that carries a little bit of that light
to someone else.`,
    },

    {
      title: "The Kindness You Don’t Realise You Have ✨",
      text: `When I think of you, I don’t just think of your beauty…

I think of the calm you bring into my life,
the softness in your words,
the way you care without even knowing it.

You have this quiet kind of kindness —
and it’s that kindness
that made me want to do something good
in your name.`,
    },

    {
      title: "Will You Join Me…? 💛",
      text: `I'm planning to donate food to an orphanage
on your birthday.

Not as a big gesture…
but as a silent prayer for your happiness and success.

If you feel comfortable,
it would mean a lot if you joined me.`,
      orphanage: {
        name: "Kalaiselvi Karunalaya Social Welfare Society",
        address:
          "Vellalar St, Mogappair West, Mogappair, Ambattur Industrial Estate, Chennai, Tamil Nadu 600037",
        time: "Morning 11:00 AM & Evening 4:00 PM",
        note: "Your presence will make them happy. Will you join me?",
      },
    },
  ];

  // ----------------- NAVIGATION LOGS -----------------

  const nextSlide = () => {
    const newIndex = (index + 1) % slides.length;
    setIndex(newIndex);

    logEvent("orphanage_next_slide", {
      newIndex,
     timestamp: String(now()), 
    });
  };

  const prevSlide = () => {
    const newIndex = (index - 1 + slides.length) % slides.length;
    setIndex(newIndex);

    logEvent("orphanage_prev_slide", {
      newIndex,
    timestamp: String(now()), 
    });
  };

  const handleDotClick = (i) => {
    setIndex(i);
    logEvent("orphanage_dot_clicked", {
      slideIndex: i,
     timestamp: String(now()), 
    });
  };

  const handleJoinClick = () => {
    logEvent("orphanage_join_clicked", {
      timestamp: String(now()), 
    });
  };

  // log when each slide is viewed
  React.useEffect(() => {
    logEvent("orphanage_slide_viewed", {
      slideIndex: index,
      title: slides[index].title,
     timestamp: String(now()), 
    });
  }, [index]);

  return (
    <div className="orphanage-carousel">
      {/* SLIDE */}
      <div className="orphanage-slide fade-animation">
        <h2>{slides[index].title}</h2>
        <p className="slide-text">{slides[index].text}</p>

        {/* ORPHANAGE INFO */}
        {slides[index].orphanage && (
          <div className="orphanage-info">
            <h3>{slides[index].orphanage.name}</h3>
            <p>📍 {slides[index].orphanage.address}</p>
            <p>🕒 {slides[index].orphanage.time}</p>
            <p>❤️ {slides[index].orphanage.note}</p>
          </div>
        )}

        {/* JOIN BUTTON */}
        {index === slides.length - 1 && (
          <button className="join-btn" onClick={handleJoinClick}>
            I will join you 💛
          </button>
        )}
      </div>

      {/* NAV BUTTONS */}
      <button className="nav-btn left" onClick={prevSlide}>
        ❮
      </button>
      <button className="nav-btn right" onClick={nextSlide}>
        ❯
      </button>

      {/* DOTS */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => handleDotClick(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
