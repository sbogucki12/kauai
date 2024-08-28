"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  backgroundSrc: string;
  title: string;
  description: string;
  id?: string;
  isVideo?: boolean;
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ backgroundSrc, title, description, id, isVideo = false }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section ref={ref} className="h-screen relative overflow-hidden" id={id}>
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        {isVideo ? (
          <video
            src={backgroundSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundSrc})` }}
          />
        )}
      </motion.div>
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center z-10">
        <div className="text-center text-white max-w-2xl px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">{title}</h2>
          <p className="text-xl md:text-2xl">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;