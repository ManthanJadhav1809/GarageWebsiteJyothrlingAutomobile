import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "../Component/Style/Footer.css";

export default function Footer() {
  return (
    <footer>
      <span>All Rights Reserved <FontAwesomeIcon icon={faCopyright} /> Jyothrling Automobile</span>
      <span>Created by Manthan Jadhav</span>
      <span>
        Follow us on: 
        <a href="https://www.instagram.com/jyotirling_automobiles.kop/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faInstagram} /> 
        </a>
      </span>
    </footer>
  );
}
