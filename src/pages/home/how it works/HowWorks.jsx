import Button from "./button/Button";
import "./HowWorks.css";
import pic1 from "../../../assets/images/Screenshot 2024-04-22 172356.png";
import pic2 from "../../../assets/images/Screenshot 2024-04-22 172434.png";
import pic3 from "../../../assets/images/Screenshot 2024-04-22 172552.png";

const HowWorks = () => {
  return (
    <div className="how-work-main wrapper">
      <h1>
        How the <span className="span-green">Journey</span> Works
      </h1>

      <div className="works-mid row">
        <div className="col-lg-4 col-12 column ">
          <img src={pic1} alt="" />
          <p>Get matched with a therapist based on your needs</p>
        </div>
        <div className="works-mid-padding  col-lg-4 col-12  column">
          <img src={pic2} alt="" />
          <p>Explore your options through text, audio, and video messages</p>
        </div>
        <div className="col-lg-4 col-12  column">
          <img src={pic3} alt="" />
          <p>Work together to reach your goals</p>
        </div>
      </div>
      <Button />
    </div>
  );
};

export default HowWorks;
