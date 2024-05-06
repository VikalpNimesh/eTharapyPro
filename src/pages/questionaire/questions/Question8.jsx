import "./Questionaire.css";
const Question8 = () => {
  return (
    <div className="row questionnaire-main flex wrapper">
      <div className="wave"></div>
      <div className="col-sm-12 column p-0  m-0 ">
        <div className="step-title-wrap ">
          <h3 className=" quest-number text-center ">Question 8 of 15</h3>
          <h4 className="h32 step-title text-center ">What country do you live in?</h4>
        </div>
      </div>

      <div
        className="  rating-icon-box gap-3 p-0 m-0 "
        style={{ maxWidth: "100%" }}
      >
        <div className="d-md-flex justify-content-between gap-3 p-0 m-0 mx-auto w-100  ">
        <select
              name="country"
              className=" custom-select w-50 "
            >
              <option selected disabled value="default">
                Select Country
              </option>
              <option value="Canada">Canada</option>
              <option value="India">India</option>
            
              
              {/* Other age options */}
            </select>
        </div>
        <div className=" d-flex justify-content-between  align-items-center pt-3">
          <p className="p16 back-btn">Back</p>

          <button className="next-question-btn">
            Next Question <i className="fa-solid fa-arrow-right"></i>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question8;
