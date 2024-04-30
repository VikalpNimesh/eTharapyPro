import "./Hero.css";

import mangirl from "../../../assets/images/article/man-girl.png";
const Hero = () => {
  return (
    <div className="article-home-main wrapper">
      <div className="row p-0  m-0 ">
        <div className="left  col-12 col-md-6 ">
          <div className="top d-flex ">
            <p>19 Jan 2022</p>
            <p className=" d-md-block d-none ">Anna Mayak, Psychotherapist</p>
            <p>6 min read</p>
          </div>

          <div className="mid">
            <h1>
              Resolve the problems of life with the help of the marriage
              counseling
            </h1>
          </div>
          <p className=" d-block d-md-none ">Anna Mayak, Psychotherapist</p>

          <div className="right col-12 col-md-6 d-block d-md-none">
          <img src={mangirl} alt="" />
        </div>
          <div className="last d-flex fwra ">
            <p>Marriage counseling</p>
            <p>Online marriage counseling</p>
          </div>

          <div className="social-links d-flex d-md-flex d-none">
            <i className="fa-brands fa-facebook-f flex"></i>
            <i className="fa-brands fa-facebook-f flex"></i>
            <i className="fa-brands fa-facebook-f flex"></i>
            <i className="fa-brands fa-facebook-f flex"></i>
          </div>
        </div>  
        <div className="right col-12 col-md-6 d-md-block d-none">
          <img src={mangirl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
