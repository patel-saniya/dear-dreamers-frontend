import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Result.css";

// Top icons
import speaker from "../assets/images/speaker-icon/alphabets-speaker.png";
import home from "../assets/images/home-icon/alphabets-home.png";
import close from "../assets/images/close-icon/alphabets-close.png";

function Result() {

  const [scores, setScores] = useState([]);
  const navigate = useNavigate();

  // Fetch result from backend
  useEffect(() => {
    fetch("http://localhost:8080/DearDreamersApp/ResultServlet", {
      method: "POST",
      credentials: "include"
    })
      .then(res => res.json())
      .then(data => setScores(data))
      .catch(err => console.log(err));
  }, []);

  // 🔊 Speaker Sound
  const handleSpeaker = () => {
    const audio = new Audio("/sounds/result.mpeg"); 
    audio.play();
  };

  // 🏠 Go to Home
  const handleHome = () => {
    navigate("/home");
  };

  // ❌ Logout + Redirect
  const handleClose = async () => {
    try {
      await fetch("http://localhost:8080/DearDreamersApp/LogoutServlet", {
        method: "POST",
        credentials: "include"
      });
    } catch (error) {
      console.log(error);
    }

    navigate("/"); // go to login page
  };

  return (
    <div className="result-page">

      {/* Top Icons */}
      <div className="top-icons">
        <img 
          src={speaker} 
          className="icon speaker" 
          alt="speaker" 
          onClick={handleSpeaker}
        />

        <img 
          src={home} 
          className="icon home" 
          alt="home" 
          onClick={handleHome}
        />

        <img 
          src={close} 
          className="icon close" 
          alt="close" 
          onClick={handleClose}
        />
      </div>

      <div className="score-wrapper">

        <div className="score-title">
          ⭐ Your Score Card ⭐
        </div>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Alphabet</th>
                <th>Correct</th>
                <th>Wrong</th>
                <th>Score</th>
              </tr>
            </thead>

            <tbody>
              {scores.length > 0 ? (
                scores.map((item, index) => (
                  <tr key={index}>
                    <td>{item.alphabet}</td>
                    <td>{item.correct_count}</td>
                    <td>{item.wrong_count}</td>
                    <td>{item.score}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No Scores Found</td>
                </tr>
              )}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}

export default Result;