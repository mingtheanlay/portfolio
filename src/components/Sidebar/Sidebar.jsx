import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";

/*
 * Slidebar component
 */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <p>MT</p>
      </Link>
      <nav>
        <NavLink
          extact="true"
          activeclassname="active"
          className="home-link"
          to="/"
        >
          <FontAwesomeIcon icon={faHome} color="#ffffff" />
        </NavLink>
        <NavLink
          extact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#ffffff" />
        </NavLink>
        <NavLink
          extact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mingthean-lay-384294178/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#ffffff" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mingtheanlay"
          >
            <FontAwesomeIcon icon={faGithub} color="#ffffff" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://t.me/mingtheanlay"
          >
            <FontAwesomeIcon icon={faTelegram} color="#ffffff" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
