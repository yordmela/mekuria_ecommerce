// filepath: src/components/Navbar.jsx
import { FiSearch, FiShoppingCart, FiMenu } from "react-icons/fi";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import CartIcon from "../assets/cart.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/contact", label: "Contact" },
    { to: "/about", label: "About" },
    { to: "/women", label: "Women" },
    { to: "/kids", label: "Kids" },
    { to: "/men", label: "Men" },
  ];

  return (
    <>
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 py-4 bg-white">
        <h1 className="logo text-xl sm:text-2xl md:text-3xl font-bold">Mekuria</h1>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <FiMenu
            className="text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 text-gray-700 text-sm md:text-base">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `pb-1 border-b-2 ${
                    isActive
                      ? "text-black border-black"
                      : "border-transparent hover:text-black hover:border-black"
                  } transition duration-200`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Search & Cart */}
        <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="bg-gray-100 px-4 py-2 rounded-md text-sm w-40 sm:w-48 md:w-60 focus:outline-none"
            />
            <FiSearch className="absolute right-3 top-2.5 text-gray-500" />
          </div>
          <img
            src={CartIcon}
            alt="Cart"
            className="w-6 h-6 cursor-pointer hover:opacity-80"
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 p-4 text-gray-700">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setIsMenuOpen(false)} // Close menu on click
                  className={({ isActive }) =>
                    `pb-1 border-b-2 ${
                      isActive
                        ? "text-black border-black"
                        : "border-transparent hover:text-black hover:border-black"
                    } transition duration-200`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Search & Cart */}
          <div className="flex items-center justify-between p-4 border-t border-gray-200">
            <div className="relative flex-1 mr-4">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-gray-100 px-4 py-2 rounded-md text-sm w-full focus:outline-none"
              />
              <FiSearch className="absolute right-3 top-2.5 text-gray-500" />
            </div>
            <img
              src={CartIcon}
              alt="Cart"
              className="w-6 h-6 cursor-pointer hover:opacity-80"
            />
          </div>
        </div>
      )}

      {/* Optional horizontal line under navbar */}
      <hr className="border-t border-gray-200 mt-0 my-7" />
    </>
  );
};

export default Navbar;
