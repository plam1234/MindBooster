import React from "react";
import "../style.css";

const Result = ({ user, score, playAgain }) => (
    <div className="score-board">
        <div className="user">Hey {user} your grate is</div>
        <div className="score">
            {" "}
            Your score is {score} / 5 correct answer ! ! !{" "}
        </div>

        <button className="playBtn" onClick={playAgain}>
            {" "}
            Play Again{" "}
        </button>
    </div>
);

export default Result;
