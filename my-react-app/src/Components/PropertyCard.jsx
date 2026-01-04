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
  const mapsUrl = property.location
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        property.location
      )}`
    : null;

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

          <div className="icon-actions">
            {mapsUrl && (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="map-icon-btn"
                aria-label="Open in Google Maps"
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="map-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill="currentColor" />
                </svg>
              </a>
            )}

            <button
              type="button"
              className="fav-icon-btn"
              aria-label="Add to favourites"
              onClick={(e) => {
                e.stopPropagation();
                onFavourite(property);
              }}
            >
              ❤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
