import React from "react";
import pic from "../../../assets/images/user-admin/counselor.png";
const YourTherapist = () => {
  return (
    <div>
      <div className=" personal-info">
        <p color="p20">Personal information</p>
        <div className="personal-img  d-flex gap-5 align-items-center  ">
          <img className=" w-100  rounded-circle  " src={pic} alt=""></img>
          <div className="  d-flex  flex-column  w-100  gap-2">
            <p className="name ">Joe Filingd</p>
            <p className=" bio  ">Licenced KPT psychologist, MEd, LPC, NCC</p>
          </div>
        </div>

        <div className="red-flag-box d-flex gap-4">
          <i className="fa-solid fa-flag flex"></i>

          <div>
            <ol >
              <li>
                The system will automatically choose a new consultant for you
                and re-login you when you press the button. After 30 minutes,
                you will see a new consultant in your chat.
              </li>
              <li>
                The chat with the previous therapist is not saved, so you can
                copy the dialog for yourself before clicking the "Switch
                Counselor" button.
              </li>
            </ol>
          </div>
        </div>
        <button className="start-therapy-btn save-change-btn p16" type="submit">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default YourTherapist;
