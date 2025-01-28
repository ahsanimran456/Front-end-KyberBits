"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import background from "../../public/Assests/images/bannersection.png";
import ai from "../../public/Assests/images/AI.png";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false }); // `once: false` ensures it animates every time it comes into view.

  return (
    <motion.div
      ref={sectionRef}
      className="relative w-full flex items-center justify-center bg-cover bg-center py-[35rem] px-4"
      style={{ backgroundImage: `url(${background.src})` }}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div className="text-center text-white max-w-auto w-full">
        {/* First Section */}
        <div className="max-w-screen-sm absolute right-[23%] top-[14%]">
          <motion.h1
            className="text-5xl leading-tight font-sans font-bold text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(255, 140, 50), rgb(255, 200, 118) 15%, rgb(255, 255, 245) 40%, rgb(255, 255, 255) 50%, rgb(230, 255, 250) 70%, rgb(121, 255, 247) 90%)",
            }}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            KyberBits: The World's First Layer 1, Web3 Aggregated Ecosystem
          </motion.h1>
        </div>

        <div className="max-w-xl absolute left-[3%] bottom-[42%]">
          <motion.h3
            className="text-xl text-left leading-normal font-sans font-semibold text-transparent bg-clip-text mt-4"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgb(255, 140, 50), rgb(255, 200, 118) 15%, rgb(255, 255, 245) 40%, rgb(255, 255, 255) 50%, rgb(230, 255, 250) 70%, rgb(121, 255, 247) 90%)",
            }}
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            That Unites Leading Blockchains Including Bitcoin, Ethereum, Solana & More.
          </motion.h3>
          <motion.p
            className="text-white text-left mt-3"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Kyberbits Network is redefining blockchain technology. We aim to
            build a highly efficient, self-sustaining ecosystem designed to
            effortlessly manage a large number of transactions.
          </motion.p>
        </div>

        {/* Buttons Section */}
        <div className="max-w-xl left-[3%] absolute bottom-[27%] w-full flex flex-col">
          <div className="flex flex-wrap gap-4 mb-6">
            {/* Gradient Button */}
            <motion.button
              className="px-6 py-3 text-xs min-w-48  text-black font-semibold rounded-full shadow-lg bg-gradient-to-r from-green-200 via-blue-400 to-purple-500 hover:opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Presale
            </motion.button>

            {/* Dark Button */}
            <motion.button
              className="px-6 py-3 text-sm text-white min-w-48 font-semibold rounded-full shadow-lg bg-[#1a1a1a] hover:bg-[#333] transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              How to buy?
            </motion.button>
          </div>

          {/* Additional Paragraph */}
          <motion.div
            className="relative text-left"
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p className="text-[#909090]">
              Kyberbits is committed to enabling a seamless and decentralized
              future by integrating advanced blockchain solutions and empowering
              communities worldwide.
            </p>
          </motion.div>
        </div>

        {/* AI Graphic */}
        <motion.div
          className="absolute top-10 right-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Image src={ai} alt="AI graphic" width={200} height={200} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
