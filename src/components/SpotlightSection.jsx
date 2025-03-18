import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

// Import the image directly
import sampleImage from "/src/assets/images/sample-girl-image.jpg";

const SpotlightSection = () => {
  // Refined data with luxury fashion details
  const spotlightItems = [
    {
      id: 1,
      title: "Atelier Collection",
      subtitle: "Limited Edition Jacket",
      description: "An exclusive designer collaboration featuring premium materials and meticulous craftsmanship. Each piece is individually numbered and comes with a certificate of authenticity.",
      image: "https://res.cloudinary.com/df3lhzzy7/image/upload/v1742328280/orange-fashion-dress_pe52kv.jpg",
      price: "$129.99",
      originalPrice: "$189.99",
      colors: ["Noir", "Ivory", "Sage"],
      material: "100% Organic Cotton",
      isLimited: true,
      availableUnits: 18,
      designerQuote: "Inspired by the juxtaposition of urban architecture and natural forms",
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      id: 2,
      title: "Heritage Series",
      subtitle: "Premium Denim Collection",
      description: "Ethically sourced and sustainably produced denim that combines timeless style with modern sensibility. Features innovative stretch technology for ultimate comfort.",
      image: "https://res.cloudinary.com/df3lhzzy7/image/upload/v1742328405/suits-guy_dysrse.jpg",
      price: "$89.99",
      colors: ["Indigo", "Noir", "Vintage Wash"],
      material: "98% Cotton, 2% Elastane",
      isEco: true,
      availableUnits: 42,
      designerQuote: "Crafted to age beautifully, revealing character with time",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    },
    {
      id: 3,
      title: "Artisan Series",
      subtitle: "Luxury Accessories",
      description: "Handcrafted by skilled artisans using traditional techniques. These statement pieces elevate any outfit with their distinctive design and attention to detail.",
      image: "https://res.cloudinary.com/df3lhzzy7/image/upload/v1742328642/men-watches_ephrft.jpg",
      price: "$149.99",
      originalPrice: "$179.99",
      colors: ["Gold", "Silver", "Rose Gold"],
      material: "Recycled Precious Metals",
      isNew: true,
      availableUnits: 32,
      designerQuote: "A celebration of heritage craftsmanship in contemporary design",
      sizes: ["One Size"],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const progressAnimation = useAnimation();
  
  // Handle progress bar animation
  useEffect(() => {
    progressAnimation.start({
      scaleX: 0,
      transition: { duration: 0 }
    });
    
    progressAnimation.start({
      scaleX: 1,
      transition: { duration: 8, ease: "linear" }
    });
  }, [activeIndex, progressAnimation]);

  // Auto-rotate spotlight items
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveIndex((current) => (current + 1) % spotlightItems.length);
          setIsTransitioning(false);
        }, 500);
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isTransitioning, spotlightItems.length]);

  // Handle manual navigation
  const handleNavigation = (index) => {
    if (index !== activeIndex && !isTransitioning) {
      setIsTransitioning(true);
      progressAnimation.stop();
      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const activeItem = spotlightItems[activeIndex];

  // Mouse parallax effect for image
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    setMousePosition({ x, y });
  };

  return (
    <section className="py-28 bg-[#f9f9f9] relative overflow-hidden">
      {/* Editorial design accent elements */}
      <div className="absolute -top-28 -right-28 w-56 h-56 rounded-full border border-black/10 opacity-50"></div>
      <div className="absolute top-1/4 -left-20 w-40 h-40 rounded-full border border-black/10 opacity-50"></div>
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full border border-black/10 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section header with editorial styling */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
          <div>
            <h4 className="text-xs md:text-sm tracking-[0.2em] uppercase mb-2 text-gray-500 font-light">Curated Selection</h4>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-3">In The <span className="italic font-extralight">Spotlight</span></h2>
            <div className="w-12 h-px bg-black mt-4 md:hidden"></div>
          </div>
          <div className="hidden md:block">
            <p className="text-sm text-gray-600 max-w-sm font-light">
              Explore our handpicked selection of exclusive pieces that define this season's most coveted styles.
            </p>
          </div>
          <div className="hidden md:block w-20 h-px bg-black"></div>
        </div>

        {/* Main display container */}
        <div 
          ref={containerRef} 
          className="relative mb-24" 
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
        >
          {/* Auto-rotating progress indicator */}
          <div className="absolute top-0 left-0 right-0 z-10 h-0.5 bg-gray-200 overflow-hidden">
            <motion.div 
              className="h-full bg-black origin-left"
              animate={progressAnimation}
            ></motion.div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden"
            >
            <div className="flex flex-col lg:flex-row">
                {/* Image column with editorial layout */}
                <div className="lg:w-[55%] relative overflow-hidden bg-[#f0f0f0] min-h-[500px] md:min-h-[650px]">
                  {/* Main product image with parallax effect */}
                  <motion.div 
                    className="absolute inset-0 z-0"
                    style={{
                      x: mousePosition.x * 15,
                      y: mousePosition.y * 15,
                    }}
                  >
                    <motion.img
                      src={activeItem.image}
                      alt={activeItem.title}
                      className="w-full h-full object-cover object-center scale-[1.05]"
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1.05 }}
                      transition={{ duration: 0.7 }}
                    />
                  </motion.div>
                  
                  {/* Overlaid design elements */}
                  <div className="absolute top-0 right-0 h-32 w-32 border-t border-r border-black/10"></div>
                  <div className="absolute bottom-0 left-0 h-32 w-32 border-b border-l border-black/10"></div>
                  
                  {/* Status labels with refined styling */}
                  <div className="absolute top-8 left-8 flex space-x-3 z-10">
                    {activeItem.isLimited && (
                      <motion.span 
                        className="bg-black text-white text-xs tracking-widest uppercase px-3 py-1.5 flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span className="mr-2 inline-block w-1.5 h-1.5 bg-white rounded-full"></span>
                        Limited Edition
                      </motion.span>
                    )}
                    {activeItem.isEco && (
                      <motion.span 
                        className="bg-[#1e392a] text-white text-xs tracking-widest uppercase px-3 py-1.5 flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span className="mr-2 inline-block w-1.5 h-1.5 bg-white rounded-full"></span>
                        Sustainable
                      </motion.span>
                    )}
                    {activeItem.isNew && (
                      <motion.span 
                        className="bg-white text-black text-xs tracking-widest uppercase px-3 py-1.5 flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <span className="mr-2 inline-block w-1.5 h-1.5 bg-black rounded-full"></span>
                        New Arrival
                      </motion.span>
                    )}
              </div>
                  
                  {/* Available units counter for limited items */}
                  {activeItem.availableUnits && activeItem.availableUnits < 50 && (
                    <motion.div 
                      className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm px-4 py-3 z-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className="text-xs uppercase tracking-widest text-gray-500">Available Units</p>
                      <p className="text-2xl font-light">{activeItem.availableUnits}</p>
                    </motion.div>
                  )}
                  
                  {/* Designer quote - fashion editorial touch */}
                  {activeItem.designerQuote && (
                    <motion.div 
                      className="absolute bottom-8 right-8 max-w-[200px] z-10 hidden md:block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <p className="text-xs italic text-black/80 font-light">"{activeItem.designerQuote}"</p>
                    </motion.div>
                  )}
              </div>
                
                {/* Content side with enhanced typography */}
                <div className="lg:w-[45%] p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    {/* Title with refined typography */}
                    <h4 className="text-sm uppercase tracking-widest text-gray-500 mb-2">{activeItem.title}</h4>
                    <h3 className="text-3xl md:text-4xl font-light tracking-tight mb-6">{activeItem.subtitle}</h3>
                    
                    <p className="text-gray-600 mb-8 leading-relaxed font-light">{activeItem.description}</p>
                    
                    {/* Product details with refined styling */}
                    <div className="mb-8 space-y-5">
                      <div className="flex items-center">
                        <span className="text-xs uppercase tracking-widest text-gray-400 w-24">Price</span>
                        <div className="flex items-center">
                          <span className="text-2xl font-medium">{activeItem.price}</span>
                          {activeItem.originalPrice && (
                            <span className="ml-3 text-gray-400 line-through text-sm">{activeItem.originalPrice}</span>
                          )}
            </div>
          </div>

                      <div className="flex">
                        <span className="text-xs uppercase tracking-widest text-gray-400 w-24 pt-1">Colors</span>
                        <div className="flex flex-col">
                          <div className="flex items-center space-x-2 mb-2">
                            {activeItem.colors.map((color, idx) => {
                              // Map color names to actual color codes for display
                              const colorMap = {
                                'Noir': '#000000',
                                'Black': '#000000',
                                'Ivory': '#FFFFF0',
                                'Sage': '#BCB88A',
                                'Indigo': '#3F00FF',
                                'Vintage Wash': '#C4B7A6',
                                'Gold': '#FFD700',
                                'Silver': '#C0C0C0',
                                'Rose Gold': '#B76E79',
                              };
                              
                              return (
                                <div 
                                  key={idx} 
                                  className={`w-6 h-6 rounded-full border-2 ${idx === 0 ? 'border-black' : 'border-transparent hover:border-gray-300'} cursor-pointer flex items-center justify-center`}
                                >
                                  <div 
                                    className="w-4 h-4 rounded-full" 
                                    style={{backgroundColor: colorMap[color] || '#888'}}
                                  ></div>
                                </div>
                              );
                            })}
                          </div>
                          <span className="text-sm">
                            {activeItem.colors[0]} <span className="text-xs text-gray-400">(+{activeItem.colors.length - 1} more)</span>
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <span className="text-xs uppercase tracking-widest text-gray-400 w-24 pt-1">Sizes</span>
                        <div className="flex flex-wrap gap-2">
                          {activeItem.sizes.map((size, idx) => (
              <button
                              key={idx}
                              className={`min-w-[40px] h-10 flex items-center justify-center border ${
                                idx === 0 ? 'border-black bg-black text-white' : 'border-gray-200 hover:border-gray-400 text-gray-800'
                              } text-sm transition-colors`}
                            >
                              {size}
                            </button>
            ))}
          </div>
        </div>

                      <div className="flex">
                        <span className="text-xs uppercase tracking-widest text-gray-400 w-24">Material</span>
                        <span className="text-sm">{activeItem.material}</span>
                      </div>
                    </div>
                    
                    {/* Action buttons with refined styling */}
                    <div className="space-y-4">
                      <motion.button 
                        className="w-full bg-black text-white py-4 uppercase tracking-widest text-sm hover:bg-gray-900 transition-colors relative overflow-hidden group"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                      >
                        <span className="relative z-10">Add to Shopping Bag</span>
                        <motion.div 
                          className="absolute inset-0 bg-gray-800 origin-left" 
                          initial={{ scaleX: 0 }}
                          whileHover={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.button>
                      
                      <div className="flex space-x-3">
                        <motion.button 
                          className="flex-1 border border-black py-3 uppercase tracking-widest text-xs hover:bg-black hover:text-white transition-colors"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Save to Wishlist
                        </motion.button>
                        <motion.button 
                          className="w-12 h-12 border border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Refined navigation controls */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 pointer-events-none z-20">
            <motion.button 
              className="bg-white h-12 w-12 border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-colors pointer-events-auto"
              whileHover={{ x: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation((activeIndex - 1 + spotlightItems.length) % spotlightItems.length)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>
            <motion.button 
              className="bg-white h-12 w-12 border border-gray-200 flex items-center justify-center text-black hover:bg-black hover:text-white hover:border-black transition-colors pointer-events-auto"
              whileHover={{ x: 3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation((activeIndex + 1) % spotlightItems.length)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Visual navigation with more editorial styling */}
        <div className="hidden md:block relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 text-xs tracking-widest uppercase text-gray-400 bg-[#f9f9f9] px-4">
            Browse Collection
          </div>
          <div className="pt-6 border-t border-gray-200"></div>
          
          <div className="grid grid-cols-3 gap-8 mt-8">
          {spotlightItems.map((item, index) => (
              <motion.button
              key={item.id}
                className={`group relative overflow-hidden ${
                  activeIndex === index ? "opacity-100" : "opacity-50 hover:opacity-100"
                } transition-opacity duration-300`}
                onClick={() => handleNavigation(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="aspect-[3/4] overflow-hidden bg-[#f0f0f0]">
              <img
                src={item.image}
                alt={item.title}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      activeIndex === index ? "scale-100" : "group-hover:scale-105 scale-110"
                    }`}
                  />
                  <div className={`absolute inset-0 transition-opacity duration-300 ${
                    activeIndex === index ? "bg-black/0" : "bg-black/10 group-hover:bg-black/0"
                  }`}></div>
                  
                  {/* Item indicator */}
                  {activeIndex === index && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black"></div>
                  )}
                </div>
                
                <div className="mt-4 text-left">
                  <h5 className="text-xs uppercase tracking-widest text-gray-500">{item.title}</h5>
                  <h4 className={`text-sm font-medium mt-1 ${activeIndex === index ? 'text-black' : 'text-gray-600'}`}>
                    {item.subtitle}
                  </h4>
                  <p className="text-sm mt-1">{item.price}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Enhanced mobile dots navigation */}
        <div className="flex justify-center items-center mt-8 md:hidden">
          {spotlightItems.map((_, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(index)}
              className={`flex flex-col items-center mx-4 transition-all duration-300 ${
                index === activeIndex ? 'opacity-100' : 'opacity-50'
              }`}
              aria-label={`View spotlight item ${index + 1}`}
            >
              <div className={`w-1.5 h-1.5 rounded-full mb-2 ${
                index === activeIndex ? 'bg-black' : 'bg-gray-300'
              }`}></div>
              <span className="text-xs text-gray-800">{index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection; 