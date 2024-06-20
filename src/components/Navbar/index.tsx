import React from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  const location = useLocation();
  return (
    <nav className="nav-container">
      <div className="nav-section">
        <div className="nav-logo">
          <img src="/logo.png" alt="logo" className="nav-logo-img" />
        </div>
        <div className="nav-menue">
          <a
            href="/#menu"
            className="nav-item"
            style={location?.pathname === "/contact" ? { color: "white" } : {}}
          >
            HOME
          </a>

          <Link
            to={"/contact"}
            style={location?.pathname === "/" ? { color: "white" } : {}}
            className="nav-item"
          >
            CONTACT
          </Link>
          <a href="#reservation">
            <button className="nav-button">Book A Table</button>
          </a>
        </div>
        <button
          onClick={() => {
            setIsOpened(!isOpened);
          }}
          className="nav-hamburger"
        >
          <div className="nav-hamburger-line"></div>
          <div className="nav-hamburger-line"></div>
          <div className="nav-hamburger-line"></div>
        </button>
        {
          <div
            className="nav-mobile-menue"
            style={{
              display: isOpened ? "block" : "none",
            }}
          >
            <Link
              to={"/"}
              className="nav-mobile-item"
              style={
                location?.pathname === "/contact" ? { color: "black" } : {}
              }
            >
              HOME
            </Link>
            <Link
              to={"/contact"}
              className="nav-mobile-item"
              style={location?.pathname === "/" ? { color: "black" } : {}}
            >
              CONTACT
            </Link>
            <div className="nav-mobile-item">
              <a href="#reservation">
                <button className="nav-mobile-button">Book A Table</button>
              </a>
            </div>
          </div>
        }
      </div>
    </nav>
  );
};

export default Navbar;
