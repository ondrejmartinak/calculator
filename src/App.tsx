import React from 'react';
import './App.css';
import { Link, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Bolts from './pages/Bolts';
import Plates from './pages/Plates';

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Bolts">Bolts</Link></li>
        <li><Link to="/Plates">Plates</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Bolts" element={<Bolts />} />
      <Route path="/Plates" element={<Plates />} />
    </Routes>
    </>
  );
}

export default App;
