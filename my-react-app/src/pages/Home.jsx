import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useProductContext } from "../context/ProductContext";

export default function Home() {
  // Products from Context
  const { products } = useProductContext();

  // First 4 featured products
  const featured = products.slice(0, 4);

  return (
    <div>

      {/* ---------- HERO SECTION ---------- */}
      <section
        className="hero hero-animate relative overflow-hidden py-20 px-8 rounded-3xl text-white mb-12 shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
          boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in">
            Modern Product Showcase ✨
          </h1>

          <p className="max-w-2xl leading-relaxed text-xl font-medium text-white/95 mb-8 animate-slide-up">
            Explore high-quality products with a clean, fast, and modern interface.
            Built using Vite + React + React Router with stunning animations.
          </p>

          <Link
            to="/products"
            className="btn btn-primary inline-flex items-center gap-2 text-lg"
          >
            Browse Products <span className="text-xl">→</span>
          </Link>
        </div>
      </section>

      {/* ---------- FEATURED PRODUCTS ---------- */}
      <section className="section">
        <h2 className="mb-3">Featured Products</h2>
        <p className="text-custom-muted mb-6">
          Top picks specially selected for you
        </p>

        <div className="grid grid-columns-3">
          {featured.map((product) => (
            <ProductCard
              key={product.id}
              productId={product.id}
            />
          ))}
        </div>

        <div className="mt-5">
          <Link
            to="/products"
            className="btn btn-outline py-2.5 px-4 rounded-[10px] font-semibold"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* ---------- ABOUT PREVIEW SECTION ---------- */}
      <section className="section mt-[50px]">
        <h2 className="mb-2.5">Who We Are</h2>
        <p className="max-w-[720px] text-custom-muted leading-[1.7]">
          We are a passionate team creating high-performance user interfaces and
          modern web applications using React & Vite. Our mission is to build
          beautiful and responsive UI experiences curated for your needs.
        </p>

        <Link
          to="/about"
          className="btn btn-primary mt-4 py-2.5 px-[18px] rounded-[10px]"
        >
          Learn More →
        </Link>
      </section>

    </div>
  );
}
