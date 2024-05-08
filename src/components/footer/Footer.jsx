import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer wrapper">
      <div className="container p-0 m-0 ">
        <div className="row p-0 m-0   ">
          <div className="col-6 col-sm-3 p-0 m-0   ">
            <ul>
              <p>Login</p>
              <p><Link to="/question1">Start therapy</Link></p>
              <p><Link to="/pricing-page">Plans</Link></p>
            </ul>
          </div>
          <div className="col-6 col-sm-3 p-0 m-0   ">
            <ul>
              <p> <Link to="/aboutus">About</Link></p>
              <p><Link to="/">Blog</Link></p>
              <p><Link to="/faq">FAQ</Link></p>
            </ul>
          </div>
          <div className="col-6 col-sm-3 p-0 m-0   ">
            <ul>
              <p>Mental health tests</p>
              <p>Online-therapy</p>
            </ul>
          </div>
          <div className="col-6 col-sm-3 p-0 m-0   ">
            <ul>
              <p>For counselors</p>
              <p><Link to="/contact-us">Contact</Link></p>
            </ul>
          </div>
          <div className="col-12 d-flex  justify-content-between align-items-center mt-5 ">
            <div  className=" d-flex mx-lg-4 mx-md-4 ">
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-facebook"></i>
            </div>
            <div className=" d-flex footer-right  ">
              <p className=" d-flex  text-wrap  text-md-nowrap"><Link to="/privacy">Privacy policy</Link></p>
              <p className=" d-flex  text-wrap  text-md-nowrap"><Link to="/t&c">Term of service</Link></p>
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





