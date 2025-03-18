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
    ],
    Women: [
      { id: 5, name: "The north coat", price: "500 Birr", img: womenImage },
      { id: 6, name: "The north coat", price: "500 Birr", img: womenImage },
      { id: 7, name: "The north coat", price: "500 Birr", img: womenImage },
      { id: 8, name: "The north coat", price: "500 Birr", img: womenImage },
    ],
    Men: [
      { id: 9, name: "The north coat", price: "500 Birr", img: mensImage },
      { id: 10, name: "The north coat", price: "500 Birr", img: mensImage },
      { id: 11, name: "The north coat", price: "500 Birr", img: mensImage },
      { id: 12, name: "The north coat", price: "500 Birr", img: mensImage },
    ],
  };

  // State to manage the current category
  const [currentCategory, setCurrentCategory] = useState('Kids');

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
  };

  return (
    <div className="px-30 py-10 bg-[#F5F5F5]">
      {/* Bigger and bold "Choose your Category" text */}
      <h3 className="text-[35px] font-bold mb-6 text-center">Choose your Category</h3>

      {/* Row for category selection and arrows */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-4">
          {Object.keys(categoryGroups).map((category) => (
            <button
              key={category}
              onClick={() => setCurrentCategory(category)}
              className={`px-6 py-2 text-lg font-semibold rounded-full transition-all duration-300 ${
                currentCategory === category
                  ? 'bg-black text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Arrows for navigation with orange accent */}
        <div className="flex space-x-4">
          <button
            onClick={() => handleCategoryChange('prev')}
            className="text-2xl font-bold backdrop-blur-sm bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-300 transition-all duration-300"
          >
            &larr;
          </button>
          <button
            onClick={() => handleCategoryChange('next')}
            className="text-2xl font-bold backdrop-blur-sm bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-300 transition-all duration-300"
          >
            &rarr;
          </button>
        </div>
      </div>

      {/* Circular images */}
      <div className="flex justify-evenly w-full">
        {categoryGroups[currentCategory].map((item) => (
          <div key={item.id} className="text-center">
            <img
              src={item.img}
              alt={item.name}
              className="rounded-full w-56 h-56 mx-auto object-cover shadow-lg"
            />
            <p className="mt-2 text-lg font-semibold">{item.name}</p>
            <p className="text-sm text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;