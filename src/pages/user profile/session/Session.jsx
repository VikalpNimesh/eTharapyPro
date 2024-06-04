import Modal from "../../../components/modal/Modal";
import DatePicker from "react-datepicker";
import { useContext, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Session.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
const localizer = momentLocalizer(moment);
import "react-big-calendar/lib/css/react-big-calendar.css";
import { BookSessionContext } from "../../../context/BookSessionContext.jsx";

const Session = ({ handleAppointBar, handleToggle, sidebar }) => {
  const [startDate, setStartDate] = useState();
  // const { myEventsList } = useContext(BookSessionContext);
console.log(new Date()) 
  const onSelectSlot = (slotInfo) => {
    // console.log(slotInfo?.start);
    setStartDate(moment(slotInfo.start).format("DD-MM-YYYY"));
  };
  
  const handleAvailableSlot =(slotInfo)=>{
    handleAppointBar(true, slotInfo);
  }
  return (
    <div className="session-main">
      <div className="message-heading d-flex justify-content-between mb-3">
        <h2 className="h32">Session</h2>
        <div className="right d-flex align-items-center">
          <i
            className="fa-solid fa-bars d-md-none flex"
            onClick={() => {
              handleToggle(sidebar);
            }}
          ></i>
        </div>
      </div>
      <div className=" d-flex gap-4">
        {/* <div className=" d-none  d-md-block ">
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
            <button className="dis-btn">Save 40% / Month </button>
          </div>

          <div className="pack-features">
            <ul className="list-feature">
              <li>
                <i className="fa-solid fa-check mx-2 "></i>OUR MOST POPULAR
                PLAN!
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
      </div> */}

        <Calendar
          localizer={localizer}
          // events={myEventsList}
          defaultView="month"
          // date={startDate}
          onSelectSlot={onSelectSlot}
          selectable
          startAccessor="start"
          endAccessor="end"
          step={30}
          timeslots={1}
        />
      </div>
      <div className="card timechoosec mt-4 pading-15">
        <div className="row p-2">
          <div className="col-12 flex justify-content-between ">
            <p>Date:{startDate}</p>
            <p>Select Timing</p>
          </div>
          <div className="col-12 text-left">
            <hr />
          </div>
          <div className="col-12 text-right flex justify-content-between">
            <div className=" d-flex gap-2">
              
            <div className=" available-slot" onClick={(slotInfo)=>handleAvailableSlot(slotInfo)}>10:00 pm</div>
          
          </div>
            <button type="button" className="btn btn-success">
              Book
            </button>
          </div>
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default Session;
