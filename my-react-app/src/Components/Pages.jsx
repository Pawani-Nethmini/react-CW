// src/Components/Pages/Pages.jsx
// src/Components/Pages.jsx
import React, { useState } from "react"
import PropertyCard from "./PropertyCard"
import FavouritesList from "./FavouritesList"
import PropertyDetails from "./PropertyDetails"
import propertiesData from '../data/properties.json'


function Pages() {
  const [favourites, setFavourites] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleAddToFavourites = (property) => {
    if (!favourites.find((p) => p.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };

  const handleRemoveFavourite = (id) => {
    setFavourites(favourites.filter((p) => p.id !== id));
  };

  return (
    <div className="pages-container">
      <h1>Property Listings</h1>
      <div className="properties-grid">
        {propertiesData.properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={{ ...property, images: [property.picture] }}
            onView={setSelectedProperty}
            onAddToFavourites={handleAddToFavourites}
            isFavourite={favourites.some((p) => p.id === property.id)}
          />
        ))}
      </div>

      {selectedProperty && (
        <PropertyDetails
          property={{ ...selectedProperty, images: [selectedProperty.picture] }}
          onAddToFavourites={handleAddToFavourites}
          isFavourite={favourites.some((p) => p.id === selectedProperty.id)}
        />
      )}

      <FavouritesList
        favourites={favourites}
        onRemove={handleRemoveFavourite}
        onClear={() => setFavourites([])}
        onView={setSelectedProperty}
        onDrop={handleAddToFavourites}
      />
    </div>
  );
}

export default Pages;
