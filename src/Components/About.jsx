import React from 'react';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-[50px] py-[80px] text-[#3d3d3d]">
      <h1 className="text-[40px] font-bold mb-8">About Us</h1>

      <p className="text-[18px] leading-relaxed mb-6">
        Welcome to <span className="font-semibold text-[#ff4141]">Your Brand</span>, where fashion meets comfort and style. Founded in 2023, we are dedicated to bringing you the latest trends and timeless classics that empower you to express yourself with confidence.
      </p>

      <p className="text-[18px] leading-relaxed mb-6">
        Our journey began with a simple mission: to create high-quality apparel that combines innovative design with sustainable practices. We believe that fashion should not only look good but also feel good — both for you and the planet.
      </p>

      <p className="text-[18px] leading-relaxed mb-6">
        At <span className="font-semibold text-[#ff4141]">Your Brand</span>, every product is crafted with care and attention to detail, ensuring durability, comfort, and style. We source eco-friendly materials whenever possible and work closely with our partners to maintain ethical manufacturing standards.
      </p>

      <div className="mt-12">
        <h2 className="text-[28px] font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-[18px] space-y-3">
          <li>Quality: We never compromise on the materials or craftsmanship.</li>
          <li>Sustainability: Protecting the environment is at the core of our decisions.</li>
          <li>Customer Focus: Your satisfaction drives us to continuously improve.</li>
          <li>Innovation: Always pushing boundaries to bring you fresh, exciting designs.</li>
        </ul>
      </div>

      <p className="text-[18px] leading-relaxed mt-12">
        Whether you’re shopping for casual wear, work attire, or special occasions, our collections offer something for every taste and lifestyle. Join us on this fashion journey and experience clothing that truly fits your personality and values.
      </p>

      <p className="text-[18px] leading-relaxed mt-6">
        Thank you for choosing <span className="font-semibold text-[#ff4141]">Your Brand</span> — where style meets substance.
      </p>
    </div>
  );
}
