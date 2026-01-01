function PropertyCard({ property, onView, onFavourite }) {
  return (
    <div className="property-card">
      <img src={property.images[0]} alt={property.type} />
      <h3>{property.type}</h3>
      <p>£{property.price}</p>
      <p>{property.shortDescription}</p>

      <button onClick={onView}>View</button>
      <button onClick={() => onFavourite(property)}>❤</button>
    </div>
  );
}

export default PropertyCard;
