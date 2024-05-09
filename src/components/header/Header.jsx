import "./Header.css";
import logo from "../../assets/images/etherapylogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
const [IsheaderTopOpen, setIsheaderTopOpen] = useState(true)

  const closebtn = () => {
    setIsheaderTopOpen(false)
}

  return (
    <div className="header-main ">
      {IsheaderTopOpen && <div className="header-close">
        <div></div>
        <div>
          <span>
            <h2 className="span-green">45% discount </h2>
          </span>
          <span>
            <h2>for the first month with code JOURNEY</h2>
          </span>
        </div>
        <div className="close-bar" onClick={closebtn}>
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>}
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-wrapper  ">
        <div className="container-fluid p-0 ">
          <div className="header-logo-box">
            <Link
              className="navbar-brand header-logo d-flex  align-items-center "
              to="/"
            >
             <img src={logo} alt="logo" />
            </Link>
          </div>
          {/* ***********menu-btn ************** */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <div></div>
            <ul className=" nav-links-box navbar-nav me-auto mb-2 mb-lg-0 mx-auto ">
              <li>
                <h2>
                  <Link to="/aboutus">About</Link>
                </h2>
              </li>
              <li><h2><Link to="/pricing-page">Plans</Link></h2></li>
              <li><h2><Link to="/">Blog</Link></h2></li>
              <li><h2><Link to="/faq">FAQ</Link></h2></li>
            </ul>
            <div className="btn-box   mb-3 mb-md-0 ">
              <button className="sign-btn">Sign in</button>
              <button className="nav-start-therapy-btn d-none  d-md-block ">
              <Link to="/question1">Start therapy</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
