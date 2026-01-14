import Image from "next/image";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex justify-center py-6">
      <div className="w-[390px] bg-white rounded-3xl px-5 py-6 shadow-sm">

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
                <p className="font-medium text-sm">
                  25/3 Housing Estate,
                </p>
                <p className="text-sm text-gray-600">
                  Sylhet
                </p>
              </div>
            </div>

            <button className="text-sm text-[#F28C28] font-medium">
              Change
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 mt-3">
            ⏱ Delivered in next 7 days
          </div>
        </div>

        {/* Payment Method */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-3">Payment Method</p>

          <div className="flex items-center gap-4">
            <div className="px-4 py-2 border rounded-xl text-sm font-medium">
              VISA
            </div>
            <div className="px-4 py-2 border rounded-xl text-sm font-medium">
              Master
            </div>
            <div className="px-4 py-2 border rounded-xl text-sm font-medium">
              PayPal
            </div>
            <div className="px-4 py-2 border rounded-xl text-sm font-medium">
               Pay
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
            <span>Total Items (3)</span>
            <span className="font-medium text-black">$116.00</span>
          </div>

          <div className="flex justify-between text-gray-500">
            <span>Standard Delivery</span>
            <span className="font-medium text-black">$12.00</span>
          </div>

          <div className="flex justify-between text-base font-semibold">
            <span>Total Payment</span>
            <span>$126.00</span>
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
