import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={() => handleScrollToSection('hero-section')}>
            LUXIFY <i className="fab fa-typo3" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className='fas fa-bars' />
          </div>
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={() => handleScrollToSection('hero-section')}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='#' className='nav-links' onClick={() => handleScrollToSection('services')}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about-us' className='nav-links' onClick={() => handleScrollToSection('about-us')}>
                About Us
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contactus' className='nav-links' onClick={() => handleScrollToSection('contact-us')}>
                Contact Us
              </Link>
            </li>
          </ul>
          <Button buttonStyle='btn--outline'>SIGN UP</Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


