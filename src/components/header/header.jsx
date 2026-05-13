import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from "../../assets/MUFA - LOGO - Trang.jpg";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
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
          <Link to="/about" onClick={closeMenu}>Về Chúng Tôi</Link>
          <Link to="/menu" onClick={closeMenu}>Thực Đơn</Link>
          <Link to="/activities" onClick={closeMenu}>Hoạt Động</Link>
          <Link to="/press" onClick={closeMenu}>Báo Chí</Link>
          <Link to="/contact" onClick={closeMenu}>Liên Hệ</Link>
          <span className="lang-switch">VN</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;