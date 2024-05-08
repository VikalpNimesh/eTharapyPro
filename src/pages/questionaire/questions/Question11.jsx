import { Link } from "react-router-dom";
import "./Questionaire.css";
import { ProgressBar, QuestionHeading } from "../Questionaire";
const Question11 = () => {

  const areasOfLife = ["Male", "Female", "Gender-fluid","Transgender AFAB", "Agender", "Transgender A","Not sure", "Intersex", "Other"]

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
      <QuestionHeading num={11 } question={" What gender do you most identify with? "} />
      
       <div
        className="  rating-icon-box gap-3 p-0 m-0 "
        
      >
        <div className="  d-md-flex  justify-content-between gap-3  p-0 m-0   ">
          <ProblemRow problems={areasOfLife} />
        
        </div>
     
      <div className=" d-flex justify-content-between  align-items-center pt-3">
          <p className="p16 back-btn"><Link to="/question10">Back</Link></p>

          <Link to="/question12"><button className="next-question-btn">
            Next Question <i className="fa-solid fa-arrow-right"></i>{" "}
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Question11;
