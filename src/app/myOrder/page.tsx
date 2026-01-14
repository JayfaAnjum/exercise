"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface OrderItem {
  id: number;
  name: string;
  color: string;
  size: string;
  price: number;
  qty: number;
  img: string;
  favorite?: boolean; // heart toggle
}

export default function MyOrdersPage() {
  const [orders, setOrders] = useState<OrderItem[]>([]);

  // Fetch orders
  useEffect(() => {
    fetch("/api/cart")
      .then((res) => res.json())
      .then((data: OrderItem[]) => setOrders(data))
      .catch((err) => console.error(err));
  }, []);

  // Delete order
  const deleteOrder = (id: number) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  // Toggle favorite
  const toggleFavorite = (id: number) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, favorite: !order.favorite } : order
      )
    );
  };

  // Totals
  const totalItems = orders.reduce((sum, item) => sum + item.qty, 0);
  const totalPayment = orders.reduce((sum, item) => sum + item.price * item.qty, 0);
  const standardDelivery = 12;

  return (
    <div className="min-h-screen bg-white flex justify-center py-6">
      <div className="w-[390px] bg-white rounded-3xl px-5 py-6 flex flex-col">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button className="text-xl font-medium">,</button>
          <h1 className="text-3xl font-semibold">My Orders</h1>
        </div>

        {/* Orders List */}
        <div
          className={`space-y-5 ${
            orders.length > 2 ? "max-h-[380px] overflow-y-auto" : "h-auto"
          }`}
        >
          {orders.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">No orders yet.</p>
          ) : (
            orders.map((order) => (
              <div key={order.id} className="relative flex gap-4 items-center">
                {/* Product Image */}
                <div className="w-30 h-44 relative rounded-xl overflow-hidden bg-gray-200">
                  <img
                    src={order.img || "/product.png"}
                    alt={order.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-3xl">{order.name}</h3>
                  <p className="text-md text-gray-500 mt-5">{order.color}</p>
                  <p className="text-md text-gray-500">Size {order.size}</p>
                  <p className="font-semibold mt-1 text-3xl">${order.price.toFixed(2)}</p>
                </div>

                {/* Quantity */}
                <span className="font-medium text-3xl">{order.qty}x</span>

                {/* Heart & Delete buttons */}
                <div className="absolute bottom-2 right-2 flex gap-2">
                  <button
                    onClick={() => toggleFavorite(order.id)}
                    className="w-12 h-12 text-white bg-[#F28C28] rounded-full flex items-center justify-center shadow-md"
                  >
                    {order.favorite ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.682a4.5 4.5 0 010-6.364z"
                        />
                      </svg>
                    )}
                  </button>

                  <button
                    onClick={() => deleteOrder(order.id)}
                    className="w-12 h-12 bg-[#F28C28] rounded-full flex items-center justify-center shadow-md"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Divider */}
        <div className="border-t my-6 mt-6"></div>

        {/* Price Summary */}
        <div className="space-y-3 text-xl">
          <div className="flex justify-between text-gray-500">
            <span>Total Items ({totalItems})</span>
            <span className="font-medium text-black">${totalPayment.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-gray-500">
            <span>Standard Delivery</span>
            <span className="font-medium text-black">${standardDelivery.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-gray-500 ">
            <span>Total Payment</span>
            <span className="font-medium text-black">${(totalPayment + standardDelivery).toFixed(2)}</span>
          </div>
        </div>

        {/* Checkout Button */}
        <button className="w-full mt-6 bg-[#F28C28] text-white py-4 rounded-full font-medium text-lg">
          Checkout Now
        </button>
      </div>
    </div>
  );
}
