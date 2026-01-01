import React, { useEffect, useState } from 'react'
import "../styles/imageGallery.css"

function ImageGallery({ images=[], mainImage, setMainImage }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if(images.length > 0){
        setCurrentIndex(0);
        setMainImage(images[0]);
    }
  }, [images, setMainImage]);

  if (!images.length) {
    return (
      <div className="image-gallery">
        <div className="main-image-container">
          <img
            src="/placeholder.jpg"
            alt="No property available"
            className="main-image"
          />
        </div>
      </div>
    );
  }

  /* Navigate to next image */
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setMainImage(images[nextIndex]);
  };

  /*Navigate to previous image*/
  const handlePrevious = () => {
    const prevIndex = 
        currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setMainImage(images[prevIndex]);
  };

  const handleThumbnailClick = (image, index) => {
    setMainImage(image);
    setCurrentIndex(index);
  };

  return (
    <div className="image-gallery">
      {/* Main Image Display */}
      <div className="main-image-container">
        <img 
          src={mainImage} 
          alt="Property"
          className="main-image"
        />
        
        {/* Navigation Buttons */}
        <button 
          onClick={handlePrevious}
          className="nav-button prev-button"
        >
          ‹
        </button>
        <button 
          onClick={handleNext}
          className="nav-button next-button"
            >
        </button>

        {/* Image Counter */}
        <div className="image-counter">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="thumbnails-container">
        <div className="thumbnails">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(image, index)}
            >
              <img src={image} alt={`Thumbnail ${index + 1}`}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;