import React, { useState } from "react";
import "./Message.css"
const Message = () => {
  const [message, setMessage] = useState("")
  const [first, setFirst] = useState("")
  
  console.log(message);

  const handleSendMessage = () => {
    // setMessage(message)
    setFirst(message)
  }
  
  return (
    <div className=" message-main position-relative container-fluid  m-0 p-0 ">
      <div className=" message-heading d-flex  justify-content-between  mb-3 ">
        <h2 className=" h32">Messages</h2>
        <div className=" right d-flex  align-items-center">
          <p>Free messages available: 3</p>
          <i className="fa-solid fa-video flex" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="join video session"></i>
        </div>
      </div>
    
      <div className="upcoming-session mb-3 ">
      <i className="fa-regular fa-bell"></i>
        <p>
        Upcoming session: <span>Apr 18, 2023  11:30 AM - 12:30 AM</span>
      </p>
      </div>

      <div>

        <div className=" show-input-message ">{first}</div>
        <div className="message-sent-time flex ">
<img src="sdas" alt="E" srcset=""  className=" bg-black  h-100   rounded-circle  "/>
          <p>eTherapyPro</p>
          <small>Jan 3, 2023, 1:24 PM</small>
        </div>
      </div>

      <div className="input-message-box position-absolute  bott d-flex  justify-content-between  align-items-end  w-100 ">
        <i className="fa-solid fa-paperclip"></i>
        <textarea className=" w-100 " name="message" id="" rows="auto"  placeholder="Enter text here" value={message} onChange={e=>setMessage(e.target.value)} ></textarea>
      <i className="fa-regular fa-paper-plane" onClick={handleSendMessage}></i>
      <i className="fa-solid fa-video" onClick={handleSendMessage}></i>
      <i className="fa-solid fa-microphone" onClick={handleSendMessage}></i>
      </div>
    </div>
  );
};

export default Message;
