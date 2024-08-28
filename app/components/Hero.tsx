"use client";

import React from 'react';
import Image from "next/legacy/image";

const Hero: React.FC = () => {
  const handleAdventureClick = () => {
    const napaliSection = document.getElementById('napali-coast');
    if (napaliSection) {
      napaliSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

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
          <button 
            onClick={handleAdventureClick}
            className="bg-secondary-color text-white py-3 px-8 rounded-full text-xl hover:text-text-color transition duration-300 text-shadow-sm cursor-pointer"
          >
            Begin Your Adventure
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;