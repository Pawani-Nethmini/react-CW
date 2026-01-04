import React from 'react';

function FavouriteCard({ property, onRemove, onView }) {
  const displayImage =
    property.picture && property.picture.length > 0
      ? property.picture[0]
      : '/images/default.jpg';

  return (
    <div className="fav-card">
      <img src={displayImage} alt={property.type} className="fav-thumb" />
      <div className="fav-info">
        <div className="fav-name" onClick={() => onView(property)}>
          {property.type}
        </div>
        <div className="fav-price">£{property.price.toLocaleString()}</div>
      </div>
      <button className="remove-btn" onClick={() => onRemove(property.id)} aria-label={`Remove ${property.type}`}>
        Delete
      </button>
    </div>
  );
}

export default FavouriteCard;
