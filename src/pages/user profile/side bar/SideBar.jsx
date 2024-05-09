import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/etherapylogo.png";

const SideBar = () => {
  return (
    <div className=" sidebar-main user-wrapper">
      <div className="header-logo-box">
        <Link
          className="navbar-brand header-logo d-flex  align-items-center "
          to="/"
        >
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <div>
        <ul className="">
          <li  className=" d-flex gap-3  align-items-center  ">
              <i className="fa-regular fa-id-badge"></i>
            <h2>
              <Link to="/aboutus">Subscription</Link>
            </h2>
          </li>
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-message"></i>
            <h2>
              <Link to="/pricing-page">Messages</Link>
            </h2>
          </li>
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-calendar"></i>
            <h2>
              <Link to="/">Session</Link>
            </h2>
          </li>
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-bookmark"></i>
            <h2>
              <Link to="/">Blog</Link>
            </h2>
          </li>
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-user"></i>
            <h2>
              <Link to="/faq">Account Settings</Link>
            </h2>
          </li>
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-star"></i>
            <h2>
              <Link to="/"> Review</Link>
            </h2>
          </li>
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-comment"></i>
            <h2>
              <Link to="/"> Contact Us</Link>
            </h2>
          </li>
        </ul>

        <div className=" logout">
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <h2>
              <Link to="/faq">Log Out</Link>
            </h2>
          </li>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
