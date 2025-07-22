import React, { useState } from 'react';
import './Photos.css';

import { useNavigate } from 'react-router-dom';

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


const images = [
  { src: img1, caption: "Spacious 1 Bedroom Living Area", type: '1 bedroom' },
  { src: img2, caption: "1 Bedroom Living Space", type: '1 bedroom' },
  { src: img3, caption: "Sunlit Lounge Area With Expansive Window Views", type: '1 bedroom' },
  { src: img4, caption: "Compact And Practical Desk Setup In The Living Room", type: '1 bedroom' },
  { src: img5, caption: "Full Living Room Setup With Modern Furnishings", type: '1 bedroom' },
  { src: img6, caption: "Spacious Walkway To The Bedroom", type: '1 bedroom' },
  { src: img7, caption: "Modern Kitchen With Sleek Finishes", type: '1 bedroom' },
  { src: img8, caption: "Functional Living Space", type: '1 bedroom' },
  { src: img9, caption: "Comfortable And Spacious One-Bedroom Layout", type: '1 bedroom' },
  { src: img10, caption: "Relaxing Bed Setup", type: '1 bedroom' },
  { src: img11, caption: "Bright And Airy Bedroom", type: '1 bedroom' },
  { src: img12, caption: "Clean And Modern Bathroom", type: '1 bedroom' },
  { src: img13, caption: "Welcoming 2 Bedroom Living Area", type: '2 bedroom' },
  { src: img14, caption: "Spacious Living Room In 2 Bedroom", type: '2 bedroom' },
  { src: img15, caption: "Spacious Living Room", type: '2 bedroom' },
  { src: img16, caption: "Roomy Living Area", type: '2 bedroom' },
  { src: img17, caption: "Cozy Dining Area", type: '2 bedroom' },
  { src: img18, caption: "Bright And Airy Living Space", type: '2 bedroom' },
  { src: img19, caption: "Modern Dining Area And Kitchen Combo", type: '2 bedroom' },
  { src: img20, caption: "Modern Dining Area And Kitchen Combo", type: '2 bedroom' },
  { src: img21, caption: "Fully Equipped Kitchen With A Modern Aesthetic", type: '2 bedroom' },
  { src: img22, caption: "Stylish Modern Kitchen", type: '2 bedroom' },
  { src: img23, caption: "Cozy Bedroom With Natural Light In 2 Bedroom", type: '2 bedroom' },
  { src: img24, caption: "Cozy Bedroom With Natural Light In 2 Bedroom", type: '2 bedroom' },
  { src: img25, caption: "Warm And Airy Bedroom With Plenty Of Natural Light", type: '2 bedroom' },
  { src: img26, caption: "Bright And Modern Bathroom Space", type: '2 bedroom' },
  { src: img27, caption: "Modern Studio Apartment", type: 'studio' },
  { src: img28, caption: "Cozy Studio Living Area", type: 'studio' },
  { src: img29, caption: "Functional Space With A Desk And Dining Table In Studio", type: 'studio' },
  { src: img30, caption: "Bright Bedroom In Studio", type: 'studio' },
  { src: img31, caption: "Relaxing Bed Setup", type: 'studio' },
  { src: img32, caption: "Modern Kitchen With A Cozy Dining Table In The Studio", type: 'studio' },
  { src: img33, caption: "Studio Apartment Layout", type: 'studio' },
  { src: img34, caption: "Studio Apartment Overview", type: 'studio' },
  { src: img35, caption: "Stylish Work Corner", type: 'studio' },
  { src: img36, caption: "Stylish Kitchen With Upgrades In Studio", type: 'studio' },
  { src: img37, caption: "Stylish Kitchen With Upgrades In Studio", type: 'studio' },
  { src: img38, caption: "Sleek And Modern Bathroom In The Studio Apartment", type: 'studio' }
];


