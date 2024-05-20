import SideBar from "./side bar/SideBar";
import { Navigate, Route, Routes } from "react-router-dom";
import Message from "./message/Message.jsx";
import Counselor from "./counseler/Counselor.jsx";
import Blog from "./blog/Blog.jsx";
import AccountSettings from "./account settings/AccountSettings.jsx";
import Subscription from "./subscription/Subscription.jsx";
import Review from "./review/Review.jsx";
import { useEffect } from "react";
import Session from "./session/Session.jsx";

const Profile = () => {
  useEffect(() => {
    localStorage.setItem("user", "false"); 
  }, []);

  return (
    <div className="profile-main position-relative">
      <SideBar />
      <div className="main-content user-wrapper">
        <Routes>
        <Route path="/" element={<Navigate to="message" replace />} />
          <Route path="message" element={<Message />} />
          <Route path="subscription" element={<Subscription />} />
          <Route path="review" element={<Review />} />
          <Route path="blog" element={<Blog />} />
          <Route path="session" element={<Session />} />
          <Route path="account-settings/*" element={<AccountSettings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
