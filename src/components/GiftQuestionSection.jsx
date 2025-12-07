import React, { useState } from "react";
import "../styles/giftQuestion.css";
import { logEvent } from "../utils/logEvent";


export default function GiftQuestionSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const qnaList = [
    {
      q: "What do you miss the most? 💭",
      a: "A voice… a smile… and someone who still feels like home 💞",
    },
    {
      q: "Who do you look for first on a bad day? 🌧️",
      a: "Don’t lie… your mind just whispered my name 😉❤️",
    },
    {
      q: "What do you hide behind your silence? 🤫",
      a: "A feeling you’re scared to admit… but I already feel it too 💗",
    },
    {
      q: "If love had one last message for you… 💌",
      a: "You can push me away, but I will still choose you… every single time 💘",
    },
    {
      q: "If climate was good that day… what made your heart think of me first? 😏🌤️",
      a: "Come on… it wasn’t the weather.It was your heart looking for a reason to hear my voice. 💕",
    },
    {
      q: "Ready to see a few memories?",
      a: "These are a piece of my heart — take care of them.",
    },
  ];

  return (
    <div className="qna-section">
      <h2 className="qna-title">Before We Go Further… 💖</h2>

      <div className="qna-list">
        {qnaList.map((item, i) => (
          <div
            key={i}
            className={`qna-card ${openIndex === i ? "open" : ""}`}
            onClick={() => {
              setOpenIndex(i);
              // logEvent("qna_opened", { questionIndex: i });
                logEvent(`opened_question_${i}`);
            }}
          >
            {/* CLOSED STATE */}
            {openIndex !== i && (
              <div className="qna-closed">
                <div className="qna-ribbon"></div>
                <p className="qna-hint">🎁 Tap to Open</p>
                <p className="qna-question-preview">{item.q}</p>
              </div>
            )}

            {/* OPEN STATE */}
            {openIndex === i && (
              <div className="qna-open-content">
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
