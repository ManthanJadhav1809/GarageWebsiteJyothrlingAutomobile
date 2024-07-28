import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import carImage from "../images/2.png";
import React, { useState } from 'react';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Style.css";

export default function NavbarComponent() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav className="NavBarContainer">
      <div className="firstDiv">
        <img src={carImage} alt="carImage" width={"50px"} height={"50px"} />
        <h6 className="navTitle">JYOTHRLING AUTOMOBILE</h6>
        <button
          className={`collapseButton ${isCollapsed ? 'fade-in' : 'bounce-in'}`}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={isCollapsed ? faBars : faXmark} />
        </button>
      </div>
      <div className={`secondDiv ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        <a className="navLinks">Our Services</a>
        <a className="navLinks">Contact Us</a>
      </div>
    </nav>
  );
}
