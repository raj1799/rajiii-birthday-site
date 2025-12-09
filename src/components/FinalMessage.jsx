import React, { useState } from "react";
import "../styles/finalMessage.css";
import { logEvent } from "../utils/logEvent";
import now from "../utils/helper";
export default function FinalMessage() {
  const [showMessage, setShowMessage] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <div className="final-wrapper">
      {/* STEP 1: Show button only */}
      {!showMessage && !showThankYou && (
        <button
          className="reveal-btn"
          onClick={() => {
            setShowMessage(true);
            logEvent("Final message opened", {
              timestamp: String(now()),
            });
          }}
        >
          💌 Open Final Message
        </button>
      )}

      {/* STEP 2: Full final message */}
      {showMessage && !showThankYou && (
        <div className="final-card fade-in">
          <h2>Let's End This… and Begin Again ❤️</h2>

          <p>
            Give me a slap if you want. Argue with me, shout at me… but in the
            end just hug me once and say,
            <strong>“Don’t do this again… okay? Let's start over.”</strong>
          </p>

          <p>
            I'm suffering every day like hell. My sleep cycle is broken, my
            heart is tired… and only one person can fix me —{" "}
            <strong>you.</strong>
          </p>

          <p>
            I cry at night thinking about you… I want you to stop that cry, hold
            my face gently and say,
            <strong>“I’m here… don’t think too much.”</strong>
          </p>

          <p>
            I want you to bring back my smile. I want you to fight with me and
            fix me after. I want you to help me grow, focus on my career, and be
            the peace I come home to.
          </p>
 <p>
    So let’s end this drama today. And trust me, Rajiii… I will never come
    between you and your family. I know how much they mean to you. I will
    stand with you, and I will do everything it takes to make both of our
    families accept us. I will take responsibility, I will speak to them, and
    I will make sure we walk into this future with everyone’s blessings.
  </p>

  <p>
    I’m not someone who uses fancy lines… but when I say I’ll do something,
    I mean it. I’ll do whatever it takes — all I want is <strong>you.</strong>
  </p>

  <p>
    I miss your voice, your smile, your shy looks… everything. I don’t want to
    lose any of it. I don’t want to lose <strong>us.</strong>
  </p>

  <p>
    Let’s end this on your birthday — not with distance, but with clarity and
    love. Let’s go to Kamatchi Mess, eat fish curry, have kulfi, and start
    creating new memories… together, peacefully.
  </p>

  <p>
    Because at the end of the day…
    <strong>my choice will always be you.</strong>
  </p>

          <button
            className="start-again-btn"
            onClick={() => {
              setShowMessage(false);
              setShowThankYou(true);
              logEvent("she accepted you", {
                timestamp: String(now()),
              });
            }}
          >
            ❤️ Shall We Start Again?
          </button>
        </div>
      )}

      {/* STEP 3: Thank You Screen */}
      {showThankYou && (
        <div className="thankyou-card fade-in">
          <h2>Thank You… Truly ❤️</h2>

          <p>
            Thank you for opening this. Thank you for reading everything. Thank
            you for still being here… with me.
          </p>

          <p>This means more to me than you'll ever know.</p>

          <p className="big-line">Let’s start again… together. ❤️</p>
        </div>
      )}
    </div>
  );
}
