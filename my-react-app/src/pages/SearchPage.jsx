import React, {useState, useEffect} from "react"
import propertyData from "../data/properties.json"
import PropertyCard from "../Components/PropertyCard"

const SearchPage = () => {
    const [results, setResults] = useState(propertyData.properties);
    const [criteria, setCriteria] = useState({
        type: "any",
        minPrice: 0,
        maxPrice: 1000000,
        minBedrooms: 0,
        maxBedrooms: 10,
        postcode: ""
    });

    const handleSearch = () => {
        const filtered = propertyData.properties.filter(prop => {
            const matchType = criteria.type === "any" || prop.type.toLowerCase() === criteria.type.toLocaleLowerCase();
            const matchPrice = prop.price >= criteria.minPrice && prop.price <= criteria.maxPrice;
            const matchBeds = prop.bedrooms >= criteria.minBedrooms && prop.bedrooms <= criteria.maxBedrooms;
            const matchPostcode = prop.postcode.toLocaleLowerCase().startsWith(criteria.postcode.toLocaleLowerCase());

            return matchType && matchPrice && matchBeds && matchPostcode;
        });
        setResults(filtered);
    };

    return (
        <div className="container">
            <header className="heading">
                <h1>Find Your Next Home</h1>
            </header>

            <section className="background shadow mtop">
                <div className="grid5">
                    <div className="form-group">
                        <label>Property Type</label>
                        <select onChange={(e) => setCriteria({...criteria, type: e.target.value})}>
                            <option value="any">Any</option>
                            <option value="house">House</option>
                            <option value="flat">Flat</option>
                        </select>
                    </div>
                    <button onClick={handleSearch}>Search</button>
                </div>
            </section>

            <section className="grid3 padding">
                {results.map(prop => (
                    <PropertyCard key={prop.id} property={prop} />
                ))}
            </section>
        </div>
    );
};

export default SearchPage;