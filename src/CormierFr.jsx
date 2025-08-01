import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './Global.css';
import './Properties.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HamburgerMenu from './HamburgerMenu';

// 1 Bedroom
import img1 from './assets/Appartements/furnished1.png';
import img2 from './assets/Appartements/furnished3.png';
import img3 from './assets/Appartements/furnished4.png';
import img4 from './assets/Appartements/furnished5.png';

import wifiIcon from './assets/Icons/wifi.svg';
import kitchenIcon from './assets/Icons/kitchen.svg';
import lockIcon from './assets/Icons/security-camera.svg';
import heatingCoolingIcon from './assets/Icons/heating-cooling.png';
import washerIcon from './assets/Icons/washer.png';
import gymIcon from './assets/Icons/gymIcon.png';

// Logo
import rivieraLogo from './assets/Icons/Riviera-logo.png';

// Amenities
import pool from './assets/Amenities/pool1.png';

// View
import balconyview from './assets/Outside/view1.png';





const images = [
  { src: img1, caption: "Spacious 1 Bedroom Living Area", type: '1 bedroom' },
  { src: img2, caption: " 1 Bedroom Living Area", type: '1 bedroom' },
  { src: img3, caption: "Spacious 1  Living Area", type: '1 bedroom' },
  { src: img4, caption: "Spacious 1 Bedroom Living Area", type: '1 bedroom' },
];


// Sample units data
const unitsData = [
  { unit: '101', type: '1 Bedroom', size: '490 sq ft', floor: 1, price: '$1,220 / month', img: img1 },
  { unit: '203', type: '2 Bedroom', size: '765 sq ft', floor: 2, price: '$1,695 / month', img: img2 },
  { unit: '305', type: 'Studio', size: '300-342 sq ft', floor: 3, price: '$1,220 / month', img: img3 },
];


