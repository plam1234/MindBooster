const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactquestionlist"
);

const questionSeed = [
{
    id:1,
    question:"If Logx (1 / 8) = - 3 / 2, then x is equal to",
    answer_a:"A. - 4",
    answer_b:"B. 4",
    answer_c:"C. 1 / 4",
    answer_d:"D. 10",
    correct_answer:"B"
},
{
    id:2,
    question:"20 % of 2 is equal to",
    answer_a:"A. 20",
    answer_b:"B. 4",
    answer_c:"C. 0.4",
    answer_d:"D. 0.04",
    correct_answer:"C"
},
{
    id:3,
    question:"A school committee consists of 2 teachers and 4 students. The number of different committees that can be formed from 5 teachers and 10 students is",
    answer_a:"A. 10",
    answer_b:"B. 15",
    answer_c:"C. 2100",
    answer_d:"D. 8",
    correct_answer:"C"
},
{
    id:4,
    question:"The exam scores of all 500 students were recorded and it was determined that these scores were normally distributed. If Jane's score is 0.8 standard deviation above the mean, then how many, to the nearest unit, students scored above Jane?",
    answer_a:"A. 394",
    answer_b:"B. 250",
    answer_c:"C. 400",
    answer_d:"D. 106",
    correct_answer:"D"
},
{
    id:5,
    question:"If f(x) is an odd function, then | f(x) | is",
    answer_a:"A. an odd function",
    answer_b:"B. an even function",
    answer_c:"C. neither odd nor even",
    answer_d:"D. even and odd",
    correct_answer:"B"
},
{
    id:6,
    question:"Which of the following is incorrect? Algorithms can be represented:",
    answer_a:"A. as pseudo codes",
    answer_b:"B. as syntax",
    answer_c:"C. as programs",
    answer_d:"D. as flowcharts",
    correct_answer:"B",
    explanation:"Representation of algorithms *As programs *As flowcharts *As pseudo codes."
},
{
    id:7,
    question:"Another name for 1-D arrays.",
    answer_a:"A. Linear arrays",
    answer_b:"B. Lists",
    answer_c:"C. Horizontal array",
    answer_d:"D. Vertical array",
    correct_answer:"A",
    explanation:"Explanation: Linear arrays are the 1-Dimensional arrays wherein only one row is present and the items are inserted."
},
{
    id:8,
    question:"A system wherein items are added from one and removed from the other end.",
    answer_a:"A. Stack",
    answer_b:"B. Queue",
    answer_c:"C. Linked List",
    answer_d:"D. Array",
    correct_answer:"B",
    explanation:"Explanation: In a queue, the items are inserted from the rear end and deleted from the front end."
},
{
    id:9,
    question:"A data structure that follows the FIFO principle.",
    answer_a:"A. Queue",
    answer_b:"B. LL",
    answer_c:"C. Stack",
    answer_d:"D. Union",
    correct_answer:"A",
    explanation:"Explanation: The answer is Queue. A Queue follows the FIFO principle. FIFO stands for First In First Out."
},
{
    id:10,
    question:"This characteristic often draws the line between what is feasible and what is impossible.",
    answer_a:"A. Performance",
    answer_b:"B. System Evaluation",
    answer_c:"C. Modularity",
    answer_d:"D. Reliability",
    correct_answer:"A",
    explanation:"Explanation: Algorithms help us to understand scalability. Performance often draws the line between what is feasible and what is impossible."
}];

db.questions
  .remove({})
  .then(() => db.questions.collection.insertMany(questionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

