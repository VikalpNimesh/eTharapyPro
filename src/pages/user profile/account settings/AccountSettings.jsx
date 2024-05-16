import React from "react";
import "./AccountSettings.css";
import YourTherapist from "./YourTherapist";
import PaymentHistory from "./PaymentHistory";
import PersonalInformation from "./PersonalInformation";
const AccountSettings = () => {
  return (
    <div className="account-settings-main  ">
      <div className=" d-flex  justify-content-between   ">
        <h2 className=" h32">Account Settings</h2>
        <div className=" right d-flex  align-items-center">
          <p>Credits available: 0</p>
        </div>
      </div>

      <div className="counselor-toggle d-flex  ">
        <button className=" p16">Your information</button>
        <button className=" p16">Your Therapist</button>
        <button className=" p16">Payment History</button>
      </div>
      {/* <PersonalInformation/> */}
      {/* <YourTherapist /> */}
      <PaymentHistory/>
      
    </div>
  );
};

export default AccountSettings;
