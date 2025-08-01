import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import './Global.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Outside
import rivieraImage1 from './assets/Outside/drone1.jpg';
import rivieraImage2 from './assets/Outside/drone2.jpg';
import rivieraImage3 from './assets/Outside/drone3.jpg';
import cormierImage1 from './assets/Outside/cormier-outside3.jpg';
import cormierImage2 from './assets/Outside/cormier-outside2.jpg';
import pearsonImage1 from './assets/Outside/78-Pearson-1.jpg';
import pearsonImage2 from './assets/Outside/80-Pearson-3.jpg';


// Amenities
import outdoorPoolImage from './assets/Amenities/pool1.png';
import bbqImage from './assets/Amenities/park1.png';
import basketballImage from './assets/Amenities/park1.png';
import tennisImage from './assets/Amenities/park1.png';
import gymImage from './assets/Amenities/gym1.jpg';
import laundryImage from './assets/Amenities/park1.png';
import dogParkImage from './assets/Amenities/park1.png';
import cinemaImage from './assets/Amenities/cinema1.jpg';

// Icons
import washerIcon from './assets/Icons/washer.png';
import gymIcon from './assets/Icons/gymIcon.png';
import outdoorPoolIcon from './assets/Icons/outdoorPoolIcon.png';
import basketball from './assets/Icons/basketball.png';
import bbq from './assets/Icons/bbq.png';
import tennis from './assets/Icons/tennis.png';
import dog from './assets/Icons/dog.png';
import cinema from './assets/Icons/cinema.png';

// Logo
import rivieraLogo from './assets/Icons/Riviera-logo.png';

// Appartments
import apartment1 from './assets/Appartements/IMG_4854_web.jpg';





const images = [
  { src: rivieraImage1, caption: "Vue du bâtiment Riviera", type: 'outside' },
  { src: rivieraImage2, caption: "Vue du bâtiment Riviera", type: 'outside' },
  { src: rivieraImage3, caption: "Vue du bâtiment Riviera", type: 'outside' },
  { src: cormierImage1, caption: "Vue du bâtiment Cormier", type: 'outside' },
  { src: cormierImage2, caption: "Vue du bâtiment Cormier", type: 'outside' },
  { src: pearsonImage1, caption: "Vue du bâtiment Pearson", type: 'outside' },
  { src: pearsonImage2, caption: "Vue du bâtiment Pearson", type: 'outside' },
];

