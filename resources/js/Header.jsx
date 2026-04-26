import { useState } from "react";
import { Link } from 'react-router-dom'
import { MdMenu, MdClose } from 'react-icons/md'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleMenuOpen() {
        setMenuOpen(!menuOpen);
    }

    return (
        <header className="text-black border-b sticky top-0 bg-white z-50">
            <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Link to="/">
                            <span className="text-xl sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                                Clarityix
                            </span>
                        </Link>
                    </div>
                    <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm">
                        <Link to="/" className="text-gray-900 hover:text-gray-600 transition">Home</Link>
                        <Link to="/tools" className="text-gray-900 hover:text-gray-600 transition">Tools</Link>
                        <Link to="/premium" className="text-gray-900 hover:text-gray-600 transition">Premium</Link>
                        <Link to="/contact" className="text-gray-900 hover:text-gray-600 transition">Contact</Link>
                        <Link to="/workspace" className="text-gray-900 hover:text-gray-600 transition">About</Link>
                    </div>
                    <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
                        <Link to="/login" className="text-sm text-gray-900 hover:text-gray-600 transition">Login</Link>
                        <Link to="/signup" className="text-sm bg-black text-white px-3 xl:px-4 py-2 rounded-lg hover:bg-gray-800 transition font-medium">Sign up</Link>
                    </div>
                    <button onClick={handleMenuOpen} className={`lg:hidden text-black p-2 hover:bg-gray-100 rounded-lg transition`}>
                        {menuOpen ? <MdClose className="w-6 h-6" /> : <MdMenu className="w-6 h-6" />}
                    </button>
                </div>
                <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden mt-4 pb-4 border-t pt-4`}>
                    <div className="flex flex-col space-y-4">
                        <a href="#" className="text-gray-900 hover:text-gray-600 transition py-2">Home</a>
                        <a href="#" className="text-gray-900 hover:text-gray-600 transition py-2">Tools</a>
                        <a href="#" className="text-gray-900 hover:text-gray-600 transition py-2">Premium</a>
                        <a href="#" className="text-gray-900 hover:text-gray-600 transition py-2">Contact</a>
                        <a href="#" className="text-gray-900 hover:text-gray-600 transition py-2">About</a>
                        <div className="border-t pt-4 flex flex-col space-y-3">
                            <a href="#" className="text-gray-900 hover:text-gray-600 transition py-2">Log in</a>
                            <a href="#" className="bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-800 transition font-medium text-center">Sign up</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}