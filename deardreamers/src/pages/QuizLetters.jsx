import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./../styles/QuizLetters.css";

// Top icons
import speaker from "../assets/images/speaker-icon/alphabets-speaker.png";
import home from "../assets/images/home-icon/alphabets-home.png";
import close from "../assets/images/close-icon/alphabets-close.png";

/* ================= IMAGES ================= */
import A from "../assets/images/alphabets/A.jpeg";
import B from "../assets/images/alphabets/B.jpeg";
import C from "../assets/images/alphabets/C.jpeg";
import D from "../assets/images/alphabets/D.jpeg";
import E from "../assets/images/alphabets/E.jpeg";
import F from "../assets/images/alphabets/F.jpeg";
import G from "../assets/images/alphabets/G.jpeg";
import H from "../assets/images/alphabets/H.jpeg";
import I from "../assets/images/alphabets/I.jpeg";
import J from "../assets/images/alphabets/J.jpeg";
import K from "../assets/images/alphabets/K.jpeg";
import L from "../assets/images/alphabets/L.jpeg";
import M from "../assets/images/alphabets/M.jpeg";
import N from "../assets/images/alphabets/N.jpeg";
import O from "../assets/images/alphabets/O.jpeg";
import P from "../assets/images/alphabets/P.jpeg";
import Q from "../assets/images/alphabets/Q.jpeg";
import R from "../assets/images/alphabets/R.jpeg";
import S from "../assets/images/alphabets/S.jpeg";
import T from "../assets/images/alphabets/T.jpeg";
import U from "../assets/images/alphabets/U.jpeg";
import V from "../assets/images/alphabets/V.jpeg";
import W from "../assets/images/alphabets/W.jpeg";
import X from "../assets/images/alphabets/X.jpeg";
import Y from "../assets/images/alphabets/Y.jpeg";
import Z from "../assets/images/alphabets/Z.jpeg";

/* ================= AUDIO ================= */
import soundA from "../assets/audio/alphabets/A.mpeg";
import soundB from "../assets/audio/alphabets/B.mpeg";
import soundC from "../assets/audio/alphabets/C.mpeg";
import soundD from "../assets/audio/alphabets/D.mpeg";
import soundE from "../assets/audio/alphabets/E.mpeg";
import soundF from "../assets/audio/alphabets/F.mpeg";
import soundG from "../assets/audio/alphabets/G.mpeg";
import soundH from "../assets/audio/alphabets/H.mpeg";
import soundI from "../assets/audio/alphabets/I.mpeg";
import soundJ from "../assets/audio/alphabets/J.mpeg";
import soundK from "../assets/audio/alphabets/K.mpeg";
import soundL from "../assets/audio/alphabets/L.mpeg";
import soundM from "../assets/audio/alphabets/M.mpeg";
import soundN from "../assets/audio/alphabets/N.mpeg";
import soundO from "../assets/audio/alphabets/O.mpeg";
import soundP from "../assets/audio/alphabets/P.mpeg";
import soundQ from "../assets/audio/alphabets/Q.mpeg";
import soundR from "../assets/audio/alphabets/R.mpeg";
import soundS from "../assets/audio/alphabets/S.mpeg";
import soundT from "../assets/audio/alphabets/T.mpeg";
import soundU from "../assets/audio/alphabets/U.mpeg";
import soundV from "../assets/audio/alphabets/V.mpeg";
import soundW from "../assets/audio/alphabets/W.mpeg";
import soundX from "../assets/audio/alphabets/X.mpeg";
import soundY from "../assets/audio/alphabets/Y.mpeg";
import soundZ from "../assets/audio/alphabets/Z.mpeg";

import wrongSoundFile from "../assets/audio/We-need-to-try-again.mpeg";

const API_URL = process.env.REACT_APP_API_URL;

const alphabetImages = {
  A, B, C, D, E, F, G, H, I, J,
  K, L, M, N, O, P, Q, R, S, T,
  U, V, W, X, Y, Z
};

const alphabetSounds = {
  A: soundA, B: soundB, C: soundC, D: soundD,
  E: soundE, F: soundF, G: soundG, H: soundH,
  I: soundI, J: soundJ, K: soundK, L: soundL,
  M: soundM, N: soundN, O: soundO, P: soundP,
  Q: soundQ, R: soundR, S: soundS, T: soundT,
  U: soundU, V: soundV, W: soundW, X: soundX,
  Y: soundY, Z: soundZ
};

const letters = Object.keys(alphabetImages);

