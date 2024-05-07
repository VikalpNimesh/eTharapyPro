import { Link } from "react-router-dom";
import "./Questionaire.css";
import { useState } from "react";
const Question2 = () => {

  const [selectedOption, setSelectedOption] = useState(null);
  const areasOfLife1 = [
    "Eating habits",
    "Finances",
    "Home life",
    "Sleeping habits",
    "Work","Exercise",
    "Health",
    "Relationships",
    "Social Life",
    "Work-life balance",
  ];
  const areasOfLife2 = [
    "Exercise",
    "Health",
    "Relationships",
    "Social Life",
    "Work-life balance",
  ];

  const optionSelected = (index) => {
    setSelectedOption(index === selectedOption ? null : index)
  }

  const ProblemRow = ({ problems }) => (
    <div className=" d-flex flex-wrap align-items-center justify-content-center  gap-3   w-100  pb-3   p-md-0 m-0 ">
      {problems.map((problem, index) => (
        <div className="col-12  col-sm-5   p-0 m-0 " key={index} >
          <div className="rating-icon column " onClick={()=>optionSelected(index)} >
            <i className={index === selectedOption ? 'fa-regular fa-square-check' : 'fa-regular fa-square'}></i>
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
          <h3 className=" quest-number text-center ">Question 2 of 15</h3>
          <h4 className="h32 step-title text-center ">
            Please share what areas of life you are hoping to improve
          </h4>
        </div>
      </div>

      <div
        className="  rating-icon-box gap-3 p-0 m-0 "
        
      >
        <div className="    p-0 m-0   ">
          <ProblemRow problems={areasOfLife1} />
          {/* <ProblemRow problems={areasOfLife2} /> */}
        </div>
        <div className=" mx-auto  col-12 col-sm-10 ">
          <div className="rating-icon column px-4 ">
            <i className="fa-regular fa-square"></i>
            <p className="p16">Other</p>
          </div>
        </div>
        <div className="mx-auto  col-12 col-sm-10  d-flex justify-content-between  align-items-center pt-3">
          <p className="p16 back-btn"><Link to="/question1">Back</Link></p>

          <Link to="/question3"><button className="next-question-btn">
            Next Question <i className="fa-solid fa-arrow-right"></i>{" "}
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Question2;
