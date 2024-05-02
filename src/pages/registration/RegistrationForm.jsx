import "./RegistrationForm.css";
const RegistrationForm = () => {
  return (
    <div className=" register-main  ">
      <h2 className=" text-center ">Almost there!</h2>

      <div className="formresgiter">
        <h3 className=" text-center ">Create Login ID</h3>
        <div className="row">
          <div className="col-md-6 py-1">
            <label htmlFor="User">First Name</label>
            <input
              type="text"
              id="User"
              name="username"
              minLength="5"
              required
              className="form-control "
            />
          </div>
          <div className="col-md-6 py-1">
            <label htmlFor="User">Last name</label>
            <input
              type="text"
              id="Userlast"
              name="username"
              minLength="5"
              required
              className="form-control "
            />
          </div>
          <div className="col-md-12 py-1">
            <label htmlFor="custname">Login Id</label>
            <input
              type="text"
              id="custname"
              name="customname"
              minLength="4"
              required
              className="form-control "
            />
          </div>
          <div className="col-md-12 py-1">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              email
              required
              className="form-control "
            />
          </div>
          <div className="col-md-12 py-1">
            <label htmlFor="password">Password</label>
            <div className="pwd-f">
              <input
                id="password"
                name="password"
                minLength="5"
                required
                className="form-control "
                type="password"
              />
              <span className="viewpwd"></span>
            </div>
          </div>
          <div className="col-md-12 py-1">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="pwd-f">
              <input
                id="confirm-password"
                name="confirm-password"
                minLength="5"
                required
                className="form-control "
                type="password"
              />
              <span className="viewpwd"></span>
            </div>
          </div>
          <div className="col-md-12 py-2 termheck d-flex ">
            <input className="m-2 " type="checkbox" />
            <label className="termcheck ">
              I agree to <span className="span-green">Privacy Policy</span> and{" "}
              <span className="span-green">Terms &amp; Condition</span>
              <span className="termmark"></span>
            </label>
          </div>
        </div>
        <div className="laststep-button ">
          <div className="row p-0  m-0 ">
            <div className="col-6 d-flex  align-items-center ">
              <button className="p16 back-btn linkback">Back</button>
            </div>
            <div className="col-6 text-right">
              <button
                type="submit"
                id="begin"
                className=" lets-begin-btn next-question-btn float-end "
              >
                Let’s Begin
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
