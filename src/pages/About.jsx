import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ShopPhoto from "../assets/shopgirl.png";

const About = () => {
    return (
        <div className="body bg-gray-100 font-poppins">
            <Navbar />
            <div className="font-poppins text-gray-800">

                {/* Our Story Section */}
                <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
                        <p className="mb-4">
                        Launced in 2025, Mekuria is Ethiopia’s premier online shopping makterplace with an active presense in Addis Ababa. Supported by wide range of tailored marketing, data and service solutions, Mekuria has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. 
                        </p>
                        <p>
                           Mekuria has more than 1 Million products to offer, growing at a very fast. Mekuria offers a diverse assotment in categories ranging  from consumer.
                        </p>
                    </div>
                    <div>
                        <img
                            src={ShopPhoto}
                            alt="Our Story"
                            className="w-full rounded-lg shadow-md object-cover"
                        />
                    </div>
                </div>

                {/* Stats Section */}
                <div className="bg-gray-100 py-12">
                    <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {[
                            { number: '10.5k', label: 'Sellers active on site' },
                            { number: '33k', label: 'Monthly Product Sales'},
                            { number: '45.5k', label: 'Customer active on site' },
                            { number: '25k', label: 'Annual gross sales' },
                        ].map((stat, idx) => (
                            <div
                                key={idx}
                                className={`
    bg-white p-6 rounded shadow-md transform transition duration-300 
    hover:scale-105 hover:shadow-lg cursor-pointer 
    ${stat.highlight ? 'border-2 border-black' : ''}
  `}
                            >

                                <div className="text-2xl font-bold">{stat.number}</div>
                                <div className="text-sm mt-2">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Team Section */}
                <div className="max-w-6xl mx-auto px-4 py-16 text-center">
                    <h3 className="text-2xl font-semibold mb-10">Meet Our Team</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            { name: 'Tom Cruise', position: 'Founder & Chairman', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
                            { name: 'Emma Watson', position: 'Managing Director', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
                            { name: 'Will Smith', position: 'Product Designer', img: 'https://randomuser.me/api/portraits/men/45.jpg' },
                        ].map((member, idx) => (
                            <div key={idx} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
                                <img src={member.img} alt={member.name} className="w-32 h-32 mx-auto rounded-full object-cover mb-4" />
                                <h4 className="text-lg font-bold">{member.name}</h4>
                                <p className="text-sm text-gray-500">{member.position}</p>
                                <div className="flex justify-center gap-4 mt-3 text-gray-500 text-lg">
                                    <i className="fab fa-facebook"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-linkedin"></i>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features Section */}
                <div className="bg-gray-50 py-12">
                    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                        {[
                            { icon: '🚚', title: 'FREE AND FAST DELIVERY', desc: 'Free delivery for all orders over $140' },
                            { icon: '💬', title: 'CUSTOMER SERVICE', desc: 'Friendly 24/7 customer support' },
                            { icon: '💰', title: 'MONEY BACK GUARANTEE', desc: 'We return money within 30 days' },
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-white p-6 rounded shadow-sm">
                                <div className="text-4xl mb-3">{feature.icon}</div>
                                <h5 className="font-semibold text-md">{feature.title}</h5>
                                <p className="text-sm text-gray-600 mt-2">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default About;
