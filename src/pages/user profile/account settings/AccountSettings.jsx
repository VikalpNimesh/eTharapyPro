import React from "react";
import "./AccountSettings.css";
import YourTherapist from "./YourTherapist";
import PaymentHistory from "./PaymentHistory";
import PersonalInformation from "./PersonalInformation";
import { Link, Navigate, Route, Routes } from "react-router-dom";

const AccountSettings = ({handleToggle,sidebar}) => {
  return (
    <div className="account-settings-main">
      <div className="message-heading d-flex justify-content-between">
        <h2 className="h32">Account Settings</h2>
        <div className="right d-flex align-items-center">
          <p className=" d-none  d-md-block ">Credits available: 0</p>
          <i className="fa-solid fa-bars d-md-none flex " onClick={()=>{
            handleToggle(sidebar)
          }}></i>
        </div>
      </div>

      <div className="counselor-toggle d-flex">
        <Link to="personal-information"><button className="p16">Your Information</button></Link>
        <Link to="your-therapist"><button className="p16">Your Therapist</button></Link>
        <Link to="payment-history"><button className="p16">Payment History</button></Link>
      </div>
      
      <Routes>
      <Route path="/" element={<Navigate to="personal-information" replace />} />
        <Route path="personal-information" element={<PersonalInformation />} />
        <Route path="payment-history" element={<PaymentHistory />} />
        <Route path="your-therapist" element={<YourTherapist />} />
      </Routes>
    </div>
  );
};

export default AccountSettings;
