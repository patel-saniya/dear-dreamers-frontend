import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Alphabets.css";

// Top icons
import speaker from "../assets/images/speaker-icon/alphabets-speaker.png";
import home from "../assets/images/home-icon/alphabets-home.png";
import close from "../assets/images/close-icon/alphabets-close.png";

// Alphabet images
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

function Alphabets() {

  const navigate = useNavigate();

  const letters = [
    { img: A, letter: "a" },
    { img: B, letter: "b" },
    { img: C, letter: "c" },
    { img: D, letter: "d" },
    { img: E, letter: "e" },
    { img: F, letter: "f" },
    { img: G, letter: "g" },
    { img: H, letter: "h" },
    { img: I, letter: "i" },
    { img: J, letter: "j" },
    { img: K, letter: "k" },
    { img: L, letter: "l" },
    { img: M, letter: "m" },
    { img: N, letter: "n" },
    { img: O, letter: "o" },
    { img: P, letter: "p" },
    { img: Q, letter: "q" },
    { img: R, letter: "r" },
    { img: S, letter: "s" },
    { img: T, letter: "t" },
    { img: U, letter: "u" },
    { img: V, letter: "v" },
    { img: W, letter: "w" },
    { img: X, letter: "x" },
    { img: Y, letter: "y" },
    { img: Z, letter: "z" }
  ];

  return (
    <div className="alphabets-page">

      {/* Top Icons */}
      <img src={speaker} 
        alt="speaker" 
        className="icon speaker" 
      />
      
      <img
        src={home}
        alt="home"
        className="icon home"
        onClick={() => navigate("/home")}
      />
      
      <img
        src={close}
        alt="close"
        className="icon close"
        onClick={() => navigate("/")}
      />

      {/* Alphabet Grid */}
      <div className="container">
        {letters.map((item, index) => (
          <img
            key={index}
            src={item.img}
            className="card"
            alt={`Alphabet ${item.letter}`}
            onClick={() => navigate(`/alphabet/${item.letter}`)}
          />
        ))}
      </div>

    </div>
  );
}

export default Alphabets;