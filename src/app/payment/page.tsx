"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function CheckoutPage() {
  const [cart, setCart] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch cart from API
  useEffect(() => {
    fetch("/api/cart")
      .then(res => res.json())
      .then(data => {
        setCart(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  // Calculate totals
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const itemsTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const deliveryFee = cart.length > 0 ? 12 : 0; // Optional: free if no items
  const totalPayment = itemsTotal + deliveryFee;

  if (loading) return <p className="text-center mt-10">Loading cart...</p>;

  return (
    <div className="min-h-screen bg-white flex justify-center py-6">
      <div className="w-[390px] bg-white rounded-3xl px-5 py-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button className="text-xl font-medium">←</button>
          <h1 className="text-xl font-semibold">Checkout</h1>
        </div>

        {/* Delivery Address */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">Delivery Address</p>
          <div className="flex justify-between items-start">
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                📍
              </div>
              <div>
                <p className="font-medium text-sm">25/3 Housing Estate,</p>
                <p className="text-sm text-gray-600">Sylhet</p>
              </div>
            </div>
            <button className="text-sm text-[#F28C28] font-medium">Change</button>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
            ⏱ Delivered in next 7 days
          </div>
        </div>

        {/* Cart Items */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">Your Items</p>
          {cart.length === 0 ? (
            <p className="text-gray-500 text-sm">Your cart is empty</p>
          ) : (
            <div className="space-y-3">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 relative">
                      <Image
                        src={item.img || "/product.png"}
                        alt={item.name}
                        width={48}
                        height={48}
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-black font-medium">{item.name}</p>
                      <p className="text-gray-500 text-sm">{item.qty} × ${item.price}</p>
                    </div>
                  </div>
                  <p className="text-black font-medium">${(item.price * item.qty).toFixed(2)}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-3">Payment Method</p>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-xl flex items-center justify-center w-20 h-12 ">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                alt="VISA"
                width={60}
                height={24}
                className="object-contain"
              />
            </div>
            <div className="px-4 py-2 rounded-xl flex items-center justify-center w-20 h-12 ">
              <Image
             src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                alt="MasterCard"
                width={60}
                height={24}
                className="object-contain"
              />
            </div>
            <div className="px-4 py-2 rounded-xl flex items-center justify-center w-20 h-12 ">
              <Image
               src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                alt="PayPal"
                width={60}
                height={24}
                className="object-contain"
              />
            </div>
            <div className="px-4 py-2 rounded-xl flex items-center justify-center w-20 h-12">
              <Image
                src="/payments/applepay.png"
                alt="Apple Pay"
                width={40}
                height={24}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Voucher */}
        <div className="mb-6">
          <button className="w-full py-3 rounded-xl bg-gray-100 text-sm font-medium text-gray-600">
            Add Voucher
          </button>
        </div>

        {/* Note */}
        <div className="mb-6 text-sm">
          <p className="text-red-500 font-medium mb-1">Note :</p>
          <p className="text-gray-500 leading-relaxed">
            Use your order id at the payment. Your ID #154619 if you
            forget to put your order id we can’t confirm the payment.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t my-6"></div>

        {/* Price Summary */}
        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-gray-500">
            <span>Total Items ({totalItems})</span>
            <span className="font-medium text-black">${itemsTotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-gray-500">
            <span>Standard Delivery</span>
            <span className="font-medium text-black">${deliveryFee.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-base font-semibold">
            <span>Total Payment</span>
            <span>${totalPayment.toFixed(2)}</span>
          </div>
        </div>

        {/* Pay Now Button */}
        <button className="w-full mt-6 bg-[#F28C28] text-white py-4 rounded-full font-medium text-lg">
          Pay Now
        </button>

      </div>
    </div>
  );
}
