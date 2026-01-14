"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const categories = ["All", "Men", "Women", "Kids", "Others"];

const ExplorePage = () => {
  const router = useRouter();

  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [cartCount, setCartCount] = useState<number>(0);

  // Fetch products from API
  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data); // show all initially
      })
      .catch((err) => console.error(err));
  }, []);

  // Filter products by category
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === activeCategory));
    }
  }, [activeCategory, products]);

  // Add to cart
  const handleAddToCart = (product: any) => {
    fetch("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...product, qty: 1 }),
    })
      .then(() => setCartCount(cartCount + 1))
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4">
        <div className="grid grid-cols-2 gap-1 w-10 h-10">
          <div className="bg-white border-2 border-black rounded-sm"></div>
          <div className="bg-white border-2 border-black rounded-full"></div>
          <div className="bg-white border-2 border-black rounded-sm"></div>
          <div className="bg-white border-2 border-black rounded-sm"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-6 h-6 bg-white border-2 border-black rounded-full mb-1"></div>
          <div className="w-full h-px bg-gray-700"></div>
        </div>
      </header>

      {/* Title */}
      <div className="px-4 mb-4 mt-6">
        <h1 className="text-4xl font-bold">Explore</h1>
        <p className="text-gray-600 text-xl mt-1">Best trendy collection!</p>
      </div>

      {/* Category Tabs */}
      <div className="px-4 mb-4 overflow-x-auto">
        <div className="flex gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full shadow-sm text-lg whitespace-nowrap transition-colors duration-300 
                ${activeCategory === cat ? "bg-orange-600 text-white" : "bg-white text-black"} 
                hover:bg-orange-600 hover:text-white`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-4 h-[500px] overflow-y-auto w-full">
        <div className="columns-2 gap-4">
          {filteredProducts.length === 0 ? (
            <p>Loading products...</p>
          ) : (
            filteredProducts.map((p) => (
              <div key={p.id || p.name} className="relative break-inside-avoid mb-4">
                {/* Product Image */}
                <img
                  src={p.img || "/product.png"}
                  className="w-auto h-auto rounded-2xl shadow-sm object-cover"
                  alt={p.name}
                />

                {/* Cart Icon */}
                <button
                  className="bg-white absolute bottom-8 right-2 w-10 h-10 rounded-full"
                  onClick={() => handleAddToCart(p)}
                >
                  <img
                    src="/cart.png"
                    alt="Add to cart"
                    className="w-full h-full object-contain"
                  />
                </button>

                {/* Product Info */}
                <div className="mt-2 text-left">
                  <p className="text-black font-semibold text-xl">{p.price}</p>
                  <h2 className="text-gray-500 text-lg">{p.name}</h2>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="flex justify-around items-center py-6 border-t border-gray-200 bg-white mt-10">
        {/* Home */}
        <button
          className="flex flex-col items-center text-gray-700 text-xs"
          onClick={() => router.push("/")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9-9 9 9M4 10v10h16V10" />
          </svg>
          Home
        </button>

        {/* Search */}
        <button className="flex flex-col items-center text-gray-700 text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M16.65 16.65A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
          </svg>
          Search
        </button>

        {/* Cart */}
        <button
          className="flex flex-col items-center text-gray-700 text-xs relative"
          onClick={() => router.push("/myOrder")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h14l-2-9M10 21a1 1 0 102 0 1 1 0 00-2 0z"
            />
          </svg>
          Cart
          {/* Orange dot */}
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 w-3 h-3 bg-orange-600 rounded-full"></span>
          )}
        </button>

        {/* Settings */}
        <button className="flex flex-col items-center text-gray-700 text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 mb-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0-6v2m0 16v2m8.485-10H20m-16 0H3.515m13.364 7.071l1.414 1.414M4.636 6.636l1.414 1.414m0 8.486L4.636 19.364m13.364-13.364l1.414 1.414"
            />
          </svg>
          Settings
        </button>
      </nav>
    </div>
  );
};

export default ExplorePage;
