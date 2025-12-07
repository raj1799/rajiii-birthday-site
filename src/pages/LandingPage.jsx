// import BirthdayCake from "../components/BirthdayCake";
import Countdown from "../components/Countdown";
import GiftBoxSection from "../components/GiftBoxSection";
import PolaroidsSection from "../components/PolaroidSection";
import SurpriseCarousel from "../components/SurpriseCarousel";
import GiftQuestionSection from "../components/GiftQuestionSection";
import OrphanageCarousel from "../components/OrphanageCarousel";
import FinalMessage from "../components/FinalMessage";
export default function LandingPage() {
  return (
    <div className="landing-container">
      <Countdown />
      <GiftQuestionSection />
      <SurpriseCarousel />
      <PolaroidsSection />
      <GiftBoxSection />
      <OrphanageCarousel />
      <FinalMessage/>
      {/* <BirthdayCake/> */}
    </div>
  );
}
