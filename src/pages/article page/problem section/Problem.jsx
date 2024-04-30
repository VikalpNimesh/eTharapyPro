import "./ProblemSection.css";
import help from "../../../assets/images/article/Screenshot 2024-04-25 111611.png";
const ProblemSection = () => {
  return (
    <div className="problem-main col-12 col-md-8 ">
      <div className="first">
        <h2>Help to figure out the problem</h2>
        <p className="p18">
          During a discussion and debate, you can find some complex problems.
          During the online counseling session, you can figure out various types
          of problems. During such sessions, the couple got the opportunity to
          discuss many problems.
        </p>
        <img src={help} alt="" />
      </div>
      <h2>Help to figure out the problem</h2>
        <p className="p18">
          During a discussion and debate, you can find some complex problems.
          During the online counseling session, you can figure out various types
          of problems. During such sessions, the couple got the opportunity to
          discuss many problems.
      </p>
      
      
    </div>
  );
};

export default ProblemSection;
