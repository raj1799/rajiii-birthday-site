import { useEffect, useState } from "react";
import { calculateLifeStats } from "../utils/calculateLifestate";
import BirthdayCake from "./BirthdayCake";

export default function Countdown() {
  const birthday = "2025-12-10T11:29:00";
  // const birthday = "2025-12-01T01:13:00";
  const birthDate = "2001-12-10T11:29:00";
  const [isBirthday, setIsBirthday] = useState(false);

  const [lifeStats, setLifeStats] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    heartbeats: 0,
  });

  const [animatedHB, setAnimatedHB] = useState(0);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     const stats = calculateLifeStats(birthDate);
  //     setLifeStats(stats);

  //     // smooth count-up animation toward accurate heartbeats
  //     setAnimatedHB((prev) => {
  //       if (prev < stats.heartbeats) {
  //         return prev + Math.ceil((stats.heartbeats - prev) / 20);
  //       }
  //       return stats.heartbeats;
  //     });

  //     // birthday countdown
  //     const now = new Date();
  //     const target = new Date(birthday);
  //     const diff = target - now;

  //     if (diff > 0) {
  //       setTimeLeft({
  //         days: Math.floor(diff / (1000 * 60 * 60 * 24)),
  //         hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
  //         minutes: Math.floor((diff / (1000 * 60)) % 60),
  //         seconds: Math.floor((diff / 1000) % 60),
  //       });
  //     }
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

useEffect(() => {
  const BPM = 72; // change if you prefer a different beats-per-minute value

  const timer = setInterval(() => {
    const stats = calculateLifeStats(birthDate); // days/hours/minutes/seconds
    setLifeStats(stats);

    // precise heartbeat calculation from elapsed ms:
    const birth = new Date(birthDate);
    const now = new Date();
    const elapsedMinutes = (now - birth) / (1000 * 60); // float minutes
    const exactHB = Math.floor(elapsedMinutes * BPM);

    setAnimatedHB(exactHB);

    // countdown
    const target = new Date(birthday);
    const diff = target - now;
        if (diff <= 0) {
      setIsBirthday(true);   // 🎉 SWITCH VIEW TO CAKE
    //   clearInterval(timer);
      return;
    }
    if (diff > 0) {
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }
  }, 1000);

  return () => clearInterval(timer);
}, []);



  return (
    <div className="countdown-container">
      {isBirthday ? (
        <>
          <BirthdayCake />
        </>
      ) : (
        <>
          <h1
            className="fade-in"
            style={{ fontSize: "32px", fontWeight: "700" }}
          >
            Counting down to your special day, Rajiii… ❤️
          </h1>

          <h2 className="fade-in" style={{ marginTop: "40px" }}>
            Time left for your birthday 🎉
          </h2>

          <div className="timer-box fade-in">
            <span>{timeLeft.days}d</span>
            <span>{timeLeft.hours}h</span>
            <span>{timeLeft.minutes}m</span>
            <span>{timeLeft.seconds}s</span>
          </div>
        </>
      )}
      <h2 className="fade-in" style={{ marginTop: "50px" }}>
        Your journey till today ❤️
      </h2>

      <div className="life-stats-box fade-in">
        <div className="stat">
          <span>Days Lived</span>{" "}
          <strong>{lifeStats.days.toLocaleString()}</strong>
        </div>
        <div className="stat">
          <span>Hours Lived</span>{" "}
          <strong>{lifeStats.hours.toLocaleString()}</strong>
        </div>
        <div className="stat">
          <span>Minutes Lived</span>{" "}
          <strong>{lifeStats.minutes.toLocaleString()}</strong>
        </div>
        <div className="stat">
          <span>Seconds Lived</span>{" "}
          <strong>{lifeStats.seconds.toLocaleString()}</strong>
        </div>
        <div className="stat">
          <span>Heartbeats ❤️</span>{" "}
          <strong>{animatedHB.toLocaleString()}</strong>
        </div>
      </div>
    </div>
  );
}
