// ImageTextLayout.js
import React from 'react';
import Image from "next/image";

const KnowMoreAI = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 flex items-center">
        {/* Image on the left side */}
        <div className="w-1/2 p-4">
          <Image src="/your-image.jpg" alt="Image" className="w-full h-auto" />
        </div>

        {/* Text on the right side */}
        <div className="w-1/2 p-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            euismod eget massa non dapibus. Nullam auctor odio ut ultricies.
            Vivamus eget metus ut orci tristique scelerisque.
          </p>
        </div>
      </div>
    </div>
  );
};

export default KnowMoreAI;
