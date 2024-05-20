import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/etherapylogo.png";

const SideBar = () => {
  return (
    // <div className="offcanvas offcanvas-start " data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  
    // </div>
    <div className=" sidebar-main user-wrapper">
        <div className="header-logo-box flex justify-content-between  w-100 ">
        <Link
          className="navbar-brand header-logo d-flex  align-items-center "
          to="/"
        >
          <img src={logo} alt="logo" />
        </Link>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>

      <div>
        <ul className="">
          <li  className=" d-flex gap-3  align-items-center  ">
              <i className="fa-regular fa-id-badge"></i>
            <h2>
              <Link to="subscription">Subscription</Link>
            </h2>
          </li>
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-message"></i>
            <h2>
              <Link to="message">Messages</Link>
            </h2>
          </li>
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-calendar"></i>
            <h2>
              <Link to="session">Session</Link>
            </h2>
          </li>
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-bookmark"></i>
            <h2>
              <Link to="blog">Blog</Link>
            </h2>
          </li>
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-user"></i>
            <h2>
              <Link to="account-settings">Account Settings</Link>
            </h2>
          </li>
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-star"></i>
            <h2>
              <Link to="review"> Review</Link>
            </h2>
          </li>
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-comment"></i>
            <h2>
              <Link to="/profile"> Contact Us</Link>
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
