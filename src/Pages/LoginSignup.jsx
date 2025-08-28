import React from 'react';

export default function LoginSignup() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-[#47fdae] to-[#e1ffea22] pt-12">
      <div className="w-[500px] min-h-[500px] bg-white mx-auto p-10 border border-black rounded-2xl pb-24">
        <h1 className="text-2xl font-bold mb-4">Sign-up</h1>
        <div className="flex flex-col gap-6 mt-6">
          <input
            type="text"
            placeholder="Your name"
            className="h-10 w-full px-5 border border-gray-300 outline-none text-gray-600 text-lg font-medium cursor-pointer"
          />
          <input
            type="email"
            placeholder="Enter email"
            className="h-10 w-full px-5 border border-gray-300 outline-none text-gray-600 text-lg font-medium cursor-pointer"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="h-10 w-full px-5 border border-gray-300 outline-none text-gray-600 text-lg font-medium cursor-pointer"
          />
          <button className="w-full h-10 text-white bg-[#ff4141] mt-2 text-lg font-semibold">
            Continue
          </button>
        </div>
        <p className="mt-5 text-gray-600 text-lg font-medium">
          Already have an account?{' '}
          <span className="text-[#ff4141] font-semibold cursor-pointer">Login here</span>
        </p>
        <div className="flex items-center mt-6 gap-5 text-gray-600 text-lg font-medium">
          <input type="checkbox" className='cursor-pointer' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}
