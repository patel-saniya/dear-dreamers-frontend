import { Routes, Route } from "react-router-dom";
import SignupLogin from "./pages/SignupLogin";
import Home from "./pages/Home";
import Alphabets from "./pages/Alphabets";
import AlphabetPage from "./pages/AlphabetPage";
import Quizs from "./pages/Quizs";
import QuizLetters from "./pages/QuizLetters";
import Result from "./pages/Result";


function App() {
  return (
    <Routes>
        <Route path="/"
        element ={<SignupLogin />} />

        <Route path="/home"
        element ={<Home/>} />

        <Route path="/alphabets"
        element ={<Alphabets/>} />

        <Route path="/alphabet/:letter"
        element ={<AlphabetPage/>} />

        <Route path="/quiz"
        element ={<Quizs/>} />

        <Route path="/quiz/:letter"
        element ={<QuizLetters/>} />

        <Route path="/result"
        element ={<Result/>} />
    </Routes>
  );
}

export default App;
