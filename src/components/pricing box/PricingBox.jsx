import React from 'react';
import './PricingBox .css'; // Import the CSS file
import Button from './button/Button';

function PricingBox() {
  return (
    // <div className="price-box-outer">
    //   <h5 >Save $60 on your first month</h5>
      <div className="price-box bestplan">
        <div className="pack-title">
          <h3 className=''>Monthly</h3>
        </div>
        <div className="pack-price">
          <h4>
            <span>$</span>30
            {/* <strong className="offprice">$45</strong> */}
            <p>Week</p>
          </h4>
        </div>
        <div className="pack-btn">
          <a className="btnpack "><Button/></a>
        </div>
        <div className="pack-features">
          <ul className="list-feature">
            <li><i className="fa-solid fa-check mx-2 "></i>OUR MOST POPULAR PLAN!</li>
            <li><i className="fa-solid fa-check mx-2 "></i>All Weekly Plan Features, PLUS</li>
            <li><i className="fa-solid fa-check mx-2 "></i>One Monthly Live Session</li>
            <li><i className="fa-solid fa-check mx-2 "></i>Save 20% Over Weekly Plan</li>
            <li><i className="fa-solid fa-check mx-2 "></i>Streamlined Therapy Experience</li>
            <li><i className="fa-solid fa-check mx-2 "></i>Personalized Therapy Plans</li>
            <li><i className="fa-solid fa-check mx-2 "></i>Flexible Session Scheduling</li>
            <li><i className="fa-solid fa-check mx-2 "></i>Cancel Any Time</li>
          </ul>
        </div>
      </div>
    // </div>
  );
}

export default PricingBox;
