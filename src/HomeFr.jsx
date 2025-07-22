import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Photos from './Photos';
import AOS from 'aos';
import 'aos/dist/aos.css';
import HamburgerMenu from './HamburgerMenu';

// Outside
import img0 from './assets/Outside/buildingView.png';

// 1 Bedroom
import img1 from './assets/Units/1_bedroom/DSC02695.jpg';
import img2 from './assets/Units/1_bedroom/DSC02717.jpg';
import img3 from './assets/Units/1_bedroom/DSC02769.jpg';
import img4 from './assets/Units/1_bedroom/DSC02777.jpg';
import img5 from './assets/Units/1_bedroom/DSC02801.jpg';
import img6 from './assets/Units/1_bedroom/DSC02838.jpg';
import img7 from './assets/Units/1_bedroom/DSC02847.jpg';
import img8 from './assets/Units/1_bedroom/DSC02862.jpg';
import img9 from './assets/Units/1_bedroom/DSC02870.jpg';
import img10 from './assets/Units/1_bedroom/DSC02887.jpg';
import img11 from './assets/Units/1_bedroom/DSC02895.jpg';
import img12 from './assets/Units/1_bedroom/DSC02914.jpg';

// 2_bedroom
import img13 from './assets/Units/2_bedroom/DSC05221.jpg';
import img14 from './assets/Units/2_bedroom/DSC05244.jpg';
import img15 from './assets/Units/2_bedroom/DSC05292.jpg';
import img16 from './assets/Units/2_bedroom/DSC05318.jpg';
import img17 from './assets/Units/2_bedroom/DSC05322.jpg';
import img18 from './assets/Units/2_bedroom/DSC05341.jpg';
import img19 from './assets/Units/2_bedroom/DSC05345.jpg';
import img20 from './assets/Units/2_bedroom/DSC05356.jpg';
import img21 from './assets/Units/2_bedroom/DSC05366.jpg';
import img22 from './assets/Units/2_bedroom/DSC05380.jpg';
import img23 from './assets/Units/2_bedroom/DSC05410.jpg';
import img24 from './assets/Units/2_bedroom/DSC05419.jpg';
import img25 from './assets/Units/2_bedroom/DSC05430.jpg';
import img26 from './assets/Units/2_bedroom/DSC05451.jpg';

// Studio
import img27 from './assets/Units/Studio/DSC02500.jpg';
import img28 from './assets/Units/Studio/DSC02519.jpg';
import img29 from './assets/Units/Studio/DSC02544.jpg';
import img30 from './assets/Units/Studio/DSC02551.jpg';
import img31 from './assets/Units/Studio/DSC02574.jpg';
import img32 from './assets/Units/Studio/DSC02581.jpg';
import img33 from './assets/Units/Studio/DSC02614.jpg';
import img34 from './assets/Units/Studio/DSC02626.jpg';
import img35 from './assets/Units/Studio/DSC02643.jpg';
import img36 from './assets/Units/Studio/DSC02652.jpg';
import img37 from './assets/Units/Studio/DSC02659.jpg';
import img38 from './assets/Units/Studio/DSC02683.jpg';

// Gym
import gymImage from './assets/Gym/gym.jpg';

// Conference Room
import conferenceRoomImage from './assets/Amenities/ConferenceRoom.png';

import wifiIcon from './assets/Icons/wifi.svg';
import kitchenIcon from './assets/Icons/kitchen.svg';
import lockIcon from './assets/Icons/security-camera.svg';
import heatingCoolingIcon from './assets/Icons/heating-cooling.png';
import washerIcon from './assets/Icons/washer.png';
import gymIcon from './assets/Icons/gymIcon.png';



