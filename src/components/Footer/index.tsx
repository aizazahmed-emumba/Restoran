import React from "react";
import "./Footer.scss";
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>
            © <span>Your Site Name</span>
            ,All Right Reserved.
          </h3>
        </div>
        <div className="footer-nav">
          <a>Home</a>
          <div className="divider"></div>
          <a>Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
