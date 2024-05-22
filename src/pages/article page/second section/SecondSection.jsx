import "./SecondSection.css";
import twocycle from "../../../assets/images/article/twocycle.png";
import climb from "../../../assets/images/article/Screenshot 2024-04-25 111611.png";
const SecondSection = () => {
  return (
    <div className="second-section-main wrapper">
      <div className="row p-0 m-0 ">
        <div className="left col-12 col-md-6">
          <p className="p18">
            Marriage counseling is meant to resolve problems that appear in the
            relationship. There are many married partners who do not admit that
            there is something wrong in their marriage.
            <br />
            <br />
            However, if there is
            some issue, you must resolve the problem. It is good if both the
            partners attend the{" "}
            <span className="bold">couples therapy online</span> free session.{" "}
          </p>

          <p className="p-22">
            A marriage is like a bicycle, and the husband-wife are like two
            wheels. Both the partners must communicate with each other to ensure
            the problem is being resolved. Through proper counseling various
            problems can be effectively resolved.
          </p>

          <img src={twocycle} alt="" />

          <p className="p18">
            Many people go to the counselor before they get married, and this
            step is somewhat logical. You can go for counseling and learn more
            about the human mindset. With the help of marriage counseling, many
            types of problems can be resolved.
          </p>

          <div>
            <h2>
              There are certain situations in which married couples must seek
              marriage counseling:
            </h2>
            <br />
            <ul className="bullet-list">
              <li>When the couples fail to come forward with a solution</li>
              <li>
                There is a serious disagreement regarding financial, upbringing,
                and lifestyle-related choices
              </li>
              <li>If the partner is emotionally unstable</li>
              <li>
                When the couples feel that they have lost emotional or romantic
                chemistry
              </li>
              <li>
                If one or both of them are struggling with some health issue
              </li>
              <li>
                If the couple recently lost someone, and there is no one to help
                in this case
              </li>
              <li>
                When the couples feel that it is becoming difficult for them to
                manage household responsibilities, if the household
                responsibilities are unequal, it is hard to find a solution
              </li>
            </ul>
            <br />
            <p className="p18">
              Many problems can be sorted out with the help of online
              counseling. Many couples admit that after online counseling, their
              emotional health improves. There are many who even admit that
              their physical capacity also increases. You must opt for free
              therapy online.
            </p>
            <br />
            <p className="p18">
              During the online therapy sessions, the couples realize and
              identify what are the good and bad habits of the partner. It is
              hard to believe that in some sessions, the partners argue with one
              another, despite remembering that an outsider is present in the
              session, but after a few sessions most partners admit that their
              relationship has improved. There are many benefits of couple
              online counseling.
            </p>
          </div>
          <button className="start-therapy-btn">Start therapy</button>
        </div>
        <div className="right col-12 col-md-6 d-md-flex d-none">
          <div className="top">
            <h2>Journey Inward: Subscribe to newsletter</h2>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            <button className="subscribe-btn">Subscribe </button>
            </div>
          </div>
          <div className="end">
                      <h2> Couples therapy online</h2>
                      <img src={climb} alt="climb" />
            <button className="read-about-btn"> Read about method</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
