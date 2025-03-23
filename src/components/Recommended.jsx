import Shirt from "../assets/shirt.png";
import kidsImage from '../assets/kids.jpg';
import kidsImage2 from '../assets/kids 2.jpg';
import mensImage from '../assets/mens.jpg';
import womenImage from '../assets/women.jpg';

const Recommended = () => {
  // Array of image paths
  const images = [
    Shirt,
    kidsImage,
    kidsImage2,
    mensImage,
    womenImage,
    // Add more images as needed
  ];

  // Array of product names and prices (optional)
  const products = [
    { name: "The North Coat", price: "500 Birr" },
    { name: "Kids Outfit", price: "300 Birr" },
    { name: "Kids Casual", price: "250 Birr" },
    { name: "Men's Formal", price: "700 Birr" },
    { name: "Women's Dress", price: "600 Birr" },
    // Add more products as needed
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-30 py-6 sm:py-10">
      {/* Section Title */}
      <h3 className="text-2xl sm:text-3xl lg:text-[35px] font-bold text-center mb-6 sm:mb-8">
        Highly Recommended
      </h3>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 py-4">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="bg-white p-3 sm:p-4 rounded-lg shadow-md w-full max-w-xs mx-auto"
          >
            {/* Product Image Container */}
            <div className="w-full h-40 sm:h-48 md:h-60 bg-gray-100 flex items-center justify-center rounded-md overflow-hidden">
              {/* Product Image */}
              <img
                src={images[i % images.length]} // Cycle through the images array
                alt="Product"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Name and Price */}
            <div className="mt-3 sm:mt-4 flex items-center justify-between">
              <div className="text-left">
                <p className="text-base sm:text-lg font-semibold">
                  {products[i % products.length].name}
                </p>
                <p className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-2">
                  {products[i % products.length].price}
                </p>
              </div>
              {/* Buy Button */}
              <button className="px-3 sm:px-4 py-1 sm:py-2 bg-black text-white rounded-md text-sm sm:text-base hover:bg-gray-800 transition-all duration-300">
                BUY
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;