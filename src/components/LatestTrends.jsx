import React, { useState } from "react";
import { motion } from "framer-motion";

// Import the image directly - this is the most reliable method
import sampleImage from "../../src/assets/images/sample-girl-image.jpg";

const LatestTrends = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  // Category filters
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = ["All", "Women", "Men", "Children", "Accessories"];

  // Enhanced product data with fixed image paths
  const trendingItems = [
    {
      id: 1,
      title: "Summer Dress",
      category: "Women",
      // Use the imported image variable
      image: "https://res.cloudinary.com/df3lhzzy7/image/upload/v1742327735/summer-dress_acnw96.jpg",
      price: "$89.99",
      originalPrice: "$120.00",
      isNew: true,
      colors: ["#E2C8BA", "#000000", "#FFFFFF"],
      tag: "Bestseller",
    },
    {
      id: 2,
      title: "Casual Shirt",
      category: "Men",
      image: "https://res.cloudinary.com/df3lhzzy7/image/upload/v1742328090/casual-shirt_mx7ina.jpg", // Same image for now
      price: "$59.99",
      isNew: false,
      colors: ["#465667", "#C9C9C9", "#F5F5DC"],
    },
    {
      id: 3,
      title: "Kids Outfit",
      category: "Children",
      image: "https://res.cloudinary.com/df3lhzzy7/image/upload/v1742328050/kid-outfit_hgnduk.jpg", 
      price: "$49.99",
      originalPrice: "$65.00",
      isNew: true,
      colors: ["#F5B8B8", "#B8D0F5"],
      tag: "Sale",
    },
    {
      id: 4,
      title: "Elegant Blouse",
      category: "Women",
      image: "https://res.cloudinary.com/df3lhzzy7/image/upload/v1742328045/elegant-blouce_axywxr.jpg", // Same image for now
      price: "$69.99",
      isNew: false,
      colors: ["#FFFFFF", "#000000", "#E8D0C9"],
    },
  ];

  // Filter items based on active category
  const filteredItems = activeFilter === "All" 
    ? trendingItems 
    : trendingItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        {/* Section heading with elegant typography */}
        <div className="text-center mb-12">
          <h4 className="text-sm tracking-widest uppercase mb-2 text-gray-500">Discover</h4>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-3">Latest Trends</h2>
          <div className="w-20 h-0.5 bg-black mx-auto"></div>
        </div>
        
        {/* Category Filters - Horizontal scrolling on mobile */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2 -mx-4 px-4 hide-scrollbar">
          <div className="flex space-x-2 md:space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`whitespace-nowrap px-5 py-2 text-xs md:text-sm tracking-wider transition-colors
                  ${activeFilter === category 
                    ? 'bg-black text-white' 
                    : 'bg-white text-gray-800 hover:bg-gray-100'}`
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Grid with animation */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.id * 0.1 }}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
            >
              {/* Product Image Container */}
              <div className="relative overflow-hidden aspect-[3/4] bg-[#f1f1f1]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Image Loading Fallback */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200 opacity-0">
                  <p className="text-gray-500">Loading image...</p>
                </div>
                
                {/* Overlay Elements */}
                <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
                
                {/* Product Tags (New, Sale, etc) */}
                {item.tag && (
                  <span className="absolute top-4 left-4 bg-black text-white text-xs tracking-wider uppercase px-3 py-1.5">
                    {item.tag}
                  </span>
                )}
                {!item.tag && item.isNew && (
                  <span className="absolute top-4 left-4 bg-white text-black text-xs tracking-wider uppercase px-3 py-1.5">
                    New
                  </span>
                )}
                
                {/* Quick Actions (only visible on hover) */}
                <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out bg-white bg-opacity-90 flex justify-between items-center">
                  <button className="text-black hover:text-gray-600 transition-colors">
                    <span className="text-xs tracking-wider uppercase">Quick View</span>
                  </button>
                  <button className="text-black hover:text-gray-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="mt-4">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-light text-lg tracking-wide">{item.title}</h3>
                  <div className="flex items-center space-x-1">
                    {item.colors && item.colors.map((color, idx) => (
                      <div 
                        key={idx}
                        className="w-3 h-3 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center">
                  <p className="text-black font-medium">{item.price}</p>
                  {item.originalPrice && (
                    <p className="ml-2 text-gray-400 line-through text-sm">{item.originalPrice}</p>
                  )}
                </div>
                
                {/* Add to Cart button with transition */}
                <motion.button 
                  className="mt-3 w-full py-2.5 bg-transparent border border-black text-black text-xs uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
                  whileTap={{ scale: 0.98 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View All Button */}
        <div className="text-center mt-14">
          <motion.button 
            className="border border-black text-black px-10 py-3 text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Collection
          </motion.button>
        </div>
      </div>
      
      {/* Custom CSS */}
      <style jsx="true">{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default LatestTrends; 