import React, { useState, useEffect } from 'react';
import Shirt from "../assets/shirt.png";
import Shirt2 from "../assets/shirt2.png"; // Add more images
import Shirt3 from "../assets/shirt3.png";

const Banner = () => {
  // Array of images to cycle through
  const images = [Shirt, Shirt2, Shirt3];

  // State to manage the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to change the image automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="w-full bg-black text-white py-4 sm:py-6">
      <div className="relative w-full flex items-center justify-center" style={{ height: 'auto', minHeight: '300px' }}>
        <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Style Your <br />
              Wardrobe <br />
              with the <br />
              Latest Trends
            </h2>
            <button className="mt-4 px-5 py-2 sm:px-6 sm:py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition duration-300">
              Shop Now →
            </button>
          </div>

          {/* Image Container */}
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img
              src={images[currentImageIndex]}
              alt="Fashion"
              className="h-60 sm:h-64 md:h-80 lg:h-[400px] w-auto rounded-lg transition-opacity duration-500"
            />
          </div>
        </div>

        {/* Dots at the Bottom */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-orange-500' : 'bg-gray-500'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;