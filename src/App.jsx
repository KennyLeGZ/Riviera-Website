import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Cormier from './Cormier';
import Pearson from './Pearson';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cormier" element={<Cormier />} />
        <Route path="/pearson" element={<Pearson />} />
      </Routes>
    </Router>
  );
}

export default App;
