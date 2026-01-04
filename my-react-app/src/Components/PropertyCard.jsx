import React from "react";
import "../styles/propertyCard.css";
import bedIcon from "../assets/bed.png";

import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

function PropertyCard({ property, onView, onFavourite }) {
  const handleDragStart = (e) => {
    try {
      e.dataTransfer.setData('application/json', JSON.stringify(property));
      e.dataTransfer.effectAllowed = 'copy';
    } catch (err) {
      // fallback: set id only
      e.dataTransfer.setData('text/plain', String(property.id));
    }
  };
  const displayImage =
    property.picture && property.picture.length > 0
      ? property.picture[0]
      : "/images/default.jpg";

  return (
    <div className="property-card" draggable onDragStart={handleDragStart}>
      <img src={displayImage} alt={property.type} />

      <div className="card-content">
        {/*Property Type */}
        <h3>{property.type}</h3>
        <p className="Bedroom">
          <img src={bedIcon} alt="Bedrooms" className="bed-icon" />
          {property.bedrooms} Bedroom{property.bedrooms > 1 ? "s" : ""}
        </p>
        <p className="price">£{property.price}</p>
        <p>{property.shortDescription}</p>

        <div className="card-actions">
          <button
            type="button"
            className="view-btn"
            onClick={() => onView(property)}
          >
            View Details
          </button>

          <button
            type="button"
            className="fav-icon-btn"
            aria-label="Add to favourites"
            onClick={() => onFavourite(property)}
          >
            ❤
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
