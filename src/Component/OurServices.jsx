import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import carRepairAnimation from "../images/carRepair.json";
import carPolishAnimation from "../images/carPolish.json";
import carWashAnimation from "../images/CarWash.json";
import carWashImage from "../images/carWash.jpg";
import carRepairImage from "../images/carRepair.jpg";
import carPolishImage from "../images/carPolish.jpg";
import "./Style/OurServices.css";

export default function OurServices() {
  const [animationClass, setAnimationClass] = useState({});
  const serviceCardsRef = useRef([]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.dataset.index;
          setAnimationClass((prev) => ({
            ...prev,
            [index]: index % 2 === 0 ? "fade-in-left" : "fade-in-right",
          }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    serviceCardsRef.current.forEach((card, index) => {
      card.dataset.index = index;
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="servicesContainer" id="Services">
      <h1 className="servicesHeader">OUR SERVICES</h1>
      <div className="servicesGrid">
        <div
          className={`serviceCard ${animationClass[0] || ""}`}
          ref={(el) => (serviceCardsRef.current[0] = el)}
        >
          <div className="imageWrapper">
            <img
              className="serviceImage"
              src={carRepairImage}
              alt="Car Repairing"
            />
          </div>
          <div className="serviceContent">
            <div className="serviceContenth2">
              <Lottie
                animationData={carRepairAnimation}
                className="imageAnimation"
              />
              <h2>CAR REPAIRING</h2>
            </div>
            <div>
              <ul className="serviceUl">
                <li>Engine diagnostics and repair</li>
                <li>Transmission service</li>
                <li>Brake system repair</li>
                <li>Electrical system repair</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`serviceCard ${animationClass[1] || ""}`}
          ref={(el) => (serviceCardsRef.current[1] = el)}
        >
          <div className="imageWrapper">
            <img
              className="serviceImage"
              src={carPolishImage}
              alt="Car Polishing"
            />
          </div>
          <div className="serviceContent">
            <div className="serviceContenth2">
              <Lottie
                animationData={carPolishAnimation}
                className="imageAnimation"
              />
              <h2>CAR POLISHING</h2>
            </div>

            <div>
              <ul className="serviceUl">
                <li>Exterior polishing</li>
                <li>Interior detailing</li>
                <li>Paint correction</li>
                <li>Scratch and swirl removal</li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`serviceCard ${animationClass[2] || ""}`}
          ref={(el) => (serviceCardsRef.current[2] = el)}
        >
          <div className="imageWrapper">
            <img
              className="serviceImage"
              src={carWashImage}
              alt="Car Washing"
            />
          </div>
          <div className="serviceContent">
            <div className="serviceContenth2">
              <Lottie
                animationData={carWashAnimation}
                className="imageAnimation"
              />
              <h2>CAR WASHING</h2>
            </div>
            <div>
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
    </div>
  );
}
