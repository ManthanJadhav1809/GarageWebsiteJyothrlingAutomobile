import React from 'react';
import './Style/ContactDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
const ContactDetails = () => {
  return (
    <div id="Contact" className="contact-details" >
      <h1>CONTACT DETAILS</h1>
      <div className="contact-background">
        <div className="contact-content">
          <div className="contact-info">
            <div className='contact-card'>
              <h2><FontAwesomeIcon icon={faLocationDot} bounce />  ADDRESS</h2>
              <p>Near Hotel Shangreela In front of kalmba Water Tank Kalamba Ring Road Kolhapur 416012</p>
            </div>
            <div className='contact-card'>
              <h2><FontAwesomeIcon icon={faPhone} shake></FontAwesomeIcon> PHONE NUMBER</h2>
              <a href="tel:+919890926305" style={{textDecoration:"none",color:"white"}}>9890926305</a>
            </div>
            <div className='contact-card'>
              <h2><FontAwesomeIcon icon={faClock} fade></FontAwesomeIcon> TIMINGS</h2>
              <p>Monday: Closed</p>
              <p>Tuesday to Saturday: 10am to 7pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
