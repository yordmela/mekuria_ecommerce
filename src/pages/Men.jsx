import Navbar from "../components/Navbar";
import Recommended from "../components/Recommended";
import Footer from "../components/Footer";

const Men = () => {
  return (
    <div className="body bg-gray-100 font-poppins">
      <Navbar />
      <Recommended title="Men" />
      <Footer />
    </div>
  );
};

export default Men;
