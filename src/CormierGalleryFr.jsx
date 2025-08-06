import React, { useState, useEffect } from 'react';
import './Gallery.css';
import './Global.css';
import BeforeAfterSlider from "./BeforeAfterSlider";

import { useNavigate } from 'react-router-dom';

// Studio
import img1 from './assets/Appartements/Cormier/Studio/Cormier_Studio_1.jpg';
import furnishedStudio1 from './assets/Appartements/Cormier/Studio/furnishedStudio1.png';
import img2 from './assets/Appartements/Cormier/Studio/Cormier_Studio_2.jpg';
import img3 from './assets/Appartements/Cormier/Studio/Cormier_Studio_3.jpg';
import img4 from './assets/Appartements/Cormier/Studio/Cormier_Studio_4.jpg';
import img5 from './assets/Appartements/Cormier/Studio/Cormier_Studio_5.jpg';
import img6 from './assets/Appartements/Cormier/Studio/Cormier_Studio_6.jpg';
import img7 from './assets/Appartements/Cormier/Studio/Cormier_Studio_7.jpg';
import img8 from './assets/Appartements/Cormier/Studio/Cormier_Studio_8.jpg';
import img9 from './assets/Appartements/Cormier/Studio/Cormier_Studio_9.jpg';

// 1 Chambre
import img10 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_1.jpg';
import img11 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_2.jpg';
import img12 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_3.jpg';
import img13 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_4.jpg';
import furnished1Bed1 from './assets/Appartements/Cormier/1Bedroom/furnished1Bed1.png';
import img14 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_5.jpg';
import img15 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_6.jpg';
import img16 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_7.jpg';
import furnished1Bed2 from './assets/Appartements/Cormier/1Bedroom/furnished1Bed2.png';
import img17 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_8.jpg';
import img18 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_9.jpg';
import img19 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_10.jpg';
import img20 from './assets/Appartements/Cormier/1Bedroom/Comier_1Bedroom_11.jpg';

// 2 Chambres
import img21 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_1.jpg';
import furnished2Bed1 from './assets/Appartements/Cormier/2Bedroom/furnished2Bed1.png';
import img22 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_2.jpg';
import img23 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_3.jpg';
import img24 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_4.jpg';
import img25 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_5.jpg';
import img26 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_6.jpg';
import img27 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_7.jpg';
import furnished2Bed2 from './assets/Appartements/Cormier/2Bedroom/furnished2Bed2.png';
import img28 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_8.jpg';
import img29 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_9.jpg';
import img30 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_10.jpg';
import img31 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_11.jpg';
import img32 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_12.jpg';
import img33 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_13.jpg';
import img34 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_15.jpg';
import furnished2Bed3 from './assets/Appartements/Cormier/2Bedroom/furnished2Bed3.png';
import img36 from './assets/Appartements/Cormier/2Bedroom/Cormier_2Bedroom_17.jpg';


// Logo
import rivieraLogo from './assets/Icons/Riviera-logo.png';

