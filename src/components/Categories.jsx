import React, { useState } from 'react';
import kidsImage from '../assets/kids.jpg';
import kidsImage2 from '../assets/kids 2.jpg';
import mensImage from '../assets/mens.jpg';
import womenImage from '../assets/women.jpg';

const Categories = () => {
  // Group categories by type
  const categoryGroups = {
    Kids: [
      { id: 1, name: "The north coat", price: "500 Birr", img: kidsImage },
      { id: 2, name: "The north coat", price: "500 Birr", img: kidsImage2 },
      { id: 3, name: "The north coat", price: "500 Birr", img: kidsImage },
      { id: 4, name: "The north coat", price: "500 Birr", img: kidsImage2 },
      { id: 5, name: "The north coat", price: "500 Birr", img: kidsImage },
      { id: 6, name: "The north coat", price: "500 Birr", img: kidsImage2 },
    ],
    Women: [
      { id: 7, name: "The north coat", price: "500 Birr", img: womenImage },
      { id: 8, name: "The north coat", price: "500 Birr", img: womenImage },
      { id: 9, name: "The north coat", price: "500 Birr", img: womenImage },
      { id: 10, name: "The north coat", price: "500 Birr", img: womenImage },
      { id: 11, name: "The north coat", price: "500 Birr", img: womenImage },
      { id: 12, name: "The north coat", price: "500 Birr", img: womenImage },
    ],
    Men: [
      { id: 13, name: "The north coat", price: "500 Birr", img: mensImage },
      { id: 14, name: "The north coat", price: "500 Birr", img: mensImage },
      { id: 15, name: "The north coat", price: "500 Birr", img: mensImage },
      { id: 16, name: "The north coat", price: "500 Birr", img: mensImage },
      { id: 17, name: "The north coat", price: "500 Birr", img: mensImage },
      { id: 18, name: "The north coat", price: "500 Birr", img: mensImage },
    ],
  };

  // State to manage the current category
  const [currentCategory, setCurrentCategory] = useState('Kids');

  // State to manage the slide position
  const [slidePosition, setSlidePosition] = useState(0);

  // Function to handle category change
  const handleCategoryChange = (direction) => {
    const categories = Object.keys(categoryGroups);
    const currentIndex = categories.indexOf(currentCategory);
    let nextIndex;

    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % categories.length;
    } else {
      nextIndex = (currentIndex - 1 + categories.length) % categories.length;
    }

    setCurrentCategory(categories[nextIndex]);
    setSlidePosition(0); // Reset slide position when category changes
  };

  // Function to handle sliding
  const handleSlide = (direction) => {
    const totalItems = categoryGroups[currentCategory].length;
    const itemsPerSlide = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
    const maxSlides = Math.ceil(totalItems / itemsPerSlide) - 1;

    if (direction === 'next') {
      setSlidePosition((prev) => (prev + 1) % maxSlides);
    } else {
      setSlidePosition((prev) => (prev - 1 + maxSlides) % maxSlides);
    }
  };

  // Calculate visible items based on slide position
  const itemsPerSlide = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
  const startIndex = slidePosition * itemsPerSlide;
  const endIndex = startIndex + itemsPerSlide;
  const visibleItems = categoryGroups[currentCategory].slice(startIndex, endIndex);

  // Calculate the maximum number of slides
  const totalItems = categoryGroups[currentCategory].length;
  const maxSlides = Math.ceil(totalItems / itemsPerSlide) - 1;

  return (
    <div className="px-4 sm:px-6 md:px-8 py-10 bg-[#F5F5F5]">
      {/* Bigger and bold "Choose your Category" text */}
      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 py-6 text-center">Choose your Category</h3>

      {/* Row for category selection and arrows */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 space-y-4 sm:space-y-0">
        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4">
          {Object.keys(categoryGroups).map((category) => (
            <button
              key={category}
              onClick={() => setCurrentCategory(category)}
              className={`px-4 py-2 text-sm sm:text-lg font-semibold rounded-full transition-all duration-300 ${
                currentCategory === category
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Arrows for navigation with orange accent (Hidden on Mobile) */}
        <div className="hidden sm:flex space-x-4">
          <button
            onClick={() => handleCategoryChange('prev')}
            className="text-2xl font-bold backdrop-blur-sm bg-gray-200 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg hover:bg-gray-300 transition-all duration-300"
          >
            &larr;
          </button>
          <button
            onClick={() => handleCategoryChange('next')}
            className="text-2xl font-bold backdrop-blur-sm bg-gray-200 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg hover:bg-gray-300 transition-all duration-300"
          >
            &rarr;
          </button>
        </div>
      </div>

      {/* Sliding Carousel */}
      <div className="relative overflow-hidden">
        {/* Sliding Container */}
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${slidePosition * 100}%)` }}
        >
          {categoryGroups[currentCategory].map((item) => (
            <div
              key={item.id}
              className="min-w-full sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%] text-center p-4"
            >
              <img
                src={item.img}
                alt={item.name}
                className="rounded-full w-40 h-40 sm:w-56 sm:h-56 mx-auto object-cover shadow-lg"
              />
              <p className="mt-2 text-lg font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sliding Arrows and Dots */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-6 space-y-4 sm:space-y-0">
        <div className="flex space-x-4">
          <button
            onClick={() => handleSlide('prev')}
            disabled={slidePosition === 0}
            className={`text-2xl font-bold backdrop-blur-sm bg-gray-200 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg hover:bg-gray-300 transition-all duration-300 ${
              slidePosition === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            &lt;
          </button>
          <button
            onClick={() => handleSlide('next')}
            disabled={slidePosition === maxSlides}
            className={`text-2xl font-bold backdrop-blur-sm bg-gray-200 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg hover:bg-gray-300 transition-all duration-300 ${
              slidePosition === maxSlides ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            &gt;
          </button>
        </div>

        {/* Dots for Navigation */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: maxSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setSlidePosition(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === slidePosition ? 'bg-orange-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;