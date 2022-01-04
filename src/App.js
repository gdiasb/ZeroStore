import React from 'react';
import './App.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="grid">
      <nav className="navbar">
        <div className="nav_logo">Z</div>
        <ul className="nav_links">
          <li>
            <button>
              <i class="bi bi-basket"></i>
            </button>
          </li>
          <li>
            <button>
              <i class="bi bi-search"></i>
            </button>
          </li>
          <li>
            <button>
              <i class="bi bi-pin-map"></i>
            </button>
          </li>
          <li>
            <button>
              <i class="bi bi-person-circle"></i>
            </button>
          </li>
        </ul>
      </nav>
      <div><Home /></div>
    </div>
  );
}

export default App;
