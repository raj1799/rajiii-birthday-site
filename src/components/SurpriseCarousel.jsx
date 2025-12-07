// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, EffectFade } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// export default function SurpriseCarousel() {
//   return (
//     <section className="surprise-wrapper">
//       <h2 className="surprise-title">Your Surprise Gallery 💖</h2>

//       <Swiper
//         modules={[Navigation, Pagination, EffectFade]}
//         navigation
//         pagination={{ clickable: true }}
//         effect="fade"
//         speed={700}
//         spaceBetween={20}
//         className="surprise-swiper"
//       >
//         <SwiperSlide>
//           <div className="slide-box">
//             <h3>This was the first time I saw you… 💗</h3>
//             <p>I didn’t know it then, but this ride became the best memory of my life.</p>
//             <div className="slide-video-wrap">
//               <video src="/your-bike-video.mp4" controls className="slide-video" />
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="slide-box">
//             <h3>4 months of calls ☎️</h3>
//             <p>100s of hours of talking… One voice that changed everything 💞</p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="slide-box">
//             <h3>You make me feel chosen… 💗</h3>
//             <p>Even from far away.</p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="slide-box">
//             <h3>You are the calm I didn’t know I needed 🕊️</h3>
//             <div className="photo-row">
//               <img src="/img1.jpg" alt="p1" />
//               <img src="/img2.jpg" alt="p2" />
//               <img src="/img3.jpg" alt="p3" />
//             </div>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="slide-box">
//             <h3>Your words…</h3>
//             <p>We fell for each other in conversations.</p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="slide-box">
//             <h3>No matter where life takes us…</h3>
//             <p>You will always be one of the most beautiful parts of my journey ❤️</p>
//             <button className="replay-btn">Replay our story 💕</button>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </section>
//   );
// }

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
import MyMessageVideo from "../assets/selfVideo.mp4";
export default function SurpriseCarousel() {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [showVideoModal, setShowVideoModal] = React.useState(false);
  const [stopVideo, setStopVideo] = React.useState(false);

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
          console.log("User is now on slide:", swiper.activeIndex);
        }}
      >
        {/* Slide 1 */}
        {/* <SwiperSlide>
          <div className="slide-box">
           { activeSlide === 0&&<>
            <h3>This was the first time I saw you… 💗</h3>
            <p>
              I didn’t know it then, but this ride became the best memory of my life.
            </p>

            <video src={BikeRide} controls className="slide-video" />
           </>}
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="slide-box">{activeSlide === 0 && <TicTacToe />}</div>
        </SwiperSlide>

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
                  time stopped for me. We shared food, shared laughs, shared
                  stories, and walked under lights that looked like the sky
                  itself was blessing us. But on that bike ride back… your hair
                  brushing against me, your warmth beside me— that’s the moment
                  my heart chose you without asking.
                </p>
              </>
            )}
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="slide-box">{activeSlide === 2 && <SongSlide />}</div>
        </SwiperSlide>

        {/* Slide 3 */}
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
        <SwiperSlide>
          <div className="slide-box">
            {activeSlide === 4 && (
              <>
                <h3>A message from me… for you ❤️</h3>

                <p className="video-sub">
                  I was scared to say many things… but I wasn’t scared to say
                  this — you mean everything to me. ❤️
                </p>

                <button
                  className="play-video-btn"
                  onClick={() => {
                    setShowVideoModal(true);
                    setStopVideo(false);
                  }}
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

        {/* Slide 4 */}
        {/* <SwiperSlide>
          <div className="slide-box">
            <h3>You are the calm I didn’t know I needed 🕊️</h3>

            <div className="photo-row">
              <img src="/img1.jpg" alt="" />
              <img src="/img2.jpg" alt="" />
              <img src="/img3.jpg" alt="" />
            </div>
          </div>
        </SwiperSlide> */}

        {/* Slide 5 */}
        {/* <SwiperSlide>
          <div className="slide-box">
            <h3>Your words…</h3>
            <p>We fell for each other in conversations.</p>
          </div>
        </SwiperSlide> */}

        {/* Slide 6 — Final */}
        {/* <SwiperSlide>
          <div className="slide-box">
            <h3>No matter where life takes us…</h3>
            <p>You will always be one of the most beautiful parts of my journey ❤️</p>

            <button className="replay-btn">Replay our story 💕</button>
          </div>
        </SwiperSlide> */}
      </Swiper>
{showVideoModal && (
  <div
    className="video-modal-overlay"
    onClick={() => {
      setShowVideoModal(false);
      setStopVideo(true);
    }}
  >
    <div
      className="video-modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        className="video-modal-close"
        onClick={() => {
          setShowVideoModal(false);
          setStopVideo(true);
        }}
      >
        ✖
      </button>

      {/* Video */}
      {!stopVideo && (
        <video
          src={MyMessageVideo}
          controls
          autoPlay
          className="modal-video"
        />
      )}
    </div>
  </div>
)}

    </div>
  );
}
