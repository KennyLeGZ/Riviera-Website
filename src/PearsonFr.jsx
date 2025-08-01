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



const images = [
  { src: img1, caption: "Spacious 1 Bedroom Living Area", type: '1 bedroom' },
  { src: img2, caption: " 1 Bedroom Living Area", type: '1 bedroom' },
  { src: img3, caption: "Spacious 1  Living Area", type: '1 bedroom' },
  { src: img4, caption: "Spacious 1 Bedroom Living Area", type: '1 bedroom' },
];


// Sample units data
const unitsData = [
  { unit: '101', type: '1 Bedroom', size: '490 sq ft', floor: 1, price: '$1,745 / month', img: img1 },
  { unit: '203', type: '2 Bedroom', size: '765 sq ft', floor: 2, price: '$2,345 / month', img: img2 },
  { unit: '305', type: 'Studio', size: '300-342 sq ft', floor: 3, price: '$1,645 / month', img: img3 },
  { unit: '405', type: '3 Bedroom', size: '300-342 sq ft', floor: 3, price: '$1,695 / month', img: img4 },
];


function Pearson() {
  const navigate = useNavigate();

  // State for the discover Pearson banner
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    { image: img1, title: "Modern Living at Pearson" },
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
          <button className="nav-header-link" onClick={() => scrollToRef(aboutRef1, -200)}>About</button>
          <button className="nav-header-link" onClick={() => navigate('/pearson/photos')}>Gallery</button>
          <button className="nav-header-link" onClick={() => scrollToRef(unitsRef1, -200)}>Available Units</button>
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
          <button className="nav-header-link" onClick={handleContactClick}>Contact Leasing Agent</button>
          <button className="nav-header-link" onClick={openModal}>Book A Tour</button>
          <button className="nav-header-link" onClick={() => navigate('/pearson')}>EN</button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="nav-header-link" onClick={() => scrollToRef(aboutRef1, -200)}>About</button>
        <button className="nav-header-link" onClick={() => navigate('/photos')}>Gallery</button>
        <button className="nav-header-link" onClick={() => scrollToRef(unitsRef1, -220)}>Available Units</button>
        <button className="nav-header-link" onClick={handleContactClick}>Contact Leasing Agent</button>
        <button className="nav-header-link" onClick={openModal}>Book A Tour</button>
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
              <img src={images[1].src} alt="Beautiful unit at Pearson" />
            </div>
            <div className="hero-text">
              <h1>Find Your New Home<br />At Pearson</h1>
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
              <h2>About Pearson</h2>
              <p>
                Welcome to <strong>Pearson</strong>, a beautifully renovated
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

        {/* Insert Features Cards Section right here */}
        <section className="features-cards-section white-bg" data-aos="fade-down" data-aos-once="true" data-aos-duration="600" data-aos-easing="ease-in-out">
          <h2>Live Better at Pearson</h2>
          <div className="features-cards-container">
            {/* Card 1: Free Wifi */}
            <div className="feature-card">
              <img src={wifiIcon} alt="WiFi icon" className="feature-icon" />
              <h3>Free Internet</h3>
              <p>Stay connected with included wireless internet available throughout the building.</p>
            </div>

            {/* Card 2: Kitchen Features */}
            <div className="feature-card">
              <img src={kitchenIcon} alt="Kitchen icon" className="feature-icon" />
              <h3>Equipped Kitchen</h3>
              <p>A kitchen equipped with a cooktop, microwave, and other essentials, designed for your convenience and comfort</p>
            </div>

            {/* Card 3: Secure Building */}
            <div className="feature-card">
              <img src={lockIcon} alt="Lock icon" className="feature-icon" />
              <h3>24/7 Secure Access</h3>
              <p>Feel safe with round-the-clock surveillance and secure entry systems for residents.</p>
            </div>

            {/* Card 4: Heating and Cooling */}
            <div className="feature-card">
              <img src={heatingCoolingIcon} alt="Heating/Cooling icon" className="feature-icon" />
              <h3>Air Conditioning & Heating</h3>
              <p>Comfortable air conditioning and heating included year-round for your convenience.</p>
            </div>

            {/* Card 4: Gym */}
            <div className="feature-card feature-card-medium">
              <img src={gymIcon} alt="Gym icon" className="feature-icon" />
              <h3>On-Site Gym</h3>
              <p>Stay fit and active with our fully equipped on-site gym, available 24/7 for residents.</p>
            </div>

            {/* Card 5: In-Unit Washer/Dryer */}
            <div className="feature-card feature-card-medium">
              <img src={washerIcon} alt="Washer/Dryer icon" className="feature-icon" />
              <h3>Laundry Room</h3>
              <p>Convenient on-site laundry with modern washers and dryers.</p>
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
              <img src={img1} alt="Gym at Pearson" />
            </div>
            <div className="amenities-hero-text">
              <h1>Modern Gym with Stunning <br />Downtown Montreal View</h1>
              <p>Enjoy your workouts in a bright, modern gym with stunning panoramic views of downtown Montréal.</p>
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
              <img src={img2} alt="Conference Room at Pearson" />
            </div>
            <div className="amenities-hero-text">
              <h1>Fully Equipped Conference Space</h1>
              <p>Host your meetings and events in our elegant conference room, designed to provide a professional and comfortable space for all your gatherings.</p>
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
          <h2>Available Units & Floor Plans</h2>

          <div className="units-card-container">
            {['Studio', '1 Bedroom', '2 Bedroom', '3 Bedroom'].map((type) => {
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
                        <p><strong>Size:</strong> {size}</p>
                        <p><strong>Starting Price:</strong> {price}</p>
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
              <h2>Discover the Neighborhood</h2>
              <p>
                Pearson is ideally located just 10 minutes from <b>downtown Montréal</b> and <b>Mount Royal Park</b>, and only steps away from <b>Concordia University</b> and <b>Dawson College</b>.
                Metro stations, shopping centres, cafés, and daily conveniences are all next to the building, making life easy and accessible.
                Whether you're commuting, studying, or unwinding, Pearson is the perfect place to be.
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



        {/* Testimonials
        <section
          ref={testimonialsRef1}
          className="testimonials-section"
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-duration="600"
        >
          <h2 className="testimonials-title">What Our Residents Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Highly recommend living at Pearson! The apartments are spacious and comfortable. The building is well-maintained and clean, and the location is great.
                I’m happy to call this place home and definitely plan to stay long-term!"
              </p>
              <p className="testimonial-author"></p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "My husband and I had an amazing experience living here. It was our first time in Montréal and the location is just as great as described. It is close to vibrant neighborhoods, restaurants, and bars. 
                Our apartment felt spacious with a full kitchen, a nice bathroom, and a lovely balcony.
                I would definitely recommend Pearson to anyone looking for a great home."
              </p>
              <p className="testimonial-author"></p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Living at Pearson has been fantastic. The apartments are spacious and clean and the location is unbeatable because it is close to everything you need.
                It truly feels like home and I’m happy to recommend it to anyone looking for a great place to live."
              </p>
              <p className="testimonial-author"></p>
            </div>
          </div>
        </section>
        */}
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
        <p>© 2025 Pearson. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Pearson;

