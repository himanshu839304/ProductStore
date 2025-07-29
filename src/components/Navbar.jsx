import React, { useContext, useEffect, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, cartItems } = useContext(ShopContext);

    const navLinks = [
        { to: '/', label: 'HOME' },
        { to: '/collection', label: 'COLLECTION' },
        { to: '/about', label: 'ABOUT' },
        { to: '/contact', label: 'CONTACT' },
    ];

    // Calculate total cart items
    const getCartCount = () => {
        return Object.values(cartItems || {}).reduce((total, item) => {
            return total + Object.values(item).reduce((a, b) => a + b, 0);
        }, 0);
    };

    // Escape key closes menu
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') setVisible(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            {/* Overlay background for mobile menu */}
            {visible && (
                <div
                    className="fixed inset-0 bg-black opacity-30 z-40"
                    onClick={() => setVisible(false)}
                ></div>
            )}

            <div className="flex items-center justify-between py-5 font-medium relative px-4 sm:px-8 z-50 bg-white">
                {/* Logo */}
                <Link to="/"><img src={assets.logo} className="w-36" alt="Logo" /></Link>

                {/* Desktop Navigation */}
                <ul className="hidden sm:flex gap-5 text-sm text-gray-600">
                    {navLinks.map(({ to, label }) => (
                        <li key={label}>
                            <NavLink
                                to={to}
                                className={({ isActive }) =>
                                    `flex flex-col items-center gap-1 transition-all duration-200 hover:text-black ${isActive ? 'text-black font-semibold' : ''
                                    }`
                                }
                            >
                                <p>{label}</p>
                                {/* Optional underline */}
                                <hr className="w-2/4 h-[1.5px] bg-gray-700 transition-all duration-300" style={{ visibility: window.location.pathname === to ? 'visible' : 'hidden' }} />
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Icons Section */}
                <div className="flex items-center gap-6">
                    {/* Search Icon */}
                    <img
                        onClick={() => setShowSearch(true)}
                        src={assets.search_icon}
                        className="w-5 cursor-pointer"
                        alt="Search"
                        aria-label="Open search"
                    />

                    {/* Profile Dropdown */}
                    <div className="group relative" tabIndex={0}>
                        <Link to={'/login'}><img className="w-5 cursor-pointer" src={assets.profile_icon} alt="Profile" /></Link>
                        <div className="group-hover:block hidden absolute right-0 pt-5 z-50">
                            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow">
                                <p className="cursor-pointer hover:text-black">My Profile</p>
                                <p className="cursor-pointer hover:text-black">Orders</p>
                                <p className="cursor-pointer hover:text-black">Logout</p>
                            </div>
                        </div>
                    </div>

                    {/* Cart Icon */}
                    <Link to="/cart" className="relative">
                        <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
                        <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
                            {getCartCount()}
                        </p>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <img
                        onClick={() => setVisible(true)}
                        src={assets.menu_icon}
                        className="w-5 cursor-pointer sm:hidden"
                        alt="Menu"
                    />
                </div>

                {/* Mobile Side Menu */}
                <div
                    className={`fixed top-0 right-0 h-full bg-white z-50 transition-all duration-300 ease-in-out ${visible ? 'w-64 px-6 py-5 shadow-lg' : 'w-0 px-0 py-0 overflow-hidden'
                        }`}
                >
                    <div className="flex justify-between items-center mb-6">
                        <img src={assets.logo} className="w-24" alt="Logo" />
                        <button onClick={() => setVisible(false)}>
                            <img src={assets.dropdown_icon} className="w-5 rotate-90" alt="Close Menu" />
                        </button>
                    </div>
                    <ul className="flex flex-col gap-4 text-gray-600 text-sm">
                        {navLinks.map(({ to, label }) => (
                            <li key={label}>
                                <NavLink
                                    to={to}
                                    onClick={() => setVisible(false)}
                                    className={({ isActive }) =>
                                        `block py-2 border-b border-gray-200 ${isActive ? 'text-black font-medium' : ''}`
                                    }
                                >
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                        <li className="pt-4">
                            <p className="text-gray-400 text-xs uppercase">Account</p>
                            <div className="flex flex-col gap-2 mt-2">
                                <p className="cursor-pointer hover:text-black">My Profile</p>
                                <p className="cursor-pointer hover:text-black">Orders</p>
                                <p className="cursor-pointer hover:text-black">Logout</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar;
