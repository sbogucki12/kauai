import React from 'react';
import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import Timeline from './components/Timeline';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>My Kauai Adventure</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />
      <Hero />
      <Timeline />

      <footer className="bg-teal-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 My Kauai Adventure. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;