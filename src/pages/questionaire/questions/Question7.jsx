import "./Questionaire.css";
const Question6 = () => {
  return (
    <div className="row questionnaire-main flex wrapper">
      <div className="wave"></div>
      <div className="col-sm-12 column p-0  m-0 ">
        <div className="step-title-wrap ">
          <h3 className=" quest-number text-center ">Question 7 of 15</h3>
          <h4 className="h32 step-title text-center ">What is your age?</h4>
        </div>
      </div>

      <div
        className="  rating-icon-box gap-3 p-0 m-0 "
        style={{ maxWidth: "100%" }}
      >
        <div className="d-md-flex justify-content-between gap-3 p-0 m-0 mx-md-auto  ">
          <div className="col  ">
            <select
              name="age"
              className=" custom-select  mx-auto   "
            >
              <option selected disabled value="default">
                Select Your Age
              </option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              {/* Other age options */}
            </select>
            <div
              className="small mt-2"
              style={{ fontSize: "100%", fontWeight: 600, marginTop: "1rem" }}
            >
              You must be at least 18 years old to use eTherapyPro.
            </div>
          </div>
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

export default Question6;
