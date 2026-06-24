import React, { useState } from "react";
import "./home.css";
import HeroSlider from "../../components/heroSlider/heroSlider";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";

// Custom Slider Component for each image spot
const ImageSlider = ({ images, title }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="image-slider-container">
            <div 
                className="image-slider-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, index) => (
                    <div key={index} className="image-slide">
                        <img 
                            src={img} 
                            alt={`${title} Slide ${index + 1}`} 
                            className="home-column-image"
                        />
                    </div>
                ))}
            </div>

            {images.length > 1 && (
                <>
                    <button className="slider-arrow arrow-left" onClick={handlePrev} aria-label="Previous Slide">
                        &#10094;
                    </button>
                    <button className="slider-arrow arrow-right" onClick={handleNext} aria-label="Next Slide">
                        &#10095;
                    </button>
                    <div className="slider-dots">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`slider-dot ${index === currentIndex ? "active" : ""}`}
                                onClick={() => handleDotClick(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

// Define 6 sliding sections, using duplicated image lists for placeholders
const slidersData = [
  { id: 1, title: "MUFA Space 1", images: [img1, img1, img1] },
  { id: 2, title: "MUFA Space 2", images: [img2, img2, img2] },
  { id: 3, title: "MUFA Space 3", images: [img3, img3, img3] },
  { id: 4, title: "MUFA Space 4", images: [img4, img4, img4] },
  { id: 5, title: "MUFA Space 5", images: [img5, img5, img5] },
  { id: 6, title: "MUFA Space 6", images: [img6, img6, img6] }
];

const Home = () => {
    return (
        <div className="home_wrapper">
            <HeroSlider />
            
            <div className="home-image-column">
                {slidersData.map((slider) => (
                    <ImageSlider 
                        key={slider.id} 
                        images={slider.images} 
                        title={slider.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home;    