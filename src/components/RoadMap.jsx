"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GoDash } from "react-icons/go";
import { motion } from 'framer-motion';  
const RoadMap = () => {
  const roadmapItems = [
    {
      quarter: "Q2 2024",
      title: "April – June",
      heading: "Team Establishment and Foundation Building",
      points: [
        "Recruit and onboard key team members.",
        "Launch the whitelist website for early adopters.",
        "Begin drafting the KyberBits whitepaper.",
        "Attend the Blockchain Life Expo in Dubai.",
        "Conduct an interview with Web3TV to increase visibility.",
        "Engage with key figures in the blockchain industry for strategic insights.",
        "Partner with developers to begin the technical groundwork.",
        "Finalize the draft of the whitepaper.",
        "Design the ICO website.",
        "Develop and test a comprehensive marketing strategy.",
        "Identify and define the scope of the KyberBits blockchain.",
        "Initiate marketing efforts to raise awareness about the whitelist.",
        "Publish articles and press releases to build initial momentum.",
      ],
    },
    {
      quarter: "Q3 2024",
      title: "July – September",
      heading: "Strategic Partnerships and Preparations",
      points: [
        "Continue to drive whitelist marketing efforts.",
        "Refine and enhance the whitepaper based on feedback.",
        "Establish a partnership with Blockaci for security assurance.",
        "Set up the KyberBits GitHub environment for collaborative development.",
        "Finalize the scope of the blockchain project.",
        "Complete the design and functionality of the ICO website.",
        "Finalize the design and layout of the whitepaper.",
        "Partner with PhishFort for additional security measures.",
        "Pre-sale initiation.",
        "Participate in Token 2049 Singapore for global exposure.",
        "Form strategic partnerships with financial service providers.",
      ],
    },
    {
      quarter: "Q4 2024",
      title: "October – December",
      heading: "Core Development and Community Engagement",
      points: [
        "Begin the development of KyberBits' core blockchain.",
        "Develop a decentralized VPN.",
        "Focus on community expansion through campaigns.",
        "Host live AMAs (Ask Me Anything) sessions.",
      ],
    },
    {
      quarter: "Q1 2025",
      title: "January – March",
      heading: "Product Launch and Expansion",
      points: [
        "Launch the first version of the KyberBits platform.",
        "Expand partnerships with industry leaders.",
        "Focus on product scalability and performance.",
        "Launch international marketing campaigns.",
      ],
    },
  ];

  const settings = {
    dots: true, // Enable dots
    arrows: false, // Disable arrows
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    customPaging: (i) => (
      <div className="custom-dot">
        <span className="bg-none"><GoDash size={30} /></span> 
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true, // Enable dots on smaller screens
          customPaging: (i) => (
            <div className="custom-dot">
            <span className="bg-none"><GoDash  /></span> 
            </div>
          ),
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false,
          dots: true,
          customPaging: (i) => (
            <div className="custom-dot">
              <span className="bg-none"><GoDash /></span> 
            </div>
          ),
        },
      },
    ],
  };
  

  return (
    <div className="max-w-screen-xl mx-auto text-white my-10 relative">
        <motion.div
        className=" flex flex-col mt-24 p-8 space-y-7"
        initial={{ opacity: 0, y: 50 }}   // Start below the screen
        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
        transition={{ duration: 1 }}
        viewport={{ once: false }} // Keep triggering animation when in view
      >
        <motion.h1
           className="text-4xl text-center  leading-normal font-sans font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }}
        >
          RoadMap  
        </motion.h1>
        </motion.div>
    <Slider {...settings}>
      {roadmapItems.map((item, index) => (
        <div
          key={index}
          className="p-4 bg-[#1F1F1F] rounded-2xl shadow-lg mx-2"
        >
          <h2 className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 font-bold mb-4">
            {item.quarter}:{item.title}
          </h2>
          <h3 className="text-xl mt-2 mb-6">{item.heading}</h3>
          <ul className="list-disc pl-6 space-y-4">
            {item.points.map((point, idx) => (
              <li key={idx} className="text-[#6e6e6e] text-sm">
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Slider>
  </div>
  );
};

export default RoadMap;
