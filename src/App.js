import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="grid">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
