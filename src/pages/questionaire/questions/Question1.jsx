import "./Questionaire.css";
const Question1 = () => {
  const feelings = ["Awful", "Not Great", "Neutral", "Good", "Great"];
  return (
    <div className="row questionnaire-main flex wrapper">
      <div className="wave"></div>
      <div className="col-sm-12 column p-0  m-0 ">
        <div className="step-title-wrap ">
          <h3 className=" quest-number text-center ">Question 1 of 15</h3>
          <h4 className="h32 step-title text-center ">
            How are you feeling today?
          </h4>
        </div>
      </div>

      <div className="rating-icon-box  gap-3 p-0  m-0 ">
        {feelings.map((feeling, index) => (
          <div key={index} className="rating-icon column">
            <i className="fa-regular fa-face-frown-open"></i>
            <p className="p16">{feeling}</p>
          </div>
        ))}

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

export default Question1;
