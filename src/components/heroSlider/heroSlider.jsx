import React, { useState, useEffect } from 'react';
import './heroSlider.css';
import Banner1 from "../../assets/banner1.jpg";
import Banner2 from "../../assets/banner2.jpg";
import Banner3 from "../../assets/banner3.jpg";
import Banner4 from "../../assets/banner4.jpg";
import Banner5 from "../../assets/banner5.jpg";
import Banner6 from "../../assets/banner6.jpg";

const slideImages = [
  Banner1,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6
];



const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slideImages.map((image, index) => (
          <div
            key={index}
            className="slide-image"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>

      <div className="hero-overlay-dark"></div>

      <div className="hero-content">

        <div className="top-right-text">
          <h1 className="brand-serif">MUFA</h1>
          <h2 className="brand-script">tamdao</h2>
        </div>

        <div className="bottom-center-action">
          <button className="btn-booking">Đặt bàn</button>
          <p className="sub-text">Nhà hàng farm-to-table nấm tươi đầu tiên tại Việt Nam.</p>
        </div>

      </div>
    </div>
  );
};

export default HeroSlider;