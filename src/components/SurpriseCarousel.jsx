import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import BikeRide from "../assets/bikeRide.mp4";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import TicTacToe from "../components/TicTacToe";
import SongSlide from "../components/SlideSong";
import "../styles/surprise-carousel.css";

export default function SurpriseCarousel() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [showVideoModal, setShowVideoModal] = React.useState(false);

  return (
    <div className="surprise-wrapper">
      <h2 className="surprise-title">Your Surprise Gallery 💖</h2>

      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        navigation={true}
        pagination={{ clickable: true }}
        effect="fade"
        speed={800}
        spaceBetween={30}
        className="surprise-swiper"
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.activeIndex);
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="slide-box">{activeSlide === 0 && <TicTacToe />}</div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="slide-box">
            {activeSlide === 1 && (
              <>
                <h3>This was the first time I saw you… 💗</h3>

                <div className="video-wrapper">
                  <video src={BikeRide} controls className="slide-video" />
                </div>
                <p>
                  I waited for you for a long time… but the moment you arrived,
                  time stopped for me. We shared food, laughs, stories, and
                  walked under lights that felt like blessings. But that bike
                  ride back… your hair touching me, your warmth — that’s the
                  moment my heart chose you.
                </p>
              </>
            )}
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="slide-box">{activeSlide === 2 && <SongSlide />}</div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="slide-box">
            {activeSlide === 3 && (
              <>
                <h3>You make me feel chosen… 💗</h3>
                <p>Even from far away.</p>
              </>
            )}
          </div>
        </SwiperSlide>

        {/* Slide 5 → YouTube Modal Trigger */}
        <SwiperSlide>
          <div className="slide-box">
            {activeSlide === 4 && (
              <>
                <h3>A message from me… for you ❤️</h3>

                <p className="video-sub">
                  I was scared to say many things… but never scared to say this
                  — **you mean everything to me. ❤️**
                </p>

                <button
                  className="play-video-btn"
                  onClick={() => setShowVideoModal(true)}
                >
                  Play Video 🎥
                </button>

                <p className="video-caption">
                  I recorded this with my whole heart… I hope you feel every
                  word, every emotion.
                </p>
              </>
            )}
          </div>
        </SwiperSlide>
      </Swiper>

      {/* ---------------- Modal ---------------- */}
      {showVideoModal && (
        <div
          className="video-modal-overlay"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-modal-close"
              onClick={() => setShowVideoModal(false)}
            >
              ✖
            </button>

            <div className="youtube-wrapper">
              <iframe
                src="https://www.youtube.com/embed/7Hv7iVdnp9s"
                title="Message Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="youtube-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
