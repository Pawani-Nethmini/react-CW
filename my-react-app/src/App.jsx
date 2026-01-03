import React, { useEffect } from "react";
import Pages from "./Components/Pages";
import "./App.css";

function App() {

  return (
    <div className="app-container">
      {/* Header section as described in the aesthetics requirements */}
      <header className="header">
        <div className="header-content">
          <h1 className="site-title">Estate Agent Portal</h1>
          <p className="site-tagline">Your smart way to find the right home.</p>
        </div>
      </header>

      <main className="main-content">
        <Pages />
      </main>

      <footer className="footer">
        <p>&copy; 2026 Estate Agent Web Application - Advanced Client-Side Development</p>
      </footer>
    </div>
  );
}

export default App;