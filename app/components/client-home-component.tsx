"use client";

import React from 'react';
import Hero from './Hero';
import ParallaxSection from './parallax-section-component';
import HorizontalScroll from './horizontal-scroll-component';
import VideoSwipe from './video-swipe-component';
import VerticalGallery from './vertical-gallery-component';

const ClientHome: React.FC = () => {
  return (
    <>
      <Hero />
      <ParallaxSection
        id="napali-coast"
        backgroundSrc="/images/napali-coast.jpg"
        title="Na Pali Coast"
        description="Witness the breathtaking cliffs and hidden beaches of Kauai's iconic coastline."
      />
      <HorizontalScroll />
      <VideoSwipe videoSrc="/videos/aerial-tour.mp4" />
      <ParallaxSection
        backgroundSrc="/videos/waimea-canyon.mp4"        
        title="Waimea Canyon"
        description="Explore the 'Grand Canyon of the Pacific' with its stunning red rocks and lush vegetation."
        isVideo={true}
      />
      <VerticalGallery />
      <footer className="tropical-gradient text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">&copy; 2024 Kauai Adventures. Mahalo for visiting!</p>
        </div>
      </footer>
    </>
  );
};

export default ClientHome;