function Cormier() {
  const navigate = useNavigate();

  // State for the discover cormier banner
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    { image: img1, title: "Modern Living at Cormier" },
    { image: img2, title: "Spacious & Bright Interiors" },
    { image: img3, title: "Prime Location in Montreal" },
    { image: img4, title: "Designed for Comfort" },
  ];

  const nextSlide = () => {
    if (isTransitioning) return; // prevent spam clicks
    setIsTransitioning(true);
    setActiveSlide((prev) => prev + 1);
  };

  useEffect(() => {
    if (activeSlide === slides.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveSlide(0);
      }, 600); // matches transition speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setIsTransitioning(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [activeSlide]);



  // State for the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };  

  // Slideshow state
  const [currentIndex, setCurrentIndex] = useState(0);
  // Filter state
  const [filterType, setFilterType] = useState('All');
  // Modal state
  const [showModal, setShowModal] = useState(false);
  // For fade animation
  const [fade, setFade] = useState(true);

  // Refs for smooth scrolling
  const aboutRef1 = useRef(null);
  const aboutRef2 = useRef(null);
  const unitsRef1 = useRef(null);
  const locationRef = useRef(null);
  const testimonialsRef1 = useRef(null);
  const additionalInfoRef = useRef(null);

  // Auto slideshow with fade
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true); // fade in new image
      }, 500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isTransitioning]); 

  // Navigation for slideshow with fade
  const goToPrevious = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 300);
  };

  const goToNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 300);
  };

  const goToIndex = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  // Filter units by type
  const filteredUnits = unitsData.filter(unit =>
    filterType === 'All' || unit.type === filterType
  );

  // Smooth scroll to sections
  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      const header = document.querySelector('.header');
      const headerHeight = header ? header.offsetHeight : 0;
      const padding = 10;

      const top = ref.current.getBoundingClientRect().top + window.pageYOffset - headerHeight - padding;

      window.scrollTo({ top, behavior: 'smooth' });
    }
  };


  // Open apply modal
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Handle Contact button click
  const handleContactClick = () => {
    window.location.href = 'mailto:kle@gestionzagora.com';
  };

  return (
  <>
    {/* Header outside app-container */}
    <header className="header">
      <div className="header-left">
        {/* Desktop links */}
        <div className="desktop-links">
          <button className="nav-header-link" onClick={() => navigate('/home')}>Riviera</button>
          <button className="nav-header-link" onClick={() => scrollToRef(aboutRef1, -200)}>À Propos</button>
          <button className="nav-header-link" onClick={() => navigate('/cormier/photos')}>Galerie</button>
          <button className="nav-header-link" onClick={() => scrollToRef(unitsRef1, -200)}>Unités Disponibles</button>
        </div>
        
        {/* Hamburger Icon for Mobile */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>

      <div className="header-center">
        <div
          className="header-address"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
        >
          <img
            src={rivieraLogo}
            alt="Riviera Logo"
          />
          <span>CORMIER</span>
        </div>
      </div>

      <div className="header-right">
        {/* Desktop buttons */}
        <div className="desktop-buttons">
          <button className="nav-header-link" onClick={handleContactClick}>Contacter l'Agent</button>
          <button className="nav-header-link" onClick={openModal}>Réserver Une Visite</button>
          <button className="nav-header-link" onClick={() => navigate('/cormier')}>EN</button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="nav-header-link" onClick={() => navigate('/home')}>Riviera</button>
        <button className="nav-header-link" onClick={() => scrollToRef(aboutRef1, -200)}>À Propos</button>
        <button className="nav-header-link" onClick={() => navigate('/cormier/photos')}>Galerie</button>
        <button className="nav-header-link" onClick={() => scrollToRef(unitsRef1, -220)}>Unités Disponibles</button>
        <button className="nav-header-link" onClick={handleContactClick}>Contacter l'Agent</button>
        <button className="nav-header-link" onClick={openModal}>Réserver Une Visite</button>
      </div>

    </header>

    <div className="app-container">

      {/* Main Content */}
      <main className="main-content">

        {/* Slideshow */}
        <section className="slideshow-section" 
          aria-label="Building images slideshow" 
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <div className="slideshow-container triple-display" role="region" aria-live="polite" style={{ position: 'relative' }}>
            {/* Left arrow button */}
            <button
              className="nav-button left"
              onClick={goToPrevious}
              aria-label="Previous image"
              style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
            >
              ‹
            </button>

            {/* Previous image preview */}
            <img
              src={images[(currentIndex - 1 + images.length) % images.length].src}
              alt={`Previous: ${images[(currentIndex - 1 + images.length) % images.length].caption}`}
              className="side-image"
              onClick={goToPrevious}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') goToPrevious(); }}
              aria-label="Go to previous image"
            />

            {/* Main image */}
            <img
              key={images[currentIndex].src}
              src={images[currentIndex].src}
              alt={images[currentIndex].caption}
              className={`main-image ${fade ? 'fade-in' : 'fade-out'}`}
            />

            {/* Next image preview */}
            <img
              src={images[(currentIndex + 1) % images.length].src}
              alt={`Next: ${images[(currentIndex + 1) % images.length].caption}`}
              className="side-image"
              onClick={goToNext}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') goToNext(); }}
              aria-label="Go to next image"
            />

            {/* Right arrow button */}
            <button
              className="nav-button right"
              onClick={goToNext}
              aria-label="Next image"
              style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}
            >
              ›
            </button>
          </div>
          <p className="caption">{images[currentIndex].caption}</p>
        </section>

        {/* Book A Tour Section */}
        <section
          className="highlight-hero lightgray-bg reverse"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <div className="hero-content-wrapper">
            <div className="hero-image">
              <img src={images[1].src} alt="Beautiful unit at Cormier" />
            </div>
            <div className="hero-text">
              <h1>Bienvenue à <br />50 & 60 Cormier<br />Appartements Riviera</h1>
              <p>Logements Abordables, Emplacement Central, Confort Total.</p>
              <button className="hero-tour-button" onClick={openModal}>
                Réserver Une Visite
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          ref={aboutRef1}
          className="about-section"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <div className="about-wrapper">
            <div className="about-image">
              <img
                src={images[1].src}
                alt="Cormier Building Exterior"
                loading="lazy"
              />
            </div>

            <div className="about-text">
              <h2>À Propos De Cormier</h2>
              <p>
                Bienvenue à <strong>Cormier</strong>, une résidence magnifiquement rénovée à Aylmer, Gatineau,  
                à seulement quelques minutes de la rivière des Outaouais et du centre-ville d’Ottawa.  
                Conçue pour le confort, elle allie commodité et style afin d’offrir une expérience de vie de qualité.
                </p>
                <p>
                À <strong>Cormier</strong>, les appartements récemment rénovés offrent des espaces accueillants  
                où le confort et la praticité se rencontrent pour le quotidien.
                </p>
              <ul className="about-features">
                <li>Design Rénové Et Confortable</li>
                <li>Emplacement Idéal Près De La Rivière Des Outaouais, Du Centre-Ville D’Ottawa Et Des Commodités À Proximité</li>
                <li>Espaces Spacieux Conçus Pour Un Quotidien Facile</li>
                <li>Une Atmosphère Accueillante Et Axée Sur La Communauté</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Insert Features Cards Section right here */}
        <section className="features-cards-section white-bg" data-aos="fade-down" data-aos-once="true" data-aos-duration="600" data-aos-easing="ease-in-out">
          <h2>Vivez Mieux À Cormier</h2>
          <div className="features-cards-container">
            {/* Card 1: Free Wifi */}
            <div className="feature-card">
              <img src={wifiIcon} alt="WiFi icon" className="feature-icon" />
              <h3>Internet Gratuit</h3>
              <p>Restez connecté grâce à l’internet sans fil inclus dans tout l’immeuble.</p>
            </div>

            {/* Card 2: Kitchen Features */}
            <div className="feature-card">
              <img src={kitchenIcon} alt="Kitchen icon" className="feature-icon" />
              <h3>Cuisine Équipée</h3>
              <p>Une Cuisine Équipée D’Une Plaque De Cuisson, D’Un Four À Micro-Ondes Et D’Autres Éléments Essentiels, Conçue Pour Votre Commodité Et Votre Confort.</p>
            </div>

            {/* Card 3: Secure Building */}
            <div className="feature-card">
              <img src={lockIcon} alt="Lock icon" className="feature-icon" />
              <h3>Accès Sécurisé 24/7</h3>
              <p>Sentez-Vous En Sécurité Grâce À Une Surveillance Continue Et À Des Systèmes D’Entrée Sécurisés Pour Les Résidents.</p>
            </div>

            {/* Card 4: Heating and Cooling */}
            <div className="feature-card">
              <img src={heatingCoolingIcon} alt="Heating/Cooling icon" className="feature-icon" />
              <h3>Climatisation & Chauffage</h3>
              <p>Climatisation Et Chauffage Inclus Toute L’Année Pour Votre Confort.</p>
            </div>

            {/* Card 4: Gym */}
            <div className="feature-card feature-card-medium">
              <img src={gymIcon} alt="Gym icon" className="feature-icon" />
              <h3>Gym Sur Place</h3>
              <p>Restez En Forme Et Actif Grâce À Notre Gym Entièrement Équipé, Accessible 24/7 Pour Les Résidents.</p>
            </div>

            {/* Card 5: In-Unit Washer/Dryer */}
            <div className="feature-card feature-card-medium">
              <img src={washerIcon} alt="Washer/Dryer icon" className="feature-icon" />
              <h3>Buanderie</h3>
              <p>Buanderie Sur Place Avec Laveuses Et Sécheuses Modernes.</p>
            </div>
          </div>
        </section>

        {/* Amenities Gym Highlight Section */}
        <section
          className="amenities-hero lightgray-bg"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="500"
        >
          <div className="amenities-hero-content-wrapper">
            <div className="amenities-hero-image">
              <img src={pool} alt="Pool at Cormier" />
            </div>
            <div className="amenities-hero-text">
              <h1>Détendez-Vous Et Rafraîchissez-Vous À La Piscine</h1>
              <p>Profitez D’Une Baignade Rafraîchissante Dans Une Piscine Lumineuse Et Accueillante, Conçue Pour La Détente Et Les Loisirs.</p>
            </div>
          </div>
        </section>

        {/* Amenities Conference Room Highlight Section */}
        <section
          className="amenities-hero lightgray-bg reverse"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
        >
          <div className="amenities-hero-content-wrapper">
            <div className="amenities-hero-image">
              <img src={balconyview} alt="Conference Room at Cormier" />
            </div>
            <div className="amenities-hero-text">
              <h1>Une Vue Superbe Sur La Rivière Des Outaouais</h1>
              <p>
                Profitez D’Une Vue Imprenable Sur La Rivière Des Outaouais Directement Depuis Votre Appartement, 
                Créer Un Environnement De Vie Paisible Et Inspirant.
              </p>
            </div>
          </div>
        </section>


        {/* Available Units Section*/}
        <section
          ref={unitsRef1}
          className="units-section coolgray-bg"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <h2>Unités Disponibles & Plans Des Appartements</h2>

          <div className="units-card-container">
            {['Studio', '1 Bedroom', '2 Bedroom'].map((type) => {
              // Show all units of this type (no filter)
              const unitsOfType = filteredUnits.filter(u => u.type === type);
              if (unitsOfType.length === 0) return null;

              return (
                <div key={type} className="unit-type-card">
                  <h3>{type}</h3>
                  {unitsOfType.map(({ unit, size, price, img }) => (
                    <div key={unit} className="unit-card">
                      <img src={img} alt={`${type} unit ${unit}`} className="unit-image" />
                      <div className="unit-info">
                        <p><strong>Type:</strong> {type}</p>
                        <p><strong>Taille:</strong> {size}</p>
                        <p><strong>Prix Initial:</strong> {price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </section>


        {/* Location Section */}
        <section
          ref={locationRef}
          className="location-section lightgray-bg"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="400"
          data-aos-easing="ease-in-out"
        >
          <div className="modern-location-wrapper">
            <div className="modern-location-text">
              <h2>Découvrez Le Quartier</h2>
              <p>
                Situé À Aylmer, Gatineau, <strong>Cormier</strong> Offre Un Accès Facile À La <b>Rivière Des Outaouais</b> Et Se Trouve À Seulement Quelques Minutes Du <b>Centre-Ville D’Ottawa</b>.  
                Entouré De Cafés, De Restaurants Et De Boutiques, Les Commodités Quotidiennes Sont Toujours À Portée De Main, Et L’<b>Université D’Ottawa</b> N’Est Qu’À 15 Minutes En Voiture.  
                Cormier Est L’Endroit Où Le Confort, La Commodité Et L’Emplacement Se Rencontrent.
              </p>
            </div>
            <div className="modern-location-map">
              <iframe
                title="Cormier Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.2978998192875!2d-75.85497622339608!3d45.40333203749745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce01f8afa357a5%3A0x75f0e3bc46daf141!2s50%20Rue%20Cormier%2C%20Gatineau%2C%20QC%20J9H%206C9!5e0!3m2!1sen!2sca!4v1753815041755!5m2!1sen!2sca"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>

      {/* Modal for Apply Now */}
      {showModal && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem',
            overflowY: 'auto',
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '70vw',
              height: '85vh', // tall modal
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
              padding: '1rem 2rem',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            {/* Close Button */}
            <button
            onClick={closeModal}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1.5rem',
              background: 'transparent',
              border: 'none',
              fontSize: '1.8rem',
              cursor: 'pointer',
              color: '#555',
              fontWeight: 'bold',
              lineHeight: 1,
            }}
          >
            &times;
          </button>
            <h2 id="modal-title" style={{ marginBottom: '1rem' }}>Book A Tour</h2>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeA9sIxQnhvUlgwuHtZOLB4oNFJ7JxlOmvkbz2Rs2V8KV9JvA/viewform?embedded=true"
              width="100%"
              height="100%"  // fill the modal content height
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Book A Tour Form"
              style={{
                border: '1px solid #ccc',
                borderRadius: '12px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                flexGrow: 1, // make iframe grow to fill available space
              }}
            />
          </div>
        </div>
      )}

      </div>

      {/* Footer */}
      <footer className="footer lightgray-bg">
        <p>© 2025 Cormier. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Cormier;

