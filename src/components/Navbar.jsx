import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi"; // Import icons
import { useState } from "react"; // Import useState for mobile menu toggle
import CartIcon from "../assets/cart.png"; // Import cart icon

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <>
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 bg-white">
        {/* Logo */}
        <h1 className="logo text-xl sm:text-2xl md:text-3xl font-bold">Mekuria</h1>

        {/* Mobile Menu Toggle (Hamburger Icon) */}
        <div className="md:hidden">
          <FiMenu
            className="text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        {/* Navigation Links (Hidden on Mobile, Visible on Medium Screens and Up) */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 text-gray-700 text-sm md:text-base">
          <li className="cursor-pointer hover:text-black">Contact</li>
          <li className="cursor-pointer hover:text-black">About</li>
          <li className="cursor-pointer hover:text-black">Women</li>
          <li className="cursor-pointer hover:text-black">Kids</li>
          <li className="cursor-pointer hover:text-black">Men</li>
        </ul>

        {/* Search Bar & Cart Icon */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 px-4 py-2 rounded-md text-sm w-40 sm:w-48 md:w-60 focus:outline-none"
            />
            <FiSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>

          {/* Cart Icon */}
          <img
            src={CartIcon}
            alt="Cart"
            className="w-6 h-6 cursor-pointer hover:opacity-80"
          />
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 p-4 text-gray-700">
            <li className="cursor-pointer hover:text-black">Contact</li>
            <li className="cursor-pointer hover:text-black">About</li>
            <li className="cursor-pointer hover:text-black">Women</li>
            <li className="cursor-pointer hover:text-black">Kids</li>
            <li className="cursor-pointer hover:text-black">Men</li>
          </ul>

          {/* Search Bar & Cart Icon for Mobile */}
          <div className="flex items-center justify-between p-4 border-t border-gray-200">
            {/* Search Input */}
            <div className="relative flex-1 mr-4">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-gray-100 px-4 py-2 rounded-md text-sm w-full focus:outline-none"
              />
              <FiSearch className="absolute right-3 top-2.5 text-gray-500" />
            </div>

            {/* Cart Icon */}
            <img
              src={CartIcon}
              alt="Cart"
              className="w-6 h-6 cursor-pointer hover:opacity-80"
            />
          </div>
        </div>
      )}

      {/* Divider */}
      <hr className="border-t border-gray-200 mt-0 my-7" />
    </>
  );
};

export default Navbar;