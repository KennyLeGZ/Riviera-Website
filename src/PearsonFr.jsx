import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './Global.css';
import './Properties.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HamburgerMenu from './HamburgerMenu';


// Icons
import kitchenIcon from './assets/Icons/kitchen.svg';
import lockIcon from './assets/Icons/security-camera.svg';
import heatingIcon from './assets/Icons/heating-icon-19.jpg';
import washerIcon from './assets/Icons/washer.png';
import gymIcon from './assets/Icons/gymIcon.png';
import electricityIcon from './assets/Icons/electricityIcon.png';

// Logo
import rivieraLogo from './assets/Icons/Riviera-logo.png';

// Amenities
import cinema from './assets/Amenities/cinema2.jpg';
import pool from './assets/outside/pearsonPool.jpg';


// Studio
import img1 from './assets/Appartements/Pearson/Studio/Pearson_Studio_1.png';
import furnishedStudio1 from './assets/Appartements/Pearson/Studio/Pearson_Studio_6.png';
import img2 from './assets/Appartements/Pearson/Studio/Pearson_Studio_2.png';
import img3 from './assets/Appartements/Pearson/Studio/Pearson_Studio_3.png';
import img4 from './assets/Appartements/Pearson/Studio/Pearson_Studio_4.png';
import img5 from './assets/Appartements/Pearson/Studio/Pearson_Studio_5.png';

// 1 Chambre
import img7 from './assets/Appartements/Pearson/1Bedroom/Pearson_1Bedroom_1.jpg';
import furnished1Bed1 from './assets/Appartements/Pearson/1Bedroom/furnished1Bed1.png';
import img8 from './assets/Appartements/Pearson/1Bedroom/Pearson_1Bedroom_2.jpg';
import img9 from './assets/Appartements/Pearson/1Bedroom/Pearson_1Bedroom_3.jpg';
import img10 from './assets/Appartements/Pearson/1Bedroom/Pearson_1Bedroom_4.jpg';
import img11 from './assets/Appartements/Pearson/1Bedroom/Pearson_1Bedroom_6.jpg';
import furnished1Bed2 from './assets/Appartements/Pearson/1Bedroom/furnished1Bed2.png';
import img12 from './assets/Appartements/Pearson/1Bedroom/Pearson_1Bedroom_7.jpg';
import img13 from './assets/Appartements/Pearson/1Bedroom/Pearson_1Bedroom_5.jpg';


// 2 Chambres
import img14 from './assets/Appartements/Pearson/2Bedroom/Pearson_2Bedroom_3.jpg';
import furnished2Bed1 from './assets/Appartements/Pearson/2Bedroom/furnished2Bed1.png';
import img15 from './assets/Appartements/Pearson/2Bedroom/Pearson_2Bedroom_4.jpg';
import img16 from './assets/Appartements/Pearson/2Bedroom/Pearson_2Bedroom_2.jpg';
import img17 from './assets/Appartements/Pearson/2Bedroom/Pearson_2Bedroom_5.jpg';
import img18 from './assets/Appartements/Pearson/2Bedroom/Pearson_2Bedroom_7.jpg';
import furnished2Bed2 from './assets/Appartements/Pearson/2Bedroom/furnished2Bed2.png';
import img19 from './assets/Appartements/Pearson/2Bedroom/Pearson_2Bedroom_6.jpg';
import img20 from './assets/Appartements/Pearson/2Bedroom/Pearson_2Bedroom_8.jpg';
import img21 from './assets/Appartements/Pearson/2Bedroom/Pearson_2Bedroom_9.jpg';
import img22 from './assets/Appartements/Pearson/2Bedroom/Pearson_2Bedroom_1.jpg';

