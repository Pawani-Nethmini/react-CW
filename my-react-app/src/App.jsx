import React, { useState } from "react";
import SearchForm from "./Components/SearchForm";
import PropertyCard from "./Components/PropertyCard";
import PropertyDetails from "./Components/PropertyDetails";
import FavouritesList from "./Components/FavouritesList";
import propertiesData from "./data/properties.json";

function App() {
  const [searchResults, setSearchResults] = useState(propertiesData || []);
  const [favourites, setFavourites] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showResults, setShowResults] = useState(false);

  /* ---------------- SEARCH ---------------- */
  const handleSearch = (criteria) => {
    let filtered = [...propertiesData];

    if (criteria.type && criteria.type !== "any") {
      filtered = filtered.filter(p => p.type === criteria.type);
    }

    if (criteria.minPrice) {
      filtered = filtered.filter(p => p.price >= Number(criteria.minPrice));
    }

    if (criteria.maxPrice) {
      filtered = filtered.filter(p => p.price <= Number(criteria.maxPrice));
    }

    if (criteria.minBedrooms) {
      filtered = filtered.filter(p => p.bedrooms >= Number(criteria.minBedrooms));
    }

    if (criteria.maxBedrooms) {
      filtered = filtered.filter(p => p.bedrooms <= Number(criteria.maxBedrooms));
    }

    if (criteria.postcode) {
      const pc = criteria.postcode.toUpperCase().trim();
      filtered = filtered.filter(p =>
        p.postcode?.toUpperCase().startsWith(pc)
      );
    }

    setSearchResults(filtered);
    setShowResults(true);
    setSelectedProperty(null);
  };

  /* ---------------- FAVOURITES ---------------- */
  const handleAddToFavourites = (property) => {
    if (!favourites.find(f => f.id === property.id)) {
      setFavourites([...favourites, property]);
    }
  };

  const handleRemoveFromFavourites = (id) => {
    setFavourites(favourites.filter(f => f.id !== id));
  };

  const handleClearFavourites = () => {
    setFavourites([]);
  };

  /* ---------------- VIEW CONTROL ---------------- */
  const handleViewProperty = (property) => {
    setSelectedProperty(property);
    setShowResults(false);
  };

  const handleBackToResults = () => {
    setSelectedProperty(null);
    setShowResults(true);
  };

  const handleBackToSearch = () => {
    setSelectedProperty(null);
    setShowResults(false);
  };

  /* ---------------- RENDER ---------------- */
  return (
    <div className="app">
      <header className="header">
        <h1>Estate Agent</h1>
        <p>Find your dream property</p>
      </header>

      <main className="main-content">
        {/* SEARCH FORM */}
        {!showResults && !selectedProperty && (
          <>
            <SearchForm onSearch={handleSearch} />

            {favourites.length > 0 && (
              <section>
                <h2>Your Favourites ({favourites.length})</h2>
                <div className="favourites-grid">
                  {favourites.map(p => (
                    <div key={p.id}>
                      <img
                        src={p.images?.[0] || "/placeholder.jpg"}
                        alt={p.location || "Property"}
                        width="200"
                      />
                      <p>£{p.price?.toLocaleString()}</p>
                      <p>{p.location}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* PROPERTY DETAILS */}
        {selectedProperty && (
          <>
            <button onClick={handleBackToResults}>← Back to Results</button>
            <PropertyDetails
              property={selectedProperty}
              onAddToFavourites={handleAddToFavourites}
              isFavourite={favourites.some(f => f.id === selectedProperty.id)}
            />
          </>
        )}

        {/* SEARCH RESULTS */}
        {showResults && !selectedProperty && (
          <div className="results-layout">
            <section>
              <button onClick={handleBackToSearch}>← New Search</button>
              <h2>Results ({searchResults.length})</h2>

              {searchResults.length === 0 && <p>No properties found.</p>}

              <div className="property-grid">
                {searchResults.map(property => (
                  <PropertyCard
                    key={property.id}
                    property={property}
                    onView={handleViewProperty}
                    onAddToFavourites={handleAddToFavourites}
                    isFavourite={favourites.some(f => f.id === property.id)}
                  />
                ))}
              </div>
            </section>

            <aside>
              <FavouritesList
                favourites={favourites}
                onRemove={handleRemoveFromFavourites}
                onClear={handleClearFavourites}
                onView={handleViewProperty}
                onDrop={handleAddToFavourites}
              />
            </aside>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>© 2025 Estate Agent</p>
      </footer>
    </div>
  );
}

export default App;
