import "./Modal.css"

const Modal = ({ question }) => {
  return (
    <>
      <div 
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
               { question ? question: "Do you want to leave the leave the session?"}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* <div className="modal-body">
          ...
        </div> */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary start-therapy-btn save-change-btn p16 modal-grey-btn"
                data-bs-dismiss="modal"
              >
                Yes
              </button>
              <button
                type="button"
                className="btn btn-primary start-therapy-btn save-change-btn p16 "
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
