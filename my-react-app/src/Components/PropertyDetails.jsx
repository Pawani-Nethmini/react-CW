import React from "react"
import "./styles/propertyDetails.css"
import ImageGallery from "./ImageGallery";

function PropertyDetails({ property, onBack, onFavourite }) {
  return (
    <div>
      <button onClick={onBack}>← Back</button>
      <h2>{property.type}</h2>
      <ImageGallery images={property.images} />

      <button onClick={() => onFavourite(property)}>Add to Favourites</button>

      <div className="tabs">
        <h3>Description</h3>
        <p>{property.description}</p>

        <h3>Floor Plan</h3>
        <img src={property.floorPlan} alt="Floor plan" />

        <h3>Location</h3>
        <iframe
          title="map"
          src={`https://maps.google.com/maps?q=${property.postcode}&output=embed`}
        />
      </div>
    </div>
  );
}

export default PropertyDetails;
