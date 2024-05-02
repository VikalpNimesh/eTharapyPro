import "./PaymentDetailsForm.css"

const PaymentDetailsForm = () => {
  return (
    <div className="payment-detail-form">
      <form  className="payment-form">
        <div className="row m-0  p-0 ">
          <h2>Payment Details</h2>
          <div className="col-12 p-0 m-0 ">
            <div className="form-group">
              <label>Credit Card Number</label>
              <input
                type="text"
                id="card_number"
                placeholder="XXXX  XXXX  XXXX  XXXX"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-md-6 p-0 m-0 ">
            <div className="form-group">
              <label>Expiration Date</label>
              <div className="d-flex columngap-5">
                <select className="form-control">
                  <option value="" disabled>
                    Month
                  </option>
                  Add options for months
                </select>
                {/* <select className="form-control">
                  <option value="" disabled selected>
                    Year
                  </option>
                  Add options for years
                </select> */}
              </div>
            </div>
          </div>
          <div className="col-md-6 p-0 m-0 ">
            <div className="form-group">
              <label>CVV</label>
              <input
                type="text"
                id="cvv"
                placeholder="XXX"
                className="form-control correct"
              />
            </div>
          </div>
          <div className="col-12 p-0 m-0 ">
            <div className="form-group">
              <label>Name on Card</label>
              <input
                type="text"
                id="name"
                placeholder="Enter cardholder name"
                className="form-control"
              />
            </div>
          </div>
          <div className="col-12 p-0 m-0 ">
            <div className="form-group d-flex gap-2  ">
            <input type="checkbox" checked />
              <div className="termheck">
                <label className="termcheck">
                  Save this card for faster payments{" "}
                  
                  <span className="termmark"></span>
                </label>
              </div>
            </div>
          </div>
          <div className="col-12 p-0 m-0 ">
            <div className="form-group d-flex gap-2 justify-content-between  ">
              <div className="termheck">
                <label className="termcheck">
                Total amount for                   
                  <span className="span-green"> Monthly Plan</span>
                </label>
              </div>
              <div className="buy-price">
                $99
                </div>
            </div>
          </div>
          <div className="col-12 p-0 m-0 ">
            <div className="btn-wrap">
              <button className="makepayment-btn next-question-btn " type="submit  " role="button">
              Make payment
              </button>
              <small className=" flex">
                *By clicking on “Make payment”, you authorize eTherapyPro to
                charge your credit card.
              </small>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentDetailsForm;
