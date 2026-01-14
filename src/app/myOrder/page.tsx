import Image from "next/image";

export default function MyOrdersPage() {
  return (
    <div className="min-h-screen bg-white flex justify-center py-6">
      <div className="w-[390px] bg-white rounded-3xl px-5 py-6 ">

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <button className="text-xl font-medium">,</button>
          <h1 className="text-4xl font-semibold">My Orders</h1>
        </div>

        {/* Order Item 1 */}
        <div className="flex gap-4 items-center mb-5">
          <div className="w-30 h-44 relative rounded-xl overflow-hidden bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
              alt="Product"
              
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h3 className=" text-2xl">
              Premium <br></br>Tangerine Shirt
            </h3>
            <p className="text-md text-gray-500 mt-5">
              Yellow 
            </p>
            <p className="text-md text-gray-500">
              Size 8
            </p>
            <p className="font-semibold mt-1 text-3xl">$257.85</p>
          </div>

          <span className="font-medium text-4xl">1x</span>
        </div>

        {/* Order Item 2 */}
        {/* Order Item 1 */}
        <div className="flex gap-4 items-center mb-5">
          <div className="w-30 h-44 relative rounded-xl overflow-hidden bg-gray-200">
            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
              alt="Product"
              
              className="object-cover"
            />
          </div>

          <div className="flex-1">
            <h3 className=" text-2xl">
              Premium <br></br>Tangerine Shirt
            </h3>
            <p className="text-md text-gray-500 mt-5">
              Yellow 
            </p>
            <p className="text-md text-gray-500">
              Size 8
            </p>
            <p className="font-semibold mt-1 text-3xl">$257.85</p>
          </div>

          <span className="font-medium text-4xl">1x</span>
        </div>

        {/* Divider */}
        <div className="border-t my-6 mt-6"></div>

        {/* Price Summary */}
        <div className="space-y-3 text-xl">
          <div className="flex justify-between text-gray-500">
            <span>Total Items (3)</span>
            <span className="font-medium text-black">$116.00</span>
          </div>

          <div className="flex justify-between text-gray-500">
            <span>Standard Delivery</span>
            <span className="font-medium text-black">$12.00</span>
          </div>

          <div className="flex justify-between text-gray-500 ">
            <span>Total Payment</span>
            <span className="font-medium text-black">$126.00</span>
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
