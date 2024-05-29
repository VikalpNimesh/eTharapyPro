import ReactDatePicker from "react-datepicker";
import Modal from "../../../components/modal/Modal";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Session.css";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
const localizer = momentLocalizer(moment)
import "react-big-calendar/lib/css/react-big-calendar.css"

const Session = ({ handleToggle, sidebar }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="session-main">
      {/* <!-- Button trigger modal --> */}

      <div>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
      />
      <div className="price-box bestplan">
        <div className="pack-title">
          <h3 className="">Monthly</h3>
        </div>
        <div className="pack-price">
          <h4>
            <span>$</span>30
          </h4>
         <button className="dis-btn" >Save 40% / Month </button>
        </div>
       
        <div className="pack-features">
          <ul className="list-feature">
            <li>
              <i className="fa-solid fa-check mx-2 "></i>OUR MOST POPULAR PLAN!
            </li>
            <li>
              <i className="fa-solid fa-check mx-2 "></i>All Weekly Plan
              Features, PLUS
            </li>
            <li>
              <i className="fa-solid fa-check mx-2 "></i>One Monthly Live
              Session
            </li>
            
            <li>
              <i className="fa-solid fa-check mx-2 "></i>Flexible Session
              Scheduling
            </li>
            <li>
              <i className="fa-solid fa-check mx-2 "></i>Cancel Any Time
            </li>
          </ul>
          <div className="pack-btn p-0">
          <a className="btnpack ">
            <button className="start-monthly-btn"> Start Monthly</button>
          </a>
        </div>
        </div>
      </div>
      </div>

      <Calendar
      localizer={localizer}
      // events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
      <Modal />
      </div>
  );
};

export default Session;