function PhotoHeader() {
  const navigate = useNavigate();
  const goToFrenchPhotos = () => {
    navigate('/fr/photos');
  };
  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  const handleContactClick = () => {
    window.location.href = 'mailto:kle@gestionzagora.com';
  };

  return (
    <>
      <header className="header lightgray-bg fixed-header">
        <div className="header-left">
          <span
            className="back-arrow"
            aria-label="Back to homepage"
            role="button"
            onClick={() => navigate('/')}
            tabIndex={0} // to make it keyboard-focusable if you want
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate('/'); }}
            style={{ cursor: 'pointer' }}
          >
            ←
          </span>
        </div>
        <div className="header-center-photo" style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <h2 className="header-address-photo">2170 LINCOLN</h2>
        </div>
        <div className="header-right">
          <button className="nav-header-link nav-header-btn" onClick={handleContactClick}>
            Contact Leasing Agent
          </button>
          <button className="nav-header-link nav-header-btn" onClick={openModal}>
            Book A Tour
          </button>
          <button className="nav-header-link nav-header-btn" onClick={goToFrenchPhotos}>FR</button>
        </div>
      </header>

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
    </>
  );
}



function Photos() {
  const [filter, setFilter] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const groupedPhotos = {
    '1 bedroom': images.filter(photo => photo.type === '1 bedroom'),
    '2 bedroom': images.filter(photo => photo.type === '2 bedroom'),
    'studio': images.filter(photo => photo.type === 'studio'),
  };

  const filteredPhotos = filter === 'all' ? null : groupedPhotos[filter];
  const currentPhotos = filter === 'all' 
    ? Object.values(groupedPhotos).flat() 
    : filteredPhotos;


  // ... your filter buttons and photo grid here, unchanged ...

  return (
    <>
      <PhotoHeader />
      <main style={{ padding: '2rem 0', margin: '0', paddingTop: '150px', paddingBottom: '2rem', margin: '0' }}>
        <div className="hero-title">
          <h1>Photo Gallery</h1>
        </div>

        <div className="photo-description">
          <p>
            Browse through a gallery of 2170 Lincoln's beautifully designed apartments. Whether you’re searching for a studio, one-bedroom, or two-bedroom, each photo highlights the bright, modern, and welcoming spaces that make this appartment feel like home.
          </p>
        </div>

        {/* Filter Panel (same as your code) */}
        <div className="filter-panel">
          <button className={filter === 'all' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('all')}>All</button>
          <button className={filter === '1 bedroom' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('1 bedroom')}>1 Bedroom</button>
          <button className={filter === '2 bedroom' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('2 bedroom')}>2 Bedroom</button>
          <button className={filter === 'studio' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('studio')}>Studio</button>
        </div>
     
        <hr className="filter-divider" />

        {/* Photo Grid */}
        {filter === 'all' ? (
          Object.entries(groupedPhotos).map(([type, photos]) => (
            <div key={type} className="photo-section">
              <h2 className="photo-section-title">{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
              <div className="photo-grid">
                {photos.map(({ src, caption }, index) => (
                  <div
                    key={index}
                    className="photo-item"
                    onClick={() => setSelectedIndex(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img src={src} alt={caption} className="photo-img" />
                    <p className="photo-caption">{caption}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="photo-grid">
            {filteredPhotos.map(({ src, caption }, index) => (
              <div 
                key={index} 
                className="photo-item" 
                onClick={() => setSelectedIndex(index)}
                style={{ cursor: 'pointer' }}>
                <img src={src} alt={caption} className="photo-img" />
                <p className="photo-caption">{caption}</p>
              </div>
            ))}
          </div>
        )}


        {/* Modal for enlarged image + navigation */}
        {selectedIndex !== null && (
          <div className="modal-overlay" onClick={() => setSelectedIndex(null)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedIndex(null)} aria-label="Close modal">&times;</button>

              <button
                className="modal-prev"
                onClick={e => {
                  e.stopPropagation();
                  setSelectedIndex((selectedIndex === 0) ? currentPhotos.length - 1 : selectedIndex - 1);
                }}
                aria-label="Previous photo"
              >
                &#10094;
              </button>

              <button
                className="modal-next"
                onClick={e => {
                  e.stopPropagation();
                  setSelectedIndex((selectedIndex === currentPhotos.length - 1) ? 0 : selectedIndex + 1);
                }}
                aria-label="Next photo"
              >
                &#10095;
              </button>

              <img src={currentPhotos[selectedIndex].src} alt={currentPhotos[selectedIndex].caption} className="modal-image" />
              <p className="modal-caption">{currentPhotos[selectedIndex].caption}</p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}


export default Photos;
