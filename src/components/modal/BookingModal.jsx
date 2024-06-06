import React from 'react';
import './Modal.css';

const BookingModal = ({bookingDetails,  handleClose }) => {
  return (
    <div 
        className="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
    <div className="modal-content modal-dialog modal-dialog-centered ">
      <div className="modal-header">
        {/* <button type="button" aria-label="Close" className="close pull-right" onClick={handleClose}>
          <span aria-hidden="true">×</span>
        </button> */}
        <h4 className="modal-title w-100" id="myModalLabel">Booking Details</h4>
        <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
      </div>
      <div className="modal-body">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {bookingDetails.map((booking, index) => ( */}
                <tr
                  // key={index}
                >
                  <td scope="row">
                    <span className=' text-black' >
                      {/* {booking.date} */} 5/5/2024
                    </span>
                  </td>
                  <td>
                    <span className=' text-black' >
                      {/* {booking.time} */} 11:00 pm - 12:00 pm
                    </span>
                  </td>
                  <td>
                    <label>
                    <span className={`badge badge-pill   text-black
                   ${"bvh"
                      // booking.status === 'Booked'
                        // ? 'badge-success' : 'badge-secondary'
                        } 
                      `}>
                        {/* {booking.status} */} booked
                      </span>
                    </label>
                  </td>
                  <td>
                    <button className="pull-right btnlightred btn"
                      // onClick={() => handleCancel(booking.id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookingModal;
