import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Recommended from "../components/Recommended";

const Detail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!product) {
        return (
            <div className="text-center mt-20">
                <p className="text-lg">No product found.</p>
                <button
                    onClick={() => navigate("/")}
                    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white font-poppins relative">
            <Navbar />

            <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Image + Back Button */}
                <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden rounded shadow-md">
                    {/* Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-4 left-4 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-md transition-all"
                        title="Go Back"
                    >
                        {/* Heroicons Arrow Left SVG */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Text Details */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                    <p className="text-2xl text-gray-700 font-semibold mb-6">{product.price}</p>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        This product is crafted for both comfort and performance. Its elegant design and durable
                        materials make it a perfect choice for everyday use or special occasions.
                    </p>

                    <button className="px-8 py-3 bg-black text-white rounded-full text-lg font-semibold hover:bg-gray-800 transition-all shadow-md hover:shadow-lg">
                        BUY NOW
                    </button>
                </div>
            </div>

            <Recommended title="Other Trending Fashions"/>
            <Footer />
        </div>
    );
};

export default Detail;
