import { FiSearch, FiShoppingCart } from "react-icons/fi"; // Import icons
import CartIcon from "../assets/cart.png"; // Import cart icon
const Navbar = () => {
  return (
    <>
    <nav className="flex items-center justify-between px-30 py-4  bg-white">
      {/* Logo */}
      <h1 className="logo text-3xl font-bold">Mekuria</h1>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-10 text-gray-700 text-base">
        <li className="cursor-pointer hover:text-black">Contact</li>
        <li className="cursor-pointer hover:text-black">About</li>
        <li className="cursor-pointer hover:text-black">Women</li>
        <li className="cursor-pointer hover:text-black">Kids</li>
        <li className="cursor-pointer hover:text-black">Men</li>
      </ul>

      {/* Search Bar & Cart Icon */}
      <div className="flex items-center space-x-5">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-gray-100 px-4 py-2 rounded-md text-sm w-60 focus:outline-none"
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
    <hr className="border-t border-gray-200 mt-0 my-7" /> 
    </>
  );
};

export default Navbar;
