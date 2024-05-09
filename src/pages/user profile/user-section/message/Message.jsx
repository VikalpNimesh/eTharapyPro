import React from "react";
import "./Message.css"
const Message = () => {
  return (
    <div className=" message-main">
      <div className=" message-heading d-flex  justify-content-between  ">
        <h2 className=" h32">Messages</h2>
        <div className=" right d-flex  align-items-center gap-3">
          <p>Free messages available: 3</p>
          <i className="fa-solid fa-video"></i>
        </div>
      </div>
    </div>
  );
};

export default Message;
