import React from "react";
import "../style.css";

const Result = ({ score, answer, playAgain }) => (
    <div className="score-board">
        <div className="score">Your score is {score} / 5 correct </div>
        <div className="ans">
            The Correct Answers Are :<p>1. {answer[0]} </p>
            <p>2. {answer[1]}</p>
            <p>3. {answer[2]} </p>
            <p>4. {answer[3]}</p>
            <p>5. {answer[4]}</p>
        </div>
        <button className="playBtn" onClick={playAgain}>
            {" "}
            Play Again{" "}
        </button>
    </div>
);

export default Result;
