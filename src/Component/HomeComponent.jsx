import React from 'react'
import OurServices from './OurServices'
import Aboutus from "./Aboutus";
import ContactDetails from"./ContactDetails";
import MapComponent from "./MapComponent";
import NavBarComponent from "./NavbarComponent";
export default function HomeComponent() {
  return (
    <div>
        <NavBarComponent></NavBarComponent>   
        <Aboutus></Aboutus>
        <OurServices></OurServices>
        <ContactDetails></ContactDetails>
        <MapComponent></MapComponent>
    </div>
  )
}
