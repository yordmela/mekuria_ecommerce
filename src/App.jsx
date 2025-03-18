import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Recommended from "./components/Recommended";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="body bg-gray-100 font-poppins">
      <Navbar />
      <Banner />
      <Categories />
      <Recommended />
      <Footer />
    </div>
  );
};

export default App;
