import { useState } from "react";
import "./ContactUs.css";
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div className="contact-main ">
      <h1>
        Contact <span className="span-green">Us</span>
      </h1>
      <div className="contact-inner ">
        <div className="row p-0  m-0 ">
          <div className="left col-12 col-md-4">
            <h2 className="h32">Main Office</h2>

            <div className=" left-bottom">
              <div>
                <h2>Address</h2>
                <p>
                  eTherapyPro <br /> Sheridan, WY <br /> United States
                </p>
              </div>
              <div>
                <h2>Email</h2>
                <p>contact@eTherapyPro.com</p>
              </div>
              <div>
                <h2>Office Time</h2>
                <p>9:00am-5:00pm MST</p>
              </div>
            </div>
          </div>
          <div className="right col-12 col-md-8">
            <h2 className="h32">
              Please use this form for any question, idea, or issue that you
              might have on your mind.
            </h2>

            <h2 className="pad">We’ll get back to you within 24-48 hours</h2>

            <form className=" row p-0  m-0">
              <div className=" col-12 col-md-6 w-100  ">
                <label htmlFor="name">Purpose of Contact</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className=" col-12 col-md-6  ">
                <label htmlFor="name">First Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className=" col-12 col-md-6  ">
                <label htmlFor="name">Last Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className=" col-12 col-md-6  ">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className=" col-12 col-md-6  ">
                <label htmlFor="name">Username (If you have one)</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className=" ">
                <label htmlFor="comment">Message</label>
                <textarea
                  id="comment"
                  rows={6}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                ></textarea>
              </div>

              <button className="contact-btn" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
