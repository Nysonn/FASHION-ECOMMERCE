import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from "react-redux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCategory, setActiveCategory] = useState(null);
  
  // Grab the isHome flag from Redux
  const isHome = useSelector((state) => state.ui.isHome);

  // Always initialize with appropriate state based on current route
  useEffect(() => {
    // If not on homepage, ALWAYS use scrolled styling
    setIsScrolled(!isHome);
    if (!isHome) {
      setScrollProgress(1); // Fully scrolled on non-home pages
    }
  }, [isHome]);

  // Enhanced scroll listener with smooth animation
  useEffect(() => {
    if (!isHome) return; // no scroll behavior on non-home pages
    
    // Set initial states
    setScrollProgress(Math.min(window.scrollY / 100, 1));
    setIsScrolled(window.scrollY > 30);
    
    const handleScroll = () => {
      // Calculate scroll progress as a value between 0 and 1
      const progress = Math.min(window.scrollY / 100, 1);
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 30);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // Categories without subcategories
  const categories = [
    { name: "New In" },
    { name: "Women" },
    { name: "Men" },
    { name: "Accessories" },
    { name: "Sale" }
  ];

  // Base colors
  const baseGradient = "from-gray-50 to-gray-100";
  const scrolledBg = "bg-white";
  
  // Dynamic styles based on scroll progress
  const interpolateValue = (start, end) => {
    return start + (end - start) * scrollProgress;
  };
  
  // Dynamic padding calculation (py-4 to py-2)
  const paddingY = interpolateValue(4, 2);

  return (
    <>
      <motion.header 
        className={`fixed top-0 w-full z-50 ${isScrolled ? scrolledBg : "bg-gradient-to-r " + baseGradient}`}
        style={{
          paddingTop: `${paddingY * 0.25}rem`,
          paddingBottom: `${paddingY * 0.25}rem`,
          boxShadow: isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" : "none",
        }}
        animate={{
          height: isScrolled ? 64 : 80,
          transition: { 
            duration: 0.4, 
            ease: [0.19, 1.0, 0.22, 1.0] // Ease-out-expo for smooth animation
          }
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-1">
              <Link to="/" className="flex items-center">
                <h1 className="text-xl md:text-3xl font-light tracking-widest">
                  <span className="font-serif mr-1">C</span>
                  <motion.span 
                    className="font-extralight"
                    animate={{ 
                      color: isScrolled ? "#000000" : "#1a202c",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    ollective
                  </motion.span>
                  <span className="ml-1 h-2 w-2 rounded-full bg-black inline-block"></span>
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              {categories.map((category) => (
                <div key={category.name} className="relative group mx-4">
                  <Link 
                    to={`/${category.name.toLowerCase().replace(" ", "-")}`}
                    className="text-sm uppercase tracking-wider font-light transition-all duration-300 pb-2 border-b-2 text-gray-800 hover:text-black border-transparent hover:border-gray-500"
                  >
                    {category.name}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center space-x-6 ml-4">
              <motion.button 
                className="relative group transition-all duration-300 text-gray-700 hover:text-black"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-gray-800">
                  Search
                </span>
              </motion.button>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link to="/account" className="relative group transition-all duration-300 text-gray-700 hover:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-gray-800">
                    Account
                  </span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link to="/wishlist" className="relative group transition-all duration-300 text-gray-700 hover:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-gray-800">
                    Wishlist
                  </span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link to="/cart" className="relative group transition-all duration-300 text-gray-700 hover:text-black">
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <motion.span 
                      className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center text-xs bg-black text-white rounded-full"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 500,
                        damping: 15
                      }}
                    >
                      2
                    </motion.span>
                  </div>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-gray-800">
                    Cart
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <motion.button 
              className="lg:hidden ml-5 transition-colors duration-300 text-gray-700 hover:text-black"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
              whileTap={{ scale: 0.9 }}
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
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu - Slide in from the side */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ 
                type: 'spring', 
                stiffness: 300, 
                damping: 30 
              }}
              className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-white z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-serif text-xl">Menu</h3>
                  <motion.button 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-600 hover:text-black"
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>

                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full py-2 pl-3 pr-10 border-b border-gray-200 focus:outline-none focus:border-black text-sm"
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
                
                <motion.div 
                  className="mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.07, delayChildren: 0.1 }}
                >
                  {categories.map((category, index) => (
                    <motion.div 
                      key={category.name} 
                      className="mb-4"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link 
                        to={`/${category.name.toLowerCase().replace(" ", "-")}`}
                        className="text-gray-800 text-sm uppercase tracking-wider font-medium block mb-2"
                      >
                        {category.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="border-t border-gray-100 pt-6 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link to="/sign-in" className="flex items-center text-gray-700 hover:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span className="text-sm uppercase tracking-wider">Sign In / Register</span>
                  </Link>
                  <Link to="/store-locator" className="flex items-center text-gray-700 hover:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-sm uppercase tracking-wider">Find a Store</span>
                  </Link>
                  <Link to="/wishlist" className="flex items-center text-gray-700 hover:text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className="text-sm uppercase tracking-wider">Wishlist</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;