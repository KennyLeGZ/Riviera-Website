import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Cormier from './Cormier';
import Pearson from './Pearson';
import CormierGallery from './CormierGallery';
import PearsonGallery from './PearsonGallery';
import HomeFr from './HomeFr';

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root path "/" to "/home" */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Your actual pages */}
        <Route path="/home" element={<Home />} />
        <Route path="home/fr" element={<HomeFr />} />
        <Route path="/cormier" element={<Cormier />} />
        <Route path="/cormier/photos" element={<CormierGallery />} />
        <Route path="/pearson" element={<Pearson />} />
        <Route path="/pearson/photos" element={<PearsonGallery />} />
      </Routes>
    </Router>
  );
}

export default App;
