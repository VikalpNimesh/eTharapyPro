import { Link } from "react-router-dom";
import { ProgressBar, QuestionHeading } from "../Questionaire";
import { useState } from "react";
const Question6 = () => {
  const [selectedOptions, setSelectedOptions] = useState("");
  console.log(selectedOptions);

  const handleSelectChange = (event) => {
    setSelectedOptions(event.target.value);
  };

  return (
    <div className="row questionnaire-main flex wrapper">
      
      <QuestionHeading num={7} question={"What is your age? "} />

      <div className="rating-icon-box gap-3 p-0 m-0">
        <div className="d-md-flex justify-content-between gap-3 p-0 m-0 mx-md-auto w-100">
          <select
            name="age"
            className="custom-select w-50"
            value={selectedOptions}
            onChange={handleSelectChange}
          >
            <option disabled value="default">
              Select Your Age
            </option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            {/* Other age options */}
          </select>
        </div>
        <p
          className="small mt-2 text-center"
          style={{ fontSize: "100%", fontWeight: 600, marginTop: "1rem" }}
        >
          You must be at least 18 years old to use eTherapyPro.
        </p>
        <div className="d-flex justify-content-between align-items-center pt-3">
          <p className="p16 back-btn">
            <Link to="/questionnaire/question6">Back</Link>
          </p>
          <Link to="/questionnaire/question8">
            <button className="next-question-btn">
              Next Question <i className="fa-solid fa-arrow-right"></i>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Question6;
