import React from 'react'
import OurServices from './OurServices'
import Aboutus from "./Aboutus";
import ContactDetails from"./ContactDetails";
import MapComponent from "./MapComponent";
import NavBarComponent from "./NavbarComponent";
import "./Style/GlobalStyles.css";
import Footer from './Footer';
import GallaryComponent from './GallaryComponent';
import GoUpButton from './GoUpButton';
export default function HomeComponent() {
  return (
     
    <div style={{width:"100%",overflow:"hidden"}}>
        <NavBarComponent></NavBarComponent>   
        <Aboutus></Aboutus>
        <OurServices></OurServices>
        <ContactDetails></ContactDetails>
        <GallaryComponent></GallaryComponent>
        <MapComponent></MapComponent>
        <Footer></Footer>
        <GoUpButton></GoUpButton>
    
    </div>
      
    
  )
}
