"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
  '/images/hanalei-bay.jpg',
  '/images/hanalei-lookout.jpg',
  '/images/napali-cliffs.jpg',
  '/images/kalalau-trail.jpg',
];

const HorizontalScroll: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showSwipe, setShowSwipe] = useState(true);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const handleWheel = (e: WheelEvent) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          scrollContainer.scrollLeft += e.deltaY;
        }
      };
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

      const handleScroll = () => {
        if (scrollContainer.scrollLeft > 50) {
          setShowSwipe(false);
        } else {
          setShowSwipe(true);
        }
      };
      scrollContainer.addEventListener('scroll', handleScroll);

      return () => {
        scrollContainer.removeEventListener('wheel', handleWheel);
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <section className="h-screen overflow-hidden relative">
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-scroll scrollbar-hide h-screen"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {images.map((src, index) => (
          <div 
            key={index} 
            className="h-screen w-screen flex-shrink-0 relative"
            style={{ scrollSnapAlign: 'start' }}
          >
            <Image
              src={src}
              alt={`Kauai landscape ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      {showSwipe && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-y-0 right-0 w-16 bg-white bg-opacity-20 flex items-center justify-center"
        >
          <span className="transform -rotate-90 text-white font-bold">SWIPE</span>
        </motion.div>
      )}
    </section>
  );
};

export default HorizontalScroll;
