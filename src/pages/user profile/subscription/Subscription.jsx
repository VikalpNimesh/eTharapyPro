import React from "react";
import PricingBox from "../../../components/pricing box/PricingBox";
import "./Subscription.css";
const Subscription = () => {
  return (
    <div className=" subscription-main">
      <div className=" subscription-heading  message-heading d-flex  justify-content-between   ">
        <h2 className=" h32">Chose Your Plan</h2>
        <div className=" right d-flex  align-items-center">
          <p>Free messages available: 3</p>
        </div>
      </div>

      <div className="  d-md-flex -flex gap-5 w-100 justify-content-between ">
        <div className="price-boxx  w-100  d-flex align-items-end ">
          <PricingBox />
        </div>
        <div className="price-boxx w-100 ">
          <div className="price-box-outer ">
            <h5>Save $60 on your first month</h5>
            <PricingBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
