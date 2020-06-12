
import React, {useState} from "react"; 
import "../style.css";
  
// Function to question inside our app 
const QuestionBox = ({ question, options, selected}) => { 
  const [answers, setAnswer] = useState(options); 
  return ( 
    <div className="questionBox"> 
        <div className="question">{question}</div> 
        {answers && answers.map((text, index) => ( 
          <button 
              key={index} 
              className="answerBtn"
              onClick={()=>{ 
                    setAnswer(); 
                    selected(text); 
                  }}> {text} 
         </button> 
        ))} 
    </div> 
  ) 
}; 

  
export default QuestionBox; 