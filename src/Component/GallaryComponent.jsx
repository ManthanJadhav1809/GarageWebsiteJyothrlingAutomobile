import React, { useState } from 'react';
import './GalleryComponent.css'; // Ensure you have this CSS file for styling

// Import images
import CarImage1 from '../images/GalleryImage/CarImage1.jpg';
import CarImage2 from '../images/GalleryImage/CarImage2.jpg';
import CarImage3 from '../images/GalleryImage/CarImage3.jpg';
import CarImage4 from '../images/GalleryImage/CarImage4.jpg';
import CarImage5 from '../images/GalleryImage/CarImage5.jpg';
import CarImage6 from '../images/GalleryImage/CarImage6.jpg';

const images = [CarImage1, CarImage2, CarImage3, CarImage4, CarImage5, CarImage6];

export default function GalleryComponent() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const showImage = (index) => setCurrentIndex(index);
  const closeImage = () => setCurrentIndex(null);
  const nextImage = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  const prevImage = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

  return (
    <div className='gallery-container'>
      <h2>Photo Gallery</h2>
      <div className='thumbnail-container'>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Gallery Image ${index + 1}`}
            className='thumbnail'
            onClick={() => showImage(index)}
          />
        ))}
      </div>

      {currentIndex !== null && (
        <div className='modal'>
          <span className='close' onClick={closeImage}>&times;</span>
          <img src={images[currentIndex]} alt={`Full Image ${currentIndex + 1}`} className='modal-content' />
          <a className='prev' onClick={prevImage}>&#10094;</a>
          <a className='next' onClick={nextImage}>&#10095;</a>
        </div>
      )}
    </div>
  );
}
