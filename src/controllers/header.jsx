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

    return (
        <header className="modern-header">
            <div className="header-content">
                <Link to="/" className="logo" onClick={closeMenu}>
                    <span>Antony Lester</span>
                </Link>
                
                {/* Desktop Navigation */}
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

