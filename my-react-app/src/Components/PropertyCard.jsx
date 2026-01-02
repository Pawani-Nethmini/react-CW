import React from "react"
import "../styles/propertyCard.css"

function PropertyCard({ property, onView, onFavourite }) {
  const displayImage = property.images ? property.images[0] : property.picture;

  return (
    <div className="property-card">
      <img src={displayImage} alt={property.type} />
      <div className="card-content">
        <h3>{property.type}</h3>
        <p>£{property.price}</p>
        <p>{property.shortDescription}</p>

        <div className="card-actions">
          <button onClick={() => onView(property)}>
    View Details
  </button>

  <button
    className="fav-icon-btn"
    onClick={() => onFavourite(property)}
  >❤</button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
