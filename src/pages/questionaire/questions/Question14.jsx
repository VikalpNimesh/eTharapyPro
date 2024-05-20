import { Link } from "react-router-dom";
import "./Questionaire.css";
import { ProgressBar, QuestionHeading } from "../Questionaire";
import { useState } from "react";
const Question14 = () => {
  const areasOfLife1 = [
    "Yes",
    "No",
    
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);
  console.log(selectedOptions);

  const optionSelected = (feeling) => {
    if (!selectedOptions.includes(feeling)) {
      setSelectedOptions([feeling]);
    }
  };

  const ProblemRow = ({ problems }) => (
    <div className=" Q3 ">
      {problems.map((problem, index) => (
        <div
          className={`rating-icon col-6-custom ${
            selectedOptions.includes(problem) ? "check-green" : ""
          }`}
          key={index}
          onClick={() => optionSelected(problem)}
        >
          <i
            className={
              selectedOptions.includes(problem)
                ? "fa-regular fa-square-check text-light "
                : "fa-regular fa-square"
            }
          ></i>
          <p
            className={
              selectedOptions.includes(problem) ? " p16 text-light " : " p16"
            }
          >
            {problem}
          </p>
        </div>
      ))}
    </div>
  );
  return (
    <div className="row questionnaire-main flex wrapper">
      
     
      <QuestionHeading num={ 14} question={"  Are you having any chronic pain or illness?"} />
     
       <div
        className="  rating-icon-box gap-3 p-0 m-0 "
        
      >
        <div className="d-md-flex justify-content-between gap-3 p-0 m-0 ">
          <ProblemRow problems={areasOfLife1} />
        </div>
      <div className=" d-flex justify-content-between  align-items-center pt-3">
          <p className="p16 back-btn"><Link to="/questionnaire/question13">Back</Link></p>

          <Link to="/questionnaire/question15"><button className="next-question-btn" >
            Next Question <i className="fa-solid fa-arrow-right"></i>{" "}
          </button></Link>
        </div>
     
      </div>
    </div>
  );
};

export default Question14;
