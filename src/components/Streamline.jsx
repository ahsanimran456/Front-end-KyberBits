"use client";
import React from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion
import mobile from '../../public/Assests/images/powerhouse.svg';
import MobileFrame from './MobileFrame';
import src from '../../public/Assests/images/vipcards.png';
import Image from 'next/image';


const Streamline = () => {
    const words = `Unleash your creativity and streamline your event management with KyberBits innovative QubeQode platform features`;

    return (
        <section className="max-w-screen-xl mx-auto flex items-center w-full text-white mt-24">
            {/* Image Section with Animation */}
            <motion.div
                className="w-[50%] flex"
                style={{ marginTop: '6rem' }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
            >
                <div className="w-full max-w-[600px]">
                    <Image
                        src={src}
                        alt="Vip KyberBits"
                        className="object-cover rounded-lg"
                        width={600} // Provide actual image width
                        height={400} // Provide actual image height
                        quality={100} // Increase quality to avoid pixelation
                        priority // For preloading important images
                    />
                </div>
            </motion.div>

            {/* Text Section with Animation */}
            <motion.div
                className="w-[50%] flex flex-col mt-24 p-8 space-y-7"
                initial={{ opacity: 0, y: 50 }}   // Start below the screen
                whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                transition={{ duration: 1 }}
                viewport={{ once: false }} // Keep triggering animation when in view
            >
                <motion.h1
                    className="text-4xl leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: false }}
                >
                    {words}
                </motion.h1>

                <motion.p
                    className="text-gray-500 font-sans leading-loose text-md"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                    transition={{ duration: 1, delay: 0.4 }}
                    viewport={{ once: false }}
                >
                    Imagine effortlessly generating NFT QR codes for music events, enabling secure ticketing, exclusive access, and unique fan experiences, all with a few clicks. Using our planned intuitive platform, anyone can design and deploy these NFTs without prior coding knowledge, thanks to AI-guided prompts and drag-and-drop functionalities. Beyond music events, the possibilities are limitless; from personalized event memorabilia to loyalty rewards and beyond, KyberBits will empower you to transform any idea into a blockchain reality, making advanced technology accessible to all.
                </motion.p>

                <motion.div
                    className="flex space-x-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }} // Trigger animation when in view
                    transition={{ delay: 0.6, duration: 1 }}
                    viewport={{ once: false }}
                >
                    <button className="px-6 py-3 rounded-full w-[200px] bg-[#202020] hover:bg-gray-800 transition">
                        How to buy?
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Streamline;
