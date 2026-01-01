import React, { useEffect, useState } from 'react'
import "../styles/imageGallery.css"

function ImageGallery({ images}) {
  const [current, setCurrent] = useState(images[0]);

  return (
    <div>
      <img src={current} alt='Main'/>
        <div className="thumbnails">
          {images.map((image, index) => (
            <img key={i} src={img} alt='' onClick={() => setCurrent(img)}/>
          ))}
        </div>
    </div>
  );
}

export default ImageGallery;