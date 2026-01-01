import React from 'react';
import { useDrop, useDrag } from 'react-dnd';
import "../styles/favouritesList.css";

function FavouritesList({ favourites, onRemove, onClear, onView }) {
  return (
    <aside>
      <h3>Favourites</h3>
      {favourites.map((p) => (
        <div key={p.id}>
          <span onClick={() => onView(p)}>{p.type}</span>
          <button onClick={() => onRemove(p.id)}>X</button>
        </div>
      ))}
      {favourites.length > 0 && <button onClick={onClear}>Clear</button>}
    </aside>
  );
}

export default FavouritesList;

