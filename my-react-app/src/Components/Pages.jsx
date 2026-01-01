// src/Components/Pages/Pages.jsx
// src/Components/Pages.jsx
import React, {useState} from "react"
import SearchForm from "./SearchForm"
import PropertyCard from "./PropertyCard"
import FavouritesList from "./FavouritesList"
import PropertyDetails from "./PropertyDetails"
import propertiesData from "../data/properties.json"

function Pages() {
    const[filters, setFilters] = useState({});
    const [favourites, setFavourites] = useState([]);
    const [selectedProperty, setSelectedProperty] = useState(null);

    const filteredProperties = propertiesData.filter((property) => {
        if (filters.type && filters.type !== "any" && property.type !== filters.type)
            return false;

        if (filters.minPrice && property.price < filters.minPrice) 
            return false;
        
        if (filters.maxPrice && property.price > filters.maxPrice) 
            return false;

        if (filters.minBeds && property.bedrooms < filters.minBeds) 
            return false;
        
        if (filters.maxBeds && property.bedrooms > filters.maxBeds) 
            return false;

        if (filters.postcode && !property.postcode.startsWith(filters.postcode))
            return false;

        if (filters.dateAdded && new Date(property.dateAdded) < new Date(filters.dateAdded))
            return false;

        return false;
    });

    const addToFavourites = (property) => {
    if (!favourites.some((p) => p.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };

  const removeFavourite = (id) => {
    setFavourites(favourites.filter((p) => p.id !== id));
  };

  if(selectedProperty){
    return (
        <PropertyDetails
            property={selectedProperty}
            onBack={() => setSelectedProperty(null)}
            onFavourite={addToFavourites}
        />
    );
  }

  return (
    <div className="pages-layout">
        <SearchForm onSearch={setFilters} />
            
        <div className="results">
            {filteredProperties.map((property) => (
            <PropertyCard
                key={property.id}
                property={property}
                onView={() => setSelectedProperty(property)}
                onFavourite={addToFavourites}
            />
            ))}
        </div>

        <FavouritesList
            favourites={favourites}
            onRemove={removeFavourite}
            onClear={() => setFavourites([])}
            onView={setSelectedProperty}
        />
        </div>
    );
}

export default Pages;
