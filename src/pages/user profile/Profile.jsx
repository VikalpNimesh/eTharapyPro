import SideBar from "./side bar/SideBar";
import { Navigate, Route, Routes } from "react-router-dom";
import Message from "./message/Message.jsx";
import Counselor from "./counseler/Counselor.jsx";
import Blog from "./blog/Blog.jsx";
import AccountSettings from "./account settings/AccountSettings.jsx";
import Subscription from "./subscription/Subscription.jsx";
import Review from "./review/Review.jsx";
import { useEffect, useState } from "react";
import Session from "./session/Session.jsx";

const Profile = () => {
const [sidebar, setSidebar] = useState(true)
console.log(sidebar);

  useEffect(() => {
    localStorage.setItem("user", "false"); 
  }, []);

  const handleToggle = () => {
   if (window.innerWidth<625) {
    setSidebar(prev=>!prev)
   }
  }

  return (
    <div className="profile-main position-relative">
      <SideBar handleToggle={handleToggle} sidebar={sidebar}/>
      <div className="main-content user-wrapper">
        <Routes>
        <Route path="/" element={<Navigate to="message" replace />} />
          <Route path="message" element={<Message handleToggle={handleToggle} sidebar={sidebar} />} />
          <Route path="subscription" element={<Subscription handleToggle={handleToggle} sidebar={sidebar}/>} />
          <Route path="review" element={<Review handleToggle={handleToggle} sidebar={sidebar}/>} />
          <Route path="blog" element={<Blog handleToggle={handleToggle} sidebar={sidebar}/>} />
          <Route path="session" element={<Session handleToggle={handleToggle} sidebar={sidebar}/>} />
          <Route path="account-settings/*" element={<AccountSettings handleToggle={handleToggle} sidebar={sidebar}/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
