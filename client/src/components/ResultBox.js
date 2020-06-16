import React from "react";
import "../style.css";

const Result = ({ score, answer, playAgain }) => (
    <div className="score-board">
        <div className="score">
            Your score is {score} / 5 correct answer ! ! !{" "}
        </div>
        <div className="ans">
            {" "}
            The Correct Answers Are (1 - {answer[0]}) (2 - {answer[1]}) (3 -
            {answer[2]}) (4 -{answer[3]}) (5 - {answer[4]}){" "}
        </div>
        <button className="playBtn" onClick={playAgain}>
            {" "}
            Play Again{" "}
        </button>
    </div>
);

export default Result;