function QuizLetter() {
  const { letter } = useParams();
  const navigate = useNavigate();

  const [currentLetter, setCurrentLetter] = useState("A");
  const [cards, setCards] = useState([]);
  const [correctIndexes, setCorrectIndexes] = useState([]);
  const [wrongIndex, setWrongIndex] = useState(null);
  const [wrongCount, setWrongCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [finalMessage, setFinalMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (letter) {
      setCurrentLetter(letter.toUpperCase());
    }
  }, [letter]);

  const generateCards = useCallback(() => {
    const newCards = new Array(12).fill(null);
    const correctPositions = [0, 3, 6, 9];

    correctPositions.forEach((i) => {
      newCards[i] = currentLetter;
    });

    const otherLetters = letters.filter((l) => l !== currentLetter);

    for (let i = 0; i < 12; i++) {
      if (!newCards[i]) {
        const randomLetter =
          otherLetters[Math.floor(Math.random() * otherLetters.length)];
        newCards[i] = randomLetter;
      }
    }

    setCards(newCards);
    setCorrectIndexes([]);
    setWrongIndex(null);
    setWrongCount(0);
    setShowPopup(false);
    setFinalMessage("");
    setIsSaving(false);
  }, [currentLetter]);

  useEffect(() => {
    generateCards();
  }, [generateCards]);

  const saveScore = async (finalWrong) => {
    const score = 4 * 10 - finalWrong * 2;
    const studentId = localStorage.getItem("student_id");

    if (!studentId || studentId === "undefined" || studentId === "null") {
      alert("Please login again.");
      navigate("/");
      return false;
    }

    try {
      const response = await fetch(`${API_URL}/SaveScoreServlet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        credentials: "include",
        body: new URLSearchParams({
          student_id: studentId,
          alphabet: currentLetter,
          correct_count: "4",
          wrong_count: String(finalWrong),
          score: String(score)
        }).toString()
      });

      const data = await response.json();
      console.log("Save score response:", data);

      return (
        data.message === "Score inserted successfully" ||
        data.message === "Score updated successfully"
      );
    } catch (error) {
      console.error("Error saving score:", error);
      return false;
    }
  };

  const handleClick = async (value, index) => {
    if (correctIndexes.includes(index) || isSaving) return;

    if (value === currentLetter) {
      const audio = new Audio(alphabetSounds[currentLetter]);
      audio.play().catch((err) => console.log("Audio play error:", err));

      const updated = [...correctIndexes, index];
      setCorrectIndexes(updated);
      setWrongIndex(null);

      if (updated.length === 4) {
        const finalWrong = wrongCount;

        let msg = "";
        if (finalWrong === 0) msg = "🌟 Excellent! Perfect Job!";
        else if (finalWrong <= 3) msg = "😊 Good Job! Keep Going!";
        else if (finalWrong <= 6) msg = "👍 Nice Try! You’re Learning!";
        else msg = "💪 Try Again! You’ll Do Better!";

        setIsSaving(true);
        const saved = await saveScore(finalWrong);
        setIsSaving(false);

        if (saved) {
          setFinalMessage(msg);
          setShowPopup(true);
        } else {
          alert("Score was not saved. Please login again and try.");
        }
      }
    } else {
      const wrongAudio = new Audio(wrongSoundFile);
      wrongAudio.play().catch((err) => console.log("Audio play error:", err));

      setWrongIndex(index);
      setWrongCount((prev) => prev + 1);

      setTimeout(() => {
        setWrongIndex(null);
      }, 500);
    }
  };

  const tryAgain = () => {
    generateCards();
  };

  const nextAlphabet = () => {
    const currentIndex = letters.indexOf(currentLetter);

    if (currentIndex < letters.length - 1) {
      const nextLetter = letters[currentIndex + 1].toLowerCase();
      navigate(`/quiz/${nextLetter}`);
    } else {
      navigate("/result");
    }
  };

  const handleSpeaker = () => {
    const audio = new Audio(alphabetSounds[currentLetter]);
    audio.play().catch((err) => console.log("Audio play error:", err));
  };

  const handleHome = () => {
    navigate("/home");
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <>
      <div className="quizletters-page">
        <div>
          <img
            src={speaker}
            alt="speaker"
            className="icon speaker"
            onClick={handleSpeaker}
          />

          <img
            src={home}
            alt="home"
            className="icon home"
            onClick={handleHome}
          />

          <img
            src={close}
            alt="close"
            className="icon close"
            onClick={handleClose}
          />
        </div>

        <div className="left-box">
          <h1>Find The Letter Given Below:</h1>
          <img
            src={alphabetImages[currentLetter]}
            className="target-img"
            alt={currentLetter}
          />
        </div>

        <div className="right-box">
          <div className="grid">
            {cards.map((img, index) => (
              <div
                key={index}
                className={`card-wrapper ${
                  correctIndexes.includes(index) ? "correct" : ""
                } ${wrongIndex === index ? "wrong shake" : ""}`}
              >
                <img
                  src={alphabetImages[img]}
                  alt={img}
                  className="card"
                  onClick={() => handleClick(img, index)}
                />

                {correctIndexes.includes(index) && (
                  <span className="tick">✔</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-box">
            <h2>{finalMessage}</h2>
            <p>Wrong Attempts: {wrongCount}</p>

            <div className="popup-buttons">
              <button onClick={tryAgain}>Try Again</button>
              <button onClick={nextAlphabet}>Next Alphabet</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default QuizLetter;