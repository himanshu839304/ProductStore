import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Only show the search bar on specific routes (e.g., "collection")
        setVisible(location.pathname.includes('collection'));
    }, [location]);

    // Don't render if search is off or not visible in this route
    if (!(showSearch && visible)) return null;

    return (
        <div className="border-t border-b bg-gradient-to-r from-purple-100 to-pink-100 py-4 text-center">
            <div className="inline-flex items-center justify-between border border-purple-400 px-4 py-2 rounded-full bg-white shadow-md transition-all duration-300 hover:shadow-xl focus-within:ring-2 focus-within:ring-purple-300">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 outline-none bg-transparent text-sm px-2 text-gray-700 placeholder-gray-500 transition-all duration-200 focus:text-purple-600"
                    type="text"
                    placeholder="Search products..."
                    aria-label="Search products"
                />
                <img
                    className="w-4 cursor-pointer opacity-80 hover:opacity-100 transition-all duration-200"
                    src={assets.search_icon}
                    alt="Search"
                    aria-label="Search"
                />
            </div>
            <img
                onClick={() => setShowSearch(false)}
                className="inline w-3 ml-4 cursor-pointer opacity-70 hover:opacity-100 transition-all duration-200"
                src={assets.cross_icon}
                alt="Close"
                aria-label="Close search bar"
            />
        </div>
    );
};

export default SearchBar;
