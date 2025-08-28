import React, { useState } from 'react';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = () => {
    if (email.trim() === '') return;
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full flex justify-center mt-12">
      <div className="w-full max-w-md">
        <h3 className="text-[24px] font-semibold mb-4 text-center">
          Subscribe to our newsletter
        </h3>
        <div className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff4141]"
          />
          <button
            onClick={handleSubscribe}
            className="px-6 py-3 bg-[#ff4141] text-white font-semibold rounded-md hover:bg-[#e03e3e] transition"
          >
            Subscribe
          </button>
        </div>
        {submitted && (
          <p className="mt-4 text-green-600 font-medium text-center">Submitted!</p>
        )}
      </div>
    </div>
  );
}
