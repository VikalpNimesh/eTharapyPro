import "./Header.css";

const Header = () => {
  return (
    <div className="header-main">
      <div className="header-close">
        <div></div>
        <div>
          <span>
            <h2 className="disount-price">45% discount </h2>
          </span>
          <span>
            <h2>for the first month with code JOURNEY</h2>
          </span>
        </div>
        <div className="close-bar">X</div>
      </div>
      <div className="haeder-section">
        <div className="header-logo flex">logo</div>
        <div className="nav-links-box">
          <ul>
            <li>
              <h2>About</h2>
            </li>
            <li>
              <h2>Plans</h2>
            </li>
            <li>
              <h2>Blog</h2>
            </li>
            <li>
              <h2>FAQ</h2>
            </li>
          </ul>
        </div>
        <div className="btn-box">
          <button className="sign-btn">Sign in</button>
          <button className="start-therapy-btn">Start therapy</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
