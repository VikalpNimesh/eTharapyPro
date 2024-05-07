import { Link } from "react-router-dom";
import "./Questionaire.css";
const Question9 = () => {
  return (
    <div className="row questionnaire-main flex wrapper">
      
      <div className="col-12" style={{ textAlign: 'center' }}>
      {[...Array(8)].map((_, index) => (
        <i key={index} className="fa fa-window-minimize progress-custom"></i>
      ))}
    </div>
      <div className="col-sm-12 column p-0  m-0 ">
        <div className="step-title-wrap ">
          <h3 className=" quest-number text-center ">Question 9 of 15</h3>
          <h4 className="h32 step-title text-center ">What state are you from?</h4>
        </div>
      </div>

       <div
        className="  rating-icon-box gap-3 p-0 m-0 "
        
      >
        <div className="d-md-flex justify-content-between gap-3 p-0 m-0 mx-auto w-100  ">
        <select
              name="state"
              className=" custom-select w-50 "
            >
              <option selected disabled value="default">
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