const images = [
  { type: 'Studio', before: img1, after: furnishedStudio1, captionBefore: "Studio: Salon non meublé", captionAfter: "Salon meublé" },
  { type: 'Studio', before: img2, captionBefore: "Studio : Salon + Cuisine Vue 2" },
  { type: 'Studio', before: img3, captionBefore: "Studio : Entrée + Cuisine" },
  { type: 'Studio', before: img4, captionBefore: "Studio : Salon Vue 1" },
  { type: 'Studio', before: img5, captionBefore: "Studio : Salon Vue 2" },
  { type: 'Studio', before: img6, captionBefore: "Studio : Salon Vue 3" },
  { type: 'Studio', before: img7, captionBefore: "Studio : Salle de bain Vue 1" },
  { type: 'Studio', before: img8, captionBefore: "Studio : Salle de bain Vue 2" },
  { type: 'Studio', before: img9, captionBefore: "Studio : Cuisine" },

  { type: '1 Chambre', before: img10, captionBefore: "1 Chambre : Cuisine" },
  { type: '1 Chambre', before: img11, captionBefore: "1 Chambre : Salon Vue 1" },
  { type: '1 Chambre', before: img12, captionBefore: "1 Chambre : Salon Vue 2" },
  { type: '1 Chambre', before: img13, after: furnished1Bed1, captionBefore: "1 Chambre: Salon non meublé", captionAfter: "Salon meublé" },
  { type: '1 Chambre', before: img14, captionBefore: "1 Chambre : Salon + Entrée" },
  { type: '1 Chambre', before: img15, captionBefore: "1 Chambre : Salon Vue 4" },
  { type: '1 Chambre', before: img16, captionBefore: "1 Chambre : Chambre Vue 1" },
  { type: '1 Chambre', before: img17, after: furnished1Bed2, captionBefore: "1 Chambre: Chambre non meublée", captionAfter: "Chambre meublée" },
  { type: '1 Chambre', before: img18, captionBefore: "1 Chambre : Chambre Vue 3" },
  { type: '1 Chambre', before: img19, captionBefore: "1 Chambre : Salle de bain" },
  { type: '1 Chambre', before: img20, captionBefore: "1 Chambre : Chambre + Salon" },

  { type: '2 Chambres', before: img21, after: furnished2Bed1, captionBefore: "2 Chambres: Salon non meublé", captionAfter: "Salon meublé" },
  { type: '2 Chambres', before: img22, captionBefore: "2 Chambres : Salon Vue 2" },
  { type: '2 Chambres', before: img23, captionBefore: "2 Chambres : Salon Vue 3" },
  { type: '2 Chambres', before: img24, captionBefore: "2 Chambres : Cuisine" },
  { type: '2 Chambres', before: img25, captionBefore: "2 Chambres : Salle de bain Vue 1" },
  { type: '2 Chambres', before: img26, captionBefore: "2 Chambres : Salle de bain Vue 2" },
  { type: '2 Chambres', before: img27, after: furnished2Bed2, captionBefore: "2 Chambres: 1ère chambre non meublée", captionAfter: "1ère chambre meublée" },
  { type: '2 Chambres', before: img28, captionBefore: "2 Chambres : Chambre 1 Vue 2" },
  { type: '2 Chambres', before: img29, captionBefore: "2 Chambres : Couloir" },
  { type: '2 Chambres', before: img30, captionBefore: "2 Chambres : Balcon Vue 1" },
  { type: '2 Chambres', before: img31, captionBefore: "2 Chambres : Balcon Vue 2" },
  { type: '2 Chambres', before: img32, captionBefore: "2 Chambres : Balcon Vue 3" },
  { type: '2 Chambres', before: img33, captionBefore: "2 Chambres : Balcon Vue 4" },
  { type: '2 Chambres', before: img34, after: furnished2Bed3, captionBefore: "2 Chambres : 2e chambre non meublée", captionAfter: "2e chambre meublée" },
  { type: '2 Chambres', before: img36, captionBefore: "2 Chambres : Chambre 2 Vue 2" },
];



function PhotoHeader() {
  const navigate = useNavigate();
  const goToEnglishPhotos = () => navigate('/cormier/photos');
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
            onClick={() => navigate('/cormier/fr')}
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate('/cormier/fr'); }}
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
                Contacter l'Agent
            </button>
            <button className="nav-header-link nav-header-btn" onClick={() => setShowModal(true)}>
                Réserver Une Visite
            </button>
            <button className="nav-header-link nav-header-btn" onClick={goToEnglishPhotos}>
                EN
            </button>
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

  // Scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const slides = [
    { image: furnished1Bed2, title: "Galerie Photo" },
    { image: furnished2Bed1, title: "50 Cormier" },
    { image: furnished2Bed3, title: "60 Cormier" },
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
    'Studio': images.filter(photo => photo.type === 'Studio'),
    '1 Chambre': images.filter(photo => photo.type === '1 Chambre'),
    '2 Chambres': images.filter(photo => photo.type === '2 Chambres'),
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

      <div className="photo-intro">
        <h2 className="photo-title">Découvrez nos appartements</h2>
        <div className="photo-subtitle">
            <p>
            Parcourez une galerie des appartements du 50 & 60 Cormier.  
            Faites glisser certaines images vers la gauche ou la droite pour comparer les versions non meublées et meublées.
            </p>
        </div>

        {/* Filter Panel */}
        <div className="filter-panel">
          <button className={filter === 'all' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('all')}>Tout</button>
          <button className={filter === 'Studio' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('Studio')}>Studio</button>
          <button className={filter === '1 Chambre' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('1 Chambre')}>1 Chambre</button>
          <button className={filter === '2 Chambres' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('2 Chambres')}>2 Chambres</button>
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

      <span style={{ paddingLeft: "1rem", fontSize: "0.80rem", color: "gray" }}>
        *Certaines images sont virtuellement meublées; les pièces peuvent varier.
      </span>

      <footer className="footer lightgray-bg">
        <p>© 2025 Cormier. Tous droits réservés.</p>
      </footer>
    </>
  );
}


export default Photos;
