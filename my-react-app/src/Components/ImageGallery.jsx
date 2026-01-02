import React, { useEffect, useState } from 'react'
import "../styles/imageGallery.css"

function ImageGallery({ images}) {
  const galleryImages = Array.isArray(images) ? images : [];
  const [current, setCurrent] = useState(galleryImages[0] || null);

  useEffect(() => {
    if (galleryImages.length > 0) {
        setCurrent(galleryImages[0]);
    }
  }, [galleryImages]);

  if (galleryImages.length === 0){
    return <p>No images available.</p>;
  }

  return (
    <div className="image-gallery">
        {current && <img src={current} alt="Main" className="main-image" />}
        <div className="thumbnails">
            {galleryImages.map((img, i) => (
                <img
                    key={i}
                    src={img}
                    alt={`Thumb ${i + 1}`}
                    className={current === img ? "active" : ""}
                    onClick={() => setCurrent(img)}
                />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;