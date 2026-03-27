import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./../styles/AlphabetPage.css";

// Top icons
import speaker from "../assets/images/speaker-icon/alphabets-speaker.png";
import home from "../assets/images/home-icon/alphabets-home.png";
import close from "../assets/images/close-icon/alphabets-close.png";
import nextIcon from "../assets/images/next-icon/Alphabets-Next.png";
import prevIcon from "../assets/images/previous-icon/Alphabets-Previous.png";

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

// Word images
import Afor from "../assets/images/for/A-for.png";
import Bfor from "../assets/images/for/B-for.png";
import Cfor from "../assets/images/for/C-for.png";
import Dfor from "../assets/images/for/D-for.png";
import Efor from "../assets/images/for/E-for.png";
import Ffor from "../assets/images/for/F-for.png";
import Gfor from "../assets/images/for/G-for.png";
import Hfor from "../assets/images/for/H-for.png";
import Ifor from "../assets/images/for/I-for.png";
import Jfor from "../assets/images/for/J-for.png";
import Kfor from "../assets/images/for/K-for.png";
import Lfor from "../assets/images/for/L-for.png";
import Mfor from "../assets/images/for/M-for.png";
import Nfor from "../assets/images/for/N-for.png";
import Ofor from "../assets/images/for/O-for.png";
import Pfor from "../assets/images/for/P-for.png";
import Qfor from "../assets/images/for/Q-for.png";
import Rfor from "../assets/images/for/R-for.png";
import Sfor from "../assets/images/for/S-for.png";
import Tfor from "../assets/images/for/T-for.png";
import Ufor from "../assets/images/for/U-for.png";
import Vfor from "../assets/images/for/V-for.png";
import Wfor from "../assets/images/for/W-for.png";
import Xfor from "../assets/images/for/X-for.png";
import Yfor from "../assets/images/for/Y-for.png";
import Zfor from "../assets/images/for/Z-for.png";

// Letter sounds
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


// Word sounds (Apple, Ball, Cat)
import appleSound from "../assets/audio/alphabets/Apple.mpeg";
import ballSound from "../assets/audio/alphabets/Ball.mpeg";
import catSound from "../assets/audio/alphabets/Cat.mpeg";
import dogSound from "../assets/audio/alphabets/Dog.mpeg";
import elephantSound from "../assets/audio/alphabets/Elephant.mpeg";
import fishSound from "../assets/audio/alphabets/Fish.mpeg";
import goatSound from "../assets/audio/alphabets/Goat.mpeg";
import houseSound from "../assets/audio/alphabets/House.mpeg";
import icecreamSound from "../assets/audio/alphabets/Ice-cream.mpeg";
import jokerSound from "../assets/audio/alphabets/Joker.mpeg";
import kingSound from "../assets/audio/alphabets/King.mpeg";
import leafSound from "../assets/audio/alphabets/Leaf.mpeg";
import monkeySound from "../assets/audio/alphabets/Monkey.mpeg";
import nestSound from "../assets/audio/alphabets/Nest.mpeg";
import orangeSound from "../assets/audio/alphabets/Orange.mpeg";
import peacockSound from "../assets/audio/alphabets/Peacock.mpeg";
import queenSound from "../assets/audio/alphabets/Queen.mpeg";
import rabbitSound from "../assets/audio/alphabets/Rabbit.mpeg";
import sunSound from "../assets/audio/alphabets/Sun.mpeg";
import tigerSound from "../assets/audio/alphabets/Tiger.mpeg";
import umbrellaSound from "../assets/audio/alphabets/Umbrella.mpeg";
import vegetablesSound from "../assets/audio/alphabets/Vegetables.mpeg";
import watermelonSound from "../assets/audio/alphabets/Watermelon.mpeg";
import xmastreeSound from "../assets/audio/alphabets/Xmas-tree.mpeg";
import yachtSound from "../assets/audio/alphabets/Yacht.mpeg";
import zebraSound from "../assets/audio/alphabets/Zebra.mpeg";

// Sentence sounds (A for Apple)
import sentenceA from "../assets/audio/alphabets/AforApple.mpeg";
import sentenceB from "../assets/audio/alphabets/BforBall.mpeg";
import sentenceC from "../assets/audio/alphabets/CforCat.mpeg";
import sentenceD from "../assets/audio/alphabets/DforDog.mpeg";
import sentenceE from "../assets/audio/alphabets/EforElephant.mpeg";
import sentenceF from "../assets/audio/alphabets/FforFish.mpeg";
import sentenceG from "../assets/audio/alphabets/GforGoat.mpeg";
import sentenceH from "../assets/audio/alphabets/HforHouse.mpeg";
import sentenceI from "../assets/audio/alphabets/IforIce-cream.mpeg";
import sentenceJ from "../assets/audio/alphabets/JforJoker.mpeg";
import sentenceK from "../assets/audio/alphabets/KforKing.mpeg";
import sentenceL from "../assets/audio/alphabets/LforLeaf.mpeg";
import sentenceM from "../assets/audio/alphabets/MforMonkey.mpeg";
import sentenceN from "../assets/audio/alphabets/NforNest.mpeg";
import sentenceO from "../assets/audio/alphabets/OforOrange.mpeg";
import sentenceP from "../assets/audio/alphabets/PforPeacock.mpeg";
import sentenceQ from "../assets/audio/alphabets/QforQueen.mpeg";
import sentenceR from "../assets/audio/alphabets/RforRabbit.mpeg";
import sentenceS from "../assets/audio/alphabets/SforSun.mpeg";
import sentenceT from "../assets/audio/alphabets/TforTiger.mpeg";
import sentenceU from "../assets/audio/alphabets/UforUmbrella.mpeg";
import sentenceV from "../assets/audio/alphabets/VforVegetables.mpeg";
import sentenceW from "../assets/audio/alphabets/WforWatermelon.mpeg";
import sentenceX from "../assets/audio/alphabets/XforXmas-tree.mpeg";
import sentenceY from "../assets/audio/alphabets/YforYacht.mpeg";
import sentenceZ from "../assets/audio/alphabets/ZforZebra.mpeg";

