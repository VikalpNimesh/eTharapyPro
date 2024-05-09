import { Link } from "react-router-dom";
import "./Questionaire.css";
import { ProgressBar, QuestionHeading } from "../Questionaire";
import { useState } from "react";
const Question11 = () => {
  const areasOfLife = ["Male", "Female", "Gender-fluid","Transgender AFAB", "Agender", "Transgender A","Not sure", "Intersex", "Other"]

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [otherText, setOtherText] = useState("");
  const [IsOtherIputActive, setIsOtherIputActive] = useState(false);

const optionSelected = (problem) => {
  if (!selectedOptions.includes(problem)) {
    setSelectedOptions([...selectedOptions, problem]);
    if (problem == "Other") {
      setIsOtherIputActive(true);
    }
  } else {
    if (selectedOptions.includes("Other")) {
      setIsOtherIputActive(false);
    }
    setSelectedOptions(
      selectedOptions.filter((option) => option !== problem)
    );
  }
};

const handleNextBtn = () => {
  if (selectedOptions.includes("Other")) {
    const index = selectedOptions.indexOf("Other");
    selectedOptions.splice(index, 1, otherText);
  }
  console.log(selectedOptions);
  };
  const ProblemRow = ({ problems }) => (
    <div className=" Q3">
      {problems.map((problem, index) => (
        <div
          className={`rating-icon col-4-custom ${
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
      
     <ProgressBar />
      <QuestionHeading num={11 } question={" What gender do you most identify with? "} />
      
       <div
        className="  rating-icon-box gap-3 p-0 m-0 "
        
      >
        <div className="  d-md-flex  justify-content-between gap-3  p-0 m-0   ">
          <ProblemRow problems={areasOfLife} />
        
        </div>
        {IsOtherIputActive && (
          <div className="mx-auto col-12">
            <div className="rating-icon hover-none">
              <input
                type="text"
                placeholder="Other"
                className="p16"
                value={otherText}
                onChange={(e) => setOtherText(e.target.value)}
              />
            </div>
          </div>
        )}
      <div className=" d-flex justify-content-between  align-items-center pt-3">
          <p className="p16 back-btn"><Link to="/question10">Back</Link></p>

          <Link to="/question12"><button className="next-question-btn" onClick={handleNextBtn}>
            Next Question <i className="fa-solid fa-arrow-right"></i>{" "}
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Question11;
