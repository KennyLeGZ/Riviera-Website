import React, { useState } from 'react';
import './HamburgerMenu.css';  // Add your styles here

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        ☰
      </div>
      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
