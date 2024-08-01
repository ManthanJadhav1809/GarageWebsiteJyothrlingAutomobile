import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import carRepairAnimation from "../images/carRepair.json";
import carPolishAnimation from "../images/carPolish.json";
import carWashAnimation from "../images/CarWash.json";
import carWashImage from "../images/carWash.jpg";
import carRepairImage from "../images/carRepair.jpg";
import carPolishImage from "../images/carPolish.jpg";
import "./Style.css";
import "../Component/ResponsiveDesign.css";

export default function OurServices() {
  const [animationClass, setAnimationClass] = useState({});

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Apply animation class based on position
          if (entry.target.dataset.index % 2 === 0) {
            setAnimationClass((prev) => ({
              ...prev,
              [entry.target.dataset.index]: 'fade-in-left'
            }));
          } else {
            setAnimationClass((prev) => ({
              ...prev,
              [entry.target.dataset.index]: 'fade-in-right'
            }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1 // Trigger animation when 10% of the element is visible
    });

    const cards = document.querySelectorAll('.serviceCard');
    cards.forEach((card, index) => {
      card.dataset.index = index; // Set index for class determination
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="servicesContainer" id="#services">
      <h1 className="servicesHeader">OUR SERVICES</h1>
      <div className="servicesGrid">
        <div className={`serviceCard ${animationClass[0] || ''}`}>
          <div className="imageWrapper">
            <img className="serviceImage" src={carRepairImage} alt="Car Repairing" />
          </div>
          <div className="serviceContent">
            <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "emoji" }}>
              <Lottie animationData={carRepairAnimation} className="imageAnimation" />
              CAR REPAIRING
            </h2>
            <ul className="serviceUl">
              <li>Engine diagnostics and repair</li>
              <li>Transmission service</li>
              <li>Brake system repair</li>
              <li>Electrical system repair</li>
            </ul>
          </div>
        </div>
        <div className={`serviceCard ${animationClass[1] || ''}`}>
          <div className="imageWrapper">
            <img className="serviceImage" src={carPolishImage} alt="Car Polishing" />
          </div>
          <div className="serviceContent">
            <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "emoji" }}>
              <Lottie animationData={carPolishAnimation} className="imageAnimation" />
              CAR POLISHING
            </h2>
            <ul className="serviceUl">
              <li>Exterior polishing</li>
              <li>Interior detailing</li>
              <li>Paint correction</li>
              <li>Scratch and swirl removal</li>
            </ul>
          </div>
        </div>
        <div className={`serviceCard ${animationClass[2] || ''}`}>
          <div className="imageWrapper">
            <img className="serviceImage" src={carWashImage} alt="Car Washing" />
          </div>
          <div className="serviceContent">
            <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "emoji" }}>
              <Lottie animationData={carWashAnimation} className="imageAnimation" />
              CAR WASHING
            </h2>
            <ul className="serviceUl">
              <li>Exterior wash</li>
              <li>Interior vacuuming</li>
              <li>Wheel and tire cleaning</li>
              <li>Window cleaning</li>
              <li>Wax and shine</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
