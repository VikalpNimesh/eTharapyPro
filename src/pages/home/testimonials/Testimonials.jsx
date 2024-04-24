import pic from "../../../assets/images/testimonial-icon.png";
import "./testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonial-main   ">
      <div className="wrapper">
        <div className=" testimonial-top ">
          <img className=" d-none d-md-block" src={pic} alt="" />
          <h1>
            See why clients choose{" "}
            <span className="span-green">eTherapyPro</span>
          </h1>

          <div className="icons-box">
            <div className="next">
              <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className="prev">
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>

        <div className="testimonial-section">
          <div className="testimonial-boxes">
            <p>
              So grateful for eTherapyPro. Now I know how to identify my anxiety
              triggers. I’m feeling so much better it’s unbelievable.
            </p>
            <div className="user-details">
              <div className="user-img"></div>
              <div className="user-name">@Rhianna_M</div>
            </div>
          </div>
          <div className="testimonial-boxes">
            <p>
              So grateful for eTherapyPro. Now I know how to identify my anxiety
              triggers. I’m feeling so much better it’s unbelievable.
            </p>
            <div className="user-details">
              <div className="user-img"></div>
              <div className="user-name">@Rhianna_M</div>
            </div>
          </div>
          <div className="testimonial-boxes">
            <p>
              So grateful for eTherapyPro. Now I know how to identify my anxiety
              triggers. I’m feeling so much better it’s unbelievable.
            </p>
            <div className="user-details">
              <div className="user-img"></div>
              <div className="user-name">@Rhianna_M</div>
            </div>
          </div>
          <div className="testimonial-boxes">
            <p>
              So grateful for eTherapyPro. Now I know how to identify my anxiety
              triggers. I’m feeling so much better it’s unbelievable.
            </p>
            <div className="user-details">
              <div className="user-img"></div>
              <div className="user-name">@Rhianna_M</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
