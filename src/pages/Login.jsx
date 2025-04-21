import Illustration from "../assets/illustration.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Login = () => {
    return (
        <div className="body bg-gray-100 font-poppins">
        <Navbar />
        <div className="h-[781px] flex items-center justify-center bg-white font-poppins">
        
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl shadow-xl rounded-lg overflow-hidden h-full">

                {/* Left Side - Image */}
                <div className="bg-[#e6f4f9] flex items-center justify-center p-6">
                    <img
                        src={Illustration}
                        alt="Shopping Phone"
                        className="w-full h-auto max-w-md object-contain"
                    />
                </div>

                {/* Right Side - Login Form */}
                <div className="p-10 bg-white flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-2">Log in to Mekuria</h2>
                    <p className="text-sm text-gray-500 mb-6">Enter your details below</p>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Email or Phone Number"
                            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-black"
                        />

                        <div className="flex items-center justify-between mt-6">
                            <button
                                type="submit"
                                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
                            >
                                Log In
                            </button>
                            <a href="#" className="text-sm text-gray-600 hover:underline">
                                Forget Password?
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <Footer />

        </div>
    );
};

export default Login;
