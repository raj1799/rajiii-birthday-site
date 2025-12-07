import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import BikeRide from "../assets/bikeRide.mp4";
import TicTacToe from "../components/TicTacToe";
import SongSlide from "../components/SlideSong";
import MessageVideo from "../assets/selfVideo.mp4";
import JourneyVideo from "../assets/journey.mp4";
import { logEvent } from "../utils/logEvent";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "../styles/surprise-carousel.css";

export default function SurpriseCarousel() {
  const [activeSlide, setActiveSlide] = React.useState(0);

  const [showMessageModal, setShowMessageModal] = React.useState(false);
  const [showJourneyModal, setShowJourneyModal] = React.useState(false);

  return (
    <div className="surprise-wrapper">
      <h2 className="surprise-title">
        Swipe to See What I’ve Been Saving Just for You… 💖
      </h2>

      <Swiper
        modules={[Navigation, Pagination, EffectFade]}
        navigation={true}
        pagination={{ clickable: true }}
        effect="fade"
        speed={800}
        spaceBetween={30}
        className="surprise-swiper"
        onSlideChange={(swiper) => {
          const index = swiper.activeIndex;
          setActiveSlide(index);

          // 🔥 Firestore Log
          logEvent("surprise_slide_viewed", {
            slideNumber: index,
            timestamp: Date.now(),
          });
          console.log("User is now on slide:", index);
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
                  I waited for you a long time… but when you arrived, time
                  stopped. The walk, the lights, the ride back — that’s when my
                  heart silently chose you.
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
        {/* <SwiperSlide>
          <div className="slide-box">
            {activeSlide === 3 && (
              <>
                <h3>You make me feel chosen… 💗</h3>
                <p>Even from far away.</p>
              </>
            )}
          </div>
        </SwiperSlide> */}

        {/* ⭐ Slide 6 — Journey Video */}
        <SwiperSlide>
          <div className="slide-box">
            {activeSlide === 3 && (
              <>
                <h3>From Strangers… to Something I Still Can’t Forget ❤️</h3>

                <p className="video-sub">
                  A journey from random messages… to late-night talks… to two
                  hearts that accidentally chose each other. These 8 minutes
                  carry every screenshot, every smile, every moment we became
                  ‘us’ without realizing.
                </p>

                <button
                  className="play-video-btn"
                  onClick={() => {
                    setShowJourneyModal(true);
                    logEvent("journey_video_played", {
                      timestamp: Date.now(),
                    });
                  }}
                >
                  Watch Our Journey 🎥
                </button>

                <p className="video-caption">
                  Watch it slowly… this is our story — exactly how it happened,
                  exactly how my heart remembers it.
                </p>
              </>
            )}
          </div>
        </SwiperSlide>
        {/* Slide 5 — Message Video */}
        <SwiperSlide>
          <div className="slide-box">
            {activeSlide === 4 && (
              <>
                <h3>A message from me… for you ❤️</h3>

                <p className="video-sub">
                  I was scared to say many things… but never scared to say this
                  — you mean everything to me. ❤️
                </p>

                <button
                  className="play-video-btn"
                  onClick={() => {
                    setShowMessageModal(true);
                    logEvent("Raj_video_played", {
                      timestamp: Date.now(),
                    });
                  }}
                >
                  Play Video 🎥
                </button>

                <p className="video-caption">
                  I recorded this with all my heart… I hope you feel every word.
                </p>
              </>
            )}
          </div>
        </SwiperSlide>
      </Swiper>

      {/* ---------------- MESSAGE VIDEO MODAL ---------------- */}
      {showMessageModal && (
        <div
          className="video-modal-overlay"
          onClick={() => {
            setShowMessageModal(false);
            logEvent("Raj_video_closed", {
              timestamp: Date.now(),
            });
          }}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-modal-close"
              onClick={() => {
                setShowMessageModal(false);
                logEvent("Raj_video_closed", {
                  timestamp: Date.now(),
                });
              }}
            >
              ✖
            </button>

            <video
              src={MessageVideo}
              controls
              autoPlay
              className="modal-video"
            />
          </div>
        </div>
      )}

      {/* ---------------- JOURNEY VIDEO MODAL ---------------- */}
      {showJourneyModal && (
        <div
          className="video-modal-overlay"
          onClick={() => {
            setShowJourneyModal(false);
            logEvent("journey_video_closed", {
              timestamp: Date.now(),
            });
          }}
        >
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="video-modal-close"
              onClick={() => {
                setShowJourneyModal(false);
                logEvent("journey_video_closed", {
                  timestamp: Date.now(),
                });
              }}
            >
              ✖
            </button>

            <video
              src={JourneyVideo}
              controls
              autoPlay
              className="modal-video"
            />
          </div>
        </div>
      )}
    </div>
  );
}
