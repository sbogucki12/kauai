'use client';

import React from 'react';
import Image from "next/legacy/image";

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
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">Discover Kauai&apos;s Magic</h1>
          <p className="text-xl md:text-3xl mb-12 text-shadow-md">Your gateway to the Garden Isle&apos;s hidden treasures</p>
          <a href="#journey" className="bg-secondary-color text-white py-3 px-8 rounded-full text-xl hover:text-text-color transition duration-300 text-shadow-sm">
            Begin Your Adventure
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;