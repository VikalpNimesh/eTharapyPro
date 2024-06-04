import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../side bar/SideBar.css"
import moment from 'moment'
import { BookSessionContext } from "../../../context/BookSessionContext.jsx";


const BookSessionSideBar = ({ IsBookSidebar, handleAppointBar, slotInfoData }) => {
  
  const {setMyEventsList , myEventsList   } = useContext(BookSessionContext)
  // console.log(slotInfoData)
  // console.log(myEventsList )
  const sidebarStyle = {
    transform: IsBookSidebar ? "translate(0)" : "translate(100%)",
    transition: "transform 0.3s ease-in-out",
    display : IsBookSidebar ? "block" : "none"
  };

  const handleBookSession = () => {
    setMyEventsList((prev) => [...prev, {
      start: moment(slotInfoData.start).toDate(),
      end: moment(slotInfoData.end).toDate(),
      title: "anniversary"
    }])
    handleAppointBar(false)
  }
  return (
    <div className="appointment-main">
      <div className=" sidebar-main user-wrapper" style={sidebarStyle}>
        <div className="header-logo-box flex justify-content-between  w-100 ">
          <Link
            className="navbar-brand header-logo d-flex  align-items-center "
            to="/"
          >
            <h3>Book Session</h3>
          </Link>
          <i className="fa-solid fa-close " onClick={()=>handleAppointBar(true)} ></i>
        </div>

        <div>
          <ul className="">
            <li className=" d-flex gap-3  align-items-center  ">
              <i className="fa-regular fa-id-badge"></i>
              <h2>
                <Link to="subscription">{ slotInfoData && moment(slotInfoData.start).format("ddd,MMM DD")}</Link>
              </h2>
            </li>
            <li className=" d-flex gap-3  align-items-center  ">
              <i className="fa-regular fa-message"></i>
              <h2>
                <Link to="message">{slotInfoData && moment(slotInfoData.start).format(" h:mm A")} - { slotInfoData && moment(slotInfoData.end).format(" h:mm A"  )}</Link>
              </h2>
            </li>
            <li className=" d-flex gap-3  align-items-center  ">
              <i className="fa-regular fa-calendar"></i>
              <h2>
                <Link to="session">Specialist: Alina Boyko</Link>
              </h2>
            </li>
          </ul>
          <li className=" d-flex gap-3  align-items-center  ">
            <i className="fa-regular fa-at"></i>
            <h2>
              <Link className="counseler-username" to="session">
                namesurname@gmail.com
              </Link>
            </h2>
          </li>
          <div className="col-md-12 py-2 termcheck d-flex">
            <input
              className=" checkbox-google-calender  "
              type="checkbox"
              name="agreedTerms"
            />
            <label className=" goggle-calender">
              Add this session to Google Calendar
            </label>
          </div>
          <button className="ctabanner-btn" onClick={handleBookSession}>Book Session</button>

          <h3 className="session-history">Session History</h3>
          {myEventsList.map((data) => (
            <div className="search-history-box" key={data.start}>
                      <p>{ data && moment(data.start).format("ddd,MMM DD")}</p>
                      <p>{data && moment(data.start).format(" h:mm A")} - { data && moment(data.end).format(" h:mm A"  )}</p>
                      <p>Specialist: Alina Boyko</p>
                  </div>
          ))}
              

        </div>
      </div>
    </div>
  );
};

export default BookSessionSideBar;
