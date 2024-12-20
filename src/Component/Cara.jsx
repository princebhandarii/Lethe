import React, { useState } from "react";
import machine1 from "../Photos/machine1.jpg";
import machine2 from "../Photos/machine2.jpg";
import machine3 from "../Photos/machin3.jpg";
import machine4 from "../Photos/machine4.jpg";

function Cara() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images
  const images = [machine1, machine2, machine3, machine4];

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative max-w-full mx-auto">
      {/* Carousel */}
      <div className="flex justify-center items-center space-x-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item w-1/4 ${
              currentIndex === index ? "opacity-100" : "opacity-50"
            }`}
            style={{
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
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

      {/* Indicators */}
      <div className="flex w-full justify-center gap-2 py-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`btn btn-xs ${
              currentIndex === index ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Cara;
