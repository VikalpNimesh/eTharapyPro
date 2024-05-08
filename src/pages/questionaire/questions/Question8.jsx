import { Link } from "react-router-dom";
import "./Questionaire.css";
import { ProgressBar, QuestionHeading } from "../Questionaire";
const Question8 = () => {
  return (
    <div className="row questionnaire-main flex wrapper">
      <ProgressBar />
      <QuestionHeading num={ 8} question={"  What country do you live in?"} />
      

      <div className="  rating-icon-box gap-3 p-0 m-0 ">
        <div className="d-md-flex justify-content-between gap-3 p-0 m-0 mx-auto w-100  ">
          <select name="country" className=" custom-select w-50 ">
            <option selected disabled value="default">
              Select Country
            </option>
            <option value="Canada">Canada</option>
            <option value="India">India</option>

            {/* Other age options */}
          </select>
        </div>
        <div className=" d-flex justify-content-between  align-items-center pt-3">
          <p className="p16 back-btn">
            <Link to="/question7">Back</Link>
          </p>

          <Link to="/question9">
            <button className="next-question-btn">
              Next Question <i className="fa-solid fa-arrow-right"></i>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Question8;
