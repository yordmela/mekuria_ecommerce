const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 sm:py-12 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Container with Evenly Spaced Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 justify-between mb-8">
          {/* Mekuria - Centered with Larger Font */}
          <div className="flex items-center justify-center sm:justify-start">
            <h4 className="text-xl sm:text-2xl font-bold">Mekuria</h4> {/* Responsive font size */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Woman
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Man
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: Yohannes@gmail.com</li>
              <li className="text-gray-400">Phone Number: +251 70 135 9113</li>
              <li className="text-gray-400">Address: Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>

        {/* Copyright - Small and at the Bottom */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-xs sm:text-sm text-gray-400">
            © Copyright filmed 2022. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;