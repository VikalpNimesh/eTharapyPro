import React from 'react';
import "./Questionaire.css";

const EmotionalStruggles = ["Abuse", "Panic Attacks", "Anger", "Family", "Relationships", "Social", "Anxiety"];
const MentalChallenges = ["Depression", "Fatigue", "Trauma/PTSD", "Isomnia", "Stress", "Motivation", "Parenting"];
const PersonalReflections = ["Self-esteem", "Work", "up", "Spirituality", "Stress", "Weight", "Anxiety"];
const PsychologicalObstacles = ["Eating", "Disorder", "Grief/Loss", "Intimacy", "OCD", "Procrastination", "Sexuality"];
const LifePressures = ["Stress", "Work", "Other"];

const ProblemRow = ({ problems }) => (
  <div className="row col-12 col-md-3  flex-column gap-3 pb-3  p-md-0 m-0 ">
    {problems.map((problem, index) => (
      <div className="rating-icon column" key={index}>
        <i className="fa-regular fa-square"></i>
        <p className="p16">{problem}</p>
      </div>
    ))}
  </div>
);

const Question3 = () => {
  return (
    <div className="row questionnaire-main flex wrapper">
      <div className="wave"></div>
      <div className="col-sm-12 column p-0  m-0 ">
        <div className="step-title-wrap ">
          <h3 className=" quest-number text-center ">Question 3 of 15</h3>
          <h4 className="h32 step-title text-center ">
            Select any of these challenges you are facing
          </h4>
        </div>
      </div>

      <div
        className="  rating-icon-box gap-3 p-0 m-0 "
        style={{ maxWidth: "100%" }}
      >
        <div className="  d-md-flex   justify-content-between gap-3   p-0 m-0   ">
          <ProblemRow problems={EmotionalStruggles} />
          <ProblemRow problems={MentalChallenges} />
          <ProblemRow problems={PersonalReflections} />
          <ProblemRow problems={PsychologicalObstacles} />
          {/* <ProblemRow problems={LifePressures} /> */}
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

export default Question3;
