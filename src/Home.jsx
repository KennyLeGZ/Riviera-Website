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
import cormierImage from './assets/Outside/cormier-outside6.jpg';
import pearsonImage from './assets/Outside/78-Pearson-1.jpg';

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




const images = [
  { src: rivieraImage1, caption: "Building View", type: 'outside' },
  { src: rivieraImage2, caption: "Building View", type: 'outside' },
  { src: rivieraImage3, caption: "Building View", type: 'outside' },
  { src: cormierImage, caption: "Building View", type: 'outside' },
  { src: pearsonImage, caption: "Building View", type: 'outside' },

];

function Home() {
  const navigate = useNavigate();

  // State for the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState('Cormier');
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

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
      image: cormierImage,
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
          <button className="nav-header-link" onClick={() => scrollToRef(discoverRef1, -220)}>Visit Cormier</button>
          <button className="nav-header-link" onClick={() => scrollToRef(discoverRef2, -220)}>Visit Pearson</button>
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
          <button className="nav-header-link" onClick={() => navigate('/fr')}>FR</button>
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
              <img src={images[2].src} alt="Beautiful unit at 2170 Lincoln" />
            </div>
            <div className="hero-text">
              <h1>Find Your Next Home<br />With Riviera</h1>
              <p>Modern Design, Unbeatable Location, and Unmatched Comfort.</p>
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
                alt="2170 Lincoln Building Exterior"
                loading="lazy"
              />
            </div>

            <div className="about-text">
              <h2>About Riviera</h2>
              <p>
                Welcome to <strong>2170 Lincoln</strong>, a beautifully renovated
                residential building located in a vibrant neighborhood close to downtown Montréal. 
                Designed for modern comfort, it blends convenience with style,
                offering a high-quality living experience for a diverse community.
              </p>
              <p>
                We strive to create a community where comfort meets convenience, offering thoughtfully 
                designed spaces and modern features that enhance everyday living.
              </p>
              <ul className="about-features">
                <li>Modern and stylish design</li>
                <li>Prime location close to Concordia, Dawson, downtown, and other amenities</li>
                <li>Spacious, thoughtfully crafted living spaces</li>
                <li>Community-focused atmosphere</li>
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
                    Cormier is a premier luxury residence offering a perfect blend of comfort, sophistication, and convenience. Thoughtfully designed with modern architecture and upscale finishes, Cormier features spacious layouts, high-end appliances, and elegant interiors that cater to a refined lifestyle. 
                    Residents enjoy a full suite of premium amenities, including secure parking, on-site fitness facilities, and beautifully landscaped outdoor spaces. 
                    Ideally situated just minutes from downtown, Cormier provides easy access to vibrant shopping districts, top-rated restaurants, cultural venues, and public transit — making it an ideal choice for professionals and urban dwellers seeking both style and accessibility.
                  </p>
                </div>
                <div className="property-card-image">
                  <img src={cormierImage} alt="Cormier Property" />
                </div>
              </div>
            )}

            {/* Pearson Card */}
            {selectedProperty === 'Pearson' && (
              <div className="property-card reverse">
                <div className="property-card-text">
                  <h3>Pearson</h3>
                  <p>
                    Pearson offers an exceptional living experience with spacious, thoughtfully designed units that showcase scenic views of the surrounding landscape. 
                    Whether you're enjoying the sunrise from your private balcony or relaxing in a bright, open-concept living space, Pearson provides the perfect setting for comfort and tranquility. 
                    The residence features a range of top-tier community amenities, including a fitness center, lounge areas, green outdoor spaces, and secure on-site parking. 
                    With a strong sense of community and a prime location close to local parks, transit, and shopping, Pearson is ideal for those seeking both convenience and a peaceful place to call home.
                  </p>
                </div>
                <div className="property-card-image">
                  <img src={pearsonImage} alt="Pearson Property" />
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
            style={{ backgroundImage: `url(${cormierImage})` }}
          >
            <div className="image-overlay"></div>
            <div className="building-content">
              <div className="building-info-box">
                <h2>Discover Cormier</h2>
                <button
                  onClick={() => { window.scrollTo(0, 0); navigate('/cormier'); }}
                  className="visit-button"
                >
                  Visit Website
                </button>
              </div>
            </div>
          </div>

          <div
            className="building-half pearson"
            style={{ backgroundImage: `url(${pearsonImage})` }}
          >
            <div className="image-overlay"></div>
            <div className="building-content">
              <div className="building-info-box">
                <h2>Discover Pearson</h2>
                <button
                  onClick={() => { window.scrollTo(0, 0); navigate('/pearson'); }}
                  className="visit-button"
                >
                  Visit Website
                </button>
              </div>
            </div>
          </div>
        </section>



        {/* Insert Features Cards Section right here */}
        <section className="features-cards-section white-bg" data-aos="fade-up" data-aos-once="true" data-aos-easing="ease-in-out">
          <h2>Amenities Offered With Riviera</h2>
          <div className="features-cards-container">
            
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
        </section>

      {/* Modal */}
      {selectedAmenity && (
        <div className="modal-overlay" onClick={() => setSelectedAmenity(null)} 
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center',
            alignItems: 'center', zIndex: 9999
          }}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()} 
            style={{ background: '#fff', padding: '1rem', borderRadius: '10px', maxWidth: '90%', textAlign: 'center' }}
          >
            <h2>{selectedAmenity.title}</h2>
            <img src={selectedAmenity.image} alt={selectedAmenity.title} style={{ maxWidth: '100%', borderRadius: '8px' }}/>
            <button onClick={() => setSelectedAmenity(null)} style={{ marginTop: '1rem', padding: '0.5rem 1rem', cursor: 'pointer' }}>
              Close
            </button>
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
                2170 Lincoln is ideally located just 10 minutes from <b>downtown Montréal</b> and <b>Mount Royal Park</b>, and only steps away from <b>Concordia University</b> and <b>Dawson College</b>.
                Metro stations, shopping centres, cafés, and daily conveniences are all next to the building, making life easy and accessible.
                Whether you're commuting, studying, or unwinding, 2170 Lincoln is the perfect place to be.
              </p>
            </div>
            <div className="modern-location-map">
              <iframe
                title="2170 Lincoln Map"
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
        <p>© 2025 2170 Lincoln. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Home;