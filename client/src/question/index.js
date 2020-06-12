const qBank = [ 
    { 
        question: 
        "If Logx (1 / 8) = - 3 / 2, then x is equal to",
        answers: ["A. - 4", "B. 4", "C. 1 / 4", "D. 10"], 
        correct: "B. 4", 
        questionId: "1"
    }, 
    { 
        question: 
        "20 % of 2 is equal to", 
        answers: ["A. 20", "B. 4", "C. 0.4","D. 0.04"], 
        correct: "C. 0.4", 
        questionId: "2"
    }, 
    { 
        question: 
        "A school committee consists of 2 teachers and 4 students. The number of different committees that can be formed from 5 teachers and 10 students is",
        answers: ["A. 10", "B. 15", "C. 2100", "D. 8"], 
        correct: "C. 2100", 
        questionId: "3"
    }, 
    { 
        question: 
        "The exam scores of all 500 students were recorded and it was determined that these scores were normally distributed. If Jane's score is 0.8 standard deviation above the mean, then how many, to the nearest unit, students scored above Jane?", 
        answers: ["A. 394", "B. 250", "C. 400", "D. 106"], 
        correct: "D. 106", 
        questionId: "4"
    }, 
    { 
        question: 
        "If f(x) is an odd function, then | f(x) | is",
        answers: ["A. an odd function", "B. an even function","C. neither odd nor even", "D. even and odd"], 
        correct: "B. an even function", 
        questionId: "5"
    }, 
    { 
        question: 
        "Which of the following is incorrect? Algorithms can be represented:",
        answers: ["A. as pseudo codes", "B. as syntax", "C. as programs", "D. as flowcharts"], 
        correct: "B. as syntax", 
        questionId: "6",
        explanation:"Representation of algorithms *As programs *As flowcharts *As pseudo codes."
    }, 
    { 
        question: 
        "Another name for 1-D arrays.",
        answers: ["A. Linear arrays", "B. Lists", "C. Horizontal array","D. Vertical array"], 
        correct: "A. Linear arrays", 
        questionId: "7",
        explanation:"Explanation: Linear arrays are the 1-Dimensional arrays wherein only one row is present and the items are inserted."
    }, 
    { 
        question: 
        "A system wherein items are added from one and removed from the other end.",
        answers: ["A. Stack", "B. Queue", "C. Linked List", "D. Array"], 
        correct: "B. Queue", 
        questionId: "8"
    }, 
    { 
        question: 
        "A data structure that follows the FIFO principle.",
        answers: ["A. Queue", "B. LL", "C. Stack", "D. Union"], 
        correct: "A. Queue", 
        questionId: "9",
        explanation:"Explanation: The answer is Queue. A Queue follows the FIFO principle. FIFO stands for First In First Out."
    }, 
    { 
        question: 
        "how build the app ?", 
        answers: ["A. Performance", "B. System Evaluation", "C. Modularity", "D. Reliability"], 
        correct: "A. Performance", 
        questionId: "10",
        explanation:"Explanation: Algorithms help us to understand scalability. Performance often draws the line between what is feasible and what is impossible."
    }, 
    
    
    ]; 
    
    // n = 5 to export 5 question 
    export default (n = 5) => 
    Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n)); 
    