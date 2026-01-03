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

    // Correctly access the .properties array from the JSON file 
    const filteredProperties = propertiesData.properties.filter((property) => {
        if (filters.type && filters.type !== "any" && property.type !== filters.type) return false;
        if (filters.minPrice && property.price < filters.minPrice) return false;
        if (filters.maxPrice && property.price > filters.maxPrice) return false;
        if (filters.minBeds && property.bedrooms < filters.minBeds) return false;
        if (filters.maxBeds && property.bedrooms > filters.maxBeds) return false;

        // Postcode search 
        if (filters.postcode && !property.location.toUpperCase().includes(filters.postcode.toUpperCase())) return false;

        // Date search
        if (filters.dateAdded) {
            const months = {
                January: 0, February: 1, March: 2, April: 3,
                May: 4, June: 5, July: 6, August: 7,
                September: 8, October: 9, November: 10, December: 11
            };

            const propertyDate = new Date(
                property.added.year,
                months[property.added.month],
                property.added.day
            );
            
            if (propertyDate < new Date(filters.dateAdded)) return false;
        }

        return true; 
    });

    const addToFavourites = (property) => {
        if (!favourites.some((p) => p.id === property.id)) {
        setFavourites([...favourites, property]);
        }
    };

    const removeFavourite = (id) => {
        setFavourites(favourites.filter((p) => p.id !== id));
    };

    if (selectedProperty) {
        return (
        <PropertyDetails
            property={selectedProperty}
            onBack={() => setSelectedProperty(null)}
            onFavourite={addToFavourites}
            favourites={favourites}
        />
        );
    }

    return (
        <div className="page-layout"> 
            <div className="search-section">
                <SearchForm onSearch={setFilters} />
                {/*Display favourites on search page */}
                <FavouritesList
                    favourites={favourites}
                    onRemove={removeFavourite}
                    onClear={() => setFavourites([])}
                    onView={setSelectedProperty}
                />
            </div>
            
            <div className="results">
                {filteredProperties.length > 0 ? (
                    filteredProperties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            property={property}
                            onView={() => setSelectedProperty(property)}
                            onFavourite={addToFavourites}
                        />
                    ))
                ) : (
                    <p>No properties found matching your criteria.</p>
                )}
            </div>
        </div>
  );
}

export default Pages;
