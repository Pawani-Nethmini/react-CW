import React, { useState } from 'react';

/**
 * ImageGallery Component
 * Displays property images with main view and thumbnail navigation
 * @param {Array} images - Array of image URLs
 * @param {string} mainImage - Currently displayed main image URL
 * @param {Function} setMainImage - Callback to update main image
 */
function ImageGallery({ images, mainImage, setMainImage }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  /**
   * Navigate to next image
   */
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setMainImage(images[nextIndex]);
  };

  /**
   * Navigate to previous image
   */
  const handlePrevious = () => {
    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
    setMainImage(images[prevIndex]);
  };

  /**
   * Select specific image from thumbnails
   * @param {string} image - Image URL
   * @param {number} index - Image index
   */
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
          aria-label="Previous image"
        >
          ‹
        </button>
        <button 
          onClick={handleNext}
          className="nav-button next-button"
          aria-label="Next image"
        >
          ›
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
              className={`thumbnail ${mainImage === image ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(image, index)}
            >
              <img 
                src={image} 
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;