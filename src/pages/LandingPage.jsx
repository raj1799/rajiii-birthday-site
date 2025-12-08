import React, { useState } from "react";
import PasswordLock from "../components/PasswordLock";

// import your components…
import Countdown from "../components/Countdown";
import GiftQuestionSection from "../components/GiftQuestionSection";
import SurpriseCarousel from "../components/SurpriseCarousel";
import PolaroidsSection from "../components/PolaroidSection";
import GiftBoxSection from "../components/GiftBoxSection";
import OrphanageCarousel from "../components/OrphanageCarousel";
import FinalMessage from "../components/FinalMessage";

export default function LandingPage() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <>
      {!unlocked && <PasswordLock onUnlock={() => setUnlocked(true)} />}

      {unlocked && (
        <div className="landing-container">
          <Countdown />
          <GiftQuestionSection />
          <SurpriseCarousel />
          <PolaroidsSection />
          <GiftBoxSection />
          <OrphanageCarousel />
          <FinalMessage />
        </div>
      )}
    </>
  );
}
