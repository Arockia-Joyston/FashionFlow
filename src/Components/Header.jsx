import { useState } from "react";
import logo from "../Assets/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-yellow-300 relative z-50">
            {/* Main Header Container */}
            <div className="flex justify-between items-center p-4 h-[70px] md:px-[110px]">
                {/* Logo Section */}
                <div className="flex items-center gap-2">
                    <img src={logo} className="h-[70px] w-auto object-contain" alt="Logo" />
                    <h1 className="text-2xl font-bold text-gray-800">FashionFlow</h1>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-12">
                    <Link to={"/"} className="font-semibold hover:text-gray-600 transition-colors">Home</Link>
                    <Link to={"/"} className="font-semibold hover:text-gray-600 transition-colors">Men</Link>
                    <Link to={"/"} className="font-semibold hover:text-gray-600 transition-colors">Women</Link>
                    <Link to={"/"} className="font-semibold hover:text-gray-600 transition-colors">Kids</Link>
                </nav>

                {/* Desktop Actions (Hidden on Mobile, flex on Desktop) */}
                <div className="hidden md:flex items-center gap-6">
                    <button className="bg-red-300 px-6 py-2 rounded-full font-medium hover:bg-red-400 transition-colors">
                        Login
                    </button>
                    <Link to={"/"} className="font-semibold hover:text-gray-600">Cart</Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="md:hidden p-2 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-[70px] left-0 w-full bg-yellow-300 border-t border-yellow-400 flex flex-col items-center gap-4 py-6 shadow-md md:hidden">
                    <Link to={"/"} onClick={() => setIsOpen(false)} className="font-semibold text-lg">Home</Link>
                    <Link to={"/"} onClick={() => setIsOpen(false)} className="font-semibold text-lg">Men</Link>
                    <Link to={"/"} onClick={() => setIsOpen(false)} className="font-semibold text-lg">Women</Link>
                    <Link to={"/"} onClick={() => setIsOpen(false)} className="font-semibold text-lg">Kids</Link>
                    <hr className="w-4/5 border-yellow-400 my-2" />
                    <button onClick={() => setIsOpen(false)} className="bg-red-300 px-8 py-2 rounded-full font-medium w-4/5 max-w-[200px]">
                        Login
                    </button>
                    <Link to={"/"} onClick={() => setIsOpen(false)} className="font-semibold text-lg">Cart</Link>
                </div>
            )}
        </header>
    );
}

export default Header;