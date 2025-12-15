import React from "react";
import { useParams, Link } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";

export default function ProductDetails() {
  const { id } = useParams();

  // ✅ Get helper from Context
  const { getProductById } = useProductContext();

  // Product fetch from Context (ID based)
  const product = getProductById(id);

  // ------------------ INVALID PRODUCT (Error Handling) ------------------
  if (!product) {
    return (
      <div className="container fade-animation pt-5">
        <h2 className="text-custom-text mb-3">
          Product Not Found
        </h2>

        <p className="text-custom-muted mb-5">
          The product you are trying to view does not exist.
        </p>

        <Link to="/products" className="btn btn-primary">
          ← Back to Products
        </Link>
      </div>
    );
  }

  // ------------------ VALID PRODUCT DETAILS ------------------
  return (
    <div className="container fade-animation pt-5">
      {/* Back Button */}
      <Link
        to="/products"
        className="btn btn-outline mb-5"
      >
        ← Back to Products
      </Link>

      <div className="flex gap-6 flex-wrap">
        {/* ------------------ PRODUCT IMAGE ------------------ */}
        <div className="flex-[1_1_320px] bg-custom-card p-4 rounded-custom shadow-custom">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-80 object-cover rounded-xl"
          />
        </div>

        {/* ------------------ PRODUCT INFO ------------------ */}
        <div className="flex-[1_1_320px]">
          <h1 className="mb-2.5">{product.title}</h1>

          <h2 className="text-custom-accent mb-4 font-bold">
            ${product.price}
          </h2>

          <p className="text-custom-muted mb-5 leading-normal">
            {product.description}
          </p>

          {/* Specifications */}
          <h3 className="mb-2.5">Specifications</h3>
          <ul className="text-custom-text leading-[1.8]">
            {product.specs.map((spec, index) => (
              <li key={index}>• {spec}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
