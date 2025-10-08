import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { menuItemsLeft, menuItemsRight } from '../utils/menu-items';
import '../styling/header.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    
    const allMenuItems = [...menuItemsLeft, ...menuItemsRight];
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/antony-lester', '_blank', 'noopener,noreferrer');
    };

    return (
        <header className="modern-header">
            <div className="header-content">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <span>Antony Lester</span>
                </Link>
                
                {/* Desktop Navigation - Center */}
                <nav className="desktop-nav">
                    {allMenuItems.map((item) => (
                        <Link 
                            key={item.alt} 
                            to={item.path}
                            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                            title={item.alt}
                        >
                            <img src={item.src} alt={item.alt} />
                            <span>{item.alt}</span>
                        </Link>
                    ))}
                </nav>
                
                {/* LinkedIn Icon Button - Right Aligned */}
                <button 
                    className="linkedin-icon-button"
                    onClick={handleLinkedInClick}
                    title="Visit my LinkedIn profile"
                    aria-label="Visit my LinkedIn profile"
                >
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                </button>
                
                {/* Mobile Menu Button */}
                <button 
                    className="mobile-menu-button"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>
            
            {/* Mobile Navigation */}
            <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-content">
                    {allMenuItems.map((item) => (
                        <Link 
                            key={item.alt} 
                            to={item.path}
                            className={`mobile-nav-item ${location.pathname === item.path ? 'active' : ''}`}
                            onClick={closeMenu}
                        >
                            <img src={item.src} alt={item.alt} />
                            <span>{item.alt}</span>
                        </Link>
                    ))}
                </div>
            </nav>
            
            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="mobile-nav-overlay" onClick={closeMenu}></div>
            )}
        </header>
    );
}

