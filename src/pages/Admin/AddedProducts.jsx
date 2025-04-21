import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Cloth from "../../assets/women.jpg";

const AddedProducts = () => {
  const navigate = useNavigate();

  const product = {
    name: "Casual Men Outfit",
    price: "2400.99",
    description:
      "Step into timeless style with this sleek and versatile outfit from our Men’s Collection — designed for confidence, comfort, and everyday elegance.",
    image: Cloth,
  };

  return (
    <div className="bg-gray-100 min-h-screen font-poppins">
      <Navbar />
      <div style={{ padding: "24px", maxWidth: "1140px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>
          List of Added Products
        </h2>
        <div
          style={{
            width: "1140px",
            height: "490px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            padding: "16px",
            backgroundColor: "#ffffff",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", gap: "24px", height: "100%" }}>
            <img
              src={Cloth}
              alt="Casual Men Outfit"
              style={{ width: "400px", height: "100%", objectFit: "cover", borderRadius: "8px" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flex: 1,
              }}
            >
              <div>
                <h3 style={{ fontSize: "24px", fontWeight: "bold" }}>{product.name}</h3>
                <p style={{ color: "#4B5563", marginTop: "12px", fontSize: "16px", lineHeight: "1.6" }}>
                  {product.description}
                </p>
                <p style={{ marginTop: "12px", fontWeight: "bold", fontSize: "18px" }}>
                  Price: {product.price} Birr
                </p>
              </div>
              <div style={{ marginTop: "16px", display: "flex", gap: "12px" }}>
                <button
                  style={{
                    padding: "10px 20px",
                    border: "1px solid #D1D5DB",
                    borderRadius: "4px",
                    backgroundColor: "white",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                  onClick={() =>
                    navigate("/add-product-form", {
                      state: product,
                    })
                  }
                >
                  Edit
                </button>
                <button
                  style={{
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: "4px",
                    backgroundColor: "#EF4444",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddedProducts;
