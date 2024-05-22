import "./HeroSection.css";
import girl from "../../../assets/images/landing/girl.png";
import man from "../../../assets/images/landing/one-man.png";
import girltree from "../../../assets/images/landing/girl-tree.png";
import cta from "../../../assets/images/landing/download.png";

const HeroSection = () => {
  return (
    <>
      <div className="herosection-main wrapper  container-fluid   ">
        <div className="row  p-0  m-0 d-flex justify-content-center  ">
          <div className="left col-12 col-lg-6 ">
            <h1>Gaslighting</h1>
            <div className="right col-12 col-lg-6 d-block d-md-none ">
            <img src={girl} alt="" />
          </div>Gaslighters are seeking to gain power and control over the other person by distorting reality and forcing them to question their own judgment
            
            <div>
              <p className="  ">
                Have you ever wondered if someone was gaslighting you or if you
                had done that to someone else?
              </p>
              <p className="  ">
                Gaslighting is a form of intentional psychological manipulation
                in which one attempts to instill self-doubt and confusion in
                another’s mind.
              </p>
            </div>
            <button className="cta-btn">Start Therapy</button>
          </div>
          <div className="right col-12 col-lg-6 d-none d-md-block ">
            <img src={girl} alt="" />
          </div>
        </div>
      </div>
      <div className="hero-second-main herosection-main  wrapper  container-fluid   ">
        <div className="row col-12 p-0 d-flex   m-0  justify-content-center  ">
          <div className="right col-12 col-lg-6 ">
            <img src={man} alt="" />
          </div>
          <div className="left col-12 col-lg-6 ">
            <div>
              <p className="  ">
                Have you ever wondered if someone was gaslighting you or if you
                had done that to someone else?
              </p>
              <p className="  ">
                Gaslighting is a form of intentional psychological manipulation
                in which one attempts to instill self-doubt and confusion in
                another’s mind.
              </p>
            </div>
          </div>
        </div>
        <div className=" landing-banner therapist-main   text-center d-flex mx-auto   justify-content-center align-items-center flex-column main  ">
          <p className="p22">
            Gaslighters are seeking to gain power and control over the other
            person by <span className=" span-green">distorting reality</span>
            and forcing them to question their own judgment
          </p>
        </div>
      </div>
      <div className="hero-second-main herosection-main  wrapper  container-fluid   ">
        <div className="row col-12 p-0  m-0 d-flex justify-content-center ">
          <div className="left col-12 col-lg-6 ">
            <div>
              <p className="  ">
                The term gaslighting comes from an Alfred Hitchcock movie from
                the 1930s in which a man tries to convince his wife that she is
                going insane so he can steal from her.
              </p>
              <p className="  ">
                When the gas lights dim in their house as he searches the
                basement for her jewelry, he tells her it’s her imagination. She
                eventually begins to question her own memories and perceptions.
              </p>
            </div>
          </div>
          <div className="right col-12 col-lg-6 ">
            <img src={girltree} alt="" />
          </div>
        </div>
      </div>

      <div className="landing-cta-banner  ">
        <div className=" row d-flex justify-content-between m-0 p-0  ">
          <div className="left col-6">
            <h1>
              Talk to a therapist now if you believe you are a victim of
              gaslighting.
            </h1>
            <button className="ctabanner-btn">Talk to a Therapist</button>
          </div>
          <div className="right col-6 d-none d-md-block ">
            {/* <img src={girl} alt="" /> */}
            <img
            
            src="https://imgs.search.brave.com/9YI4QYJ2PX2DLHXmwPI2feDUjZhfkzjPF81Wm2xAYPs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jcmVh/emlsbGEtc3RvcmUu/ZnJhMS5kaWdpdGFs/b2NlYW5zcGFjZXMu/Y29tL2NsaXBhcnRz/LzM3NzY0L29mZmlj/ZS1sYWR5LWxhcHRv/cC1jb21wdXRlci1j/bGlwYXJ0LXNtLnBu/Zw"
            // src={right}
          />
          <div className="videocall-icon flex">
            <i className="fa-solid fa-video "></i>
          </div>
          <div className="message-icon flex">
            <i className="fa-solid fa-message "></i>
          </div>
       
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
