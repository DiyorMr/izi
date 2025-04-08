import { Link } from "react-router-dom";

import "./Header.scss";
import Button from "../Button";

const Headerr = () => {
  return (
    <header className="header">
      <div className="container header_container">
        <a className="logo-wrapper" href="/">
          <img className="logo" src="/images/logo.svg" alt="Logo" />
        </a>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav_link" href="#about-project">
                About project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav_link" href="#work-process">
                How it works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav_link" href="#feedbacks">
                Feedbacks
              </a>
            </li>
          </ul>
        </nav>
        <Button path="#contact" text="Get started" />
      </div>
    </header>
  );
};

export default Headerr;