const images = [
  { src: img0, caption: "Vue du bâtiment", type: 'outside' },
  { src: img1, caption: "Espace de vie spacieux d'une chambre", type: '1 bedroom' },
  { src: img2, caption: "Espace de vie d'une chambre", type: '1 bedroom' },
  { src: img3, caption: "Salon ensoleillé avec de grandes fenêtres", type: '1 bedroom' },
  { src: img4, caption: "Bureau compact et pratique dans le salon", type: '1 bedroom' },
  { src: img5, caption: "Configuration complète du salon avec des meubles modernes", type: '1 bedroom' },
  { src: img6, caption: "Allée spacieuse vers la chambre", type: '1 bedroom' },
  { src: img7, caption: "Cuisine moderne avec des finitions élégantes", type: '1 bedroom' },
  { src: img8, caption: "Espace de vie fonctionnel", type: '1 bedroom' },
  { src: img9, caption: "Disposition confortable et spacieuse d'une chambre", type: '1 bedroom' },
  { src: img10, caption: "Configuration de lit relaxante", type: '1 bedroom' },
  { src: img11, caption: "Chambre lumineuse et aérée", type: '1 bedroom' },
  { src: img12, caption: "Salle de bain moderne et propre", type: '1 bedroom' },
  { src: img13, caption: "Espace de vie accueillant de 2 chambres", type: '2 bedroom' },
  { src: img14, caption: "Salon spacieux dans un appartement de 2 chambres", type: '2 bedroom' },
  { src: img15, caption: "Salon spacieux", type: '2 bedroom' },
  { src: img16, caption: "Espace de vie spacieux", type: '2 bedroom' },
  { src: img17, caption: "Coin repas confortable", type: '2 bedroom' },
  { src: img18, caption: "Espace de vie lumineux et aéré", type: '2 bedroom' },
  { src: img19, caption: "Coin repas moderne et cuisine combinée", type: '2 bedroom' },
  { src: img20, caption: "Coin repas moderne et cuisine combinée", type: '2 bedroom' },
  { src: img21, caption: "Cuisine entièrement équipée avec une esthétique moderne", type: '2 bedroom' },
  { src: img22, caption: "Cuisine moderne et élégante", type: '2 bedroom' },
  { src: img23, caption: "Chambre confortable avec lumière naturelle dans 2 chambres", type: '2 bedroom' },
  { src: img24, caption: "Chambre confortable avec lumière naturelle dans 2 chambres", type: '2 bedroom' },
  { src: img25, caption: "Chambre chaleureuse et aérée avec beaucoup de lumière naturelle", type: '2 bedroom' },
  { src: img26, caption: "Salle de bain moderne et lumineuse", type: '2 bedroom' },
  { src: img27, caption: "Appartement moderne d'une chambre", type: 'studio' },
  { src: img28, caption: "Espace de vie confortable dans le studio", type: 'studio' },
  { src: img29, caption: "Espace fonctionnel avec un bureau et une table à manger dans le studio", type: 'studio' },
  { src: img30, caption: "Chambre lumineuse dans le studio", type: 'studio' },
  { src: img31, caption: "Configuration de lit relaxante", type: 'studio' },
  { src: img32, caption: "Cuisine moderne avec une table à manger confortable dans le studio", type: 'studio' },
  { src: img33, caption: "Plan de l'appartement studio", type: 'studio' },
  { src: img34, caption: "Aperçu de l'appartement studio", type: 'studio' },
  { src: img35, caption: "Coin de travail élégant", type: 'studio' },
  { src: img36, caption: "Cuisine élégante avec améliorations dans le studio", type: 'studio' },
  { src: img37, caption: "Cuisine élégante avec améliorations dans le studio", type: 'studio' },
  { src: img38, caption: "Salle de bain moderne et épurée dans l'appartement studio", type: 'studio' }
];

// Sample units data
const unitsData = [
  { unit: '101', type: '1 Bedroom', size: '490 sq ft', floor: 1, price: '$1,745 / month', image: img1 },
  { unit: '203', type: '2 Bedroom', size: '765 sq ft', floor: 2, price: '$2,345 / month', image: img13 },
  { unit: '305', type: 'Studio', size: '300-342 sq ft', floor: 3, price: '$1,645 / month', image: img27 },
];


