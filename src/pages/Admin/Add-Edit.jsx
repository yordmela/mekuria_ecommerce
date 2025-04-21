import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function AddProductForm() {
  const location = useLocation();
  const product = location.state || {};

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setProductImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ productName, productPrice, productDescription, productImage });
  };

  return (
    <div className="body bg-gray-100 font-poppins">
      <Navbar />
      <div className="flex items-start justify-center bg-white py-10">
        <div className="p-10">
          <h1 className="text-2xl font-bold mb-6 text-center">Add Product</h1>
          <form onSubmit={handleSubmit} className="flex gap-8">
            <div>
              <label
                htmlFor="image-upload"
                className="w-[567px] h-[500px] border border-dashed border-gray-400 flex items-center justify-center cursor-pointer bg-gray-100"
              >
                {productImage || product.image ? (
                  <img
                    src={productImage || product.image}
                    alt="Preview"
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <span className="text-gray-500 text-sm">Click or drag image to this area to upload</span>
                )}
              </label>
              <input
                id="image-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </div>

            <div className="flex flex-col gap-4 w-[500px] h-[500px]">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder={product.name || "Product Name"}
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="border border-gray-300 p-2 rounded w-1/2"
                />
                <input
                  type="text"
                  placeholder={product.price || "Product Price"}
                  value={productPrice}
                  onChange={(e) => setProductPrice(e.target.value)}
                  className="border border-gray-300 p-2 rounded w-1/2"
                />
              </div>
              <textarea
                placeholder={product.description || "Product Description"}
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className="border border-gray-300 p-2 rounded flex-grow"
              ></textarea>
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
              >
                {product.name ? "Update Product" : "Create Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
