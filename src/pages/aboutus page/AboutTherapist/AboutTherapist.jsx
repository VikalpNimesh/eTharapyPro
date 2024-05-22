import "./AboutTherapist.css";
import treeman from "../../../assets/images/aboutus/tree-man.png"

const AboutTherapist = () => {
  return (
    <div className="wrapper carin mx-1  text-start pb-0   ">
      <div className="row pb-5  ">
        <div className="col-lg-6   ">
          <div className=" box ">
            {" "}
            <h6 className="head ">
              It’s as if each person who works with a <span className="bold">therapist</span> is adding stones
              to a Cairn.
            </h6>
            <p>
              Their challenges and efforts are collected and then stacked up to
              help you navigate your path forward. It is for this reason the
              Cairn in our logo represents not only your therapist but everyone
              who has contributed their story to the history of the path you are
              on.
            </p>
          </div>
          <div className=" box ">
            {" "}
            <h6 className="head ">
              This means that when you work with a therapist you are indirectly
              working with travelers before you AND that you can <span className="bold">leave a legacy</span>
              to help those who come next.
            </h6>
            <p>
              You will help to build up the Cairn. In this way our experiences
              and stories pass on and connect us through time - each traveler
              helping to show the way for others. It’s really beautiful when you
              think about it.
            </p>
          </div>
          <div className=" box ">
            {" "}
            <h6 className="head ">
              We hope <span className="bold">your journey</span> is going well and continues on that way.
            </h6>
            <p>
              If you are facing rocky terrain then we invite you to benefit from
              the Cairn of experience of those who went before you and the
              expertise of the professional licensed therapists who were
              privileged to take a few steps along with them.
            </p>
          </div>
        </div>
        <div className="col-lg-6 p-0    carim-img ">
          <img src={treeman} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default AboutTherapist;
