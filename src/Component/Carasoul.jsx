import React, { useState, useEffect } from "react";
import machine1 from "../Photos/machine1.jpg";
import machine2 from "../Photos/machine2.jpg";
import machine3 from "../Photos/machin3.jpg";
import machine4 from "../Photos/machine4.jpg";

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample images or content for the carousel
  const slides = [machine1, machine2, machine3, machine4];

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 3000 ms = 3 seconds
    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-64 object-cover sm:h-72 md:h-96 lg:h-[500px] xl:h-[600px]" // Adjust height for large screens
              />
            </div>
          ))}
        </div>
      </div>

      {/* Left and Right Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full opacity-50 hover:opacity-100 transition"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full opacity-50 hover:opacity-100 transition"
      >
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
