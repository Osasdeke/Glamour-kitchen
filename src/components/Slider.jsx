
import React, { useState, useEffect } from 'react';

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment current slide index
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Change slide every 3 seconds

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentSlide ? 'slide active' : 'slide'}
        >
          <img src={slide.image} alt={slide.alt} />
        </div>
      ))}
    </div>
  );
};

export default Slider;
