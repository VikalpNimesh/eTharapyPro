import { Link } from "react-router-dom";
import "./Questionaire.css";
import { ProgressBar, QuestionHeading } from "../Questionaire";
const Question13 = () => {
  const areasOfLife = [
    "Yes, religious",
    "Yes, spiritual",
    "Yes, religiou and spiritual ",
    "No",
    "Other",
  ];

  const ProblemRow = ({ problems }) => (
    <div className=" Q3  ">
      {problems?.map((problem, index) => (
        <div className="rating-icon col-4-custum" key={index}>
          <i className="fa-regular fa-square"></i>
          <p className="p16">{problem}</p>
        </div>
      ))}
    </div>
  );
  return (
    <div className="row questionnaire-main flex wrapper">
      <ProgressBar />
      <QuestionHeading num={ 13} question={"  Do you consider yourself a religious or spiritual person?"} />
      

      <div className="  rating-icon-box gap-3 p-0 m-0 ">
        <div className="  d-md-flex  justify-content-between gap-3  p-0 m-0   ">
          <ProblemRow problems={areasOfLife} />
        </div>

        <div className=" d-flex justify-content-between  align-items-center pt-3">
          <p className="p16 back-btn">
            <Link to="/question12">Back</Link>
          </p>

          <Link to="/question14">
            <button className="next-question-btn">
              Next Question <i className="fa-solid fa-arrow-right"></i>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Question13;
