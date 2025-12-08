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
            So let’s end all this drama today. Let’s explore Chennai together,
            create memories made of love, trust, and promises.
          </p>

          <p>
            Because no matter what…
            <strong>I will always choose you.</strong>
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