// 3 Chambres
import img23 from './assets/Appartements/Pearson/3Bedroom/Pearson_3Bedroom_4.jpg';
import furnished3Bed1 from './assets/Appartements/Pearson/3Bedroom/furnished3Bed1.png';
import img24 from './assets/Appartements/Pearson/3Bedroom/Pearson_3Bedroom_10.jpg';
import img25 from './assets/Appartements/Pearson/3Bedroom/Pearson_3Bedroom_5.jpg';
import img26 from './assets/Appartements/Pearson/3Bedroom/Pearson_3Bedroom_7.jpg';
import furnished3Bed2 from './assets/Appartements/Pearson/3Bedroom/furnished3Bed2.png';
import img27 from './assets/Appartements/Pearson/3Bedroom/Pearson_3Bedroom_8.jpg';
import img28 from './assets/Appartements/Pearson/3Bedroom/Pearson_3Bedroom_6.jpg';
import img29 from './assets/Appartements/Pearson/3Bedroom/Pearson_3Bedroom_1.jpg';
import img30 from './assets/Appartements/Pearson/3Bedroom/Pearson_3Bedroom_2.jpg';
import img31 from './assets/Appartements/Pearson/3Bedroom/Pearson_3Bedroom_9.jpg';

// Define gallery items
const images = [
  // Studio
  { src: furnishedStudio1, caption: "Studio : Salon meublé", type: "Studio", furnished: true },
  { src: furnished1Bed1, caption: "1 Chambre : Chambre meublée", type: "1 Chambre", furnished: true },
  { src: furnished1Bed2, caption: "1 Chambre : Salon meublé", type: "1 Chambre", furnished: true },
  { src: furnished2Bed1, caption: "2 Chambres : Salon non meublé", type: "2 Chambres", furnished: true },
  { src: furnished2Bed2, caption: "2 Chambres : Chambre meublée", type: "2 Chambres", furnished: true },
  { src: furnished3Bed1, caption: "3 Chambres : Salon meublé", type: "3 Chambres", furnished: true },
  { src: furnished3Bed2, caption: "3 Chambres : Chambre 1 meublée", type: "3 Chambres", furnished: true },
  { src: img1, caption: "Studio : Salon non meublé", type: "Studio", furnished: false },
  { src: img2, caption: "Studio : Cuisine 1", type: "Studio", furnished: false },
  { src: img3, caption: "Studio : Cuisine 2", type: "Studio", furnished: false },
  { src: img4, caption: "Studio : Salle de bain", type: "Studio", furnished: false },
  { src: img5, caption: "Studio : Entrée", type: "Studio", furnished: false },

  // 1 Chambre
  { src: img7, caption: "1 Chambre : Chambre non meublée", type: "1 Chambre", furnished: false },
  { src: img8, caption: "1 Chambre : Chambre Vue 2", type: "1 Chambre", furnished: false },
  { src: img9, caption: "1 Chambre : Chambre Vue 3", type: "1 Chambre", furnished: false },
  { src: img10, caption: "1 Chambre : Salon Vue 1", type: "1 Chambre", furnished: false },
  { src: img11, caption: "1 Chambre : Salon non meublé", type: "1 Chambre", furnished: false },
  { src: img12, caption: "1 Chambre : Salon Vue 3", type: "1 Chambre", furnished: false },
  { src: img13, caption: "1 Chambre : Cuisine", type: "1 Chambre", furnished: false },
  { src: img22, caption: "1 Chambre : Salle de bain", type: "1 Chambre", furnished: false },

  // 2 Chambres
  { src: img14, caption: "2 Chambres : Salon non meublé", type: "2 Chambres", furnished: false },
  { src: img15, caption: "2 Chambres : Salon Vue 2", type: "2 Chambres", furnished: false },
  { src: img16, caption: "2 Chambres : Cuisine", type: "2 Chambres", furnished: false },
  { src: img17, caption: "2 Chambres : Couloir", type: "2 Chambres", furnished: false },
  { src: img18, caption: "2 Chambres : Chambre non meublée", type: "2 Chambres", furnished: false },
  { src: img19, caption: "2 Chambres : Chambre 1 Vue 2", type: "2 Chambres", furnished: false },
  { src: img20, caption: "2 Chambres : Chambre 2 Vue 1", type: "2 Chambres", furnished: false },
  { src: img21, caption: "2 Chambres : Chambre 2 Vue 2", type: "2 Chambres", furnished: false },
  { src: img22, caption: "2 Chambres : Salle de bain", type: "2 Chambres", furnished: false },

  // 3 Chambres
  { src: img23, caption: "3 Chambres : Salon non meublé", type: "3 Chambres", furnished: false },
  { src: img24, caption: "3 Chambres : Salon Vue 2", type: "3 Chambres", furnished: false },
  { src: img25, caption: "3 Chambres : Couloir", type: "3 Chambres", furnished: false },
  { src: img26, caption: "3 Chambres : Chambre 1 non meublée", type: "3 Chambres", furnished: false },
  { src: img27, caption: "3 Chambres : Chambre 1 Walk-in", type: "3 Chambres", furnished: false },
  { src: img28, caption: "3 Chambres : Chambre 2", type: "3 Chambres", furnished: false },
  { src: img29, caption: "3 Chambres : Chambre 3 Vue 1", type: "3 Chambres", furnished: false },
  { src: img30, caption: "3 Chambres : Chambre 3 Vue 1", type: "3 Chambres", furnished: false },
  { src: img31, caption: "3 Chambres : Salle de bain", type: "3 Chambres", furnished: false },
];


