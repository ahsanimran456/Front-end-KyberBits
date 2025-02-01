'use client';
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import firstlayer1111 from '../../public/Assests/images/front-banner.png';
import HeroSection from "./HeroSection";

const HeroSectionWithAnimation = () => {
  const [isAnimating, setIsAnimating] = useState(true); // Track animation state
  const animationRef = useRef(null); // Reference for the image animation

  // Function to prevent scrolling during animation
  const blockScroll = (event) => {
    if (isAnimating) {
      event.preventDefault(); // Prevent scrolling
    }
  };

  // Once the animation is complete, allow scrolling
  const handleAnimationComplete = () => {
    setIsAnimating(false); // Animation complete, allow scroll
  };

  // Attach and detach the event listener for blocking scroll on mount and unmount
  useEffect(() => {
    window.addEventListener("wheel", blockScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", blockScroll);
    };
  }, [isAnimating]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="relative w-full z-10">
        <HeroSection />
      </div>

      <motion.div 
        initial={{ scale: 1, opacity: 1 }} 
        animate={{ scale: 2, opacity: 0 }} 
        transition={{ duration: 6, ease: "easeInOut" }} // Increased duration to 6
        onAnimationComplete={handleAnimationComplete} // Trigger after animation completes
        className="absolute top-0 left-0 right-0 w-full h-screen z-20 overflow-hidden"
        ref={animationRef} // Assigning the reference to the animated div
      >
        <Image 
          src={firstlayer1111} // Use imported image
          alt="image" 
          layout="fill" // Make the image fill the parent container
          objectFit="cover" // Ensure it covers the entire container
          objectPosition="center" // Center the image
        />
      </motion.div>
    </div>
  );
};

export default HeroSectionWithAnimation;
