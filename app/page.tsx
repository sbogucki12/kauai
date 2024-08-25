import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';

export default function Home() {
  return (
    <main className="min-h-screen bg-background-color">
      <Header />
      <Hero />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-text-color mb-8">Aloha from Kauai!</h1>
          <p className="text-xl text-text-color mb-12">
            Join me on an unforgettable journey through the Garden Isle&apos;s s paradise.
          </p>
          <div className="bg-primary-color bg-opacity-10 p-8 rounded-2xl tropical-shadow">
            <h2 className="text-3xl font-semibold text-primary-color mb-6">Journey Highlights</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-text-color">
              <li className="flex items-center"><span className="text-secondary-color mr-2">🌊</span> Na Pali Coast boat adventure</li>
              <li className="flex items-center"><span className="text-secondary-color mr-2">🚁</span> Breathtaking aerial island tour</li>
              <li className="flex items-center"><span className="text-secondary-color mr-2">🏖️</span> Relaxing day at Hanalei Bay</li>
              <li className="flex items-center"><span className="text-secondary-color mr-2">🥾</span> Hiking Waimea Canyon&apos;s red rocks</li>
              <li className="flex items-center"><span className="text-secondary-color mr-2">🍍</span> Savoring local flavors and culture</li>
            </ul>
          </div>
        </div>
      </div>
      <Timeline />
      <footer className="tropical-gradient text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; 2024 Kauai Adventures. Mahalo for visiting!</p>
        </div>
      </footer>
    </main>
  );
}