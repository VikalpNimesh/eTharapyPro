import pic from "../../../assets/images/user-admin/counselor.png";
const SLIDES = Array.from(Array(6).keys());
const PaymentHistory = () => {
  return (
    <div className="payment-history">
      <div className="personal-info d-none  d-md-flex ">
        <p className="personal-info-title">Personal information</p>

        <table>
          <thead>
            <tr>
              <th className="th-l">Service</th>
              <th>Specialist</th>
              <th>From</th>
              <th>To</th>
              <th>Download</th>
              <th className="th-r">Request Refund</th>
            </tr>
          </thead>
          <tbody>
            {SLIDES.map((index) => (
              <tr key={index}>
                <td>Monthly Plan</td>
                <td>
                  <div className="personal-img d-flex gap-2 align-items-center">
                    <img
                      className="rounded-circle w-100"
                      src={pic}
                      alt="Counselor"
                    />
                    <div className="d-flex flex-column gap-1">
                      <p className="name">Joe Filingd</p>
                      <p className="bio">Gestalt</p>
                    </div>
                  </div>
                </td>
                <td>15th Feb, 2023</td>
                <td>15th Feb, 2023</td>
                <td >
                  <div className="download-speed-btn">
                    5.3 mb <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </td>
                <td >
                  <div className="request-btn">Request</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="personal-info  d-md-none ">
        <p className="personal-info-title">Past Invoices</p>

        <div className=" monthly-plan-box ">
          <div className=" d-flex   mb-3  justify-content-between  align-items-center ">
            <p>Monthly Plan</p>
            <i className="fa-solid fa-ellipsis-vertical flex"></i>
          </div>

          <div className=" d-flex justify-content-between  align-items-center  ">
            <div>
              <div className="d-flex flex-column gap-1">
                <p className="name">Joe Filingd</p>
                <p className="bio">Gestalt</p>
              </div>
            </div>
            <div>
              <div className="d-flex flex-column gap-1">
                <p className="name">Date</p>
                <p className="bio">15.04.23</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" monthly-plan-box ">
          <div className=" d-flex   mb-3  justify-content-between  align-items-center ">
            <p>Monthly Plan</p>
            <i className="fa-solid fa-ellipsis-vertical flex"></i>
          </div>

          <div className=" d-flex justify-content-between  align-items-center  ">
            <div>
              <div className="d-flex flex-column gap-1">
                <p className="name">Joe Filingd</p>
                <p className="bio">Gestalt</p>
              </div>
            </div>
            <div>
              <div className="d-flex flex-column gap-1">
                <p className="name">Date</p>
                <p className="bio">15.04.23</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" monthly-plan-box ">
          <div className=" d-flex   mb-3  justify-content-between  align-items-center ">
            <p>Monthly Plan</p>
            <i className="fa-solid fa-ellipsis-vertical flex"></i>
          </div>

          <div className=" d-flex justify-content-between  align-items-center  ">
            <div>
              <div className="d-flex flex-column gap-1">
                <p className="name">Joe Filingd</p>
                <p className="bio">Gestalt</p>
              </div>
            </div>
            <div>
              <div className="d-flex flex-column gap-1">
                <p className="name">Date</p>
                <p className="bio">15.04.23</p>
              </div>
            </div>
          </div>
              </div>
              
              <button className=" see-more"> See more</button>
      </div>
    </div>
  );
};

export default PaymentHistory;
