import React from "react";
import ProductCard from "../components/ProductCard";
import { useProductContext } from "../context/ProductContext";

export default function Products() {
  // Context values
  const {
    filteredProducts,
    searchText,
    setSearchText,
  } = useProductContext();

  return (
    <div className="container pt-5">
      <h1 className="mb-5">Products</h1>

      {/* ---------- SEARCH BAR SECTION ---------- */}
      <div className="mb-6">
        <label
          htmlFor="search"
          className="block mb-2 text-base text-custom-text font-semibold"
        >
          Search Products
        </label>

        <input
          id="search"
          type="text"
          placeholder="🔍 Search products by name..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full max-w-md py-3.5 px-5 rounded-2xl border-2 border-custom-accent/20 outline-none bg-custom-card/50 text-custom-text text-base transition-all duration-300 ease-out focus:border-custom-accent focus:shadow-glow backdrop-blur-sm"
        />
      </div>

      {/* ---------- PRODUCT GRID ---------- */}
      <div className="grid grid-columns-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              productId={product.id}
            />
          ))
        ) : (
          <p className="text-custom-muted">No products found.</p>
        )}
      </div>
    </div>
  );
}
