const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  question: { type: String, required: true },
  answer_a: { type: String, required: true },
  answer_b: { type: String, required: true },
  answer_c: { type: String, required: true },
  answer_d: { type: String, required: true },
  correct_answer: { type: String, required: true },
  explanation: { type: String, required: true },
});

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;
