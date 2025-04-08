import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const Men = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const scrollRef = useRef(null);
  
  // Category filters for men's fashion
  const categories = ["All", "Shirts", "Pants", "Outerwear", "Suits", "Accessories"];
  
  // Featured collection tag - will be highlighted
  const featuredCollection = "Summer Essentials";
  
  // Men's product data
  const menProducts = [
    {
      id: 1,
      title: "Classic Oxford Shirt",
      category: "Shirts",
      image: "https://res.cloudinary.com/dqiwzyt8m/image/upload/v1744114655/classic_oxford_shirt_ny7kl0.webp",
      price: "$69.99",
      colors: ["#FFFFFF", "#87CEEB", "#000000"],
      fit: "Regular",
      material: "100% Cotton",
      isNew: true,
      rating: 4.8
    },
    {
      id: 2,
      title: "Slim Fit Chinos",
      category: "Pants",
      image: "https://res.cloudinary.com/dqiwzyt8m/image/upload/v1744114423/slim_chinos_nvause.webp",
      price: "$79.99",
      originalPrice: "$95.00",
      colors: ["#D2B48C", "#36454F", "#3A3B3C"],
      fit: "Slim",
      material: "98% Cotton, 2% Elastane",
      tag: "Sale",
      rating: 4.6
    },
    {
      id: 3,
      title: "Knit Blazer",
      category: "Suits",
      image: "https://res.cloudinary.com/dqiwzyt8m/image/upload/v1744115059/knit_blazer_oymklb.webp",
      price: "$149.99",
      colors: ["#000000", "#3A3B3C", "#A9A9A9"],
      fit: "Modern",
      material: "65% Wool, 35% Polyester",
      isNew: true,
      collection: "Summer Essentials",
      rating: 4.9
    },
    {
      id: 4,
      title: "Leather Belt",
      category: "Accessories",
      image: "https://res.cloudinary.com/dqiwzyt8m/image/upload/v1744115060/leather_belt_zf2dqt.webp",
      price: "$49.99",
      colors: ["#8B4513", "#000000"],
      material: "Genuine Leather",
      rating: 4.7
    },
    {
      id: 5,
      title: "Linen Shirt",
      category: "Shirts",
      image: "https://res.cloudinary.com/dqiwzyt8m/image/upload/v1744115059/linen_shirt_h9ujxm.webp",
      price: "$59.99",
      colors: ["#FFFFFF", "#B5651D", "#E0FFFF"],
      fit: "Relaxed",
      material: "100% Linen",
      collection: "Summer Essentials",
      tag: "Bestseller",
      rating: 4.5
    },
    {
      id: 6,
      title: "Bomber Jacket",
      category: "Outerwear",
      image: "https://res.cloudinary.com/dqiwzyt8m/image/upload/v1744115059/bomber_jacket_papswy.webp",
      price: "$129.99",
      originalPrice: "$159.99",
      colors: ["#000000", "#005F5F", "#3A3B3C"],
      fit: "Regular",
      material: "100% Polyester",
      tag: "Sale",
      rating: 4.4
    },
    {
      id: 7,
      title: "Wool Dress Pants",
      category: "Pants",
      image: "https://res.cloudinary.com/dqiwzyt8m/image/upload/v1744115062/wool_dress_pants_oz6l8l.jpg",
      price: "$89.99",
      colors: ["#000000", "#3A3B3C", "#708090"],
      fit: "Tailored",
      material: "70% Wool, 30% Polyester",
      isNew: true,
      rating: 4.7
    },
    {
      id: 8,
      title: "Silk Tie",
      category: "Accessories",
      image: "https://res.cloudinary.com/dqiwzyt8m/image/upload/v1744115060/silk_tie_gguiv0.avif",
      price: "$35.99",
      colors: ["#000080", "#A52A2A", "#708090"],
      material: "100% Silk",
      collection: "Summer Essentials",
      rating: 4.8
    },
  ];

  // Filter items based on active category
  const filteredProducts = activeFilter === "All" 
    ? menProducts 
    : menProducts.filter(item => item.category === activeFilter);
    
  // Collection featured items
  const featuredItems = menProducts.filter(item => item.collection === featuredCollection);
  
  // Handle horizontal scroll
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            xmlns="http://www.w3.org/2000/svg" 
            className={`h-3 w-3 ${i < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-300'}`}
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
          </svg>
        ))}
        <span className="ml-1 text-xs text-gray-600">{rating}</span>
      </div>
    );
  };

  return (
    <section className="py-24 md:py:34 bg-gray-50">
      <div className="container mx-auto px-4">

         {/* Section heading with elegant typography */}
         <div className="text-center mb-12">
          <h4 className="text-sm tracking-widest uppercase mb-2 text-gray-500">Collection</h4>
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-3">Men's Fashion</h2>
          <div className="w-20 h-0.5 bg-black mx-auto"></div>
        </div>
        
        {/* Category Filters */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`rounded-full px-5 py-2 text-xs tracking-wider transition-colors
                  ${activeFilter === category 
                    ? 'bg-black text-white' 
                    : 'text-gray-700 hover:bg-gray-100'}`
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Grid/List based on view mode */}
        {viewMode === 'grid' ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {filteredProducts.map((item) => (
              <motion.div
                key={item.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: item.id * 0.05 }}
              >
                {/* Product Image Container */}
                <div className="relative overflow-hidden bg-gray-100 aspect-[3/4] mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Product Tags */}
                  {item.tag && (
                    <span className="absolute top-4 right-4 bg-black text-white text-xs uppercase px-2 py-1 rounded-sm">
                      {item.tag}
                    </span>
                  )}
                  {!item.tag && item.isNew && (
                    <span className="absolute top-4 right-4 bg-white text-black text-xs uppercase px-2 py-1 rounded-sm shadow-sm">
                      New
                    </span>
                  )}
                  
                  {/* Quick Shop Overlay */}
                  {/* <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button 
                      className="bg-white text-black text-xs uppercase tracking-wider px-6 py-3 hover:bg-gray-100"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Quick Shop
                    </motion.button>
                  </div> */}
                </div>
                
                {/* Product Info */}
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-medium text-base">{item.title}</h3>
                      <p className="text-xs text-gray-500">{item.material}</p>
                    </div>
                    {item.fit && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                        {item.fit}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <p className="text-black font-medium">{item.price}</p>
                      {item.originalPrice && (
                        <p className="ml-2 text-gray-400 line-through text-sm">{item.originalPrice}</p>
                      )}
                    </div>
                    <StarRating rating={item.rating} />
                  </div>
                  
                  <div className="flex space-x-1 mt-3 mb-4">
                    {item.colors && item.colors.map((color, idx) => (
                      <button 
                        key={idx}
                        className="w-4 h-4 rounded-full border border-gray-300 focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none"
                        style={{ backgroundColor: color }}
                        aria-label={`Color option ${idx + 1}`}
                      />
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    <motion.button 
                      className="flex-1 py-2.5 bg-black text-white text-xs uppercase tracking-wider hover:bg-gray-900 transition-colors"
                      whileTap={{ scale: 0.98 }}
                    >
                      Add to Cart
                    </motion.button>
                    <motion.button 
                      className="p-2.5 border border-gray-300 hover:border-black transition-colors"
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {filteredProducts.map((item) => (
              <motion.div
                key={item.id}
                className="flex flex-col sm:flex-row bg-white border border-gray-100 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: item.id * 0.05 }}
              >
                <div className="relative w-full sm:w-52 h-64 sm:h-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                  {item.tag && (
                    <span className="absolute top-4 left-4 bg-black text-white text-xs uppercase px-2 py-1">
                      {item.tag}
                    </span>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-medium text-lg">{item.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{item.material}</p>
                        <StarRating rating={item.rating} />
                      </div>
                      {item.fit && (
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
                          {item.fit}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      {item.colors && item.colors.map((color, idx) => (
                        <button 
                          key={idx}
                          className="w-5 h-5 rounded-full border border-gray-300 focus:ring-2 focus:ring-offset-1 focus:ring-gray-900 focus:outline-none"
                          style={{ backgroundColor: color }}
                          aria-label={`Color option ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-end">
                      <p className="text-black text-lg font-medium">{item.price}</p>
                      {item.originalPrice && (
                        <p className="ml-2 text-gray-400 line-through text-sm">{item.originalPrice}</p>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <motion.button 
                        className="px-6 py-2 bg-black text-white text-xs uppercase tracking-wider hover:bg-gray-900 transition-colors"
                        whileTap={{ scale: 0.98 }}
                      >
                        Add to Cart
                      </motion.button>
                      <motion.button 
                        className="p-2 border border-gray-300 hover:border-black transition-colors"
                        whileTap={{ scale: 0.98 }}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        {/* Shop All Button */}
        <div className="text-center mt-16">
          <motion.button 
            className="bg-black text-white text-sm uppercase tracking-wider px-12 py-4 hover:bg-gray-900 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Shop All Men's Collection
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

export default Men;