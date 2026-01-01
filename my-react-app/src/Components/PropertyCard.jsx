import React from 'react'
import { useDrag } from 'react-dnd'
import "./styles/propertyCard.css"

function PropertyCard({property, onView, onAddToFavourites, isFavourite}){
  const [{isDragging}, drag] = useDrag(() => ({
    type: 'property',
    item: { property },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));

  const handleFavouriteClick = () => {
    if (!isFavourite) {
      onAddToFavourites(property);
    }
  };

  return(
    <div ref={drag} className={`property-card ${isDragging? 'dragging' : ''}`} style={{opacity: isDragging ? 0.5 : 1}}>
      {/*Property Image*/}
      <div className='property-image-container'>
        <img src={property.images[0]} alt={property.location} className="property-image"/>
        <button onClick={handleFavouriteClick} 
          className={`favourite-badge ${isFavourite ? "active" : ''}`}
          title={isFavourite ? 'Already in favourites' : "Add to favourites"}
          disabled={isFavourite}
        >{isFavourite ? '★' : '☆'}</button>
      </div>

      {/*Property Information */}
      <div className="property-info">
        <div className="property-header">
          <h3 className="property-price">£{property.price.toLocaleString()}</h3>
          <span className="property-type">{property.type}</span>
        </div>

        <p className="property-location">
          <span className="icon">📍</span>
          {property.location}
        </p>

        <p className="property-bedrooms">
          <span className="icon">🛏️</span>
          {property.bedrooms} Bedroom{property.bedrooms !== 1 ? 's' : ''}
        </p>

        <p className="property-description">{property.shortDescription}</p>

        <div className="property-meta">
          <span className="property-date">
            Added: {new Date(property.dateAdded).toLocaleDateString('en-GB')}
          </span>
          <span className="property-postcode">{property.postcode}</span>
        </div>

        <button onClick={() => onView(property)} className="view-button">View Details</button>
      </div>
    </div>
  );
}

export default PropertyCard;