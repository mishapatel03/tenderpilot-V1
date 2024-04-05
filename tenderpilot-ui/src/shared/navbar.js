// Navbar.js
import React, { useState } from 'react';

const Navbar = ({ title, username, notifications, currOrg }) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    return (
        <nav className="bg-cyan-600 p-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <h1 className="text-white text-xl font-bold">{title}</h1>
                    <div className="border rounded p-2 text-white ml-3 shadow-md">
                        <span className="text-sm font-bold mb-2">Organization: {currOrg} | Buyer Account</span>
                        {/* Add other content here */}
                    </div>
                </div>
                <div className="text-white items-center relative inline-block text-left">
                    <div className="flex items-center">
                        <img src="https://www.gravatar.com/avatar/34095df106b8ee08c928802c78eee85d?d=identicon" alt="User Avatar" className="w-8 h-8 rounded-full" />
                        <span className="ml-2" onClick={toggleDropdown}>{username}</span>
                    </div>
                    {showDropdown &&
                        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Organization</a>
                                <a href="#" className="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100" role="menuitem">Logout</a>
                            </div>
                        </div>
                    }
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
