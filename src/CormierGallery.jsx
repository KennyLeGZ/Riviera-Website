import React, { useState, useEffect } from 'react';
import './Gallery.css';
import './Global.css';
import BeforeAfterSlider from "./BeforeAfterSlider";

import { useNavigate } from 'react-router-dom';

// Example pairs (replace with real before/after images)

// 1 Bedroom Apartments
// Unfurnished → Furnished
import img1 from './assets/Appartements/image1.png';
import img2 from './assets/Appartements/image2.png';
import img3 from './assets/Appartements/image3.png';
import img4 from './assets/Appartements/image4.png';
import img5 from './assets/Appartements/furnished7.png';
import img6 from './assets/Appartements/furnished2.png';
import img7 from './assets/Appartements/furnished3.png';
import img8 from './assets/Appartements/furnished4.png';
import img10 from './assets/Appartements/furnished5.png';
import img11 from './assets/Appartements/furnished6.png';

// 2 Bedroom Apartments
import img12 from './assets/Appartements/IMG_4835_web.jpg';
import img13 from './assets/Appartements/IMG_4839_web.jpg';
import img14 from './assets/Appartements/IMG_4844_web.jpg';
import img15 from './assets/Appartements/IMG_4847_web.jpg';
import img16 from './assets/Appartements/IMG_4853_web.jpg';
import img17 from './assets/Appartements/IMG_4854_web.jpg';
import img18 from './assets/Appartements/IMG_4859_web.jpg';
import img19 from './assets/Appartements/IMG_4862_web.jpg';
import img20 from './assets/Appartements/IMG_4864_web.jpg';
import img21 from './assets/Appartements/IMG_4865_web.jpg';
import img22 from './assets/Appartements/IMG_4867_web.jpg';
import img23 from './assets/Appartements/IMG_4868_web.jpg';


// Logo
import rivieraLogo from './assets/Icons/Riviera-logo.png';

// Define gallery items
const images = [
  { 
    type: '1 bedroom',
    before: img1, after: img5,
    captionBefore: "Unfurnished Living Area", 
    captionAfter: "Furnished Living Area"
  },
  { 
    type: '1 bedroom',
    before: img2, after: img6,
    captionBefore: "Unfurnished Desk Space", 
    captionAfter: "Furnished Desk Space"
  },
  { 
    type: '1 bedroom',
    before: img3, after: img8,
    captionBefore: "Unfurnished Desk Space", 
    captionAfter: "Furnished Desk Space"
  },
  { 
    type: '1 bedroom',
    before: img4, after: img11,
    captionBefore: "Unfurnished Desk Space", 
    captionAfter: "Furnished Desk Space"
  },
  { type: '2 bedroom', before: img12, captionBefore: "2BR Kitchen" },
  { type: '2 bedroom', before: img13, captionBefore: "2BR Living Room" },
  { type: '2 bedroom', before: img14, captionBefore: "2BR Bedroom" },
  { type: '2 bedroom', before: img15, captionBefore: "2BR Dining Area" },
  { type: '2 bedroom', before: img16, captionBefore: "2BR Kitchen" },
  { type: '2 bedroom', before: img17, captionBefore: "2BR Living Room" },
  { type: '2 bedroom', before: img18, captionBefore: "2BR Bedroom" },
  { type: '2 bedroom', before: img19, captionBefore: "2BR Dining Area" },
  { type: '2 bedroom', before: img20, captionBefore: "2BR Kitchen" },
  { type: '2 bedroom', before: img21, captionBefore: "2BR Living Room" },
  { type: '2 bedroom', before: img22, captionBefore: "2BR Bedroom" },
  { type: '2 bedroom', before: img23, captionBefore: "2BR Dining Area" },
];

function PhotoHeader() {
  const navigate = useNavigate();
  const goToFrenchPhotos = () => navigate('/fr/photos');
  const [showModal, setShowModal] = useState(false);
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
            onClick={() => navigate('/cormier')}
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate('/'); }}
          >
            ←
          </span>
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
          <button className="nav-header-link nav-header-btn" onClick={handleContactClick}>
            Contact Leasing Agent
          </button>
          <button className="nav-header-link nav-header-btn" onClick={() => setShowModal(true)}>
            Book A Tour
          </button>
          <button className="nav-header-link nav-header-btn" onClick={goToFrenchPhotos}>FR</button>
        </div>
      </header>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>&times;</button>
            <h2>Book A Tour</h2>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeA9sIxQnhvUlgwuHtZOLB4oNFJ7JxlOmvkbz2Rs2V8KV9JvA/viewform?embedded=true"
              width="100%" height="100%" frameBorder="0"
              title="Book A Tour Form"
              style={{ border: '1px solid #ccc', borderRadius: '12px' }}
            />
          </div>
        </div>
      )}
    </>
  );
}

