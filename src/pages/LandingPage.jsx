// import BirthdayCake from "../components/BirthdayCake";
import Countdown from "../components/Countdown";
import GiftBoxSection from "../components/GiftBoxSection";
import PolaroidsSection from "../components/PolaroidSection";
import SurpriseCarousel from "../components/SurpriseCarousel";
import GiftQuestionSection from "../components/GiftQuestionSection";
export default function LandingPage() {
  return (
    <div className="landing-container">
      <Countdown />
      <GiftQuestionSection /> 
       <SurpriseCarousel/>
      <PolaroidsSection/> 
      <GiftBoxSection/>
       {/* <BirthdayCake/> */}
    </div>
  );
}
