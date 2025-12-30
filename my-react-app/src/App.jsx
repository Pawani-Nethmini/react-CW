import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SearchPage from "./pages/SearchPage"
import PropertyPage from "./pages/PropertyPage"
import './App.css'

function App() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (property) => {
    if (favorites.some(fav => fav.id === property.id)) {
      setFavorites(favorites.filter(fav => fav.id !== property.id));
    } else {
      setFavorites([...favorites, property]);
    }
  };

  const clearFavorites = () => setFavorites([]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={<SearchPage favorites={favorites} onToggleFav={toggleFavorite} onClearFavs={clearFavorites} />} 
          />
          <Route 
            path="/property/:id" 
            element={<PropertyPage favorites={favorites} onToggleFav={toggleFavorite} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App
