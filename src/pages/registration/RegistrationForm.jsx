import { Link, useNavigate  } from "react-router-dom";
import { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const navigate = useNavigate ()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    loginId: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreedTerms: false
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {password , confirmPassword } = formData
    if (password === confirmPassword) {
  navigate("/")
  // Navigate("/")
    } else (
      alert("password not matched ")
)

  };

  return (


    <div className="register-main">
      <h2 className="text-center">Almost there!</h2>

      <div className="formresgiter">
        <h3 className="text-center">Create Login ID</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 py-1">
              <label htmlFor="User">First Name</label>
              <input
                type="text"
                id="User"
                name="firstName"
                minLength="5"
                required
                className="form-control"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-6 py-1">
              <label htmlFor="User">Last Name</label>
              <input
                type="text"
                id="Userlast"
                name="lastName"
                minLength="5"
                required
                className="form-control"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-12 py-1">
              <label htmlFor="custname">Login ID</label>
              <input
                type="text"
                id="custname"
                name="loginId"
                minLength="4"
                required
                className="form-control"
                placeholder="Create your login ID"
                value={formData.loginId}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-12 py-1">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="username"
                required
                className="form-control"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-12 py-1">
              <div className=" d-flex  align-items-center  justify-content-between ">
              <label htmlFor="password">Password</label>
              <Link className="forgot-password" to="/">Forgot Password? </Link>
              </div>
              <div className="pwd-f">
                <input
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  minLength="5"
                  required
                  className="form-control"
                  type="password"
                  placeholder="Create a password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <span className="viewpwd"></span>
              </div>
            </div>
            <div className="col-md-12 py-1">
              <label htmlFor="confirm-password">Confirm Password</label>
              <div className="pwd-f">
                <input
                  id="confirm-password"
                  name="confirmPassword"
                  autoComplete="new-password"
                  minLength="5"
                  required
                  className="form-control"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <span className="viewpwd"></span>
              </div>
            </div>
            <div className="col-md-12 py-2 termheck d-flex">
              <input
                className="m-2"
                type="checkbox"
                name="agreedTerms"
                checked={formData.agreedTerms}
                onChange={handleChange}
              />
              <label className="termcheck">
                I agree to{" "}
              <span className="span-green"> <Link to="/privacy"  >Privacy Policy</Link></span>  and{" "}
                 <span className="span-green"><Link to="/t&c">Terms &amp; Condition</Link></span> 
                <span className="termmark"></span>
              </label>
            </div>
          </div>
          <div className="laststep-button">
            <div className="row p-0 m-0">
              <div className="col-6 d-flex align-items-center p-0 m-0">
                <button className="p16 back-btn linkback">
                  <Link to="/question15">Back</Link>
                </button>
              </div>
              <div className="col-6 text-right p-0 m-0">
                <button
                  type="submit"
                  id="begin"
                  className="lets-begin-btn next-question-btn float-end"
                  disabled={!formData.agreedTerms}
                >
                  Let’s Begin
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
