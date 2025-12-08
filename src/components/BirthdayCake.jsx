import { useState } from "react";
import "../styles/cake.css";
import now from "../utils/helper";
import { logEvent } from "../utils/logEvent";

export default function BirthdayCake({ onFinish = () => {} }) {
  const [blown, setBlown] = useState(false);

  function blowCandle() {
    logEvent(`birthday candle blowed`, {
      timestamp: String(now()),
    });
    setBlown(true);

    // After animation, show next button
    setTimeout(() => {
      onFinish();
    }, 2000);
  }

  return (
    <div className="cake-wrapper">
      {/* Cake */}
      <div className="cake">
        <div className="top-layer"></div>
        <div className="middle-layer"></div>
        <div className="bottom-layer"></div>

        {/* Candle */}
        <div className="candle">{!blown && <div className="flame"></div>}</div>
      </div>

      {/* Button */}
      {!blown && (
        <button className="blow-btn" onClick={blowCandle}>
          Blow the Candle 🎂
        </button>
      )}

      {/* Poof animation */}
      {blown && <div className="poof">💨</div>}

      {/* Birthday Message */}
      {blown && (
        <div className="birthday-text">
          <h2>Happy Birthday, Rajiii ❤️</h2>
          <p>
            It’s your day, beautiful. Go conquer every dream you hold… and
            remember, I’ll be right there—always the first one cheering,
            celebrating, and loving you.
          </p>

          {/* <button className="start-btn" onClick={onFinish}>
            Start Your Surprise ✨
          </button> */}
        </div>
      )}
    </div>
  );
}
