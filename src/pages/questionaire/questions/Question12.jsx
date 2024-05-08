import { Link } from "react-router-dom";
import "./Questionaire.css";
import { ProgressBar, QuestionHeading } from "../Questionaire";
const Question12 = () => {
  const areasOfLife = [
    "Heterosexual/Straight",
      "Bisexual",
       "Homosexual/Gay/Lesbian",
      "Asexual",
      "Not sure",
    "Other"
    
  ];
 

  const ProblemRow = ({ problems }) => (
    <div className=" d-flex flex-wrap justify-content-between  gap-3 p-md-0 m-0  ">
      {problems?.map((problem, index) => (
        <div className="rating-icon col-6-custom" key={index}>
          <i className="fa-regular fa-square"></i>
          <p className="p16">{problem}</p>
        </div>
      ))}
    </div>
  );
    
  return (
    <div className="row questionnaire-main flex wrapper">
      
     <ProgressBar />
      <QuestionHeading num={12 } question={" Which best describes your sexual orientation?  "} />
     

       <div
        className="  rating-icon-box gap-3 p-0 m-0 "
        
      >
        <div className="d-md-flex justify-content-between gap-3 p-0 m-0 ">
          <ProblemRow problems={areasOfLife} />
        
        </div>
      <div className=" d-flex justify-content-between  align-items-center pt-3">
          <p className="p16 back-btn"><Link to="/question11">Back</Link></p>

          <Link to="/question13"><button className="next-question-btn">
            Next Question <i className="fa-solid fa-arrow-right"></i>{" "}
          </button></Link>
        </div>
     
      </div>
    </div>
  );
};

export default Question12;
