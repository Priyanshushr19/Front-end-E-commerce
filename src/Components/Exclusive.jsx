import React from 'react';
import exclusive from '../assets/exclu.webp';

export default function Exclusive() {
  return (
    <div className="bg-gradient-to-b from-green-400 to-white flex flex-col md:flex-row items-center justify-around px-6 md:px-16 py-12 bg-gray-100 ">
      {/* Text Content */}
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-bold text-[#171717]">Exclusive</h1>
        <h1 className="text-3xl md:text-5xl font-bold text-[#171717] mt-2">Offers For You</h1>
        <p className="text-sm md:text-base text-gray-600 mt-4">ONLY ON BEST SELLERS PRODUCTS</p>
        <button className="cursor-pointer mt-6 bg-[#252525] text-white px-6 py-2 rounded-full hover:bg-[#171717] transition duration-300">
          Check Now
        </button>
      </div>

      {/* Image */}
      <div>
        <img src={exclusive} alt="Exclusive Offer" className="w-[300px] md:w-[400px] rounded-xl" />
      </div>
    </div>
  );
}
