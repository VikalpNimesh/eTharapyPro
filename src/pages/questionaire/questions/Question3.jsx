import React from "react";
import "./Questionaire.css";
import { ProgressBar, QuestionHeading } from "../Questionaire";
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
      <ProgressBar />
      <QuestionHeading num={ 3} question={"Select any of these challenges you are facing "} />
      

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
