import Navbar from "../components/Navbar";
import Recommended from "../components/Recommended";
import Footer from "../components/Footer";

const Kids = () => {
  return (
    <div className="body bg-gray-100 font-poppins">
      <Navbar />
      <Recommended title="Kids"/>
      <Footer />
    </div>
  );
};

export default Kids;