function HomeFr() {

  const navigate = useNavigate();

  const goToEnglish = () => {
    navigate('/');
  };

  const goToPhotosFr = () => {
    navigate('/fr/photos');
  };

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
          <button className="nav-header-link" onClick={() => scrollToRef(aboutRef1, -200)}>À Propos</button>
          <button className="nav-header-link" onClick={goToPhotosFr}>Galerie</button>
          <button className="nav-header-link" onClick={() => scrollToRef(unitsRef1, -220)}>Unités Disponibles</button>
        </div>
        
        {/* Hamburger Icon for Mobile */}
        <div className="hamburger-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>

      <div className="header-center">
        <h2
          className="header-address"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ cursor: 'pointer' }}
        >
          2170 LINCOLN
        </h2>
      </div>

      <div className="header-right">
        {/* Desktop buttons */}
        <div className="desktop-buttons">
          <button className="nav-header-link" onClick={handleContactClick}>Contacter l'Agent de Location</button>
          <button className="nav-header-link" onClick={openModal}>Réserver Une Visite</button>
          <button onClick={goToEnglish} className="nav-header-link">EN</button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="nav-header-link" onClick={() => scrollToRef(aboutRef1, -200)}>À Propos</button>
        <button className="nav-header-link" onClick={() => navigate('/photos')}>Galerie</button>
        <button className="nav-header-link" onClick={() => scrollToRef(unitsRef1, -220)}>Unités Disponibles</button>
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
        >
          <div className="hero-content-wrapper">
            <div className="hero-image">
              <img src={images[2].src} alt="Beautiful unit at 2170 Lincoln" />
            </div>
            <div className="hero-text">
              <h1>Trouvez Votre Nouvelle Maison<br />À 2170 Lincoln</h1>
              <p>Design moderne, emplacement imbattable et confort inégalé.</p>
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
                alt="2170 Lincoln Building Exterior"
                loading="lazy"
              />
            </div>

            <div className="about-text">
              <h2>À Propos Du <br />2170 Lincoln</h2>
              <p>
                Bienvenue à <strong>2170 Lincoln</strong>, un immeuble résidentiel magnifiquement rénové
                situé dans un quartier dynamique près du centre-ville de Montréal.
                Conçu pour le confort moderne, il allie commodité et style,
                offrant une expérience de vie de haute qualité pour une communauté diversifiée.
              </p>
              <p>
                Nous nous efforçons de créer une communauté où le confort rencontre la commodité, offrant des espaces soigneusement 
                conçus et des caractéristiques modernes qui améliorent la vie quotidienne.
              </p>
              <ul className="about-features">
                <li>Design moderne et élégant</li>
                <li>Emplacement privilégié à proximité de Concordia, Dawson, du centre-ville et d'autres commodités</li>
                <li>Espaces de vie spacieux et soigneusement conçus</li>
                <li>Atmosphère axée sur la communauté</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Insert Features Cards Section right here */}
        <section className="features-cards-section white-bg" data-aos="fade-down" data-aos-once="true" data-aos-duration="600" data-aos-easing="ease-in-out">
          <h2>Vivez Mieux Au 2170 Lincoln</h2>
          <div className="features-cards-container">
            {/* Card 1: Free Wifi */}
            <div className="feature-card">
              <img src={wifiIcon} alt="WiFi icon" className="feature-icon" />
              <h3>Internet Gratuit</h3>
              <p>Restez connecté avec l'internet sans fil inclus dans tout l'immeuble.</p>
            </div>

            {/* Card 2: Kitchen Features */}
            <div className="feature-card">
              <img src={kitchenIcon} alt="Kitchen icon" className="feature-icon" />
              <h3>Cuisine Équipée</h3>
              <p>Une cuisine équipée d'une plaque de cuisson, d'un micro-ondes et d'autres essentiels, conçue pour votre confort et votre commodité.</p>
            </div>

            {/* Card 3: Secure Building */}
            <div className="feature-card">
              <img src={lockIcon} alt="Lock icon" className="feature-icon" />
              <h3>Accès Sécurisé 24/7</h3>
              <p>Restez en sécurité grâce à une surveillance continue et des systèmes d'entrée sécurisés pour les résidents.</p>
            </div>

            {/* Card 4: Heating and Cooling */}
            <div className="feature-card">
              <img src={heatingCoolingIcon} alt="Heating/Cooling icon" className="feature-icon" />
              <h3>Climatisation & Chauffage</h3>
              <p>Climatisation et chauffage confortables inclus toute l'année pour votre commodité.</p>
            </div>

            {/* Card 4: Gym */}
            <div className="feature-card feature-card-medium">
              <img src={gymIcon} alt="Gym icon" className="feature-icon" />
              <h3>Gym Sur Place</h3>
              <p>Restez en forme et actif avec notre gym entièrement équipé sur place, disponible 24/7 pour les résidents.</p>
            </div>

            {/* Card 5: In-Unit Washer/Dryer */}
            <div className="feature-card feature-card-medium">
              <img src={washerIcon} alt="Washer/Dryer icon" className="feature-icon" />
              <h3>Buanderie</h3>
              <p>Buanderie pratique sur place avec des lave-linge et des sèche-linge modernes.</p>
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
              <img src={gymImage} alt="Gym at 2170 Lincoln" />
            </div>
            <div className="amenities-hero-text">
              <h1>Gym Moderne avec Vue Imprenable sur le Centre-Ville de Montréal</h1>
              <p>Profitez de vos entraînements dans une salle de sport moderne et lumineuse offrant une vue panoramique imprenable sur le centre-ville de Montréal.</p>
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
              <img src={conferenceRoomImage} alt="Conference Room at 2170 Lincoln" />
            </div>
            <div className="amenities-hero-text">
              <h1>Salle de Conférence Entièrement Équipée</h1>
              <p>Organisez vos réunions et événements dans notre élégante salle de conférence, conçue pour offrir un espace professionnel et confortable pour tous vos rassemblements.</p>
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
          <h2>Unités et Plans d'Étage Disponibles</h2>

          <div className="units-card-container">
            {['Studio', '1 Bedroom', '2 Bedroom'].map((type) => {
              // Show all units of this type (no filter)
              const unitsOfType = filteredUnits.filter(u => u.type === type);
              if (unitsOfType.length === 0) return null;

              return (
                <div key={type} className="unit-type-card">
                  <h3>{type}</h3>
                  {unitsOfType.map(({ unit, size, price, image }) => (
                    <div key={unit} className="unit-card">
                      <img src={image} alt={`${type} unit ${unit}`} className="unit-image" />
                      <div className="unit-info">
                        <p><strong>Type:</strong> {type}</p>
                        <p><strong>Taille:</strong> {size}</p>
                        <p><strong>Prix de Départ:</strong> {price}</p>
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
              <h2>Découvrez le Quartier</h2>
              <p>
                2170 Lincoln est idéalement situé à seulement 10 minutes du <b>centre-ville de Montréal</b> et du <b>Parc du Mont-Royal</b>, et à quelques pas de <b>l'Université Concordia</b> et du <b>Collège Dawson</b>.
                Les stations de métro, les centres commerciaux, les cafés et les commodités quotidiennes sont tous à côté de l'immeuble, rendant la vie facile et accessible.
                Que vous fassiez la navette, étudiiez ou vous détendiez, 2170 Lincoln est l'endroit idéal.
              </p>
            </div>
            <div className="modern-location-map">
              <iframe
                title="2170 Lincoln Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.9118091031046!2d-73.58670585513063!3d45.49172065292192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a6cd3a0f723%3A0xee5439f76e8ba810!2sImmeuble%202170%20Lincoln!5e0!3m2!1sen!2sca!4v1750963597382!5m2!1sen!2sca"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </section>



        {/* Testimonials */}
        <section
          ref={testimonialsRef1}
          className="testimonials-section"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="600"
        >
          <h2 className="testimonials-title">Ce Que Nos Résidents Disent</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Je recommande vivement de vivre au 2170 Lincoln ! Les appartements sont spacieux et confortables. L'immeuble est bien entretenu et propre, et l'emplacement est idéal.
                Je suis heureux d'appeler cet endroit chez moi et je prévois définitivement de rester à long terme !"
              </p>
              <p className="testimonial-author"></p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Mon mari et moi avons eu une expérience incroyable en vivant ici. C'était notre première fois à Montréal et l'emplacement est tout aussi génial que décrit. Il est proche de quartiers animés, de restaurants et de bars.
                Notre appartement semblait spacieux avec une cuisine complète, une belle salle de bain et un joli balcon.
                Je recommanderais définitivement 2170 Lincoln à quiconque à la recherche d'un excellent chez-soi."
              </p>
              <p className="testimonial-author"></p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Vivre au 2170 Lincoln a été fantastique. Les appartements sont spacieux et propres et l'emplacement est imbattable car il est proche de tout ce dont vous avez besoin.
                On se sent vraiment chez soi et je suis heureux de le recommander à quiconque à la recherche d'un excellent endroit où vivre."
              </p>
              <p className="testimonial-author"></p>
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
        <p>© 2025 2170 Lincoln. All rights reserved.</p>
      </footer>
    </>
  );
}

export default HomeFr;