function AlphabetPage() {

  const { letter } = useParams();
  const navigate = useNavigate();

  const currentLetter = letter ? letter.toUpperCase() : "A";

  const alphabetImages = { A, B, C, D, E, F, G, H, I, J, K, L, M, 
    N, O, P, Q, R, S, T, U, V, W, X, Y, Z };
  const wordImages = { A: Afor, B: Bfor, C: Cfor, D: Dfor, E: Efor, F: Ffor, G:Gfor, H: Hfor, I: Ifor, 
    J: Jfor, K: Kfor, L: Lfor, M: Mfor, N: Nfor, O: Ofor, P: Pfor, Q: Qfor, R: Rfor, 
    S: Sfor, T: Tfor, U: Ufor, V: Vfor, W: Wfor, X: Xfor, Y: Yfor, Z: Zfor };
  
  const alphabetSounds = { A: soundA, B: soundB, C: soundC, D: soundD, E: soundE, F: soundF, G: soundG, H: soundH,
    I: soundI, J: soundJ, K: soundK, L: soundL, M: soundM, N: soundN, O: soundO, P: soundP, Q: soundQ, R: soundR,
    S: soundS, T: soundT, U: soundU, V: soundV, W: soundW, X: soundX, Y: soundY, Z: soundZ};

  const wordSounds = { A: appleSound, B: ballSound, C: catSound, D: dogSound, E: elephantSound, F: fishSound, G: goatSound
    , H: houseSound, I: icecreamSound, J: jokerSound, K: kingSound, L: leafSound, M: monkeySound, N: nestSound, O: orangeSound
    , P: peacockSound, Q: queenSound, R: rabbitSound, S: sunSound, T: tigerSound, U: umbrellaSound, V: vegetablesSound, W: watermelonSound
    , X: xmastreeSound, Y: yachtSound, Z: zebraSound
   };

  const sentenceSounds = { A: sentenceA, B: sentenceB, C: sentenceC, D: sentenceD, E: sentenceE, F: sentenceF, 
    G: sentenceG, H: sentenceH, I: sentenceI, J: sentenceJ, K: sentenceK, L: sentenceL, M: sentenceM, N: sentenceN, 
    O: sentenceO, P: sentenceP, Q: sentenceQ, R: sentenceR, S: sentenceS, T: sentenceT, U: sentenceU, V: sentenceV, 
    W: sentenceW, X: sentenceX, Y: sentenceY, Z: sentenceZ, };

  const letters = Object.keys(alphabetImages);
  const index = letters.indexOf(currentLetter);

  // Play Letter Sound (A)
  const playLetter = () => {
    new Audio(alphabetSounds[currentLetter]).play();
  };

  // Play Word Sound (Apple)
  const playWord = () => {
    new Audio(wordSounds[currentLetter]).play();
  };

  // Play Sentence Sound (A for Apple)
  const playSentence = () => {
    new Audio(sentenceSounds[currentLetter]).play();
  };

  // Next
  const goNext = () => {
    if (index < letters.length - 1) {
      navigate(`/alphabet/${letters[index + 1].toLowerCase()}`);
    }
  };

  // Previous
  const goPrev = () => {
    if (index > 0) {
      navigate(`/alphabet/${letters[index - 1].toLowerCase()}`);
    }
  };

  return (
    <div className="alphabetA-page">

      {/* Top Icons */}
      <div className="top-icons">
        <img src={speaker} 
          alt="speaker" 
          className="icon speaker" 
        />
        
        <img src={home}
          alt="home"
          className="icon home"
          onClick={() => navigate("/home")}
        />
        
        <img src={close}
          alt="close"
          className="icon close"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Cards */}
      <div className="container">

        {/* Letter Card */}
        <div className="card">
          <img
            src={alphabetImages[currentLetter]}
            alt={currentLetter}
            onClick={playLetter}
          />
        </div>

        {/* Word Card */}
        <div className="card">
          <img
            src={wordImages[currentLetter]}
            alt="word"
            onClick={playWord}
          />
        </div>

      </div>

      {/* Button (Sentence Sound) */}
      <button className="main-btn" onClick={playSentence}>
        Click Here
      </button>

      {/* Previous */}
      {index > 0 && (
        <img
          src={prevIcon}
          className="prev-icon"
          alt="prev"
          onClick={goPrev}
        />
      )}

      {/* Next */}
      {index < letters.length - 1 && (
        <img
          src={nextIcon}
          className="next-icon"
          alt="next"
          onClick={goNext}
        />
      )}

    </div>
  );
}

export default AlphabetPage;