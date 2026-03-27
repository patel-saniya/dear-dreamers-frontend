import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./../styles/Home.css";
import speaker from "../assets/images/speaker-icon/home-speaker.png";
import close from "../assets/images/close-icon/home-close.png";
import boyChar from "../assets/images/boychar.png";
import girlChar from "../assets/images/girlchar.png";

function Home() {

  const navigate = useNavigate();

  return (
    <div className="home-page">

      {/* Top Icons */}
      <img src={speaker} 
              alt="speaker" 
              className="icon speaker" 
            />
      
            <img
              src={close}
              alt="close"
              className="icon close"
              onClick={() => navigate("/")}
            />

      <div className="container">
        <h1 className="welcome-title">✨ Welcome to Dear Dreamers! ✨</h1>
        <p className="welcome-subtitle">Let's learn, play, and explore the ABC world! 🌈📚</p>

        <Link to="/alphabets" className="alphabets-btn">
          ENGLISH ALPHABETS
        </Link>

        <div className="row">
          <Link to="/quiz" className="cards-btn">CARDS GAME </Link>
          <Link to="/result" className="result-btn">RESULT 100% </Link>
          
        </div>
      </div>

      {/* Characters */}
      <img src={boyChar} alt="Boy" className="left-img" />
      <img src={girlChar} alt="Girl" className="right-img" />

    </div>
  );
}

export default Home;