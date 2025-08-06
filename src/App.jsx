import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Cormier from './Cormier';
import Pearson from './Pearson';
import CormierGallery from './CormierGallery';
import CormierGalleryFr from './CormierGalleryFr';
import PearsonGallery from './PearsonGallery';
import PearsonGalleryFr from './PearsonGalleryFr';
import HomeFr from './HomeFr';
import CormierFr from './CormierFr';
import PearsonFr from './PearsonFr';

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
        <Route path="/cormier/fr" element={<CormierFr />} />
        <Route path="/cormier/photos" element={<CormierGallery />} />
        <Route path="/cormier/photos/fr" element={<CormierGalleryFr />} />
        <Route path="/pearson" element={<Pearson />} />
        <Route path="/pearson/fr" element={<PearsonFr />} />
        <Route path="/pearson/photos" element={<PearsonGallery />} />
        <Route path="/pearson/photos/fr" element={<PearsonGalleryFr />} />
      </Routes>
    </Router>
  );
}

export default App;
