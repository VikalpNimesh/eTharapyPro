import { Link } from "react-router-dom";
import "./Questionaire.css";
import { ProgressBar, QuestionHeading } from "../Questionaire";
import { useState } from "react";
const Question9 = () => {

  const [selectedOptions, setSelectedOptions] = useState("");

  console.log(selectedOptions);


  const handleSelectChange = (event) => {
    setSelectedOptions(event.target.value);
  };
  return (
    <div className="row questionnaire-main flex wrapper">
      
     <ProgressBar />
      <QuestionHeading num={ 9} question={" What state are you from?"} />
     
       <div
        className="  rating-icon-box gap-3 p-0 m-0 "
        
      >
        <div className="d-md-flex justify-content-between gap-3 p-0 m-0 mx-auto w-100  ">
        <select
              name="state"
              className=" custom-select w-50 " value={selectedOptions}
            onChange={handleSelectChange}
            >
              <option  disabled value="default">
                Select state
              </option>
              <option value="uttrakhand">uttrakhand</option>
              <option value="India">India</option>
            
              
              {/* Other age options */}
            </select>
        </div>
      <div className=" d-flex justify-content-between  align-items-center pt-3">
          <p className="p16 back-btn"><Link to="/question8">Back</Link></p>

          <Link to="/question10"><button className="next-question-btn">
            Next Question <i className="fa-solid fa-arrow-right"></i>{" "}
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Question9;
