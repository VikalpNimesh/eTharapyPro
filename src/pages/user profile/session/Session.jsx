import Modal from "../../../components/modal/Modal";
import BookingModal from "../../../components/modal/BookingModal";
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


const Session = ({ handleToggle, sidebar }) => {
  const [startDate, setStartDate] = useState(moment().format("ddd,MMM DD"));
  const [slotInfoData, setSlotInfoData] = useState([]);
  const [IsBookSidebar, setIsBookSidebar] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null); // New state for selected slot

  // console.log(slotInfoData);

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
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(moment(date).format("ddd,MMM DD"))}
          inline
        />

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
          <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="btn btn-success" onClick={() => handleAvailableSlot(slotInfoData)}>
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

      <BookingModal />
      
      {/* <Modal /> */}

    </div>
  );
};

export default Session;
