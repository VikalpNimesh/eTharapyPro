import React from "react";
import "./Questionaire.css";
import { Link } from "react-router-dom";

const EmotionalStruggles = [
  "Abuse",
  "Panic Attacks",
  "Anger",
  "Family",
  "Relationships",
  "Social",
  "Anxiety",
  "Depression",
  "Fatigue",
  "Trauma/PTSD",
  "Isomnia",
  "Stress",
  "Motivation",
  "Parenting",
  "Self-esteem",
  "Work",
  "Spirituality",
  "Stress",
  "Weight",
  "Anxiety",
  "Eating",
  "Disorder",
  "Grief/Loss",
  "Intimacy",
  "OCD",
  "Procrastination",
  "Sexuality",
  "Other"
];

const ProblemRow = ({ problems }) => (
  <div className=" Q3  ">
    {problems?.map((problem, index) => (
      <div className="rating-icon col-3-custom" key={index}>
        <i className="fa-regular fa-square"></i>
        <p className="p16">{problem}</p>
      </div>
    ))}
  </div>
);

const Question3 = () => {
  return (
    <div className="row questionnaire-main flex wrapper  ">
      <div className="col-12" style={{ textAlign: "center" }}>
        {[...Array(8)].map((_, index) => (
          <i key={index} className="fa fa-window-minimize progress-custom"></i>
        ))}
      </div>
      <div className="col-sm-12 column p-0  m-0 ">
        <div className="step-title-wrap ">
          <h3 className=" quest-number text-center ">Question 3 of 15</h3>
          <h4 className="h32 step-title text-center ">
            Select any of these challenges you are facing
          </h4>
        </div>
      </div>

      <div className=" rating-icon-box gap-3 p-0 m-0 ">
        <ProblemRow problems={EmotionalStruggles} />

        <div className=" d-flex justify-content-between  align-items-center pt-3 ">
          <p className="p16 back-btn">
            <Link to="/question2">Back</Link>
          </p>

          <Link to="/question4">
            <button className="next-question-btn">
              Next Question <i className="fa-solid fa-arrow-right"></i>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Question3;
