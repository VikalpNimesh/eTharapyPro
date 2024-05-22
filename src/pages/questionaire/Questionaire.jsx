import { Routes, Route, Navigate } from "react-router-dom";
import Question1 from "./questions/Question1";
import Question2 from "./questions/Question2";
import Question3 from "./questions/Question3.jsx";
import Question4 from "./questions/Question4.jsx";
import Question5 from "./questions/Question5.jsx";
import Question6 from "./questions/Question6.jsx";
import Question7 from "./questions/Question7.jsx";
import Question8 from "./questions/Question8.jsx";
import Question9 from "./questions/Question9.jsx";
import Question10 from "./questions/Question10.jsx";
import Question11 from "./questions/Question11.jsx";
import Question12 from "./questions/Question12.jsx";
import Question13 from "./questions/Question13.jsx";
import Question14 from "./questions/Question14.jsx";
import Question15 from "./questions/Question15.jsx";

export const ProgressBar = () => {
  return (
    <div className="col-12" style={{ textAlign: "center" }}>
      {[...Array(8)].map((_, index) => (
        <i key={index} className="fa fa-window-minimize progress-custom"></i>
      ))}
    </div>
  )
}

export const QuestionHeading = ({ num, question }) => {
  return (
    <div className="col-sm-12 column p-0 m-0">
      <div className="step-title-wrap">
        <h3 className="quest-number text-center">Question {num} of 15</h3>
        <h4 className="h32 step-title text-center">
          {question}
        </h4>
      </div>
    </div>
  )
}

const Questionnaire = () => {
  return (
    <div className="questionnaire-main">
      <ProgressBar />
      <Routes>
        <Route path="/" element={<Navigate to="question1" replace />} />
        <Route path="question1" element={<Question1 />} />
        <Route path="question2" element={<Question2 />} />
        <Route path="question3" element={<Question3 />} />
        <Route path="question4" element={<Question4 />} />
        <Route path="question5" element={<Question5 />} />
        <Route path="question6" element={<Question6 />} />
        <Route path="question7" element={<Question7 />} />
        <Route path="question8" element={<Question8 />} />
        <Route path="question9" element={<Question9 />} />
        <Route path="question10" element={<Question10 />} />
        <Route path="question11" element={<Question11 />} />
        <Route path="question12" element={<Question12 />} />
        <Route path="question13" element={<Question13 />} />
        <Route path="question14" element={<Question14 />} />
        <Route path="question15" element={<Question15 />} />
      </Routes>
    </div>
  );
};

export default Questionnaire;
