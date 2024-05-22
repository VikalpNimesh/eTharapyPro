import "./Hero.css";
import right from "../../../assets/images/hero-right.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-main  wrapper ">
      <div className="col-12 d-lg-flex m-0 p-0 justify-content-lg-evenly ">
        <div className="hero-left col-lg-6  col-md-12  p-0 justify-content-sm-center ">
          <h1>
            Your <span className="span-green span-ball"></span> Guide to
            <span className="span-green">Happiness</span>
          </h1>
          <p>
            Experience life's journey with eTherapyPro's online therapy
            guidance.
          </p>
          <div className="hero-btn-box d-none d-sm-flex ">
<Link to="/profile/"><button  className="start-therapy-btn">Start therapy</button></Link>

            <p className="price-content">
              From $5 <span>/ 3 days</span>
            </p>
          </div>
        </div>
        <div className="hero-right flex mt-sm-4  mt-0 col-lg-6 p-0  col-md-12   ">
          <img
            className=""
            src="https://imgs.search.brave.com/9YI4QYJ2PX2DLHXmwPI2feDUjZhfkzjPF81Wm2xAYPs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jcmVh/emlsbGEtc3RvcmUu/ZnJhMS5kaWdpdGFs/b2NlYW5zcGFjZXMu/Y29tL2NsaXBhcnRz/LzM3NzY0L29mZmlj/ZS1sYWR5LWxhcHRv/cC1jb21wdXRlci1j/bGlwYXJ0LXNtLnBu/Zw"
            // src={right}
          />
          <div className="videocall-icon flex">
            <i className="fa-solid fa-video "></i>
          </div>
          <div className="message-icon flex">
            <i className="fa-solid fa-message "></i>
          </div>
          <div className="verify-box ">
            <div className="verify-therapist ">
              <i className="fa-solid fa-certificate flex">
                <i className="fa-solid fa-check"></i>
              </i>
              <p>Verified Therapists</p>
            </div>
            <div className="verify-therapist ">
              <i className="fa-solid fa-shield  flex">
                <i className="fa-solid fa-check"></i>
              </i>
              <p>SSL certified</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-btn-box d-flex d-sm-none py-3  ">
      <Link to="/profile/"><button  className="start-therapy-btn">Start therapy</button></Link>

        <p className="price-content">
          From $5 <span>/ 3 days</span>
        </p>
      </div>
      <div className="">
        <div className="hero-cta  d-lg-flex ">
          <button className="ctabuttonStyle col-lg-2 ">
            <a href="">Custom Matching</a>
          </button>
          <p className="col-lg-8 ">
            We will individually match you with a therapist{" "}
            <span className="span-green">based on your needs.</span>
          </p>
          <div className="col-lg-2 "><i className="fa-solid fa-angle-right"></i></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
