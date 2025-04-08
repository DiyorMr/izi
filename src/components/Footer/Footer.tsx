import React from "react";

import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer_container">
        <div className="footer_top">
          {/* Logo */}
          <div className="logo">
            <img src="/images/logo.svg" alt="KOTIE.AI" />
          </div>

          {/* Navigation Links */}
          <nav className="navLinks">
            <a href="#work-process">How it Works</a>
            <a href="#">Features</a>
            <a href="#plans">Pricing</a>
            <a href="#">Blog</a>
            <a href="#feedbacks">Faqs</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        {/* Divider */}
        <hr className="divider" />

        {/* Privacy Policy & Terms */}
        <div className="bottomLinks">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
