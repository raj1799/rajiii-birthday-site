// import BirthdayCake from "../components/BirthdayCake";
import Countdown from "../components/Countdown";
import GiftBoxSection from "../components/GiftBoxSection";
import PolaroidsSection from "../components/PolaroidSection";
import SurpriseCarousel from "../components/SurpriseCarousel";

export default function LandingPage() {
  return (
    <div className="landing-container">
      <Countdown />
      <PolaroidsSection/>
      <SurpriseCarousel/> 
      <GiftBoxSection/>
       {/* <BirthdayCake/> */}
    </div>
  );
}
