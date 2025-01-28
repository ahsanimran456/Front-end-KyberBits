"use client";
import React from 'react';
import { motion } from 'framer-motion';
import MobileFrame from '@/components/MobileFrame';
import SendEmail from '@/components/SendEmail';
import Tokenomics from '@/components/Tokenomics';
import mobile from '../../../public/Assests/images/powerhouse.svg';

const Tokennomics = () => {
    return (
        <>
            <section className="max-w-screen-xl mx-auto flex items-center w-full text-white">
                <motion.div
                    className="w-[50%] flex flex-col p-8 space-y-7"
                    initial={{ opacity: 1, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h1
                        className="text-4xl leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
                        initial={{ opacity: 1, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        TICS is central to the KyberBits Network's functionality, enabling the transition from a conceptual model to a fully operational platform.
                    </motion.h1>
                    <motion.p
                        className="text-gray-500 font-sans leading-loose text-md"
                        initial={{ opacity: 1, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        The total supply of tokens will be determined by the amount sold during the presale, which will consistently represent 12.85% of the total supply.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="w-[50%] flex"
                    style={{ marginTop: '6rem' }}
                    initial={{ opacity: 1, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: false }}
                >
                    <div className="w-full max-w-[600px]">
                        <MobileFrame src={mobile} />
                    </div>
                </motion.div>
            </section>
            <Tokenomics />
            <section className="max-w-screen-lg mx-auto py-8 px-4 mt-20 text-white">
                <h2 className="text-5xl text-center font-bold mb-10 text-white">
                    Token Distribution
                </h2>
                <p className="text-[#909090] leading-loose mb-10">
                KyberBits is underpinned by a carefully crafted tokenomics structure designed to support the sustainability and growth of our blockchain ecosystem. The total supply of KyberBits tokens (TICS) wil be determined by the amount of tokens sold during the presale.
                </p>
                <h6 className="text-2xl  font-bold mb-10 text-white">
                Token Distribution Overview
                </h6>
                <ul className="list-disc pl-8 space-y-4 ">
                    <li>
                        <strong>Presale/ICO (12.85%)</strong>: Reserved for early participants during the presale phase, representing 12.85% of the total supply.
                    </li>
                    <li>
                        <strong>Team (11.88%)</strong>: Allocated to the team with a 6-month vesting period to ensure long-term commitment.
                    </li>
                    <li>
                        <strong>Ecosystem (20.85%)</strong>: Supports liquidity provision and validator rewards for the KyberBits ecosystem.
                    </li>
                    <li>
                        <strong>Advisors (3.12%)</strong>: Reserved for strategic advisors, including a 6-month vesting period.
                    </li>
                    <li>
                        <strong>Foundation (18.23%)</strong>: Funds innovative projects leveraging the KyberBits network.
                    </li>
                    <li>
                        <strong>Network Operations (13.78%)</strong>: Ensures smooth network maintenance and operational needs.
                    </li>
                    <li>
                        <strong>Reserves (15%)</strong>: Held for unforeseen needs and marketplace stability.
                    </li>
                    <li>
                        <strong>Community Incentives (4.29%)</strong>: Encourages community adoption and growth through incentives.
                    </li>
                </ul>

                <h2 className="text-3xl font-bold mt-8 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                    Presale/ICO Stages
                </h2>
                <p className="text-gray-500 leading-loose">
                    The presale spans <strong>6-8 months</strong>, aligned with the mainnet launch. It is structured into
                    <strong>weekly stages</strong>, with each stage increasing the token price by <strong>10%</strong>.
                    The mainnet launch listing price will be set at <strong>20% above the final presale stage price</strong>.
                </p>

                <h2 className="text-3xl font-bold mt-8 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                    Launch Strategy
                </h2>
                <ul className="list-disc pl-8 space-y-4">
                    <li>
                        <strong>Phased Liquidity Introduction</strong>: Gradual liquidity release to manage market dynamics.
                    </li>
                    <li>
                        <strong>Engagement of Market Makers</strong>: Professional market makers will assist in stabilizing the token’s price.
                    </li>
                    <li>
                        <strong>Long-term Stability</strong>: Liquidity will progressively increase after initial market adjustments to ensure token stability.
                    </li>
                </ul>
            </section>

            
            <SendEmail />
        </>
    );
};

export default Tokennomics;
