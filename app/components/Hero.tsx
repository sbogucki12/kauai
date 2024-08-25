'use client';

import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      <Image
        src="/images/kauai-hero.jpg"
        alt="Kauai landscape"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Kauai Adventure</h1>
          <p className="text-xl md:text-2xl mb-8">Explore the breathtaking beauty of the Garden Isle</p>
          <a href="#journey" className="bg-teal-500 text-white py-2 px-6 rounded-full text-lg hover:bg-teal-600 transition duration-300">
            Start the Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;