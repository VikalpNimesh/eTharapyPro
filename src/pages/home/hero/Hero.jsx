import "./Hero.css";
import right from "../../../assets/images/hero-right.png";
import Button from "./button/Button";

const Hero = () => {
  return (
    <div className="hero-main  wrapper ">
      <div className="row col-12 ">
        <div className="hero-left col-lg-6  col-md-12  p-0 justify-content-sm-center ">
          <h1>
            Your <span className="span-green span-ball"></span> Guide to 
            <span className="span-green">Happiness</span>
          </h1>
          <p>
            Experience life's journey with eTherapyPro's online <br />
            therapy guidance.
          </p>
          <div className="hero-btn-box">
            <Button />
            <p className="price-content">
              From $5 <span>/ 3 days</span>
            </p>
          </div>
        </div>
        <div className="hero-right col-lg-6 p-0  col-md-12   ">
          <img
            // src="../../../assets/images/hero-right.png" alt="hero"
            src={right}
          />
        </div>
      </div>
      <div className="container">
        <div className="hero-cta row col-12 ">
          <button className="ctabuttonStyle col-lg-2 ">
            <a href="">Custom Matching</a>
          </button>
          <p className="col-lg-8">
            We will individually match you with a therapist{" "}
            <span className="span-green">based on your needs.</span>
          </p>
          <div className="col-lg-2">></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
