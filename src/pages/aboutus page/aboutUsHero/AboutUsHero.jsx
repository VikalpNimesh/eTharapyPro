import React from "react";
import "./AboutUsHero.css";

const AboutUsHero = () => {
  return (
    <div className="wrapper pt-0    about-hero pb-0  ">
      <h1>
        Life is a <span className="span-green">Journey </span>
      </h1>

      <div>
      <p className=" text-center ">
        We realize that is a convenient cliche but we really mean it at
        eTherapyPro. 
      </p>
      <p className=" text-center ">
      Life is a figurative journey through the ups and downs of
        experience and a literal journey through space and time. 
      </p>
      </div>
      <button className="cta-btn">Start Your Journey</button>
    </div>
  );
};

export default AboutUsHero;
