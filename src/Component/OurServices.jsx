import React from "react";
import Lottie from "lottie-react";
import carRepairAnimation from "../images/carRepair.json";
import carPolishAnimation from "../images/carPolish.json";
import carWashAnimation from "../images/CarWash.json";
import carWashImage from"../images/carWash.jpg"
import carRepairImage from"../images/carRepair.jpg"
import carPolishImage from"../images/carPolish.jpg"

import "./Style.css";
import "../Component/ResponsiveDesign.css";

export default function OurServices() {
  return (
    <div className="servicesContainer">
      <h1 className="servicesHeader">OUR SERVICES</h1>
      <div className="servicesGrid">
        <div className="serviceCard">
          <div className="imageWrapper">
            <img
              className="serviceImage"
              src={carRepairImage} alt="Car Repairing"
            />
          </div>
          <div className="serviceContent">
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily:"emoji",
              }}
            >
              <Lottie
                animationData={carRepairAnimation}
                className="imageAnimation"
              ></Lottie>
              CAR REPAIRING
            </h2>
            <ul className="serviceUl">
              <li>
                 Engine diagnostics and repair
              </li>
              <li>
                 Transmission service
              </li>
              <li>
                 Brake system repair
              </li>
              <li>
                 Electrical system repair
              </li>
              <li>
                 Tire and wheel services
              </li>
            </ul>
          </div>
        </div>
        <div className="serviceCard">
          <div className="imageWrapper">
            <img
              className="serviceImage"
              src={carPolishImage}
              alt="Car Polishing"
            />
          </div>
          <div className="serviceContent">
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily:"emoji",
              }}
            >
              <Lottie
                animationData={carPolishAnimation}
                className="imageAnimation"
              ></Lottie>
              CAR POLISHING
            </h2>
            <ul className="serviceUl">
              <li>
                 Exterior polishing
              </li>
              <li>
                 Interior detailing
              </li>
              <li>
                 Paint correction
              </li>
              <li>
                 Scratch and swirl removal
              </li>
              <li>
                 Ceramic coating application
              </li>
            </ul>
          </div>
        </div>
        <div className="serviceCard">
          <div className="imageWrapper">
            <img
              className="serviceImage"
              src={carWashImage}
              alt="Car Washing"
            />
          </div>
          <div className="serviceContent">
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily:"emoji",
              }}
            >
              <Lottie
                animationData={carWashAnimation}
                className="imageAnimation"
              ></Lottie>
              CAR WASHING
            </h2>
            <ul className="serviceUl">
              <li>
                 Exterior wash
              </li>
              <li>
                 Interior vacuuming
              </li>
              <li>
                 Wheel and tire cleaning
              </li>
              <li>
                 Window cleaning
              </li>
              <li>
                 Wax and shine
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
