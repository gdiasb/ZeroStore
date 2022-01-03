import React from 'react';
import './App.css';

function App() {
  return (
    <div className="grid">
      <nav className="navbar">
        <div className="nav_logo">Zero Store</div>
        <ul className="nav_links">
          <li>
            <i class="bi bi-basket"></i>
          </li>
          <li>
            <i class="bi bi-search"></i>
          </li>
          <li>
            <i class="bi bi-pin-map"></i>
          </li>
          <li>
            <i class="bi bi-person-circle"></i>
          </li>
        </ul>
      </nav>
      <div>Column 1</div>
    </div>
  );
}

export default App;
