"use client";
import React from 'react';
import { motion } from 'framer-motion';  // Import Framer Motion
import mobile from '../../public/Assests/images/powerhouse.svg';
import MobileFrame from './MobileFrame';

const Platform = () => {

    const words = `Transforming Asset Acquisition with the KyberBits Platform`;

    return (
        <section className="max-w-screen-xl mx-auto flex items-center w-full text-white mt-24">
            {/* Image Section with Animation */}


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
                    Our Web3-powered tokenized asset marketplace on KyberBits will simplify the acquisition of digital assets by removing traditional barriers, fostering a new approach to asset exchange. This decentralized platform ensures equal access for all participants to emerging opportunities within the ecosystem.
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
            <motion.div
                className="w-[50%] flex"
                style={{ marginTop: '6rem' }}
                initial={{ opacity: 0, x: 100 }}  // Start off-screen from the right
                whileInView={{ opacity: 1, x: 0 }} // Trigger animation to move into view
                transition={{ duration: 0.8 }}
                viewport={{ once: false }} // Keep triggering the animation as long as the section is in view
            >
                <div className="w-full max-w-[600px]">
                    <MobileFrame src={mobile} />
                </div>
            </motion.div>
        </section>
    );
};

export default Platform;
