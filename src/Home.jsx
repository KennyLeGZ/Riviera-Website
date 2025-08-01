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
  { src: rivieraImage1, caption: "Riviera Building View", type: 'outside' },
  { src: rivieraImage2, caption: "Riverea Building View", type: 'outside' },
  { src: rivieraImage3, caption: "Riviera Building View", type: 'outside' },
  { src: cormierImage1, caption: "Cormier Building View", type: 'outside' },
  { src: cormierImage2, caption: "Cormier Building View", type: 'outside' },
  { src: pearsonImage1, caption: "Pearson Building View", type: 'outside' },
  { src: pearsonImage2, caption: "Pearson Building View", type: 'outside' },
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
      title: "Discover Riviera",
    },
    {
      image: outdoorPoolImage,
      title: "Explore New Horizons",
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
          <button className="nav-header-link" onClick={() => scrollToRef(aboutRef1, -200)}>About</button>
          <button className="nav-header-link" onClick={() => scrollToRef(discoverRef1, -190)}>Our Properties</button>
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
          <button className="nav-header-link" onClick={handleContactClick}>Contact Leasing Agent</button>
          <button className="nav-header-link" onClick={openModal}>Book A Tour</button>
          <button className="nav-header-link" onClick={() => navigate('/home/fr')}>FR</button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="nav-header-link" onClick={() => scrollToRef(aboutRef1, -200)}>About</button>
        <button className="nav-header-link" onClick={() => scrollToRef(discoverRef1, -220)}>Visit Cormier</button>
        <button className="nav-header-link" onClick={() => scrollToRef(discoverRef2, -220)}>Visit Pearson</button>
        <button className="nav-header-link" onClick={handleContactClick}>Contact Leasing Agent</button>
        <button className="nav-header-link" onClick={openModal}>Book A Tour</button>
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
              <img src={apartment1} alt="Beautiful unit at 2170 Lincoln" />
            </div>
            <div className="hero-text">
              <h1>Find Your Next<br />Home With Riviera</h1>
              <p>Affordable Housing, Unbeatable Location, and Unmatched Comfort.</p>
              <button className="hero-tour-button" onClick={openModal}>
                Book a Tour
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
              <h2>About Riviera</h2>
              <p>
                Welcome to <strong>Riviera Apartments</strong>, an affordable rental community in Gatineau’s Aylmer sector. 
                Just minutes from Ottawa and the Ottawa River, Riviera combines comfort and value with convenient access to 
                schools, parks, shopping, and public transit. On‑site amenities include outdoor pools, a fitness centre, 
                sports courts, a dog park, and laundry facilities.
              </p>

              <p>
                At <strong>Riviera Apartments</strong>, we’re committed to offering affordable, practical homes in a welcoming 
                community. With accessible spaces and essential amenities, everyday living is simple, comfortable, and convenient.
              </p>
              <ul className="about-features">
                <li>Affordable and comfortable apartments</li>
                <li>Convenient Gatineau location with easy access to Ottawa, transit, and shopping</li>
                <li>Practical layouts with essential amenities</li>
                <li>Welcoming, community-oriented environment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Properties Section */}
        <section className="our-properties-section" data-aos="fade-up" data-aos-once="true">
          <h2>Our Properties</h2>
          <p>
            Riviera proudly owns and manages two premier properties: <strong>Cormier</strong> and <strong>Pearson</strong>. Explore each property by toggling the switch below.
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
                  <strong>Cormier</strong>, part of the Riviera Apartments community, offers a comfortable and convenient 
                  living experience in Gatineau. While designed with modern touches, Cormier emphasizes accessibility 
                  and affordability, making it a practical choice for students, professionals, and families. 
                  Residents enjoy essential on-site amenities, including parking, a fitness centre, outdoor spaces, 
                  and easy access to transit. 
                  Located just minutes from downtown Ottawa and local shopping, dining, and parks, 
                  <strong> Cormier</strong> provides a welcoming environment that combines everyday comfort with 
                  the community-focused values of Riviera Apartments.
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
                    <strong>Pearson</strong>, part of the Riviera Apartments community, offers a welcoming living experience 
                    with spacious layouts and scenic views of the surrounding area. Bright open‑concept interiors and private 
                    balconies create an ideal space to relax, unwind, and enjoy a sense of calm. Residents benefit from convenient 
                    on‑site amenities such as a fitness centre, lounge spaces, landscaped outdoor areas, and secure parking. 
                    Located close to parks, shopping, and public transit, <strong>Pearson</strong> provides an affordable option 
                    for those seeking comfort, convenience, and a peaceful place to call home.
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
                <h2>Discover Cormier</h2>
                <button
                  onClick={() => { window.scrollTo(0, 0); navigate('/cormier'); }}
                  className="visit-button"
                >
                  Visit Cormier
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
                <h2>Discover Pearson</h2>
                <button
                  onClick={() => { window.scrollTo(0, 0); navigate('/pearson'); }}
                  className="visit-button"
                >
                  Visit Pearson
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
          <h2>Amenities Offered With Riviera</h2>

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
                <h3>Outdoor Pool</h3>
                <p>Enjoy a refreshing swim in our outdoor pool, perfect for relaxation and leisure.</p>
              </div>

              {/* Card 2: BBQ Area */}
              <div className="feature-card" onClick={() => setSelectedAmenity({ title: "BBQ Area", image: bbqImage })}>
                <img src={bbq} alt="BBQ icon" className="feature-icon" style={{ width: '110px', height: '110px', marginTop: '40px' }} />
                <h3>BBQ Area</h3>
                <p>Enjoy outdoor cooking and dining with our BBQ facilities, perfect for gatherings.</p>
              </div>

              {/* Card 3: Basketball Court */}
              <div className="feature-card" onClick={() => setSelectedAmenity({ title: "Basketball Court", image: basketballImage })}>
                <img src={basketball} alt="Basketball icon" className="feature-icon" style={{ width: '110px', height: '110px', marginTop: '40px' }}/>
                <h3>Basketball Court</h3>
                <p>Enjoy a game of basketball on our outdoor court, designed for fun and fitness.</p>
              </div>

              {/* Card 4: Tennis Court */}
              <div className="feature-card" onClick={() => setSelectedAmenity({ title: "Tennis Court", image: tennisImage })}>
                <img src={tennis} alt="Tennis icon" className="feature-icon" style={{ width: '110px', height: '110px', marginTop: '40px' }} />
                <h3>Tennis Court</h3>
                <p>Enjoy a game of tennis on our outdoor court, designed for fun and fitness.</p>
              </div>

              {/* Card 5: Gym */}
              <div className="feature-card feature-card-medium" onClick={() => setSelectedAmenity({ title: "Fitness Centre", image: gymImage })}>
                <img src={gymIcon} alt="Gym icon" className="feature-icon" />
                <h3>Fitness Centre</h3>
                <p>Stay fit and active with our fully equipped on-site gym, available 24/7 for residents.</p>
              </div>

              {/* Card 6: Laundry */}
              <div className="feature-card feature-card-medium" onClick={() => setSelectedAmenity({ title: "Laundry Room", image: laundryImage })}>
                <img src={washerIcon} alt="Washer/Dryer icon" className="feature-icon" />
                <h3>Laundry Room</h3>
                <p>Convenient on-site laundry with modern washers and dryers.</p>
              </div>

              {/* Card 7: Dog Park */}
              <div className="feature-card feature-card-medium" onClick={() => setSelectedAmenity({ title: "Dog Park", image: dogParkImage })}>
                <img src={dog} alt="Dog icon" className="feature-icon" />
                <h3>Dog Park</h3>
                <p>Convenient on-site dog park for your furry friends to play and socialize.</p>
              </div>

              {/* Card 8: Cinema */}
              <div className="feature-card feature-card-medium" onClick={() => setSelectedAmenity({ title: "Cinema Room", image: cinemaImage })}>
                <img src={cinema} alt="Cinema icon" className="feature-icon" style={{ width: '150px', height: '150px'}}/>
                <h3>Cinema Room</h3>
                <p>Enjoy movie nights in our cozy cinema room, complete with comfortable seating and a large screen.</p>
              </div>
            </div>
          ) : (
            <div className="features-photos-container">
              {/* Photo View */}
              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Outdoor Pool", image: outdoorPoolImage })}>
                <img src={outdoorPoolImage} alt="Outdoor Pool" className="feature-photo"/>
                <p className="photo-caption">Outdoor Pool</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "BBQ Area", image: bbqImage })}>
                <img src={bbqImage} alt="BBQ Area" className="feature-photo"/>
                <p className="photo-caption">BBQ Area</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Basketball Court", image: basketballImage })}>
                <img src={basketballImage} alt="Basketball Court" className="feature-photo"/>
                <p className="photo-caption">Basketball Court</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Tennis Court", image: tennisImage })}>
                <img src={tennisImage} alt="Tennis Court" className="feature-photo"/>
                <p className="photo-caption">Tennis Court</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Fitness Centre", image: gymImage })}>
                <img src={gymImage} alt="Fitness Centre" className="feature-photo"/>
                <p className="photo-caption">Fitness Centre</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Laundry Room", image: laundryImage })}>
                <img src={laundryImage} alt="Laundry Room" className="feature-photo"/>
                <p className="photo-caption">Laundry Room</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Dog Park", image: dogParkImage })}>
                <img src={dogParkImage} alt="Dog Park" className="feature-photo"/>
                <p className="photo-caption">Dog Park</p>
              </div>

              <div className="feature-photo-item" onClick={() => setSelectedAmenity({ title: "Cinema Room", image: cinemaImage })}>
                <img src={cinemaImage} alt="Cinema Room" className="feature-photo"/>
                <p className="photo-caption">Cinema Room</p>
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
              <h2>Discover the Neighborhood</h2>
              <p>
                <strong>Riviera Apartments</strong> is ideally located just minutes from <b>downtown Ottawa</b> and steps away 
                from the <b>Ottawa River</b>, offering both convenience and natural beauty. 
                Nearby, you’ll find <b>parks, schools, shopping centres, and grocery stores</b>, as well as reliable 
                <b> public transit connections</b> throughout Gatineau and into Ottawa. 
                Whether you’re commuting, studying, or enjoying the outdoors, Riviera places you at the centre of it all.
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
          <h2 className="testimonials-title">What Our Residents Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Highly recommend living at 60 Cormier! The apartments are spacious and comfortable. The building is well-maintained and clean, and the location is great.
                I’m happy to call this place home and definitely plan to stay long-term!"
              </p>
              <p className="testimonial-author"></p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "My husband and I had an amazing experience living here. It was our first time in Gatineau and the location is just as great as described. It is close to vibrant neighborhoods, restaurants, and bars. 
                Our apartment felt spacious with a full kitchen, a nice bathroom, and a lovely balcony.
                I would definitely recommend 78 Pearson to anyone looking for a great home."
              </p>
              <p className="testimonial-author"></p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Living at 50 Cormier has been fantastic. The apartments are spacious and clean and the location is unbeatable because it is close to everything you need.
                It truly feels like home and I’m happy to recommend it to anyone looking for a great place to live."
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
        <p>© 2025 Riviera Apartments. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;