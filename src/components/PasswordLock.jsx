import React, { useState } from "react";
import "../styles/lock.css";
import { logEvent } from "../utils/logEvent";

export default function PasswordLock({ onUnlock }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const correctPassword = "17111999"; // your DOB

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.trim() === correctPassword) {
      setError(false);
      onUnlock(); 

      logEvent("website_unlocked", {
        timestamp: Date.now(),
      });
    } else {
      setError(true);
      setPassword("");

      logEvent("wrong_password", {
        timestamp: Date.now(),
      });
    }
  };

  return (
    <div className="lock-screen">
      <div className="lock-card">
        <h2 className="lock-title">Unlock My Heart ❤️</h2>
        <p className="lock-sub">Enter the password to open your surprise</p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className={`lock-input ${error ? "shake" : ""}`}
            placeholder="Enter password…"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="lock-error">Wrong password my love… try again 💔</p>
          )}

          <button type="submit" className="lock-btn">
            Unlock 🔓
          </button>
        </form>
      </div>
    </div>
  );
}
