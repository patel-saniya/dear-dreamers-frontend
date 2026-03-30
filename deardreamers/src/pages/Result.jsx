import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Result.css";

import speaker from "../assets/images/speaker-icon/alphabets-speaker.png";
import home from "../assets/images/home-icon/alphabets-home.png";
import close from "../assets/images/close-icon/alphabets-close.png";

const API_URL = process.env.REACT_APP_API_URL;

function Result() {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
  const fetchResults = async () => {
    const studentId = localStorage.getItem("student_id");

    try {
      const response = await fetch(`${API_URL}/ResultServlet`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        credentials: "include",
        body: new URLSearchParams({
          student_id: studentId || ""
        }).toString()
      });

      const data = await response.json();
      console.log("Result data:", data);
      setScores(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log("Error fetching result:", err);
      setScores([]);
    } finally {
      setLoading(false);
    }
  };

  fetchResults();
}, []);

  const handleSpeaker = () => {
    const audio = new Audio("/sounds/result.mpeg");
    audio.play().catch((err) => console.log("Audio play error:", err));
  };

  const handleHome = () => {
    navigate("/home");
  };

  const handleClose = async () => {
    try {
      await fetch(`${API_URL}/LogoutServlet`, {
        method: "POST",
        credentials: "include"
      });
    } catch (error) {
      console.log("Logout error:", error);
    }

    navigate("/");
  };

  return (
    <div className="result-page">
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
        <div className="score-title">⭐ Your Score Card ⭐</div>

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
              {loading ? (
                <tr>
                  <td colSpan="4">Loading...</td>
                </tr>
              ) : scores.length > 0 ? (
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