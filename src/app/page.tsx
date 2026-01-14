// src/components/HeroSection.tsx
import React from "react";
import Image from "next/image";


const HeroSection = () => {
  return (
    <section className="w-full min-h-screen sm:flex sm:justify-between sm:items-center sm:p-12 p-0">
  {/* Hero Image */}
  <div className="w-full sm:w-1/2">
    <img
      src="/heroImage.png"
      alt="Hero"
      className="w-full h-auto object-cover rounded-b-3xl"
    />
  </div>

  {/* Text & Buttons */}
 <div className="flex flex-col sm:items-start sm:w-1/2 px-8 py-5 sm:px-3 mt-9 sm:mt-0">
  <h1 className="text-5xl sm:text-5xl font-bold mb-2 text-left">
    Find The<br className="block sm:hidden" />
    Best Collections
  </h1>

  <p className="text-gray-600 mb-6 text-lg   sm:text-lg  mt-5 text-left">
    Get your dream item easily with FashionHub and get other interesting offer
  </p>

  <div className="flex flex-row gap-4 w-full sm:w-auto">
 <div className="flex flex-row gap-4 w-full sm:w-auto">
  
  <button className="bg-white text-black text-lg  border border-black px-8 py-4 rounded-full shadow-md hover:bg-blue-50 hover:scale-105 transition transform w-full sm:w-auto">
    Sign Up
  </button>
  <button className="bg-orange-600 text-lg  text-white px-8 py-4 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition transform w-full sm:w-auto">
    Sign in
  </button>
</div>

</div>

</div>

</section>

  );
};

export default HeroSection;
