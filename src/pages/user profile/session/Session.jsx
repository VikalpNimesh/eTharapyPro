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
import AppointmentSideBar from "./BookSessionSideBar.jsx"

const Session = ({  handleToggle, sidebar }) => {
  const [startDate, setStartDate] = useState( new Date().toLocaleDateString());
  const [slotInfoData, setSlotInfoData] = useState([]);
  const [IsBookSidebar, setIsBookSidebar] = useState(false);

  // const { myEventsList } = useContext(BookSessionContext);
  // console.log(new Date());
  // const onSelectSlot = (slotInfo) => {
  //   // console.log(slotInfo?.start);
  //   setSlotInfoData(slotInfo);
  //   setStartDate(moment(slotInfo.start).format("DD-MM-YYYY"));
  // };
// console.log(startDate)
  const handleAvailableSlot = (slotInfo) => {
    handleAppointBar(true, slotInfo);
  };

  const handleAppointBar = (value, slotInfo) => {
    setIsBookSidebar((value) => !value);
    // setSetslotInfoData(slotInfo);
  };
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
      <div className=" col d-md-flex gap-4">
        <DatePicker
          selected={startDate }
          onChange={(date) => setStartDate(date.toLocaleDateString())}
          inline
        />
        {/* <div className="price-box bestplan">
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
        </div> */}
        {/* <Calendar
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
        /> */}
        <div className="card w-100 row p-2 w-100 m-0 mt-2 mt-md-0 ">
          
            <div className="col-12  p-0">
            <p>Date:{startDate}</p>
            
            <p className= "">Select Timing</p>
            </div>
            <br />
            <br />
            <div className="col-12 text-right my-2 p-0 ">
                <div
                  className=" available-slot"
                  onClick={() => handleAvailableSlot(slotInfoData)}
                >
                  10:00 pm
                </div>
                <div
                  className=" available-slot"
                  onClick={() => handleAvailableSlot(slotInfoData)}
                >
                  10:00 pm
                </div>
                <div
                  className=" available-slot"
                  onClick={() => handleAvailableSlot(slotInfoData)}
                >
                  10:00 pm
                </div>
                <div
                  className=" available-slot"
                  onClick={() => handleAvailableSlot(slotInfoData)}
                >
                  10:00 pm
                </div>
              
          </div>
          <br />
           <br />
            <button type="button" className="btn btn-success">
                Book
              </button>
          
        </div>
        <AppointmentSideBar 
        IsBookSidebar={IsBookSidebar}
        slotInfoData={slotInfoData}
        handleAppointBar={handleAppointBar}
      />
      </div>

      <Modal />
   
    </div>
  );
};

export default Session;
