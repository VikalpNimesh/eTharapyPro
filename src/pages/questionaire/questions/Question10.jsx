import { Link } from "react-router-dom";
import "./Questionaire.css";
const Question10 = () => {

  const areasOfLife1 = ["Single", "Dating", "Married", "Domestic Partnership"]
  const areasOfLife2 = ["Open Relationship", "Separated", "Not Sure", "Divorced"]
  const areasOfLife3 = ["It's complicated", "Polyamorous", "Widowed", "Other"]
  const ProblemRow = ({ problems }) => (
    <div className="row col-12 col-md-4  flex-column gap-3 pb-3  p-md-0 m-0 ">
      {problems.map((problem, index) => (
        <div className="col-12 m-0 p-0 " key={index}>
          <div className="rating-icon column">
            <i className="fa-regular fa-square"></i>
            <p className="p16">{problem}</p>
          </div>
        </div>
      ))}
    </div> 
  );
  return (
    <div className="row questionnaire-main flex wrapper">
      
      <div className="col-12" style={{ textAlign: 'center' }}>
      {[...Array(8)].map((_, index) => (
        <i key={index} className="fa fa-window-minimize progress-custom"></i>
      ))}
    </div>
      <div className="col-sm-12 column p-0  m-0 ">
        <div className="step-title-wrap ">
          <h3 className=" quest-number text-center ">Question 10 of 15</h3>
          <h4 className="h32 step-title text-center ">
          What is your relationship status? </h4>
        </div>
      </div>

       <div
        className="  rating-icon-box gap-3 p-0 m-0 "
        
      >
        <div className="  d-md-flex  justify-content-between gap-3  p-0 m-0   ">
          <ProblemRow problems={areasOfLife1} />
          <ProblemRow problems={areasOfLife2} />
          <ProblemRow problems={areasOfLife3} />
        </div>
     
      <div className=" d-flex justify-content-between  align-items-center pt-3">
          <p className="p16 back-btn"><Link to="/question9">Back</Link></p>

          <Link to="/question11"><button className="next-question-btn">
            Next Question <i className="fa-solid fa-arrow-right"></i>{" "}
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Question10;
