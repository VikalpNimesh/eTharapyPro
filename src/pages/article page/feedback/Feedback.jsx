import FeedbackForm from "../../../components/feedback form/FeedbackForm";
import "./Feedback.css";
const Feedback = () => {
  return (
    <div className="feedback-main col-12 col-md-8 ">
      <div className="sharepost d-flex justify-content-between ">
        <p className="p18 d-none  d-md-block ">Share this post :</p>
        <div className=" d-flex gap-5">
          <div className="copylink d-flex align-items-center  justify-content-center gap-3 ">
            <i className="fa-regular fa-copy"></i>
            <p>Copy link</p>
          </div>
          <div className="social-links d-flex gap-4  ">
            <i className="fa-brands fa-facebook-f flex"></i>
            <i className="fa-brands fa-facebook-f flex"></i>
            <i className="fa-brands fa-facebook-f flex"></i>
            <i className="fa-brands fa-facebook-f flex"></i>
          </div>
        </div>
      </div>
      <div className="rating-box-tick column">
        <i className="fa-regular fa-circle-check"></i>
        <h2>Thank you!</h2>
        <p className="p16">
          We value your opinion and appreciate your feedback, it helps us create
          better content for you!
        </p>
      </div>
      <div className="rating-box">
        <h2>Liked our article? Give us your feedback by rating it</h2>

        <div className="rating-icon-box  gap-3">
          <div className="rating-icon column">
            <i className="fa-regular fa-face-frown-open"></i>
            <p>Awful</p>
          </div>
          <div className="rating-icon column">
            <i className="fa-regular fa-face-frown-open"></i>
            <p>Awful</p>
          </div>
          <div className="rating-icon column">
            <i className="fa-regular fa-face-frown-open"></i>
            <p>Awful</p>
          </div>
          <div className="rating-icon column">
            <i className="fa-regular fa-face-frown-open"></i>
            <p>Awful</p>
          </div>
        </div>
      </div>

      <FeedbackForm/>

      <div className="comment-box">
        <h1>5 comments</h1>

        <div className="comment d-flex gap-3 pb-5 ">
          <div><div className="user-name">M</div></div>
          <div className=" flex-column ">
            <div className=" d-flex gap-2">
              <div className="user-nam bold">Mark Parisien</div>
              <div className="comment-time">1h ago</div>
            </div>
            <p className="p16 py-2 ">
              Very interesting and useful article. I had a similar problem with
              my last partner, and in the relationship I'm in now, I feel
              something similar. Сan I sign up for the session?
            </p>
            <div className=" lastend d-flex gap-3 align-items-center ">
              <p>reply</p>
              <p>100 likes</p>
              <i className="fa-regular fa-thumbs-up"></i>
              <i className="fa-regular fa-thumbs-down"></i>
            </div>
          </div>
        </div>
        <div className="comment comment-reply d-flex gap-3 pb-5 ">
          <div><div className="user-name">M</div></div>
          <div className=" flex-column ">
            <div className=" d-flex gap-2">
              <div className="user-nam bold">Mark Parisien</div>
              <div className="comment-time">1h ago</div>
            </div>
            <p className="p16 py-2 ">
              Very interesting and useful article. I had a similar problem with
              my last partner, and in the relationship I'm in now, I feel
              something similar. Сan I sign up for the session?
            </p>
            <div className=" lastend d-flex gap-3 align-items-center ">
              <p>reply</p>
              <p>100 likes</p>
              <i className="fa-regular fa-thumbs-up"></i>
              <i className="fa-regular fa-thumbs-down"></i>
            </div>
          </div>
              </div>
              
              <p className="see-more">See more</p>
      </div>
    </div>
  );
};

export default Feedback;