function Photos() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [filter, setFilter] = useState('all');

  const slides = [
    { image: img1, title: "Photo Gallery" },
    { image: img2, title: "50 Cormier" },
    { image: img3, title: "60 Cormier" },
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveSlide((prev) => prev + 1);
  };

  useEffect(() => {
    if (activeSlide === slides.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setActiveSlide(0);
      }, 600);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setIsTransitioning(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [activeSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isTransitioning]);

  const groupedPhotos = {
    'studio': images.filter(photo => photo.type === 'studio'),
    '1 bedroom': images.filter(photo => photo.type === '1 bedroom'),
    '2 bedroom': images.filter(photo => photo.type === '2 bedroom'),
    '3 bedroom': images.filter(photo => photo.type === '3 bedroom'),
  };

  const filteredPhotos = filter === 'all' ? null : groupedPhotos[filter];
  const currentPhotos = filter === 'all'
    ? Object.values(groupedPhotos).flat()
    : filteredPhotos;

  return (
    <>
      <PhotoHeader />
      <section 
        className="discover-properties"
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

      <div className="photo-intro ">
        <h2 className="photo-title">Browse Our Apartments</h2>
        <div className="photo-subtitle">
          <p>
            Explore a gallery of 2170 Lincoln's beautifully designed apartments. 
            Slide left/right on the images to compare unfurnished and furnished versions.
          </p>
        </div>

        {/* Filter Panel */}
        <div className="filter-panel">
          <button className={filter === 'all' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('all')}>All</button>
          <button className={filter === 'studio' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('studio')}>Studio</button>
          <button className={filter === '1 bedroom' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('1 bedroom')}>1 Bedroom</button>
          <button className={filter === '2 bedroom' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('2 bedroom')}>2 Bedroom</button>
          <button className={filter === '3 bedroom' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('3 bedroom')}>3 Bedroom</button>
        </div>
      </div>

      <hr className="filter-divider" />

      {/* Photo Grid with Before/After Sliders */}
      <div>
        {filter === 'all' ? (
          <>
            {Object.entries(groupedPhotos).map(([type, photos]) => (
              photos.length > 0 && (
                <div key={type}>
                  <h3 className="photo-section-title">{type}</h3>
                  <div className="photo-grid">
                    {photos.map((photo, index) => (
                      photo.after ? (
                        <div className="photo-item" key={index}>
                          <BeforeAfterSlider
                            beforeImage={photo.before}
                            afterImage={photo.after}
                            altBefore={photo.captionBefore}
                            altAfter={photo.captionAfter}
                          />
                          {photo.captionBefore && (
                            <p className="photo-caption">
                              {photo.captionBefore} → {photo.captionAfter}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="photo-item" key={index}>
                          <img
                            src={photo.before}
                            alt={photo.captionBefore || "Apartment photo"}
                            className="single-photo"
                          />
                          {photo.captionBefore && (
                            <p className="photo-caption">{photo.captionBefore}</p>
                          )}
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )
            ))}
          </>
        ) : (
          <>
            <h3 className="photo-section-title">{filter}</h3>
            <div className="photo-grid">
              {currentPhotos.map((photo, index) => (
                photo.after ? (
                  <div className="photo-item" key={index}>
                    <BeforeAfterSlider
                      beforeImage={photo.before}
                      afterImage={photo.after}
                      altBefore={photo.captionBefore}
                      altAfter={photo.captionAfter}
                    />
                    {photo.captionBefore && (
                      <p className="photo-caption">
                        {photo.captionBefore} → {photo.captionAfter}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="photo-item" key={index}>
                    <img
                      src={photo.before}
                      alt={photo.captionBefore || "Apartment photo"}
                      className="single-photo"
                    />
                    {photo.captionBefore && (
                      <p className="photo-caption">{photo.captionBefore}</p>
                    )}
                  </div>
                )
              ))}
            </div>
          </>
        )}
      </div>

      <footer className="footer lightgray-bg">
        <p>© 2025 Cormier. All rights reserved.</p>
      </footer>
    </>
  );
}


export default Photos;
