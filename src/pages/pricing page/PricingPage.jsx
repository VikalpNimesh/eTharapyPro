import React from 'react';
// import './PricingPage.css'; // Import the CSS file
import PricingBox from '../../components/pricing box/PricingBox';

function PricingPage() {
  return (
    <div className="pricing-page wrapper">
      <div className="background"></div>
<h1 className=' text-start p-4  pb-md-5 '>Choose <span className='span-green'>Your Plan</span></h1>
      <div className="pricing-container d-flex justify-content-evenly pt-md-5 overflow-hidden  ">
        {/* Pricing boxes */}
        {/* You can create separate components for each pricing box */}
              {/* Example: <FreeTrial /> */}
        <div className="price-boxx">
              <PricingBox/>
          {/* Contents of the pricing box */}
        </div>
        <div className="price-boxx">
              <PricingBox/>
          {/* Contents of the pricing box */}
        </div>
        <div className="price-boxx">
              <PricingBox/>
          {/* Contents of the pricing box */}
        </div>
        <div className="outer d-none ">
          <div className="price-boxx">
            {/* Contents of the pricing box */}
          </div>
        </div>
        <div className="outer d-none ">
          <div className="price-boxx">
            {/* Contents of the pricing box */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
