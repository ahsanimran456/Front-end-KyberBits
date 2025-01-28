"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import logo from '../../public/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    // Scroll detection to change background color
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed font-sans top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-black/90 shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-screen-2xl mx-auto flex items-center justify-between py-2 px-4">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/" className="hover:text-gray-300">
                        <Image src={logo} alt="KyberBits Logo" width={50} height={50} className="mr-2" />
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className="hidden text-sm xl:flex space-x-6">
                    <li>
                        <Link href="/wallets" className="hover:text-gray-300">
                            Wallet
                        </Link>
                    </li>
                    <li>
                        <Link href="/bankinstitutions" className="hover:text-gray-300">
                            Banks & Institutions
                        </Link>
                    </li>
                    <li>
                        <Link href="/qubeqode" className="hover:text-gray-300">
                            QubeQode
                        </Link>
                    </li>
                    <li>
                        <Link href="/dvpn" className="hover:text-gray-300">
                            dVPN
                        </Link>
                    </li>
                    <li>
                        <Link href="/tokenomics" className="hover:text-gray-300">
                            Tokenomics
                        </Link>
                    </li>
                    <li>
                        <Link href="/roadmap" className="hover:text-gray-300">
                            Roadmap
                        </Link>
                    </li>
                    <li>
                        <Link href="/blogs" className="hover:text-gray-300">
                            Blogs
                        </Link>
                    </li>
                    <li>
                        <Link href="/how-to-buy" className="hover:text-gray-300">
                            How To Buy
                        </Link>
                    </li>
                    <li>
                        <Link href="/our-vision" className="hover:text-gray-300">
                            Our Vision
                        </Link>
                    </li>
                    <li>
                        <Link href="/whitepaper" className="hover:text-gray-300">
                            Whitepaper
                        </Link>
                    </li>
                    <li>
                        <Link href="/testnet" className="hover:text-gray-300">
                            TestNet
                        </Link>
                    </li>
                </ul>

                <div className="flex items-center space-x-2">
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/join-presale"
                        >
                            <button className="px-6  font-normal text-xs min-w-7 min-h-8  text-black  rounded-full shadow-lg bg-gradient-to-r from-green-200 via-blue-400 to-purple-500 hover:opacity-90 transition-all duration-300">
                                Join Presale
                            </button>
                        </Link>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="xl:hidden mt-2">
                        <button>
                            <FaBars className="text-white h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
