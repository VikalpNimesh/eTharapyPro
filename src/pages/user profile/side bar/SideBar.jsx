import "./SideBar.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/etherapylogo.png";

const SideBar = ({ handleToggle, sidebar }) => {

  const sidebarStyle = {
    transform: sidebar ?  'translate(0)' : 'translate(-100%)',
    transition: 'transform 0.3s ease-in-out'
  };
  return (

    <div className=" sidebar-main user-wrapper" style={sidebarStyle}>
        <div className="header-logo-box flex justify-content-between  w-100 ">
        <Link
          className="navbar-brand header-logo d-flex  align-items-center "
          to="/"
        >
          <img src={logo} alt="logo" />
        </Link>
        <i className="fa-solid fa-close  d-sm-none " onClick={()=>handleToggle(sidebar)}></i>
      </div>

      <div>
        <ul className="">
          <li  className=" d-flex gap-3  align-items-center  ">
              <i className="fa-regular fa-id-badge"></i>
            <h2>
              <Link to="subscription" onClick={()=>handleToggle(sidebar)}>Subscription</Link>
            </h2>
          </li>
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-message"></i>
            <h2>
              <Link to="message" onClick={()=>handleToggle(sidebar)}>Messages</Link>
            </h2>
          </li>
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-calendar"></i>
            <h2>
              <Link to="session" onClick={()=>handleToggle(sidebar)}>Session</Link>
            </h2>
          </li>
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-bookmark"></i>
            <h2>
              <Link to="blog" onClick={()=>handleToggle(sidebar)}>Blog</Link>
            </h2>
          </li>
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-user"></i>
            <h2>
              <Link to="account-settings" onClick={()=>handleToggle(sidebar)}>Account Settings</Link>
            </h2>
          </li>
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-star"></i>
            <h2>
              <Link to="review" onClick={()=>handleToggle(sidebar)}> Review</Link>
            </h2>
          </li>
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-comment"></i>
            <h2>
              <Link to="/profile" onClick={()=>handleToggle(sidebar)}> Contact Us</Link>
            </h2>
          </li>
        </ul>

        <div className=" logout">
          <li  className=" d-flex gap-3  align-items-center  ">
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <h2>
              <Link to="/" onClick={()=>handleToggle(sidebar)}>Log Out</Link>
            </h2>
          </li>
        </div>
      </div>
    </div>
    
  );
};

export default SideBar;
