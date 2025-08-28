import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddressForm({ onSubmit }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    street: '',
    city: '',
    zip: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).some(field => field.trim() === '')) {
      alert('Please fill in all fields');
      return;
    }

    // Call the parent submit handler if needed
    if (onSubmit) onSubmit(formData);

    alert('Order submitted successfully!');

    // Redirect to cart page (change '/cart' to your route)
    navigate('/cart');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md ">
      <h2 className="text-2xl font-bold mb-4">Enter Your Address</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-3">
          Full Name
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            type="text"
            placeholder="John Doe"
          />
        </label>

        <label className="block mb-3">
          Street Address
          <input
            name="street"
            value={formData.street}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            type="text"
            placeholder="123 Main St"
          />
        </label>

        <label className="block mb-3">
          City
          <input
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            type="text"
            placeholder="New York"
          />
        </label>

        <label className="block mb-4">
          Pin Code
          <input
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            type="text"
            placeholder="10001"
          />
        </label>

        <button
          type="submit"
          className="w-full bg-[#ff4141] text-white py-3 rounded font-semibold hover:bg-[#e03e3e] transition"
        >
          Submit Address
        </button>
      </form>
    </div>
  );
}
