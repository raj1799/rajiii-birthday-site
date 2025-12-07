import React, { useState, useRef, useEffect } from "react";
import "../styles/tictactoe.css";
import { logEvent } from "../utils/logEvent";

const WIN_COMBOS = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // cols
  [0,4,8], [2,4,6]           // diags
];

export default function TicTacToe() {
  // prefilled so a single O (player) click will win
  // top row: O, O, _ -> clicking index 2 completes top row
  const initialBoard = ["O","O","_",
                        "X","X","O",
                        "X","O","X"];

  const [board, setBoard] = useState(initialBoard);
  const [winnerCombo, setWinnerCombo] = useState(null);
  const [won, setWon] = useState(false);
  const gridRef = useRef(null);

  // simple winner check for a given board
  function findWinningCombo(bd, mark) {
    for (const combo of WIN_COMBOS) {
      const [a,b,c] = combo;
      if (bd[a] === mark && bd[b] === mark && bd[c] === mark) return combo;
    }
    return null;
  }

  function handleClick(index) {
    logEvent(`Played Puzzle`)
    if (board[index] !== "_" || won) return;

    const newBoard = [...board];
    newBoard[index] = "O"; // player move is O
    setBoard(newBoard);

    // check if player now wins
    const combo = findWinningCombo(newBoard, "O");
    if (combo) {
      // small delay so the placed O renders, then animate strike/3D message
      setTimeout(() => {
        setWinnerCombo(combo);
        setWon(true);
      }, 200);
    }
  }

  // compute a named class for the winning combo (row0, col1, diag0, etc.)
  function comboToClass(combo) {
    if (!combo) return "";
    const str = combo.join(",");
    // map exact combos to class names
    const mapping = {
      "0,1,2": "row-0",
      "3,4,5": "row-1",
      "6,7,8": "row-2",
      "0,3,6": "col-0",
      "1,4,7": "col-1",
      "2,5,8": "col-2",
      "0,4,8": "diag-main",
      "2,4,6": "diag-anti"
    };
    return mapping[str] || "";
  }

  // prevent page scroll when 3D message appears on mobile (optional)
  useEffect(() => {
    if (won) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [won]);

  return (
    <div className="ttt-wrapper">
      <h3 className="ttt-title">Complete the puzzle 💗</h3>

      <div className="ttt-board-wrap">
        <div className="ttt-grid" ref={gridRef}>
          {board.map((cell, idx) => (
            <div
              key={idx}
              className={`ttt-cell ${cell !== "_" ? "filled" : "empty"} ${cell === "O" ? "mark-o" : ""}`}
              onClick={() => handleClick(idx)}
            >
              {cell !== "_" ? cell : ""}
            </div>
          ))}

          {/* strike line overlay — class depends on winning combo */}
          {winnerCombo && (
            <div className={`strike-line ${comboToClass(winnerCombo)}`} aria-hidden />
          )}
        </div>

        {/* 3D floating message shown only after win */}
        {won && (
          <div className="ttt-3d-overlay">
            <div className="ttt-3d-card">
              <div className="ttt-3d-title">🎉 Congrats Rajiii…</div>
              <div className="ttt-3d-sub">You won my heart 💗</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
