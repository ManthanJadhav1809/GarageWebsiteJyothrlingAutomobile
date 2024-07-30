import React, { useState } from 'react';
import './Style.css';

// Import FontAwesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Import images
import CarImage1 from '../images/GalleryImage/CarImage1.jpg';
import CarImage2 from '../images/GalleryImage/CarImage2.jpg';
import CarImage3 from '../images/GalleryImage/CarImage3.jpg';
import CarImage4 from '../images/GalleryImage/CarImage4.jpg';
import CarImage5 from '../images/GalleryImage/CarImage5.jpg';
import CarImage6 from '../images/GalleryImage/CarImage6.jpg';

// Import react-bootstrap components
import { Button, Modal, Image } from 'react-bootstrap';

const images = [CarImage1, CarImage2, CarImage3, CarImage4, CarImage5, CarImage6];

export default function GalleryComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setCurrentIndex(index);
    setShow(true);
  };

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
            alt={`Gallery ${index + 1}`}
            className='thumbnail'
            onClick={() => handleShow(index)}
          />
        ))}
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Gallery</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <Button variant="secondary" className='modal-button' onClick={prevImage}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          <Image src={images[currentIndex]} alt={`FullImage ${currentIndex + 1}`} className="modal-image" />
          <Button variant="secondary" className='modal-button' onClick={nextImage}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
