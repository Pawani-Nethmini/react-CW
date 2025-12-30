import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data/properties.json'
import "./SearchPage.css" 

const SearchPage = ({ favorites, onToggleFav, onClearFavs }) => {
  const [results, setResults] = useState(data.properties);
  const [filters, setFilters] = useState({
    type: 'any', minPrice: 0, maxPrice: 1000000, minBeds: 0, maxBeds: 10, postcode: ''
  });

  const handleSearch = () => {
    const filtered = data.properties.filter(p => {
      const typeMatch = filters.type === 'any' || p.type.toLowerCase() === filters.type.toLowerCase();
      const priceMatch = p.price >= filters.minPrice && p.price <= filters.maxPrice;
      const bedMatch = p.bedrooms >= filters.minBeds && p.bedrooms <= filters.maxBeds;
      const postMatch = p.postcode.toLowerCase().startsWith(filters.postcode.toLowerCase());
      return typeMatch && priceMatch && bedMatch && postMatch;
    });
    setResults(filtered);
  };

  return (
    <div className="container">
      <div className="flex mtop">
        <section className="search-form shadow padding" style={{ width: '70%' }}>
          <div className="grid3">
            <input type="text" placeholder="Postcode (e.g. NW1)" onChange={e => setFilters({...filters, postcode: e.target.value})} />
            <select onChange={e => setFilters({...filters, type: e.target.value})}>
              <option value="any">Type: Any</option>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
            </select>
            <button onClick={handleSearch}>Search Properties</button>
          </div>
        </section>

        <aside className="favorites-list shadow" style={{ width: '25%', padding: '20px' }}>
          <h3>Favourites ({favorites.length})</h3>
          <button className="btn2" onClick={onClearFavs} style={{ fontSize: '12px', padding: '5px' }}>Clear All</button>
          {favorites.map(fav => (
            <div key={fav.id} className="flex" style={{ marginTop: '10px' }}>
              <p>{fav.type} - £{fav.price}</p>
              <button onClick={() => onToggleFav(fav)}>×</button>
            </div>
          ))}
        </aside>
      </div>

      <div className="grid3 mtop">
        {results.map(prop => (
          <div key={prop.id} className="shadow" style={{ padding: '15px', borderRadius: '10px' }}>
            <img src={prop.mainImage} alt={prop.type} />
            <h4>{prop.type} - £{prop.price.toLocaleString()}</h4>
            <p>{prop.description}</p>
            <div className="flex">
              <Link to={`/property/${prop.id}`} className="btn3" style={{ padding: '10px', color: '#fff' }}>View Details</Link>
              <button onClick={() => onToggleFav(prop)}>
                {favorites.some(f => f.id === prop.id) ? '❤️' : '🤍'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;