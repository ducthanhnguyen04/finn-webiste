import React, { useState } from "react";
import "./home.css";
import HeroSlider from "../../components/heroSlider/heroSlider";
import vct1 from "../../assets/vct/VCT 1.png";
import vct2 from "../../assets/vct/VCT 2.png";
import vct3 from "../../assets/vct/VCT 3.png";
import vct4 from "../../assets/vct/VCT 4.png";
import vct5 from "../../assets/vct/VCT 5.png";
import menu1 from "../../assets/menu/1.png";
import menu2 from "../../assets/menu/2.png";
import menu3 from "../../assets/menu/3.png";
import menu4 from "../../assets/menu/4.png";
import menu5 from "../../assets/menu/5.png";
import menu6 from "../../assets/menu/6.png";
import menu7 from "../../assets/menu/7.png";
import menu8 from "../../assets/menu/8.png";
import menu9 from "../../assets/menu/9.png";
import menu10 from "../../assets/menu/10.png";
import menu11 from "../../assets/menu/11.png";
import menu12 from "../../assets/menu/12.png";
import menu13 from "../../assets/menu/13.png";
import menu14 from "../../assets/menu/14.png";
import menu15 from "../../assets/menu/15.png";
import menu16 from "../../assets/menu/16.png";
import menu17 from "../../assets/menu/17.png";
import menu18 from "../../assets/menu/18.png";
import menu19 from "../../assets/menu/19.png";
import bc1 from "../../assets/bc/1.png";
import bc2 from "../../assets/bc/2.png";
import bc3 from "../../assets/bc/3.png";
import bc4 from "../../assets/bc/4.png";
import bc5 from "../../assets/bc/5.png";
import bc6 from "../../assets/bc/6.png";
import hd1 from "../../assets/hd/1.png";
import hd2 from "../../assets/hd/2.png";
import hd3 from "../../assets/hd/3.png";
import hd4 from "../../assets/hd/4.png";
import hd5 from "../../assets/hd/5.png";
import hd6 from "../../assets/hd/6.png";
import hd7 from "../../assets/hd/7.png";
import hd8 from "../../assets/hd/8.png";
import hd9 from "../../assets/hd/9.png";
import hd10 from "../../assets/hd/10.png";
import art1 from "../../assets/art/9.png";
import art2 from "../../assets/art/10.png";
import art3 from "../../assets/art/11.png";
import art4 from "../../assets/art/12.png";


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
    { id: 1, title: "Về chúng tôi", images: [vct1, vct2, vct3, vct4, vct5] },
    { id: 2, title: "Thực đơn", images: [menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9, menu10, menu11, menu12, menu13, menu14, menu15, menu16, menu17, menu18, menu19] },
    { id: 3, title: "Báo chí", images: [bc1, bc2, bc3, bc4, bc5, bc6] },
    { id: 4, title: "Hoạt động", images: [hd1, hd2, hd3, hd4, hd5, hd6, hd7, hd8, hd9, hd10] },
    { id: 5, title: "Nghệ thuật", images: [art1, art2, art3, art4] },
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