import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer wrapper">
      <div className="container p-0 ">
        <div className="row   ">
          <div className="col-6 col-sm-3 p-0   ">
            <ul>
              <p>Login</p>
              <p>Start therapy </p>
              <p>Plans</p>
            </ul>
          </div>
          <div className="col-6 col-sm-3 p-0   ">
            <ul>
              <p>Aboutus</p>
              <p>Blog</p>
              <p>FAQ</p>
            </ul>
          </div>
          <div className="col-6 col-sm-3 p-0   ">
            <ul>
              <p>Mental health tests</p>
              <p>Online-therapy</p>
            </ul>
          </div>
          <div className="col-6 col-sm-3 p-0   ">
            <ul>
              <p>For counselors</p>
              <p>Contact</p>
            </ul>
          </div>
          <div className="col-12 d-flex  justify-content-between align-items-center mt-5 ">
            <div  className=" d-flex mx-lg-4 mx-md-4 ">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div className=" d-flex footer-right  ">
              <p className=" d-flex  text-wrap  text-md-nowrap">Privacy policy</p>
              <p className=" d-flex  text-wrap  text-md-nowrap">Term of service</p>
            </div>
          </div>
            <span className=" last">
              If you are in a life threatening situation - don’t use this site.
              Call +1 (800) 273-8255 or use these resources to get immediate
              help.
          </span>
          <div className="end d-block  d-md-none ">eTherapy.com</div>
          <div className="black-line d-block  d-md-none "></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;





