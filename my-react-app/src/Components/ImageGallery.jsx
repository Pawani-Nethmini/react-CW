import React, { useEffect, useState } from 'react'
import "../styles/imageGallery.css"

function ImageGallery({ images}) {
  const galleryImages = images && images.length > 0 ? images : [];
  const [current, setCurrent] = useState(galleryImages[0]);

  if (galleryImages.length === 0) 
    return <p>No images available.</p>;

  return (
    <div className="gallery-container">
        <div className="main-image-wrapper">
            <img src={current} alt='Main Property' className='main-image'/>
        </div>
        <div className="thumbnails">
            {galleryImages.map((img, index) => (
                <img key={index} src={img} alt={`Thumbnail ${index + 1}`} className={current === img ? 'active' : ''} onClick={() => setCurrent(img)}/>
          ))}
        </div>
    </div>
  );
}

export default ImageGallery;