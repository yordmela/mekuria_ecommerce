import { useState } from 'react';
import Shirt from "../assets/shirt.png";
import kidsImage from '../assets/kids.jpg';
import kidsImage2 from '../assets/kids 2.jpg';
import mensImage from '../assets/mens.jpg';
import womenImage from '../assets/women.jpg';
import { useNavigate } from 'react-router-dom';




const Recommended = ({title}) => {
  const navigate = useNavigate();


  const products = [
    { name: "The North Coat", price: "500 Birr", image: Shirt },
    { name: "Kids Outfit", price: "300 Birr", image: kidsImage },
    { name: "Kids Casual", price: "250 Birr", image: kidsImage2 },
    { name: "Men's Formal", price: "700 Birr", image: mensImage },
    { name: "Women's Dress", price: "600 Birr", image: womenImage },
    { name: "Another Coat", price: "550 Birr", image: Shirt },
    { name: "New Kids Outfit", price: "320 Birr", image: kidsImage },
    { name: "Stylish Men", price: "720 Birr", image: mensImage },
    { name: "Elegant Woman", price: "650 Birr", image: womenImage },
    { name: "Cute Kids", price: "280 Birr", image: kidsImage2 },
    { name: "Trendy Jacket", price: "580 Birr", image: Shirt },
    { name: "Colorful Dress", price: "610 Birr", image: womenImage },
    { name: "Smart Men", price: "740 Birr", image: mensImage },
    { name: "Soft Kids", price: "270 Birr", image: kidsImage },
    { name: "Modern Coat", price: "530 Birr", image: Shirt },
    { name: "Cool Kids", price: "260 Birr", image: kidsImage2 },
    { name: "Gentleman Suit", price: "800 Birr", image: mensImage },
    { name: "Party Dress", price: "680 Birr", image: womenImage },
    { name: "Kids Combo", price: "300 Birr", image: kidsImage },
    { name: "Winter Coat", price: "560 Birr", image: Shirt },
  ];

  const goToDetailPage = (product) => {
    navigate("/detail", { state: { product } });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const totalPages = Math.ceil(products.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-30 py-6 sm:py-10">
      <h3 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-center mb-6 sm:mb-8">
        {title}
      </h3>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 py-4">
        {currentProducts.map((product, i) => (
          <div
            key={i}
            onClick={() => goToDetailPage(product)}
            className="bg-white p-3 sm:p-4 rounded-lg shadow-md w-full max-w-xs mx-auto"
          >
            <div className="w-full h-40 sm:h-48 md:h-60 bg-gray-100 flex items-center justify-center rounded-md overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 sm:mt-4 flex items-center justify-between">
              <div className="text-left">
                <p className="text-base sm:text-lg font-semibold">{product.name}</p>
                <p className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-2">
                  {product.price}
                </p>
              </div>
              <button className="px-3 sm:px-4 py-1 sm:py-2 bg-black text-white rounded-md text-sm sm:text-base hover:bg-gray-800 transition-all duration-300">
                BUY
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded-md ${currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white hover:bg-gray-100"
            }`}
        >
          Previous
        </button>
        <span className="px-4 py-2 font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded-md ${currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-white hover:bg-gray-100"
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Recommended;
