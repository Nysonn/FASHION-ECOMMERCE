import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

// Import image directly
import sampleImage from "../../../src/assets/images/sample-girl-image.jpg";

const ExploreCollective = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const containerRef = useRef(null);
  
  // Enhanced data with more fashion-focused details
  const categories = [
    {
      id: 1,
      title: "Women's Collection",
      subtitle: "Spring/Summer 2023",
      description: "Modern silhouettes and timeless elegance for the contemporary woman",
      image: "https://res.cloudinary.com/df3lhzzy7/image/upload/v1742328533/women-suits_mxniif.jpg",
      size: "large", // large item spans more columns/rows
      itemCount: 124,
      featured: true,
    },
    {
      id: 2,
      title: "Men's Essentials",
      subtitle: "Crafted Classics",
      description: "Refined essentials for the modern man's wardrobe",
      image: "https://res.cloudinary.com/df3lhzzy7/image/upload/v1742328642/men-watches_ephrft.jpg",
      size: "small",
      itemCount: 86,
    },
    {
      id: 3,
      title: "Accessories",
      subtitle: "Statement Pieces",
      description: "The finishing touches that define your personal style",
      image: "https://res.cloudinary.com/df3lhzzy7/image/upload/v1742328987/Accessories_za8xid.jpg",
      size: "small",
      itemCount: 58,
      new: true,
    },
    {
      id: 4,
      title: "Children's Wear",
      subtitle: "Playful & Practical",
      description: "Designed for comfort and built to last",
      image: "https://res.cloudinary.com/df3lhzzy7/image/upload/v1742328775/children-wear_ioyc0p.jpg",
      size: "medium",
      itemCount: 72,
    },
    {
      id: 5,
      title: "Seasonal Highlights",
      subtitle: "Curated Selection",
      description: "The definitive edit of this season's standout pieces",
      image: sampleImage,
      size: "medium",
      itemCount: 45,
      trending: true,
    },
  ];

  return (
    <section className="py-28 bg-[#f8f8f8]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section heading with elegant typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div>
            <h4 className="text-xs md:text-sm tracking-[0.2em] uppercase mb-2 text-gray-500 font-light">Discover Our World</h4>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-3">Explore <span className="italic font-extralight">Collective</span></h2>
            <div className="w-12 h-px bg-black mt-4 md:hidden"></div>
          </div>
          <div className="hidden md:block max-w-md">
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              Browse our carefully curated collections, where timeless elegance meets contemporary design. Each category represents our commitment to quality and style.
            </p>
          </div>
        </div>

        {/* Category grid with improved layout */}
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8"
        >
          {categories.map((category) => {
            // Determine the grid span based on size - improved sizing for fashion layout
            const colSpan = category.size === "large" ? "md:col-span-8" : 
                            category.size === "medium" ? "md:col-span-6" : 
                            "md:col-span-4";
            
            const rowSpan = category.size === "large" ? "md:row-span-2" : 
                            category.size === "medium" ? "md:row-span-1" : 
                            "md:row-span-1";
            
            // Calculate aspect ratio classes based on size
            const aspectRatio = category.size === "large" ? "aspect-[16/9] md:aspect-auto" : 
                                category.size === "medium" ? "aspect-[4/3] md:aspect-auto" : 
                                "aspect-[1/1] md:aspect-auto";
            
            // Calculate height based on size
            const height = category.size === "large" ? "md:h-[650px]" : 
                          category.size === "medium" ? "md:h-[320px]" : 
                          "md:h-[320px]";
            
            return (
              <motion.div
                key={category.id}
                className={`group relative overflow-hidden ${colSpan} ${rowSpan} ${height} ${aspectRatio}`}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: category.id * 0.1 }}
              >
                {/* Image with enhanced hover effects */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  >
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700"
                    />
                  </motion.div>
                  
                  {/* Gradient overlay with improved aesthetics */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-75 transition-opacity duration-500" />
                  
                  {/* Featured/New/Trending badges */}
                  {category.featured && (
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-3 py-1.5 z-10">
                      <span className="text-xs uppercase tracking-wider text-black font-medium">Featured</span>
                    </div>
                  )}
                  {category.new && (
                    <div className="absolute top-6 right-6 bg-black/90 backdrop-blur-sm px-3 py-1.5 z-10">
                      <span className="text-xs uppercase tracking-wider text-white font-medium">New</span>
                    </div>
                  )}
                  {category.trending && (
                    <div className="absolute top-6 right-6 bg-[#2c2c2c]/90 backdrop-blur-sm px-3 py-1.5 z-10">
                      <span className="text-xs uppercase tracking-wider text-white font-medium">Trending</span>
                    </div>
                  )}
                </div>
                
                {/* Category content with improved typography and layout */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-10">
                  <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100">
                    <h4 className="uppercase tracking-wider text-white/80 text-xs font-light mb-1">{category.subtitle}</h4>
                  </div>
                  
                  <h3 className="text-white text-2xl md:text-3xl font-light tracking-wide mb-3 transform transition-transform duration-300 group-hover:-translate-y-1">
                    {category.title}
                  </h3>
                  
                  <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4 opacity-0 group-hover:opacity-100">
                    <p className="text-white/80 text-sm mb-4 max-w-xs font-light leading-relaxed">
                      {category.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 text-xs">{category.itemCount} Items</span>
                      
                      <motion.button 
                        className="inline-flex items-center text-white text-sm uppercase tracking-wider font-light group/btn"
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="mr-2 relative">
                          Explore
                          <span className="absolute -bottom-1 left-0 w-full h-px bg-white transform origin-left scale-0 group-hover/btn:scale-100 transition-transform duration-300"></span>
                        </span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Editorial design accent elements */}
        <div className="mt-24 text-center">
          <div className="inline-block border-t border-gray-300 px-12 pt-6 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f8f8f8] px-4 text-xs uppercase tracking-widest text-gray-500 whitespace-nowrap">
              Designed with Passion
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCollective; 