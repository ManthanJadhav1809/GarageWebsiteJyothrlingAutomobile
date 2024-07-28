import React, { useEffect, useRef } from 'react';
import carImage from '../images/2.png';
import '../Component/Style.css';
import "../Component/ResponsiveDesign.css"
export default function Aboutus() {
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const text = textRef.current;
    const image = imageRef.current;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleScrollAnimation = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          header.classList.add('animate-header');
          text.classList.add('animate-text');
          image.classList.add('animate-image');
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleScrollAnimation, observerOptions);
    observer.observe(header);
    observer.observe(text);
    observer.observe(image);

    return () => {
      if (header) observer.unobserve(header);
      if (text) observer.unobserve(text);
      if (image) observer.unobserve(image);
    };
  }, []);

  return (
    <div className='aboutUsContainer'>
      {/* <div className='aboutUsMain'> */}
        <div className='aboutUsText'>
          <h2 ref={headerRef} className='aboutUsH2'>Jyothrling Automobile</h2>
          <p ref={textRef} className='aboutUsp'>
            Jyothrling Automobile is dedicated to providing top-notch car repair and maintenance services. 
            With a team of experienced professionals, we ensure that your vehicle is in the best hands. 
            Our commitment to excellence and customer satisfaction sets us apart in the industry.
          </p>
        </div>
        <div>
        <img ref={imageRef} className="carImage" src={carImage} alt="Car" /> 
        </div>
      {/* </div> */}
    </div>
  );
}
