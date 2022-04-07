import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

/*
 * Slidebar component
 */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const index = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={Logo} alt="logo" />
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
    </div>
  )
}

export default index
