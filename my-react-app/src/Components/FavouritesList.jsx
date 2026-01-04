import React from 'react';
import "../styles/favouritesList.css";
import FavouriteCard from './FavouriteCard';

function FavouritesList({ favourites, onRemove, onClear, onView, onDropAdd }) {
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    e.currentTarget.classList.add('drag-over');
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('drag-over');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('drag-over');
    let data = null;
    try {
      const json = e.dataTransfer.getData('application/json');
      if (json) data = JSON.parse(json);
    } catch (err) {
      // ignore
    }
    if (!data) {
      const id = e.dataTransfer.getData('text/plain');
      if (id) data = { id: Number(id) };
    }

    if (data && onDropAdd) onDropAdd(data);
  };

  return (
    <aside className="favourites-sidebar" onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
      <h3>Your Favourites ({favourites.length})</h3>
      {favourites.length === 0 && <p>No favourites added yet.</p>}

      <div className="fav-items">
        {favourites.map((p) => (
          <FavouriteCard key={p.id} property={p} onRemove={onRemove} onView={onView} />
        ))}
      </div>

      {favourites.length > 0 && (
        <button className="clear-all-btn" onClick={onClear}>Clear List</button>
      )}
    </aside>
  );
}

export default FavouritesList;