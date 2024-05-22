import CounselorAbout from "./CounselorAbout";
import "./Counselor.css";
import pic from "../../../assets/images/user-admin/counselor.png";
import CounselorPublication from "./CounselorPublication";
import CounselorReviews from "./CounselorReviews";
const Counselor = () => {
  return (
    <div className="counselor-main">
      <div className=" counselor-heading  message-heading d-flex  justify-content-between   ">
        <div className=" right d-flex  align-items-center">
          <p>
            <i className="fa-solid fa-arrow-left"></i> Back
          </p>
        </div>
        <div className=" right d-flex  align-items-center">
          <p className=" d-none  d-md-block ">Credits available: 0</p>
          <i className="fa-solid fa-bars d-md-none flex " onClick={()=>{
            handleToggle(sidebar)
          }}></i>
        </div>
      </div>

      <div className="couselor-info row m-0 p-0 ">
        <div className="left col-md-4  gap-2  position-relative ">
          <img className=" w-100 rounded-circle  " src={pic} alt="" ></img>
          <div className=" d-flex  gap-2  position-absolute   align-items-center ">
            <i className="fa-solid fa-star"></i>
            <p>5.1</p>
          </div>
        </div>
        <div className=" right  col-md-8 ">
          <div className=" name-box  d-flex  flex-column  gap-3 ">
            <h3 className=" h32">Joe Filingd</h3>
            <h6 className="p18 m-0 ">Licenced KPT psychologist, MEd, LPC, NCC</h6>
          </div>

          <div className=" infos d-flex  flex-column  gap-3 ">
            <h2 className="p18">Expertise</h2>
            <div className="  d-flex  gap-2 flex-wrap ">
              <p className="p14">Eating disorders</p>
              <p className="p14">Eating disorders</p>
              <p className="p14">Eating disorders</p>
            </div>
          </div>
          <div className=" infos d-flex  flex-column  gap-3 ">
            <h2 className="p18">Issues</h2>
            <div className="  d-flex  gap-2 flex-wrap ">
              <p className="p14">Eating disorders</p>
              <p className="p14">Eating disorders</p>
              <p className="p14">Eating disorders</p>
            </div>
          </div>
          <div className=" infos d-flex  flex-column  gap-3 ">
            <h2 className="p18">Qualifications</h2>

            <p className="p16">License: Colorado / 0024790</p>
          </div>
          <div className=" infos d-flex  flex-column  gap-3 ">
            <h2 className="p18">Experience</h2>
            <p className="p16">10 years/ 200 consultations</p>
          </div>
        </div>
      </div>

      <div className="counselor-toggle d-flex  ">
        <button className=" p16">About</button>
        <button className=" p16">Publications</button>
        <button className=" p16">Reviews</button>
      </div>
      {/* <CounselorAbout /> */}
      <CounselorPublication/>
      {/* <CounselorReviews/> */}
    </div>
  );
};

export default Counselor;
