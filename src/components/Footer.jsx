import React from 'react';
import { assets } from '../assets/assets';
import { FaPhone, FaEnvelope, FaHome, FaInfoCircle, FaTruck, FaLock } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 px-6 py-16 mt-40 text-sm text-gray-700">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14">
                {/* Logo + Description */}
                <div>
                    <img src={assets.logo} className="mb-5 w-32" alt="Logo" />
                    <p className="w-full md:w-2/3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo optio pariatur, molestiae atque laborum voluptates?
                    </p>
                </div>

                {/* Company Links */}
                <div>
                    <p className="text-xl font-semibold text-gray-800 mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-2">
                        <li className="flex items-center gap-2 hover:text-purple-600 transition-all cursor-pointer">
                            <FaHome className="text-gray-500" /> Home
                        </li>
                        <li className="flex items-center gap-2 hover:text-purple-600 transition-all cursor-pointer">
                            <FaInfoCircle className="text-gray-500" /> About us
                        </li>
                        <li className="flex items-center gap-2 hover:text-purple-600 transition-all cursor-pointer">
                            <FaTruck className="text-gray-500" /> Delivery
                        </li>
                        <li className="flex items-center gap-2 hover:text-purple-600 transition-all cursor-pointer">
                            <FaLock className="text-gray-500" /> Privacy Policy
                        </li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <p className="text-xl font-semibold text-gray-800 mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-2 hover:text-pink-600 transition-all cursor-pointer">
                            <FaPhone className="text-gray-500" /> +91 7500403823
                        </li>
                        <li className="flex items-center gap-2 hover:text-pink-600 transition-all cursor-pointer">
                            <FaEnvelope className="text-gray-500" /> himanshu83930421@gmail.com
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-12">
                <hr className="border-gray-300" />
                <p className="py-5 text-sm text-center text-gray-600">
                    Copyright © 2025 forever.com — All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
