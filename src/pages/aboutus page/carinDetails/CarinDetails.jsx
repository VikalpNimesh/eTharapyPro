import React from "react";
import "./CarinDetails.css";
import pic1 from "../../../assets/images/aboutus/white-mountain.png"

const CarinDetails = () => {
  return (
    <div className="wrapper carin mx-1  text-center  ">
      <div className="row ">
        <div className="col-lg-6 p-0    carim-img ">
          <img src={pic1} alt="img" />
        </div>
        <div className="col-lg-6 d-flex justify-content-between flex-column px-4  text-lg-start  text-md-start">
          <h6 className="head ">
            The word Cairn comes from Scottish Gaelic and means “stack of
            stones”.
          </h6>
          <p>
            Cairns date back for thousands of years throughout many different
            cultures and societies all over the world.
            <br />
            <br />
          </p>
          <p>
            It’s certainly not a stretch of the imagination to assume that
            Cairns predate recorded history - that as soon as humanity emerged
            people started stacking stones in conspicuous places as landmarks,
            monuments, and memorials.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarinDetails;
