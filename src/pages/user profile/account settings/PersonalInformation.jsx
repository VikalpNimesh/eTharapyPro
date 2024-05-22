import pic from "../../../assets/images/user-admin/counselor.png";
const PersonalInformation = () => {
  return (
    <div>
      <div className=" personal-info">
        <p color="p20">Personal information</p>
        <div className="personal-img d-flex  gap-3  align-items-center   position-relative ">
          <img className=" w-100  rounded-circle  " src={pic} alt=""></img>
          <div className="  d-none d-md-flex flex  align-items-center ">
            <i className=" flex fa-solid fa-add"></i>
          </div>
          <div className=" d-md-none  d-flex flex-column gap-1">
            <p className="name">Joe Filingd</p>
            <p className="bio">Gestalt</p>
          </div>
        </div>

        <button className="change-profile-pic d-flex d-md-none flex">
        <i className="fa-solid fa-camera"></i>
        Change Profile Photo
        </button>
        <form
          // onSubmit={handleSubmit}
          className="  row g-3 "
        >
          <div className="  d-flex   flex-column col-md-6">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="  d-flex  flex-column col-md-6">
            <label htmlFor="nick-name">Nick Name</label>
            <input
              type="text"
              id="nick-name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="  d-flex  flex-column col-md-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="  d-flex  flex-column col-md-6">
            <label htmlFor="phone">Phone</label>
            <input
              type="Number"
              id="phone"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </form>
        <button className="start-therapy-btn save-change-btn p16" type="submit">
          Save Changes
        </button>
      </div>
      <div className=" personal-info">
        <p color="p20">Password</p>

        <form
          // onSubmit={handleSubmit}
          className="  row g-3 "
        >
          <div className="  d-flex   flex-column col-md-6">
            <label htmlFor="confirm-new-password">New Password</label>
            <input
              type="password"
              id="confirm-new-password"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="  d-flex  flex-column col-md-6">
            <label htmlFor="nick-name">Confirm new password</label>
            <input
              type="text"
              id="nick-name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </form>
        <button className="start-therapy-btn save-change-btn p16" type="submit">
          Save Changes
        </button>
      </div>
      <div className=" personal-info">
        <p color="p20">Password</p>

        <form
          // onSubmit={handleSubmit}
          className="  row g-3 "
        >
          <div className="  d-flex   flex-column col-md-4">
            <label htmlFor="card-number">Card Number</label>
            <input
              type="number"
              id="card-number"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="  d-flex   flex-column col-md-4">
            <label htmlFor="expiration-date">Expiration Date</label>
            <input
              type="number"
              id="expiration-date"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="  d-flex  flex-column col-md-4">
            <label htmlFor="cvv">CVV</label>
            <input
              type="password"
              id="cvv"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="  d-flex  flex-column col">
            <label htmlFor="cardholder-name">Cardholder Name</label>
            <input
              type="text"
              id="cardholder-name"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </form>
        <button className="start-therapy-btn save-change-btn p16" type="submit">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default PersonalInformation;
