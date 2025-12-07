import React, { useState } from "react";
import "../styles/orphanageCarousel.css";

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
but as a silent prayer for your happiness.

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

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="orphanage-carousel">
      {/* SLIDE */}
      <div className="orphanage-slide fade-animation">
        <h2>{slides[index].title}</h2>
        <p className="slide-text">{slides[index].text}</p>

        {/* ORPHANAGE INFO — only last slide */}
        {slides[index].orphanage && (
          <div className="orphanage-info">
            <h3>{slides[index].orphanage.name}</h3>
            <p>📍 {slides[index].orphanage.address}</p>
            <p>🕒 {slides[index].orphanage.time}</p>
            <p>❤️ {slides[index].orphanage.note}</p>
          </div>
        )}

        {/* JOIN BUTTON — last slide only */}
        {index === slides.length - 1 && (
          <button
            className="join-btn"
            onClick={() => console.log("join_orphanage_click")}
          >
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
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
