import { Link } from "react-router-dom";
import "./Questionaire.css";
import { ProgressBar, QuestionHeading } from "../Questionaire";
import { useState } from "react";
const Question4 = () => {
  const [selectedOptions, setSelectedOptions] = useState("");

  console.log(selectedOptions);
  const optionSelected = (value) => {
    setSelectedOptions([value]);
  };

  return (
    <div className="row questionnaire-main flex wrapper">
      <ProgressBar />
      <QuestionHeading
        num={4}
        question={
          "  If you could change just one thing about your life right now"
        }
      />

      <div className="  rating-icon-box gap-3 p-0 m-0 ">
        <div className="d-md-flex justify-content-between gap-3 p-0 m-0 mx-auto w-100  ">
          <textarea
            name=""
            id=""
            cols="6"
            value={selectedOptions}
            onChange={(e) => optionSelected(e.target.value)}
          ></textarea>
        </div>
        <p className=" p16 text-center ">
          {selectedOptions ? selectedOptions[0].length : "0"} of 300 max
          characters
        </p>
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
