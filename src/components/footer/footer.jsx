import React from 'react';
import './footer.css';
import mapMufa from '../../assets/map_mufa.png';

// SVG Social Icons
const FacebookIcon = () => (
  <svg viewBox="0 0 40 40" width="40" height="40" className="social-svg" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20" fill="#1877F2" />
    <path d="M24.7 20H21.5v9h-3.7v-9h-2.6v-3.2h2.6v-2.1c0-2.6 1.6-4 3.9-4 1.1 0 2 .1 2.3.1v2.7h-1.6c-1.3 0-1.5.6-1.5 1.5v1.8h3l-.4 3.2z" fill="#FFFFFF" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 40 40" width="40" height="40" className="social-svg" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="insta-grad" cx="30%" cy="107%" r="130%" fx="30%" fy="107%">
        <stop offset="0%" stopColor="#FED166" />
        <stop offset="25%" stopColor="#F7A33B" />
        <stop offset="45%" stopColor="#E2306C" />
        <stop offset="65%" stopColor="#C22197" />
        <stop offset="90%" stopColor="#5547E9" />
      </radialGradient>
    </defs>
    <rect width="40" height="40" rx="9" fill="url(#insta-grad)" />
    <path d="M20 12.3c2.5 0 2.8 0 3.8.1.9.04 1.4.2 1.7.3.4.2.7.4.9.7.3.3.5.6.7.9.1.3.3.8.3 1.7.04 1 .04 1.3.04 3.8s0 2.8-.04 3.8c-.04.9-.2 1.4-.3 1.7-.2.4-.4.7-.7.9-.3.3-.6.5-.9.7-.3.1-.8.3-1.7.3-1 .04-1.3.04-3.8.04s-2.8 0-3.8-.04c-.9-.04-1.4-.2-1.7-.3-.4-.2-.7-.4-.9-.7-.3-.3-.5-.6-.7-.9-.1-.3-.3-.8-.3-1.7-.04-1-.04-1.3-.04-3.8s0-2.8.04-3.8c.04-.9.2-1.4.3-1.7.2-.4.4-.7.7-.9.3-.3.6-.5.9-.7.3-.1.8-.3 1.7-.3 1-.04 1.3-.04 3.8-.04M20 10.5c-2.6 0-2.9 0-3.9.1-1 .05-1.7.2-2.3.45-.6.24-1.1.56-1.6 1.05s-.8 1-1.05 1.6c-.25.6-.4 1.3-.45 2.3-.05 1-.05 1.3-.05 3.9s0 2.9.05 3.9c.05 1 .2 1.7.45 2.3.24.6.56 1.1 1.05 1.6s1 .8 1.6 1.05c.6.25 1.3.4 2.3.45 1 .05 1.3.05 3.9.05s2.9 0 3.9-.05c1-.05 1.7-.2 2.3-.45.6-.24 1.1-.56 1.6-1.05s.8-1 1.05-1.6c.25-.6.4-1.3.45-2.3.05-1 .05-1.3.05-3.9s0-2.9-.05-3.9c-.05-1-.2-1.7-.45-2.3-.24-.6-.56-1.1-1.05-1.6s-1-.8-1.6-1.05c-.6-.25-1.3-.4-2.3-.45-1-.05-1.3-.05-3.9-.05z" fill="#FFFFFF" />
    <path d="M20 15c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8.2c-1.77 0-3.2-1.43-3.2-3.2s1.43-3.2 3.2-3.2 3.2 1.43 3.2 3.2-1.43 3.2-3.2 3.2z" fill="#FFFFFF" />
    <circle cx="25.2" cy="14.8" r="1.2" fill="#FFFFFF" />
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 40 40" width="40" height="40" className="social-svg" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="19.5" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
    <g transform="translate(11, 9)">
      <path d="M12.2 4.1c-.8 0-1.5-.2-2.1-.6v6.6c0 2.3-1.8 4.1-4.1 4.1S2 12.4 2 10.1s1.8-4.1 4.1-4.1c.3 0 .5.05.7.1V3.9c-.2-.05-.5-.1-.7-.1C2.7 3.8 0 6.6 0 10.1s2.7 6.3 6.1 6.3 6.1-2.7 6.1-6.2V4.1c.9.7 2 1.1 3.2 1.1V2.9c-1.4 0-2.6-.9-3.2-2.2h-3v3.4z" fill="#00f2fe" transform="translate(-0.5, -0.5)" />
      <path d="M12.2 4.1c-.8 0-1.5-.2-2.1-.6v6.6c0 2.3-1.8 4.1-4.1 4.1S2 12.4 2 10.1s1.8-4.1 4.1-4.1c.3 0 .5.05.7.1V3.9c-.2-.05-.5-.1-.7-.1C2.7 3.8 0 6.6 0 10.1s2.7 6.3 6.1 6.3 6.1-2.7 6.1-6.2V4.1c.9.7 2 1.1 3.2 1.1V2.9c-1.4 0-2.6-.9-3.2-2.2h-3v3.4z" fill="#fe2c55" transform="translate(0.5, 0.5)" />
      <path d="M12.2 4.1c-.8 0-1.5-.2-2.1-.6v6.6c0 2.3-1.8 4.1-4.1 4.1S2 12.4 2 10.1s1.8-4.1 4.1-4.1c.3 0 .5.05.7.1V3.9c-.2-.05-.5-.1-.7-.1C2.7 3.8 0 6.6 0 10.1s2.7 6.3 6.1 6.3 6.1-2.7 6.1-6.2V4.1c.9.7 2 1.1 3.2 1.1V2.9c-1.4 0-2.6-.9-3.2-2.2h-3v3.4z" fill="#000000" />
    </g>
  </svg>
);

