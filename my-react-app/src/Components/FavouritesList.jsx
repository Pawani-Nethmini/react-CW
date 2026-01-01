import React from 'react';
import "../styles/favouritesList.css";

function FavouritesList({ favourites, onRemove, onClear, onView }) {
  return (
    <aside className="favourites-sidebar">
      <h3>Your Favourites ({favourites.length})</h3>
      {favourites.length === 0 && <p>No favourites added yet.</p>}
      
      <div className="fav-items">
        {favourites.map((p) => (
          <div key={p.id} className="fav-item">
            <span className="fav-title" onClick={() => onView(p)}>
                {p.type} - £{p.price.toLocaleString()}
            </span>
            <button className="remove-btn" onClick={() => onRemove(p.id)}>Delete</button>
          </div>
        ))}
      </div>

      {favourites.length > 0 && (
        <button className="clear-all-btn" onClick={onClear}>Clear List</button>
      )}
    </aside>
  );
}

export default FavouritesList;