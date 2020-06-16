import React, { Component } from "react";
import questionAPI from "../question/index";
import QuestionBox from "../components/QuestionBox";
import Result from "../components/ResultBox";
import "../style.css";
import logo from "../logo.png";
class Quiz extends Component {
  constructor() {
    super();
    this.state = {
      questionBank: [],
      score: 0,
      responses: 0,
      correctAns: [],
    };
  }
  // Function to get question from ./question
  getQuestions = () => {
    questionAPI().then((question) => {
      this.setState({ questionBank: question });
      const answerBank = this.state.questionBank.map((question) => {
        return question.correct;
      });
      this.setState({ correctAns: answerBank });
    });
  };
  // Set state back to default and call function
  playAgain = () => {
    this.getQuestions();
    this.setState({ score: 0, responses: 0 });
  };
  // Function to compute scores
  computeAnswer = (answer, correctAns) => {
    if (answer === correctAns) {
      this.setState({
        score: this.state.score + 1,
        answer: this.state.correctAns,
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };
  // componentDidMount function to get question
  componentDidMount() {
    this.getQuestions();
  }
  render() {
    console.log(this.state.questionBank);
    console.log(this.state.correctAns);
    return (
      <div className="container">
        <div className="title">
          <h1>Quiz of </h1>
          <img src={logo} alt="" />
        </div>
        {this.state.questionBank.length > 0 &&
          this.state.responses < 5 &&
          this.state.questionBank.map(
            ({ question, answers, correct, questionId }) => (
              <QuestionBox
                question={question}
                options={answers}
                key={questionId}
                selected={(answer) => this.computeAnswer(answer, correct)}
              />
            )
          )}
        {this.state.responses === 5 ? (
          <Result
            score={this.state.score}
            answer={this.state.correctAns} // this is good
            playAgain={this.playAgain}
          />
        ) : null}
      </div>
    );
  }
}
export default Quiz;
