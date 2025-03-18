import Shirt from "../assets/shirt.png";
import kidsImage from '../assets/kids.jpg';
import kidsImage2 from '../assets/kids 2.jpg';
import mensImage from '../assets/mens.jpg';
import womenImage from '../assets/women.jpg';

const Recommended = () => {
  return (
    <div className="px-30 py-10">
    <div className="px-4 py-10 bg-[#F5F5F5]">
      {/* Section Title */}
      <h3 className="text-[35px] font-bold text-center mb-8">Highly Recommended</h3>


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(20)].map((_, i) => ( // Display 20 items (5 rows of 4 items)
          <div
            key={i}
            className="bg-white p-4 rounded-lg shadow-md text-center"
          >
            {/* Product Image */}
            <img
              src={Shirt}
              alt="Product"
              className="w-full h-40 object-cover rounded-md"
            />

            {/* Product Name */}
            <p className="mt-4 text-lg font-semibold">The north coat</p>

            {/* Product Price */}
            <p className="text-gray-600 mt-2">500 Birr</p>

            {/* Buy Button */}
            <button className="mt-4 w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all duration-300">
              BUY
            </button>
          </div>
        ))}
      </div>
    </div>
</div>
  );
};

export default Recommended;