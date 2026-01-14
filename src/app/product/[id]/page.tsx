// src/app/product/[id]/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  category: string;
}

export default function ProductPage() {
  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!productId) return;

    fetch(`/api/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex justify-center items-center text-xl">
        Product not found.
      </div>
    );
  }

  
  const colors = ["#000000", "#FF0000", "#00FF00"];
  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="min-h-screen bg-white px-4 pt-4 flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4 mt-8">
        
        <h1 className="text-2xl">Details</h1>
        <button>
          
        </button>
      </div>

   
      <div className="w-full flex justify-center mb-4 relative">
        <div className="w-90 h-100 sm:w-96 sm:h-96 relative">
          <img
            src={product.img || "/product.png"}
            alt={product.name}
            className="w-full h-full object-cover rounded-2xl shadow-6md"
          />
        </div>
      </div>

      
      <div className="flex items-center justify-between mb-4 mt-4">
        <h2 className="text-black text-4xl font-semibold text-left">
          {product.name}
        </h2>

        <div className="flex gap-3">
          {colors.map((color, i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full border border-gray-300"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      
      <div className="mb-4">
        <h3 className="font-bold text-gray-800 mb-2 text-3xl mt-4">Size</h3>
        <div className="flex gap-6 flex-wrap">
          {sizes.map((size, i) => (
            <div key={i} className="px-3 py-1 rounded-md text-gray-700 text-2xl">
              {size}
            </div>
          ))}
        </div>
      </div>

     
      <div className="mt-6 flex items-center justify-between mb-4">
        <p className="text-5xl font-bold text-black">${product.price}</p>
        <button className="bg-orange-600 text-white px-12 py-5 rounded-4xl text-2xl hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
