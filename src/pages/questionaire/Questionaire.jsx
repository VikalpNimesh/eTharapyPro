
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
export const QuestionHeading = ({ num , question}) => {
  return (
    <div className="col-sm-12 column p-0  m-0 ">
    <div className="step-title-wrap ">
      <h3 className=" quest-number text-center ">Question {num} of 15</h3>
      <h4 className="h32 step-title text-center ">
        {question}
      </h4>
    </div>
  </div>
  )
}


const Questionnaire = () => {

  return (
    <> 
      
      <Question1 />
      <Question2 />
      <Question3 />
      <Question4 />
      <Question5 />
      <Question6 />
      <Question7 />
      <Question8 />
      <Question9 />
      <Question10 />
      <Question11 />
      <Question12 />
      <Question13 />
      <Question14 />
      <Question15 />

    </>
  );
};

export default Questionnaire;
