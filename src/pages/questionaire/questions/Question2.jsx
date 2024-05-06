import "./Questionaire.css";
const Question2 = () => {
  const areasOfLife1 = [
    "Eating habits",
    "Finances",
    "Home life",
    "Sleeping habits",
    "Work",
  ];
  const areasOfLife2 = [
    "Exercise",
    "Health",
    "Relationships",
    "Social Life",
    "Work-life balance",
  ];

  const ProblemRow = ({ problems }) => (
    <div className="row col-12 col-md-6  flex-column gap-3 pb-3  p-md-0 m-0 ">
      {problems.map((problem, index) => (
        <div className="col-12" key={index}>
          <div className="rating-icon column">
            <i className="fa-regular fa-square"></i>
            <p className="p16">{problem}</p>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <div className="row questionnaire-main flex wrapper">
      <div className="wave"></div>
      <div className="col-sm-12 column p-0  m-0 ">
        <div className="step-title-wrap ">
          <h3 className=" quest-number text-center ">Question 1 of 15</h3>
          <h4 className="h32 step-title text-center ">
            Please share what areas of life you are hoping to improve
          </h4>
        </div>
      </div>

      <div
        className="  rating-icon-box gap-3 p-0 m-0 "
        style={{ maxWidth: "100%" }}
      >
        <div className="  d-md-flex   justify-content-between gap-3   p-0 m-0   ">
          <ProblemRow problems={areasOfLife1} />
          <ProblemRow problems={areasOfLife2} />
        </div>
        <div className=" col-12">
          <div className="rating-icon column">
            <i className="fa-regular fa-square"></i>
            <p className="p16">Other</p>
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

export default Question2;
