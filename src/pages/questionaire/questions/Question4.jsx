import { Link } from "react-router-dom";
import "./Questionaire.css";
const Question4 = () => {
  return (
    <div className="row questionnaire-main flex wrapper">
      <div className="col-12" style={{ textAlign: "center" }}>
        {[...Array(8)].map((_, index) => (
          <i key={index} className="fa fa-window-minimize progress-custom"></i>
        ))}
      </div>
      <div className="col-sm-12 column p-0  m-0 ">
        <div className="step-title-wrap ">
          <h3 className=" quest-number text-center ">Question 4 of 15</h3>
          <h4 className="h32 step-title text-center ">
            If you could change just one thing about your life right now{" "}
          </h4>
        </div>
      </div>

      <div className="  rating-icon-box gap-3 p-0 m-0 ">
        <div className="d-md-flex justify-content-between gap-3 p-0 m-0 mx-auto w-100  ">
          <textarea name="" id="" cols="6"></textarea>
        </div>
        <p className=" p16 text-center ">0 of 300 max characters</p>
        <div className=" d-flex justify-content-between  align-items-center pt-3">
          <p className="p16 back-btn">
            <Link to="/question3">Back</Link>
          </p>

          <Link to="/question5">
            <button className="next-question-btn">
              Next Question <i className="fa-solid fa-arrow-right"></i>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Question4;
