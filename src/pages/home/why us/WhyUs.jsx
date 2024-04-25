import React from "react";
import "./WhyUs.css";
import img from "../../../assets/images/whyus.png";

const WhyUs = () => {
  return (
    <div className="wrapper whyus-main pb-0 ">
      <div className="row main m-0 ">
        <div className="upper row gap-5 gap-md-0  m-0 p-0 ">
          <h1 className="heading col-12 col-md-6 text-start text-sm-center  ">
            Why <span className="span-green">Us ?</span>
          </h1>
          <div className=" p-box col-12 col-md-6 p-0 m-0  ">
            <p>
              <span className="bold"> Founded in 2016,</span> eTherapyPro is one
              of the longest running online counselling platforms. It's also the
              most affordable.
            </p>
            <p>
              With eTherapyPro you can choose which services you want when you
              need them the most.
            </p>
          </div>
        </div>
        <div className=" lower row m-0 p-0   ">
          <div className=" col-12 col-md-6 p-md-5 p-0  m-0  ">
            <div className="row box col-12 p-0 m-0  ">
              <ul className="list-item col-12 col-md-6  p-0 m-0  ">
                <li className="list-item-content">
                  <i className="icon fa-brands fa-wirsindhandwerk"></i>
                  <p className="text">Most affordable</p>
                  <i className="icon fa-solid fa-plus"></i>
                </li>
                <li className="list-item-content">
                  <i className="icon fa-brands fa-wirsindhandwerk"></i>
                  <p className="text">Most affordable</p>
                  <i className="icon fa-solid fa-plus"></i>
                </li>
                <li className="list-item-content bottom-bor">
                  <i className="icon fa-brands fa-wirsindhandwerk"></i>
                  <p className="text">Most affordable</p>
                  <i className="icon fa-solid fa-plus"></i>
                </li>
              </ul>
              <ul className="list-item  col-12 col-md-6 p-0 m-0  ">
                <li className="list-item-content">
                  <i className="icon fa-brands fa-wirsindhandwerk"></i>
                  <p className="text">Most affordable</p>
                  <i className="icon fa-solid fa-plus"></i>
                </li>
                <li className="list-item-content">
                  <i className="icon fa-brands fa-wirsindhandwerk"></i>
                  <p className="text">Most affordable</p>
                  <i className="icon fa-solid fa-plus"></i>
                </li>
                <li className="list-item-content bottom-bor">
                  <i className="icon fa-brands fa-wirsindhandwerk"></i>
                  <p className="text">Most affordable</p>
                  <i className="icon fa-solid fa-plus"></i>
                </li>
              </ul>
            </div>
            <button className=" col-12  ">Start Therapy</button>
          </div>

          <div className="img-box p-0 m-0  col-12 col-md-6">
            <img className="whyus-img d-none d-md-block" src={img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
