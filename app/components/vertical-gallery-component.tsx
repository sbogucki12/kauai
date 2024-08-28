"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const images = [
  '/images/hanalei-with-trees.jpg',
  '/images/cathedrals-landscape.jpg',
  '/images/napali-waterfall.jpg',
];

const VerticalGallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="h-screen relative overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -300 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Kauai landscape ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </AnimatePresence>
      <motion.button
        onClick={nextImage}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50 rounded-full p-4 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronDown size={24} color="black" />
      </motion.button>
    </section>
  );
};

export default VerticalGallery;
