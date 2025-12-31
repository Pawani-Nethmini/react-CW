import React from 'react';
import { useDrop, useDrag } from 'react-dnd';

/**
 * FavouritesList Component
 * Displays favourited properties with drag-and-drop support
 */
function FavouritesList({ favourites, onRemove, onClear, onView, onDrop }) {
  // Drop zone for adding properties to favourites
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'property',
    drop: (item) => {
      if (item?.property) {
        onDrop(item.property);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  }));

  return (
    <div
      ref={drop}
      className={`favourites-list ${isOver ? 'drag-over' : ''}`}
    >
      <div className="favourites-header">
        <h3>
          Favourites
          {favourites.length > 0 && (
            <span className="favourites-count">{favourites.length}</span>
          )}
        </h3>

        {favourites.length > 0 && (
          <button
            onClick={onClear}
            className="clear-button"
            title="Clear all favourites"
          >
            Clear All
          </button>
        )}
      </div>

      {favourites.length === 0 ? (
        <div className="empty-favourites">
          <p className="empty-icon">⭐</p>
          <p className="empty-text">No favourites yet</p>
          <p className="empty-hint">
            Drag properties here or click the star icon
          </p>
        </div>
      ) : (
        <div className="favourites-items">
          {favourites.map((property) => (
            <FavouriteItem
              key={property.id}
              property={property}
              onRemove={onRemove}
              onView={onView}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * FavouriteItem Component
 * Individual favourite property card (draggable)
 */
function FavouriteItem({ property, onRemove, onView }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'favourite-remove',
    item: { id: property.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }));

  return (
    <div
      ref={drag}
      className={`favourite-item ${isDragging ? 'dragging' : ''}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div
        className="favourite-content"
        onClick={() => onView(property)}
      >
        <img
          src={property.images?.[0] || '/placeholder.jpg'}
          alt={property.location}
          className="favourite-thumbnail"
        />

        <div className="favourite-details">
          <p className="favourite-price">
            £{property.price.toLocaleString()}
          </p>
          <p className="favourite-location">{property.location}</p>
          <p className="favourite-beds">{property.bedrooms} bed</p>
        </div>
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onRemove(property.id);
        }}
        className="remove-button"
        title="Remove from favourites"
      >
        ✕
      </button>
    </div>
  );
}

export default FavouritesList;
