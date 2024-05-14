import SideBar from "./side bar/SideBar";
import { Route, Routes } from "react-router-dom";
import Message from "./message/Message.jsx";
import Counselor from "./counseler/Counselor.jsx";
// import Subscription from "./subscription/Subscription.jsx";
// import Review from "./review/Review.jsx";

const Profile = () => {
  return (
    <div className="profile-main  position-relative   ">
      <SideBar />
      <div className="main-content user-wrapper">
        {/* <Message /> */}
        {/* <Subscription /> */}
        {/* <Review/> */}
        <Counselor/>
        {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling">Enable body scrolling</button> */}
      </div>
      
      <Routes>
        <Route path="/profile/message" element={<Message />} /> 
      </Routes>
    </div>
  );
};

export default Profile;