const TripAdvisorIcon = () => (
  <svg viewBox="0 0 40 40" width="40" height="40" className="social-svg" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="19.5" fill="#E8EDE9" stroke="#CCD5CD" strokeWidth="1" />
    <g transform="translate(6, 8)" fill="#000000">
      <path d="M14 0C9.6 0 7.3 2.1 6.5 4.8c-.8-.2-1.7-.3-2.5-.3C1.8 4.5 0 6.3 0 8.5c0 1.9 1.3 3.5 3.1 3.9C3 12.8 3 13.2 3 13.6c0 4.1 3.1 7.4 7.2 7.4s7.2-3.3 7.2-7.4c0-.4 0-.8-.1-1.2 1.8-.4 3.1-2 3.1-3.9 0-2.2-1.8-4-4-4-.8 0-1.7.1-2.5.3C13.2 2.1 10.9 0 6.5 0h7.5zM7.2 17c-2 0-3.6-1.6-3.6-3.6 0-2 1.6-3.6 3.6-3.6 2 0 3.6 1.6 3.6 3.6 0 2-1.6 3.6-3.6 3.6zm13.6-3.6c0 2-1.6 3.6-3.6 3.6-2 0-3.6-1.6-3.6-3.6 0-2 1.6-3.6 3.6-3.6 2 0 3.6 1.6 3.6 3.6z" />
      <circle cx="7.2" cy="13.4" r="2.8" fill="#FFFFFF" />
      <circle cx="16.8" cy="13.4" r="2.8" fill="#FFFFFF" />
      <circle cx="7.2" cy="13.4" r="1.2" fill="#00AF87" />
      <circle cx="16.8" cy="13.4" r="1.2" fill="#00AF87" />
      <circle cx="7.2" cy="13.4" r="0.6" fill="#000000" />
      <circle cx="16.8" cy="13.4" r="0.6" fill="#000000" />
      <path d="M12 11.5l-1.5 2.5h3L12 11.5z" fill="#000000" />
    </g>
  </svg>
);

const GoogleMapsIcon = () => (
  <svg viewBox="0 0 40 40" width="40" height="40" className="social-svg" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="19.5" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
    <g transform="translate(13, 8)">
      <path d="M7.3 0C3.3 0 0 3.3 0 7.3c0 5.1 4.5 9.7 6.4 12.2.5.6 1.3.6 1.8 0 1.9-2.5 6.4-7.1 6.4-12.2C14.6 3.3 11.3 0 7.3 0z" fill="#EA4335" />
      <path d="M7.3 4.5c-1.5 0-2.8 1.3-2.8 2.8 0 .4.1.8.3 1.1L2.1 6.1C3 4 5 2.5 7.3 2.5v2z" fill="#FBBC05" />
      <path d="M7.3 9.8c-1.5 0-2.8-1.3-2.8-2.8 0-.4.1-.8.3-1.1L2.1 8.5C3 10.6 5 12.1 7.3 12.1v-2.3z" fill="#4285F4" />
      <path d="M7.3 12.1c2.6 0 4.8-2.1 4.8-4.8 0-.8-.2-1.5-.6-2.1l-2.6 2.6c-.3.9-1.2 1.7-2.2 1.7v2.6z" fill="#34A853" />
      <circle cx="7.3" cy="7.3" r="2.8" fill="#4285F4" />
      <circle cx="7.3" cy="7.3" r="1.5" fill="#FFFFFF" />
    </g>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer" id="footer-section">
      <div className="footer-container">
        <div className="footer-info">
          <h2 className="footer-title">Thông tin liên hệ</h2>
          <p className="footer-address">
            Số 10 Võ Nguyên Giáp, khu 1, Tam Đảo, Phú Thọ, Việt Nam
          </p>
          <div className="footer-hours">
            <span className="hours-title">Khung giờ mở cửa Mufa:</span>
            <span className="hours-detail">Sáng từ 8h-14h, Chiều từ 16h-23h</span>
          </div>
          <p className="footer-contact-item">
            Email: <a href="mailto:mushroomforest25@gmail.com">mushroomforest25@gmail.com</a>
          </p>
          <p className="footer-contact-item">
            Điện thoại: <a href="tel:+84763258812">+84 76 325 8812</a>
          </p>
        </div>

        <div className="footer-socials">
          <a href="https://www.facebook.com/share/1BeoAuCXkW/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/mufa.tamdao.kitchen?igsh=Nm9sZmMzNnJjZmZ5&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="https://www.tiktok.com/@mufa.tamdao.restaurant?_r=1&_t=ZS-97e72J1q97i" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <TikTokIcon />
          </a>
          <a href="https://www.tripadvisor.com/Restaurant_Review-g2062765-d33375912-Reviews-Mufa_Restaurant_Craft_Beer-Tam_Dao_Vinh_Phuc_Province.html" target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor">
            <TripAdvisorIcon />
          </a>
          <a href="https://maps.app.goo.gl/rH2NbXt6848fYzjw6?g_st=ic" target="_blank" rel="noopener noreferrer" aria-label="Google Maps">
            <GoogleMapsIcon />
          </a>
        </div>

        <div className="footer-map">
          <div className="map-frame">
            <img src={mapMufa} alt="Bản đồ chỉ đường đến MUFA Restaurant" className="map-image" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
