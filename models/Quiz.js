const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Quiz = mongoose.model("Quiz", QuizSchema);

module.exports = Quiz;
