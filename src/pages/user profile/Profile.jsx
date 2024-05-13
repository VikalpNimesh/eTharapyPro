import SideBar from "./side bar/SideBar";
import { Route, Routes } from "react-router-dom";
import Message from "./message/Message.jsx";
import Subscription from "./subscription/Subscription.jsx";

const Profile = () => {
  return (
    <div className="profile-main d-flex w-100  ">
      <SideBar />
      <div className=" user-wrapper w-100">
        <Message />
        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button>
        {/* <Subscription /> */}
      </div>
      
      <Routes>
        <Route path="/profile/message" element={<Message />} /> 
      </Routes>
    </div>
  );
};

export default Profile;
