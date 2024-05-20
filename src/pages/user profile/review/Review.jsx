import React from "react";
import "./Review.css";
import pic from "../../../assets/images/landing/searching-man.png";
const Review = () => {
  return (
    <div className="review-main">
      <div className=" review-heading  message-heading d-flex  justify-content-between   ">
        <h2 className=" h32">Rate us</h2>
        <div className=" right d-flex  align-items-center">
          <p className=" d-none  d-md-block ">Credits available: 0</p><i className="fa-solid fa-bars d-md-none flex "></i>
        </div>
      </div>

      <div className=" review-outer row   ">
        <div className=" left col-md-6 m-0 p-0  ">
          <p>
            Your opinion is important to us, and we strive to continuously{" "}
            <span className="span-green">
              improve our services to better meet your needs!
            </span>
          </p>
          <img className=" w-75  " src={pic} alt="" />
        </div>
        <div className=" right col-md-6 m-0 p-0  ">
          <div className="stars-box d-flex ">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>

          <div className="textarea-box  ">
            <label htmlFor="review">Your review</label>
            <textarea name=""  rows={6} id="review"></textarea>
            <div className=" d-flex ">
              <input type="checkbox" name="" id="" />
              <p>I authorise eTherapyPro to publish my review live</p>
            </div>
                  </div>
                  <button className="start-therapy-btn"> Send Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default Review;
