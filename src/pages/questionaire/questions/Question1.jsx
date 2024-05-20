import { Link } from "react-router-dom";
import "./Questionaire.css";
import { ProgressBar, QuestionHeading } from "../Questionaire";
import { useState } from "react";
const Question1 = () => {
  const feelings = ["Awful", "Not Great", "Neutral", "Good", "Great"];

  const [selectedOptions, setSelectedOptions] = useState([]);
  console.log(selectedOptions);

  const optionSelected = (feeling) => {
    if (!selectedOptions.includes(feeling)) {
      setSelectedOptions([feeling]);
    }
  };

  return (
    <div className="row questionnaire-main flex wrapper">
      

      <QuestionHeading num={1} question={"How are you feeling today?"} />

      <div className="rating-icon-box  gap-3 p-0  m-0 ">
        {feelings.map((feeling, index) => (
          <div
            key={index}
           
            className={`rating-icon  ${
              selectedOptions.includes(feeling) ? "check-green" : ""
            }`}
            onClick={() => optionSelected(feeling)}
          >
            <i className="fa-regular fa-face-frown-open"></i>
            <p className="p16">{feeling}</p>
          </div>
        ))}

        <div className=" d-flex justify-content-between  align-items-center pt-3">
          <p className="p16 back-btn">
            <Link to="/">Back</Link>
          </p>

          <Link to="/questionnaire/question2">
            <button className="next-question-btn">
              Next Question <i className="fa-solid fa-arrow-right"></i>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Question1;
