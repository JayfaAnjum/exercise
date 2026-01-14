// src/app/product/[id]/page.tsx
import React from "react";

const sampleProduct = {
  img: "/product.png",
  name: "Fashionable Jacket",
  price: "$99",
  colors: ["#000000", "#FF0000", "#00FF00"],
  sizes: ["S", "M", "L", "XL","XXL"]
};

export default function ProductPage() {
  const product = sampleProduct; // use later dynamic logic

  return (
    <div className="min-h-screen bg-white px-4 pt-4 flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4 mt-8">
        <button className="text-gray-700 font-bold text-3xl">{`<`}</button>
        <h1 className="text-xl font-semibold">Details</h1>
        <button>
          <img src="/flag.png" alt="Flag" className="w-6 h-6" />
        </button>
      </div>

      {/* Product Image */}
      <div className="w-full flex justify-center mb-4 relative">
  <div className="w-90 h-100 sm:w-96 sm:h-96 relative">
    <img
      src={product.img}
      alt={product.name}
      className="w-full h-full object-cover rounded-2xl shadow-6md"
    />

    {/* Cart Icon */}
    
  </div>
</div>


    <div className="flex items-center justify-between mb-4 mt-4">
  {/* Product Name */}
  <h2 className="text-black text-4xl font-semibold text-left">
    {product.name}
  </h2>

  {/* Colors */}
  <div className="flex gap-3">
    {product.colors.map((color, i) => (
      <div
        key={i}
        className="w-6 h-6 rounded-full border border-gray-300"
        style={{ backgroundColor: color }}
      />
    ))}
  </div>
</div>

      {/* Size */}
      <div className="mb-4">
        <h3 className="font-bold text-gray-800 mb-2 text-3xl mt-4">Size</h3>
        <div className="flex gap-6 flex-wrap">
          {product.sizes.map((size, i) => (
            <div
              key={i}
              className="px-3 py-1 rounded-md text-gray-700 text-2xl"
            >
              {size}
            </div>
          ))}
        </div>
      </div>

      {/* Price & Add to Cart */}
      <div className="mt-6 flex items-center justify-between mb-4">
        <p className="text-5xl font-bold text-black">{product.price}</p>
        <button className="bg-orange-600 text-white px-12 py-5 rounded-4xl text-2xl hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
