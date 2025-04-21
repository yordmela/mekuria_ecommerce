import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Form submitted:", formData);
        alert("Thank you for your message! We'll contact you soon.");
    };

    return (
        <div className="body bg-gray-100  font-poppins">
            <Navbar />
            
            <div className="max-w-4xl mx-auto p-6 py-10">
                <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
                
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                    {/* Call To Us Section */}
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-xl font-semibold mb-4">Call To Us</h2>
                        <p className="mb-4">We are available 7 days a week.</p>
                        <p className="font-medium">Phone: +88018112222</p>
                    </div>
                    
                    {/* Write To Us Section */}
                    <div className="bg-white p-6 rounded shadow">
                        <h2 className="text-xl font-semibold mb-4">Write To US</h2>
                        <p className="mb-4">Fill out our form and we will contact you within 24 hours.</p>
                        <p className="font-medium">Emails: customer@mekuria.com</p>
                        <p className="font-medium">Emails: support@mekuria.com</p>
                    </div>
                </div>
                
                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div>
                            <label htmlFor="name" className="block font-medium mb-2">Your Name *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-medium mb-2">Your Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block font-medium mb-2">Your Phone *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="message" className="block font-medium mb-2">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className="w-full p-2 border rounded"
                        ></textarea>
                    </div>
                    
                    <button
                        type="submit"
                        className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            
            <Footer />
        </div>
    );
};

export default ContactUs;