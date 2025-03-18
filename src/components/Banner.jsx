import Shirt from "../assets/shirt.png";

const Banner = () => {
  return (
    <div className="px-30 py-10">
      <div className="relative w-full bg-black text-white flex items-center justify-center" style={{ height: '428px' }}>
        <div className="container mx-auto flex items-center justify-between px-10" style={{ maxWidth: '1108px' }}>
          <div className="text-left max-w-lg">
            <h2 className="text-[48px] font-bold mb-4 leading-[1.1]">
              Style Your <br />
              Wardrobe <br />
              with the <br />
              Latest Trends
            </h2>
            <button className="mt-5 px-6 py-3 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition duration-300">
              Shop Now →
            </button>
          </div>
          <div className="flex-shrink-0">
            <img
              src={Shirt}
              alt="Fashion"
              className="h-[515px] w-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;