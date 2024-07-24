import React from "react";
import "../Component/Style.css"; // Import the CSS file

export default function MapComponent() {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.226957097733!2d74.20852479999999!3d16.665522499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc055ce8b2c8095%3A0xd1300c9ab5d5d13d!2zSnlvdGlybGluZyBBdXRvbW9iaWxlcyDgpJzgpY3gpK_gpYvgpKTgpL_gpLDgpY3gpLLgpL_gpILgpJcg4KSR4KSf4KWL4KSu4KWL4KSs4KS-4KSI4KSy!5e0!3m2!1sen!2sin!4v1721636432470!5m2!1sen!2sin"
        className="responsive-iframe"
        title="garageMap"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