function Home() {
  const navigate = useNavigate();

  // State for the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState('Cormier');
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
   const [viewMode, setViewMode] = useState("cards");

  // Selected Amenities
  const [selectedAmenity, setSelectedAmenity] = useState(null);


  // Function to toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };  

  // Refs for smooth scrolling
  const aboutRef1 = useRef(null);
  const discoverRef1 = useRef(null);
  const discoverRef2 = useRef(null);
  const locationRef = useRef(null);
  const testimonialsRef1 = useRef(null);

  const setDiscoverRefs = (el) => {
    discoverRef1.current = el;
    discoverRef2.current = el;
  };


  useEffect(() => {
  AOS.init({ duration: 1000 });
  AOS.refresh();

  // Scroll to top only on first mount
  window.scrollTo(0, 0);
}, []); // ✅ run once

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide]);

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

  const slides = [
    {
      image: rivieraImage1,
      title: "Découvrez Riviera",
    },
    {
      image: outdoorPoolImage,
      title: "Explorez De Nouveaux Horizons",
    },
  ];

  const nextSlide = () => {
    if (activeSlide === slides.length) return; // prevent multiple clicks during transition

    setActiveSlide((prev) => prev + 1);

    // If we're moving to the clone slide, jump back to real first slide
    if (activeSlide === slides.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);      // disable transition
        setActiveSlide(0);              // jump to first real slide

        // re-enable transition after jump
        setTimeout(() => setIsTransitioning(true), 50);
      }, 600); // match transition duration
    }
  };

  return (
  <>
    {/* Header outside app-container */}
    <header className="header">
      <div className="header-left">
        {/* Desktop links */}
        <div className="desktop-links">
          <button className="nav-header-link" onClick={() => scrollToRef(aboutRef1, -200)}>À Propos</button>
          <button className="nav-header-link" onClick={() => scrollToRef(discoverRef1, -190)}>Nos Propriétés</button>
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
          <span>RIVIERA</span>
        </div>
      </div>

      <div className="header-right">
        {/* Desktop buttons */}
        <div className="desktop-buttons">
          <button className="nav-header-link" onClick={handleContactClick}>Contacter l'Agent</button>
          <button className="nav-header-link" onClick={openModal}>Réserver Une Visite</button>
          <button className="nav-header-link" onClick={() => navigate('/home')}>EN</button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="nav-header-link" onClick={() => scrollToRef(aboutRef1, -200)}>À Propos</button>
        <button className="nav-header-link" onClick={() => scrollToRef(discoverRef1, -190)}>Nos Propriétés</button>
        <button className="nav-header-link" onClick={handleContactClick}>Contacter l'Agent</button>
        <button className="nav-header-link" onClick={openModal}>Réserver Une Visite</button>
      </div>

    </header>

    <div className="app-container">

      {/* Main Content */}
      <main className="main-content">

        <section 
          className="discover-riviera"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div
            className="slides-container"
            style={{
              width: `${(slides.length + 1) * 100}vw`,
              transform: `translateX(-${activeSlide * 100}vw)`,
              transition: isTransitioning ? 'transform 0.6s ease-in-out' : 'none',
            }}
          >
            {slides.map(({ image, title }, index) => (
              <div className="slide" key={index}>
                <img src={image} alt={title} className="riviera-image" />
                <div className="overlay">
                  <h2 className="title">{title}</h2>
                </div>
              </div>
            ))}

            {/* Clone of first slide */}
            <div className="slide" key="clone">
              <img src={slides[0].image} alt={slides[0].title} className="riviera-image" />
              <div className="overlay">
                <h2 className="title">{slides[0].title}</h2>
              </div>
            </div>
          </div>

          <button className="arrow-button" onClick={nextSlide} aria-label="Next Slide">
            &#8594;
          </button>
        </section>

        {/* Book A Tour Section */}
        <section
          className="highlight-hero lightgray-bg reverse"
          data-aos="fade-up"
          data-aos-once="true"
        >
          <div className="hero-content-wrapper">
            <div className="hero-image">
              <img src={apartment1} alt="Beautiful unit at Riviera" />
            </div>
            <div className="hero-text">
              <h1>Trouvez Votre Prochaine<br />Maison avec Riviera</h1>
              <p>Logement Abordable, Emplacement Imbattable et Confort Inégalé</p>
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
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
        >
          <div className="about-wrapper">
            <div className="about-image">
              <img
                src={rivieraImage3}
                alt="Riviera Building Exterior"
                loading="lazy"
              />
            </div>

            <div className="about-text">
              <h2>À Propos de Riviera</h2>
              <p>
                Bienvenue aux <strong>Appartements Riviera</strong>, une communauté résidentielle abordable située 
                dans le secteur Aylmer de Gatineau. À seulement quelques minutes d’Ottawa et de la rivière des Outaouais, 
                Riviera allie confort et valeur avec un accès pratique aux écoles, aux parcs, aux centres commerciaux 
                et au transport en commun. Les commodités sur place incluent des piscines extérieures, un centre de mise en forme, 
                des terrains de sport, un parc canin et des installations de buanderie.
              </p>
              <p>
                Aux <strong>Appartements Riviera</strong>, nous nous engageons à offrir des logements abordables et pratiques 
                dans une communauté accueillante. Avec des espaces accessibles et des commodités essentielles, le quotidien 
                devient simple, confortable et pratique.
              </p>

              <ul className="about-features">
                <li>Appartements abordables et confortables</li>
                <li>Emplacement pratique à Gatineau avec un accès facile à Ottawa, au transport en commun et aux commerces</li>
                <li>Plans pratiques avec commodités essentielles</li>
                <li>Environnement accueillant et axé sur la communauté</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Properties Section */}
        <section className="our-properties-section" data-aos="fade-up" data-aos-once="true">
          <h2>Nos Propriétés</h2>
          <p>
            Riviera possède et gère fièrement deux résidences de premier plan : <strong>Cormier</strong> et <strong>Pearson</strong>. 
            Explorez chaque propriété en utilisant le sélecteur ci‑dessous.
          </p>


          <div className="property-switch">
            {['Cormier', 'Pearson'].map((name) => (
              <button
                key={name}
                onClick={() => setSelectedProperty(name)}
                className={selectedProperty === name ? 'active' : ''}
                type="button"
              >
                {name}
              </button>
            ))}
          </div>

          {/* Property Cards Section */}
          <div className="property-cards">
            {/* Cormier Card */}
            {selectedProperty === 'Cormier' && (
              <div className="property-card">
                <div className="property-card-text">
                  <h3>Cormier</h3>
                  <p>
                    <strong>Cormier</strong>, faisant partie de la communauté des Appartements Riviera, offre une expérience de vie 
                    confortable et pratique à Gatineau. Bien que conçu avec des touches modernes, Cormier met l’accent sur 
                    l’accessibilité et l’abordabilité, ce qui en fait un choix pratique pour les étudiants, les professionnels et les familles. 
                    Les résidents profitent de commodités essentielles sur place, notamment le stationnement, un centre de mise en forme, 
                    des espaces extérieurs et un accès facile au transport en commun. 
                    Situé à seulement quelques minutes du centre-ville d’Ottawa ainsi que des commerces, restaurants et parcs locaux, 
                    <strong> Cormier</strong> offre un environnement accueillant qui allie confort au quotidien et valeurs communautaires 
                    des Appartements Riviera.
                  </p>
                </div>
                <div className="property-card-image">
                  <img src={cormierImage2} alt="Cormier Property" />
                </div>
              </div>
            )}

            {/* Pearson Card */}
            {selectedProperty === 'Pearson' && (
              <div className="property-card reverse">
                <div className="property-card-text">
                  <h3>Pearson</h3>
                  <p>
                    <strong>Pearson</strong>, faisant partie de la communauté des Appartements Riviera, offre une expérience de vie 
                    accueillante avec des espaces spacieux et une vue panoramique sur les environs. Ses intérieurs lumineux à aire ouverte 
                    et ses balcons privés créent un cadre idéal pour se détendre et profiter d’un sentiment de tranquillité. 
                    Les résidents bénéficient de commodités pratiques sur place, telles qu’un centre de mise en forme, des salons communs, 
                    des espaces extérieurs aménagés et un stationnement sécurisé. 
                    Situé à proximité de parcs, de commerces et du transport en commun, <strong>Pearson</strong> constitue une option abordable 
                    pour ceux qui recherchent confort, commodité et un cadre de vie paisible.
                  </p>
                </div>
                <div className="property-card-image">
                  <img src={pearsonImage2} alt="Pearson Property" />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Discover Buildings Section */}
        <section 
          className="discover-buildings-section"
          ref={setDiscoverRefs}
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
        >
          <div
            className="building-half cormier"
            style={{ backgroundImage: `url(${cormierImage1})` }}
          >
            <div className="image-overlay"></div>
            <div className="building-content">
              <div className="building-info-box">
                <h2>Découvrez Cormier</h2>
                <button
                  onClick={() => { window.scrollTo(0, 0); navigate('/cormier'); }}
                  className="visit-button"
                >
                  Visitez Cormier
                </button>
              </div>
            </div>
          </div>

          <div
            className="building-half pearson"
            style={{ backgroundImage: `url(${pearsonImage1})` }}
          >
            <div className="image-overlay"></div>
            <div className="building-content">
              <div className="building-info-box">
                <h2>Découvrez Pearson</h2>
                <button
                  onClick={() => { window.scrollTo(0, 0); navigate('/pearson'); }}
                  className="visit-button"
                >
                  Visitez Pearson
                </button>
              </div>
            </div>
          </div>
        </section>


        {/* Features Cards Section */}
        <section 
          className="features-cards-section white-bg" 
          data-aos="fade-up" 
          data-aos-once="true" 
          data-aos-easing="ease-in-out"
        >
          {/* Section Title */}
          <h2>Commodités Offertes Avec Riviera</h2>

          {/* Toggle Button */}
          <div className="view-toggle">
            <button onClick={() => setViewMode(viewMode === "cards" ? "photos" : "cards")}>
              Switch to {viewMode === "cards" ? "Photo View" : "Card View"}
            </button>
          </div>

          {/* Conditional Rendering */}
          {viewMode === "cards" ? (
            <div className="features-cards-container">
              {/* --- Your existing cards (no change) --- */}

              {/* Card 1: Outdoor Pool */}
              <div className="feature-card" onClick={() => setSelectedAmenity({ title: "Outdoor Pool", image: outdoorPoolImage })}>
                <img src={outdoorPoolIcon} alt="Outdoor Pool icon" className="feature-icon" style={{ width: '140px', height: '140px', marginTop: '30px' }}/>
                <h3>Piscine Extérieure</h3>
                <p>Profitez d'une baignade rafraîchissante dans notre piscine extérieure, parfaite pour la détente et les loisirs.</p>
              </div>

              {/* Card 2: BBQ Area */}
              <div className="feature-card" onClick={() => setSelectedAmenity({ title: "BBQ Area", image: bbqImage })}>
                <img src={bbq} alt="BBQ icon" className="feature-icon" style={{ width: '110px', height: '110px', marginTop: '40px' }} />
                <h3>Espace Barbecue</h3>
                <p>Profitez de nos barbecues extérieurs, parfaits pour vos rassemblements.</p>
              </div>

              {/* Card 3: Basketball Court */}
              <div className="feature-card" onClick={() => setSelectedAmenity({ title: "Basketball Court", image: basketballImage })}>
                <img src={basketball} alt="Basketball icon" className="feature-icon" style={{ width: '110px', height: '110px', marginTop: '40px' }}/>
                <h3>Terrain de Basket</h3>
                <p>Profitez d'une partie de basket-ball sur notre terrain extérieur, conçu pour le plaisir et la remise en forme.</p>
              </div>

              {/* Card 4: Tennis Court */}
              <div className="feature-card" onClick={() => setSelectedAmenity({ title: "Tennis Court", image: tennisImage })}>
                <img src={tennis} alt="Tennis icon" className="feature-icon" style={{ width: '110px', height: '110px', marginTop: '40px' }} />
                <h3>Court de Tennis</h3>
                <p>Profitez d'une partie de tennis sur notre court extérieur, conçu pour le plaisir et la remise en forme.</p>
              </div>

              {/* Card 5: Gym */}
              <div className="feature-card feature-card-medium" onClick={() => setSelectedAmenity({ title: "Fitness Centre", image: gymImage })}>
                <img src={gymIcon} alt="Gym icon" className="feature-icon" />
                <h3>Gym</h3>
                <p>Restez actif avec notre salle de sport entièrement équipée, ouverte 24h/24 pour les résidents.</p>
              </div>

              {/* Card 6: Laundry */}
              <div className="feature-card feature-card-medium" onClick={() => setSelectedAmenity({ title: "Laundry Room", image: laundryImage })}>
                <img src={washerIcon} alt="Washer/Dryer icon" className="feature-icon" />
                <h3>Buanderie</h3>
                <p>Buanderie pratique sur place avec laveuses et sécheuses.</p>
              </div>

              {/* Card 7: Dog Park */}
              <div className="feature-card feature-card-medium" onClick={() => setSelectedAmenity({ title: "Dog Park", image: dogParkImage })}>
                <img src={dog} alt="Dog icon" className="feature-icon" />
                <h3>Parc À Chiens</h3>
                <p>Parc à chiens pratique sur place pour que vos amis à quatre pattes puissent jouer et socialiser.</p>
              </div>

              {/* Card 8: Cinema */}
              <div className="feature-card feature-card-medium" onClick={() => setSelectedAmenity({ title: "Cinema Room", image: cinemaImage })}>
                <img src={cinema} alt="Cinema icon" className="feature-icon" style={{ width: '150px', height: '150px'}}/>
                <h3>Salle de Cinéma</h3>
                <p>Profitez de notre salle de cinéma conviviale avec sièges confortables et grand écran.</p>
              </div>
            </div>
          ) : (
            <div className="features-photos-container">
              {/* Photo View */}
              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Outdoor Pool", image: outdoorPoolImage })}>
                <img src={outdoorPoolImage} alt="Outdoor Pool" className="feature-photo"/>
                <p className="photo-caption">Piscine Extérieure</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "BBQ Area", image: bbqImage })}>
                <img src={bbqImage} alt="BBQ Area" className="feature-photo"/>
                <p className="photo-caption">Espace Barbecue</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Basketball Court", image: basketballImage })}>
                <img src={basketballImage} alt="Basketball Court" className="feature-photo"/>
                <p className="photo-caption">Terrain de Basket</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Tennis Court", image: tennisImage })}>
                <img src={tennisImage} alt="Tennis Court" className="feature-photo"/>
                <p className="photo-caption">Court de Tennis</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Fitness Centre", image: gymImage })}>
                <img src={gymImage} alt="Fitness Centre" className="feature-photo"/>
                <p className="photo-caption">Gym</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Laundry Room", image: laundryImage })}>
                <img src={laundryImage} alt="Laundry Room" className="feature-photo"/>
                <p className="photo-caption">Buanderie</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Dog Park", image: dogParkImage })}>
                <img src={dogParkImage} alt="Dog Park" className="feature-photo"/>
                <p className="photo-caption">Parc À Chiens</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Cinema Room", image: cinemaImage })}>
                <img src={cinemaImage} alt="Cinema Room" className="feature-photo"/>
                <p className="photo-caption">Salle de Cinéma</p>
              </div>
            </div>
          )}
        </section>

      {/* Modal */}
      {selectedAmenity && (
        <div 
          className="modal-overlay" 
          onClick={() => setSelectedAmenity(null)} 
          style={{
            position: 'fixed', 
            top: 0, left: 0, 
            width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.9)', 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center', 
            zIndex: 9999
          }}
        >
          {/* Close Button in top-right of overlay */}
          <button 
            onClick={() => setSelectedAmenity(null)} 
            style={{
              position: 'absolute',
              top: '20px',
              right: '30px',
              background: 'transparent',
              border: 'none',
              fontSize: '2.5rem',
              color: '#fff',
              cursor: 'pointer',
              zIndex: 10000
            }}
            aria-label="Close"
          >
            &times;
          </button>

          {/* Stop click bubbling on image */}
          <div 
            style={{ 
              maxWidth: '70%', 
              maxHeight: '80%', 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center'
            }} 
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedAmenity.image} 
              alt={selectedAmenity.title} 
              style={{ 
                maxWidth: '100%', 
                maxHeight: '100%', 
                borderRadius: '10px',
                objectFit: 'contain',
                boxShadow: '0 0 20px rgba(0,0,0,0.5)'
              }} 
            />
          </div>
        </div>
      )}





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
                Les <strong>Appartements Riviera</strong> sont idéalement situés à quelques minutes du 
                <b> centre-ville d’Ottawa</b> et à deux pas de la <b>rivière des Outaouais</b>, offrant à la fois commodité et beauté naturelle. 
                À proximité, vous trouverez des <b>parcs, écoles, centres commerciaux et épiceries</b>, ainsi que des 
                <b>liaisons de transport en commun fiables</b> à travers Gatineau et vers Ottawa. 
                Que vous soyez en déplacement, aux études ou en plein air, Riviera vous place au cœur de tout.
              </p>
            </div>
            <div className="modern-location-map">
              <iframe
                title="Riviera Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.797395610749!2d-75.85485123615219!3d45.40336418920163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce01f8afa357a5%3A0x75f0e3bc46daf141!2s50%20Rue%20Cormier%2C%20Gatineau%2C%20QC%20J9H%206C9!5e1!3m2!1sen!2sca!4v1753277295913!5m2!1sen!2sca"
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
          data-aos="fade-up"
          data-aos-once="true"
        >
          <h2 className="testimonials-title">Ce que disent nos résidents</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Je recommande vivement de vivre au 60 Cormier ! Les appartements sont spacieux et confortables. 
                L’immeuble est bien entretenu et propre, et l’emplacement est excellent. 
                Je suis heureux(se) d’appeler cet endroit ma maison et je prévois certainement d’y rester à long terme !"
              </p>
              <p className="testimonial-author">– Sarah L.</p>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                "Mon mari et moi avons eu une expérience incroyable en vivant ici. C’était notre première fois à Gatineau et 
                l’emplacement est exactement comme décrit : proche de quartiers animés, de restaurants et de bars. 
                Notre appartement était spacieux avec une cuisine complète, une belle salle de bain et un charmant balcon. 
                Je recommanderais sans hésiter le 78 Pearson à toute personne à la recherche d’un excellent logement."
              </p>
              <p className="testimonial-author">– Emily & James P.</p>
            </div>

            <div className="testimonial-card">
              <p className="testimonial-text">
                "Vivre au 50 Cormier a été fantastique. Les appartements sont spacieux et propres, et l’emplacement est imbattable 
                car il est proche de tout ce dont vous avez besoin. Cela ressemble vraiment à la maison et je suis heureux(se) de 
                le recommander à toute personne à la recherche d’un endroit idéal où vivre."
              </p>
              <p className="testimonial-author">– Daniel M.</p>
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
        <p>© 2025 Riviera Apartments. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;