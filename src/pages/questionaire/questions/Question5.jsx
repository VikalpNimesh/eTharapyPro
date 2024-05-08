import { Link } from "react-router-dom";
import "./Questionaire.css";
import { ProgressBar, QuestionHeading } from "../Questionaire";
const Question5 = () => {
  const areasOfLife1 = ["Yes", "No"];

  const ProblemRow = ({ problems }) => (
    <div className=" d-flex flex-wrap justify-content-between w-100   gap-3 p-md-0 m-0 ">
      {problems.map((problem, index) => (
        <div className="rating-icon col-6-custom " key={index}>
          <i className="fa-regular fa-square"></i>
          <p className="p16">{problem}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="row questionnaire-main flex wrapper">
      <ProgressBar />
      <QuestionHeading num={ 5} question={" Have you recently had any thoughts of self-harm or suicide?"} />
     
      <div className="  rating-icon-box gap-3 p-0 m-0 ">
        <div className="d-md-flex justify-content-between gap-3 p-0 m-0 ">
          <ProblemRow problems={areasOfLife1} />
          {/* <ProblemRow problems={areasOfLife2} /> */}
        </div>
        <div className=" d-flex justify-content-between  align-items-center pt-3">
          <p className="p16 back-btn">
            <Link to="/question4">Back</Link>
          </p>

          <Link to="/question6">
            <button className="next-question-btn">
              Next Question <i className="fa-solid fa-arrow-right"></i>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Question5;
