import { Link } from "react-router-dom";
import "./Questionaire.css";
const Question14 = () => {
  const areasOfLife1 = [
    "Yes",
    "No",
    
  ];

  const ProblemRow = ({ problems }) => (
    <div className=" d-flex flex-wrap justify-content-between  gap-3 p-md-0 m-0 col ">
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
      
      <div className="col-12" style={{ textAlign: 'center' }}>
      {[...Array(8)].map((_, index) => (
        <i key={index} className="fa fa-window-minimize progress-custom"></i>
      ))}
    </div>
      <div className="col-sm-12 column p-0  m-0 ">
        <div className="step-title-wrap ">
          <h3 className=" quest-number text-center ">Question 14 of 15</h3>
          <h4 className="h32 step-title text-center ">
          Are you having any chronic pain or illness?
          </h4>
        </div>
      </div>

       <div
        className="  rating-icon-box gap-3 p-0 m-0 "
        
      >
        <div className="d-md-flex justify-content-between gap-3 p-0 m-0 ">
          <ProblemRow problems={areasOfLife1} />
        </div>
      <div className=" d-flex justify-content-between  align-items-center pt-3">
          <p className="p16 back-btn"><Link to="/question13">Back</Link></p>

          <Link to="/question15"><button className="next-question-btn">
            Next Question <i className="fa-solid fa-arrow-right"></i>{" "}
          </button></Link>
        </div>
     
      </div>
    </div>
  );
};

export default Question14;
