import React from "react";
import Image from "next/image";

const categories = ["All", "Men", "Women", "Kids", "Others"];
const products = [
  { name: "Product 1", price: "$50", img: "/product.png" },
  { name: "Product 2", price: "$30", img: "/product.png" },
  { name: "Product 3", price: "$70", img: "/product2.png" },
  { name: "Product 4", price: "$60", img: "/product2.png" },
  { name: "Product 3", price: "$70", img: "/product2.png" },
  { name: "Product 4", price: "$60", img: "/product.png" },
];

const ExplorePage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4">
        {/* Left: 4 small squares */}
       <div className="grid grid-cols-2 gap-1 w-10 h-10">
  <div className="bg-white border-2 border-black rounded-sm"></div>
  <div className="bg-white border-2 border-black rounded-full"></div>
  <div className="bg-white border-2 border-black rounded-sm"></div>
  <div className="bg-white border-2 border-black rounded-sm"></div>
</div>


        {/* Right: circle with line */}
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
        className="px-4 py-2 bg-white text-black rounded-full shadow-sm text-lg whitespace-nowrap transition-colors duration-300 hover:bg-orange-600 hover:text-white"
      >
        {cat}
      </button>
    ))}
  </div>
</div>

<div className="px-4 h-[500px] overflow-y-auto w-full">
  <div className="columns-2 gap-4">
    {products.map((p) => (
      <div key={p.name} className="relative break-inside-avoid mb-4">
        {/* Image */}
        <img
          src={p.img}
          className="w-auto h-auto rounded-2xl shadow-sm object-cover"
          alt={p.name}
        />

        {/* Cart Icon */}
        <button className="bg-white absolute bottom-8 right-2 w-10 h-10 rounded-full">
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
    ))}
  </div>
</div>




      {/* Bottom Navigation */}
      <nav className="flex justify-around items-center py-6 border-t border-gray-200 bg-white">
        <button className="flex flex-col items-center text-gray-700 text-xs">
          <div className="w-5 h-5 bg-gray-700 rounded-sm mb-1"></div>
          Home
        </button>
        <button className="flex flex-col items-center text-gray-700 text-xs">
          <div className="w-5 h-5 bg-gray-700 rounded-sm mb-1"></div>
          Search
        </button>
        <button className="flex flex-col items-center text-gray-700 text-xs">
          <div className="w-5 h-5 bg-gray-700 rounded-sm mb-1"></div>
          Cart
        </button>
        <button className="flex flex-col items-center text-gray-700 text-xs">
          <div className="w-5 h-5 bg-gray-700 rounded-sm mb-1"></div>
          Settings
        </button>
      </nav>
    </div>
  );
};

export default ExplorePage;
