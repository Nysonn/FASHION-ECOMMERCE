import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-1">
          <a href="#" className="flex items-center">
            <h1 className="text-3xl font-light tracking-wider">
              <span className="font-serif mr-1">C</span>
              <span className={`font-extralight transition-colors duration-300 ${
                isScrolled ? "text-black" : "text-white"
              }`}>ollective</span>
              <span className="ml-1 h-2 w-2 rounded-full bg-black inline-block"></span>
            </h1>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          {["New In", "Women", "Men", "Accessories", "Sale"].map((item) => (
            <a 
              key={item}
              href="#" 
              className={`mx-4 text-sm uppercase tracking-wider font-light transition-all duration-300 border-b-2 border-transparent hover:border-black ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-5 ml-4">
          <button className={`transition-colors duration-300 ${
            isScrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-200"
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button className={`transition-colors duration-300 ${
            isScrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-200"
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className={`relative transition-colors duration-300 ${
            isScrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-200"
          }`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center text-xs bg-black text-white rounded-full">2</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className={`md:hidden ml-5 transition-colors duration-300 ${
            isScrolled ? "text-gray-700 hover:text-black" : "text-white hover:text-gray-200"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100 shadow-xl" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="grid grid-cols-2 gap-y-4 gap-x-2 pb-4">
            {["New In", "Women", "Men", "Accessories", "Sale"].map((item) => (
              <a 
                key={item}
                href="#" 
                className="text-gray-800 text-sm uppercase tracking-wide py-2 hover:text-black font-light"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="border-t border-gray-100 pt-4 pb-2">
            <div className="flex items-center justify-between my-2">
              <a href="#" className="text-xs uppercase tracking-wider text-gray-500 hover:text-black">Sign In</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-xs uppercase tracking-wider text-gray-500 hover:text-black">Register</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-xs uppercase tracking-wider text-gray-500 hover:text-black">Find a Store</a>
            </div>
            
            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-3 pr-10 bg-gray-50 border-none rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-900 text-sm"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 