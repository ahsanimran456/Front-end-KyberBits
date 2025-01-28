"use client";
import React from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion

const Transforamtive = () => {
  const words = `Explore the transformative power of KyberBits development methodologies.`;
  const para = `At KyberBits, we simplify blockchain technology with our KyberBits tools. These tools not only ease ICO
          launches but also empower a range of blockchain applications—from smart contract creation to asset
          tokenization, offering limitless innovation possibilities.`;

  return (
    <section className="max-w-screen-xl mx-auto flex items-center justify-center mt-36 w-full text-white">
      {/* Existing Content */}
      <motion.div
        className="w-full flex flex-col items-center justify-center text-center p-8  space-y-5"
        initial={{ opacity: 0, y: 50 }}   // Start below the screen
        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
        transition={{ duration: 1 }}
        viewport={{ once: false }} // Keep triggering animation when in view
      >
        <motion.div
          className="w-full flex flex-col items-center justify-center text-center px-8 space-y-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <div className="max-w-4xl">
            <motion.h1
              className="text-3xl leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: false }}
            >
              {words}
            </motion.h1>
          </div>

          <motion.p
            className="text-gray-500 mb-10 font-sans text-md leading-loose max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: false }}
          >
            {para}
          </motion.p>
        </motion.div>
      </motion.div>

      {/* New Video Section */}
      <motion.div
        className="w-full  flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}   // Start with smaller and invisible
        whileInView={{ opacity: 1, scale: 1 }} // Animate to normal size and visible
        transition={{ duration: 1 }}
        viewport={{ once: false }} // Keep triggering animation when in view
      >
        <div className="max-w-4xl w-full">
          <video 
            src="https://www.KyberBits.com/videos/mint-token/mint-token.mp4" 
            controls 
            className="w-full rounded-lg"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Transforamtive;
