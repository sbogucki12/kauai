"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface VideoSwipeProps {
  videoSrc: string;
}

const VideoSwipe: React.FC<VideoSwipeProps> = ({ videoSrc }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section className="h-screen relative overflow-hidden">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isVisible ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="absolute inset-0 bg-black"
      >
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {isVisible && (
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-white text-center"
            >
              <h2 className="text-4xl font-bold mb-4">Swipe to Continue</h2>
              <p className="text-xl">Experience the beauty of Kauai from above</p>
            </motion.div>
          </div>
        )}
      </motion.div>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, info) => {
          if (info.offset.x > 100) {
            setIsVisible(false);
          }
        }}
        className="absolute inset-y-0 right-0 w-16 bg-white bg-opacity-20 flex items-center justify-center cursor-grab"
      >
        <span className="transform -rotate-90 text-white font-bold">SWIPE</span>
      </motion.div>
    </section>
  );
};

export default VideoSwipe;
