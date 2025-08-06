import React, { useRef, useState } from "react";
import "./BeforeAfterSlider.css";

function BeforeAfterSlider({ beforeImage, afterImage }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);

  const handleMove = (clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    let newX = ((clientX - rect.left) / rect.width) * 100;
    if (newX < 0) newX = 0;
    if (newX > 100) newX = 100;
    setPosition(newX);
  };

  return (
    <div
      className="before-after-container"
      ref={containerRef}
      onMouseDown={(e) => handleMove(e.clientX)}
      onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      <img src={beforeImage} alt="Before" className="before-image" />

      <img
        src={afterImage}
        alt="After"
        className="after-image"
        style={{ clipPath: `inset(0 0 0 ${position}%)` }}
      />

      <div className="divider" style={{ left: `${position}%` }}>
        <div className="handle"></div>
      </div>

      <span className="label before-label">Unfurnished</span>
      <span className="label after-label">Furnished</span>
    </div>
  );
}

export default BeforeAfterSlider;