// Sample units data
const unitsData = [
  { type: 'Studio', size: '438 pi²', price: '$1,145 / month', img: furnishedStudio1 },
  { type: '1 Chambre', size: '427-615 pi²', price: '$1,220 / month', img: furnished1Bed1 },
  { type: '2 Chambres', size: '843-857 pi²', price: '$1,495 / month', img: furnished2Bed2 },
  { type: '3 Chambres', size: '1114-1197 pi²', price: '$1,695 / month', img: furnished3Bed2 },
];


function Pearson() {
  const navigate = useNavigate();

  // State for the discover Pearson banner
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    { image: furnished1Bed2, title: "Vivre moderne au Pearson" },
    { image: furnished2Bed1, title: "Intérieurs spacieux et lumineux" },
    { image: furnished3Bed1, title: "Emplacement idéal à Gatineau" },
    { image: img5, title: "Conçu pour le confort" },
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

  // Sort furnished images first
  const sortedImages = [...images].sort((a, b) => {
    return (b.furnished === true) - (a.furnished === true);
  });

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
          <button className="nav-header-link" onClick={() => navigate('/home/fr')}>Riviera</button>
          <button className="nav-header-link" onClick={() => scrollToRef(aboutRef1, -200)}>À Propos</button>
          <button className="nav-header-link" onClick={() => navigate('/pearson/photos/fr')}>Galerie</button>
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
          <span>Pearson</span>
        </div>
      </div>

      <div className="header-right">
      {/* Desktop buttons */}
      <div className="desktop-buttons">
        <button className="nav-header-link" onClick={handleContactClick}>Contacter l'Agent</button>
        <button className="nav-header-link" onClick={openModal}>Réserver Une Visite</button>
        <button className="nav-header-link" onClick={() => navigate('/pearson')}>EN</button>
      </div>
    </div>


      {/* Mobile Dropdown Menu */}
      <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="nav-header-link" onClick={() => scrollToRef(aboutRef1, -200)}>À Propos</button>
        <button className="nav-header-link" onClick={() => navigate('/photos')}>Galerie</button>
        <button className="nav-header-link" onClick={() => scrollToRef(unitsRef1, -220)}>Unités Disponibles</button>
        <button className="nav-header-link" onClick={handleContactClick}>Contacter l'Agent</button>
        <button className="nav-header-link" onClick={openModal}>Réserver Une Visite</button>
      </div>


    </header>

    <div className="app-container">

      {/* Main Content */}
      <main className="main-content">

        {/* Slideshow */}
        <section className="slideshow-section" aria-label="Building images slideshow">
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
              src={sortedImages[(currentIndex - 1 + sortedImages.length) % sortedImages.length].src}
              alt={`Previous: ${sortedImages[(currentIndex - 1 + sortedImages.length) % sortedImages.length].caption}`}
              className="side-image"
              onClick={goToPrevious}
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') goToPrevious(); }}
              aria-label="Go to previous image"
            />

            {/* Main image */}
            <img
              key={sortedImages[currentIndex].src}
              src={sortedImages[currentIndex].src}
              alt={sortedImages[currentIndex].caption}
              className={`main-image ${fade ? 'fade-in' : 'fade-out'}`}
            />

            {/* Next image preview */}
            <img
              src={sortedImages[(currentIndex + 1) % sortedImages.length].src}
              alt={`Next: ${sortedImages[(currentIndex + 1) % sortedImages.length].caption}`}
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
          <p className="caption">{sortedImages[currentIndex].caption}</p>
        </section>

        {/* Book A Tour Section */}
        <section
          className="highlight-hero lightgray-bg reverse"
        >
          <div className="hero-content-wrapper">
            <div className="hero-image">
              <img src={furnished1Bed2} alt="Beautiful unit at Pearson" />
            </div>
            <div className="hero-text">
              <h1>Trouvez votre nouveau chez‑vous<br />au Pearson</h1>
              <p>Design moderne, emplacement imbattable et confort inégalé.</p>
              <button className="hero-tour-button" onClick={openModal}>
                Réserver une visite
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
                alt="Pearson Building Exterior"
                loading="lazy"
              />
            </div>

            <div className="about-text">
              <h2>À Propos De Pearson</h2>
              <p>
                Bienvenue à <strong>Pearson</strong>, une résidence rénovée à <strong>Aylmer, Gatineau</strong>, à quelques minutes du <strong>centre‑ville d’Ottawa</strong> et de l’<strong>Université d’Ottawa</strong>. 
                Surplombant la <strong>rivière des Outaouais</strong>, Pearson combine confort et emplacement exceptionnel.
              </p>
              <p>
                Entouré de <strong>cafés, restaurants, boutiques</strong> et commodités, Pearson offre un style de vie pratique et agréable. 
                Avec ses appartements bien conçus et son atmosphère conviviale, c’est l’équilibre parfait entre <strong>confort et communauté</strong>.
              </p>
              <ul className="about-features">
                <li><strong>Emplacement idéal près de la rivière des Outaouais et du centre‑ville</strong></li>
                <li><strong>À deux pas des cafés, restos et commodités</strong></li>
                <li><strong>Espaces spacieux et confortables</strong></li>
                <li><strong>Atmosphère chaleureuse et communautaire</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Insert Features Cards Section right here */}
        <section 
          className="features-cards-section white-bg" 
          data-aos="fade-down" 
          data-aos-once="true" 
          data-aos-duration="600" 
          data-aos-easing="ease-in-out"
        >
          <h2>Vivez mieux au Pearson</h2>
          <div className="features-cards-container">
            {/* Carte 1 : Hydro inclus */}
            <div className="feature-card">
              <img src={electricityIcon} alt="Icône électricité" className="feature-icon" />
              <h3>Électricité</h3>
              <p>L’électricité et l’eau sont incluses dans votre loyer pour plus de commodité.</p>
            </div>

            {/* Carte 2 : Cuisine équipée */}
            <div className="feature-card">
              <img src={kitchenIcon} alt="Icône cuisine" className="feature-icon" />
              <h3>Cuisine équipée</h3>
              <p>Une cuisine avec cuisinière, frigo et autres essentiels, conçue pour votre confort et votre praticité.</p>
            </div>

            {/* Carte 3 : Sécurité */}
            <div className="feature-card">
              <img src={lockIcon} alt="Icône sécurité" className="feature-icon" />
              <h3>Accès sécurisé 24/7</h3>
              <p>Vivez en toute tranquillité grâce à une surveillance continue et des systèmes d’entrée sécurisés.</p>
            </div>

            {/* Carte 4 : Chauffage et climatisation */}
            <div className="feature-card">
              <img src={heatingIcon} alt="Icône chauffage/climatisation" className="feature-icon-heating" />
              <h3>Chauffage et climatisation</h3>
              <p>Confort assuré avec chauffage inclus.</p>
            </div>

            {/* Carte 5 : Gym */}
            <div className="feature-card feature-card-medium">
              <img src={gymIcon} alt="Icône gym" className="feature-icon" />
              <h3>Gym sur place</h3>
              <p>Restez en forme grâce à notre gym entièrement équipé, accessible 24/7 pour les résidents.</p>
            </div>

            {/* Carte 6 : Buanderie */}
            <div className="feature-card feature-card-medium">
              <img src={washerIcon} alt="Icône buanderie" className="feature-icon" />
              <h3>Buanderie</h3>
              <p>Buanderie pratique sur place avec laveuses et sécheuses.</p>
            </div>
          </div>
        </section>


        {/* Amenities Cinema Highlight Section */}
        <section
          className="amenities-hero lightgray-bg"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="500"
        >
          <div className="amenities-hero-content-wrapper">
            <div className="amenities-hero-image">
              <img src={cinema} alt="Cinema at Pearson" />
            </div>
            <div className="amenities-hero-text">
              <h1>Expérience cinéma privée</h1>
              <p>Détendez‑vous et profitez de vos films préférés dans une salle de cinéma confortable, conçue pour une expérience immersive.</p>
            </div>
          </div>
        </section>

        {/* Amenities Pool Highlight Section */}
        <section
          className="amenities-hero lightgray-bg reverse"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
        >
          <div className="amenities-hero-content-wrapper">
            <div className="amenities-hero-image">
              <img src={pool} alt="Pool at Pearson" />
            </div>
            <div className="amenities-hero-text">
              <h1>Piscine Extérieure Relaxante</h1>
              <p>Détendez‑vous et rafraîchissez‑vous dans notre piscine extérieure, un espace lumineux et accueillant conçu pour les loisirs, la détente et les belles journées d’été.</p>
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
          <h2>Unités Disponibles</h2>

          <div className="units-card-container">
            {['Studio', '1 Chambre', '2 Chambres', '3 Chambres'].map((type) => {
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
                        <p><strong>Type :</strong> {type}</p>
                        <p><strong>Superficie :</strong> {size}</p>
                        <p><strong>Prix à partir de :</strong> {price}</p>
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
                <strong>Pearson</strong> est idéalement situé à <b>Aylmer, Gatineau</b>, à seulement quelques minutes du 
                <b>centre‑ville d’Ottawa</b> et de l’<b>Université d’Ottawa</b>.  
                Surplombant la <b>rivière des Outaouais</b> et entouré de cafés, restaurants, boutiques et commodités essentielles, 
                tout ce dont vous avez besoin est à portée de main.  
                Que vous soyez étudiant, travailleur ou simplement en quête de détente, Pearson offre l’équilibre idéal entre confort, commodité et style de vie.
              </p>
            </div>
            <div className="modern-location-map">
              <iframe
                title="Pearson Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.2978998192875!2d-75.85497622339608!3d45.40333203749745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce01f8afa357a5%3A0x75f0e3bc46daf141!2s50%20Rue%20Pearson%2C%20Gatineau%2C%20QC%20J9H%206C9!5e0!3m2!1sen!2sca!4v1753815041755!5m2!1sen!2sca"
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

      <span style={{ paddingLeft: "1rem", fontSize: "0.80rem", color: "gray" }}>
        *Certaines images sont virtuellement meublées; les pièces peuvent varier.
      </span>


      {/* Footer */}
      <footer className="footer lightgray-bg">
        <p>© 2025 Pearson. Tous droits réservés.</p>
      </footer>
    </>
  );
}

export default Pearson;

