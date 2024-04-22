import "./Header.css";

const Header = () => {
  return (
    <div className="header-main">
      <div className="header-close">
        <div></div>
        <div>
          <span>
            <h2 className="span-green">45% discount </h2>
          </span>
          <span>
            <h2>for the first month with code JOURNEY</h2>
          </span>
        </div>
        <div className="close-bar">X</div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary p-wrapper  ">
        <div className="container-fluid p-0 ">
          <a className="navbar-brand header-logo d-flex  align-items-center " href="#">
            LOGO
          </a>
          {/* ***********menu-btn ************** */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <div></div>
            <ul className=" nav-links-box navbar-nav me-auto mb-2 mb-lg-0 mx-auto ">
            <li>
              <h2  >About</h2>
            </li>
            <li>
              <h2 >Plans</h2>
            </li>
            <li>
              <h2 >Blog</h2>
            </li>
            <li>
              <h2 >FAQ</h2>
            </li>
            </ul>
            <div className="btn-box d-flex">
          <button className="sign-btn">Sign in</button>
          <button className="start-therapy-btn">Start therapy</button>
        </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
