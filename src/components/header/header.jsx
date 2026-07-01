import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './header.css';
import Logo from "../../assets/MUFA - LOGO - Trang.jpg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      navigate(`/#${sectionId}`, { replace: true });
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo-box">
          <Link to="/" onClick={closeMenu}>
            <img src={Logo} alt="Logo" className='logo-img'/>
          </Link>
        </div>

        <div 
          className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/#about-section" onClick={(e) => handleNavClick(e, 'about-section')}>Về Chúng Tôi</Link>
          <Link to="/#menu-section" onClick={(e) => handleNavClick(e, 'menu-section')}>Thực Đơn</Link>
          <Link to="/#press-section" onClick={(e) => handleNavClick(e, 'press-section')}>Báo Chí</Link>
          <Link to="/#activities-section" onClick={(e) => handleNavClick(e, 'activities-section')}>Hoạt Động</Link>
          <Link to="/#art-section" onClick={(e) => handleNavClick(e, 'art-section')}>Nghệ Thuật</Link>
          <Link to="/#footer-section" onClick={(e) => handleNavClick(e, 'footer-section')}>Liên Hệ</Link>
          <span className="lang-switch">VN</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;