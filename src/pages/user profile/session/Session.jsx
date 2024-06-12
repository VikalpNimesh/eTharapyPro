import Modal from "../../../components/modal/Modal";
import BookingModal from "../../../components/modal/BookingModal";
import { useContext, useState } from "react";
import "./Session.css";
import moment from "moment";
import { BookSessionContext } from "../../../context/BookSessionContext.jsx";
import AppointmentSideBar from "./BookSessionSideBar.jsx"
import 'react-calendar/dist/Calendar.css';
// import { Calendar } from 'rsuite';
import CalendarBox  from "./Calender.jsx";

const Session = ({ handleToggle, sidebar }) => {
  const [startDate, setStartDate] = useState(moment().format("ddd,MMM DD"));
  const [slotInfoData, setSlotInfoData] = useState([]);
  const [IsBookSidebar, setIsBookSidebar] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null); 
const [showModal, setshowModal] = useState(false)
  const handleAvailableSlot = (slotInfo) => {
    handleAppointBar(true, slotInfo );
  };

  const handleAppointBar = (value) => {
    setIsBookSidebar(value);
  };

  const selectSlot = (slot) => {
    setSelectedSlot(slot); 
    setSlotInfoData(slot); 
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
      <div className="col d-md-flex gap-4">
        {/* <DatePicker
          selected={startDate}
          onChange={(date) => {setshowModal(true), setStartDate(moment(date).format("ddd,MMM DD"))}}
          inline
          // className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
        /> */}
        <CalendarBox setshowModal={setshowModal} setStartDate={setStartDate} />

        {/* <CalendarBox /> */}
        <div className="card w-100 row p-2 w-100 m-0 mt-2 mt-md-0 ">
          <div className="col-12 p-0">
            <p>Date: {startDate}</p>
            <p>Select Timing</p>
          </div>
          <br />
          <br />
          <div className="col-12 text-right my-2 p-0 ">
            {['10:00 pm - 11:00 pm', '11:00 pm - 12:00 pm', '12:00 pm - 1:00 pm', '1:00 pm - 2:00 pm'].map((slot, index) => (
              <div
                key={index}
                className={`available-slot ${selectedSlot === slot ? 'available-slot-selected' : ''}`}
                onClick={() => selectSlot(slot)}
              >
                {slot}
              </div>
            ))}
          </div>
          <br />
          <br />
          <button type="button"  className="btn btn-success" onClick={() => handleAvailableSlot(slotInfoData)}>
            Book
          </button>
        </div>
        <AppointmentSideBar
          IsBookSidebar={IsBookSidebar}
          slotInfoData={slotInfoData}
          handleAppointBar={handleAppointBar}
        />
      </div>
      
      {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button> */}

      <BookingModal showModal={showModal} />
      
      {/* <Modal /> */}

    </div>
  );
};

export default Session;
