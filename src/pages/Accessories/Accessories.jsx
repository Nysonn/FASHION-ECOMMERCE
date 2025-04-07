import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccessoriesShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const carouselRef = useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Accessories collection data
  const accessories = [
    {
      id: 1,
      name: "Vintage Leather Handbag",
      category: "Bags",
      price: "$149.99",
      isNew: true,
      description: "Handcrafted from premium leather with antique brass hardware and spacious interior compartments.",
      image: "https://res.cloudinary.com/df3lhzzy7/image/upload/v1742328987/Accessories_za8xid.jpg",
    },
    {
      id: 2,
      name: "Pearl Statement Necklace",
      category: "Jewelry",
      price: "$89.99",
      isNew: false,
      description: "Elegant freshwater pearl necklace with sterling silver clasp, perfect for special occasions.",
      image: "https://res.cloudinary.com/df3lhzzy7/image/upload/v1742328987/Accessories_za8xid.jpg",
    },
    {
      id: 3,
      name: "Silk Patterned Scarf",
      category: "Scarves",
      price: "$59.99",
      isNew: true,
      description: "Ultra-soft pure silk scarf with hand-printed pattern, versatile for all seasons.",
      image: "https://res.cloudinary.com/df3lhzzy7/image/upload/v1742328987/Accessories_za8xid.jpg",
    },
    {
      id: 4,
      name: "Gold Hoop Earrings",
      category: "Jewelry",
      price: "$45.99",
      isNew: false,
      description: "14k gold plated hoops with hypoallergenic posts, lightweight and comfortable for everyday wear.",
      image: "https://res.cloudinary.com/df3lhzzy7/image/upload/v1742328987/Accessories_za8xid.jpg",
    },
  ];

  // Accessory benefits
  const benefits = [
    {
      title: "Handcrafted Quality",
      description: "Each piece is meticulously crafted by skilled artisans with attention to every detail.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Sustainable Materials",
      description: "Ethically sourced and environmentally conscious materials that reduce our ecological footprint.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Timeless Design",
      description: "Classic styles that transcend seasonal trends, ensuring your pieces remain fashionable year after year.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  // Testimonials
  const testimonials = [
    {
      id: 1,
      quote: "These accessories have completely transformed my wardrobe. The quality is exceptional.",
      author: "Emma T.",
      role: "Fashion Stylist",
    },
    {
      id: 2,
      quote: "I've received countless compliments on my vintage handbag. Worth every penny!",
      author: "Sarah M.",
      role: "Loyal Customer",
    },
  ];

  // Auto-play carousel
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev === accessories.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, accessories.length]);

  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      x: -100,
      transition: { duration: 0.5, ease: "easeIn" } 
    }
  };

  const benefitVariants = {
    initial: { opacity: 0.7, y: 0 },
    hover: { 
      opacity: 1, 
      y: -8,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    }
  };

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev === accessories.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev === 0 ? accessories.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-sm tracking-widest uppercase mb-2 text-gray-500 font-light">Refine Your Style</h4>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-4">Signature Accessories</h2>
          <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
          <p className="max-w-xl mx-auto text-gray-600">
            Discover our curated collection of premium accessories designed to elevate your personal style with sophistication and elegance.
          </p>
        </div>

        {/* Main Showcase - Horizontal Layout */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Item Details */}
            <div className="lg:col-span-4 lg:order-1 order-2 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={accessories[activeIndex].id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-lg mx-auto lg:mx-0 px-4"
                >
                  <div className="inline-block mb-3 px-3 py-1 bg-gray-100">
                    <span className="text-sm uppercase tracking-wider text-gray-700">
                      {accessories[activeIndex].category}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-light mb-4">{accessories[activeIndex].name}</h3>
                  <p className="text-2xl mb-4 font-light">{accessories[activeIndex].price}</p>
                  
                  <div className="mb-8">
                    <p className="text-gray-600 mb-6">
                      {accessories[activeIndex].description}
                    </p>
                    
                    <div className="flex space-x-3 mb-8">
                      <motion.span 
                        className="w-8 h-8 rounded-full bg-[#D4B78F] cursor-pointer border-2 border-transparent hover:border-gray-400"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      ></motion.span>
                      <motion.span 
                        className="w-8 h-8 rounded-full bg-[#2C2C2C] cursor-pointer border-2 border-transparent hover:border-gray-400"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      ></motion.span>
                      <motion.span 
                        className="w-8 h-8 rounded-full bg-[#EFEFEF] cursor-pointer border-2 border-transparent hover:border-gray-400"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      ></motion.span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.button 
                      className="flex-1 py-4 bg-black text-white text-sm uppercase tracking-wider hover:bg-gray-800 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Add to Cart
                    </motion.button>
                    <motion.button 
                      className="w-14 h-14 flex items-center justify-center border border-black hover:bg-black hover:text-white transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Right: Image Showcase */}
            <div className="lg:col-span-8 lg:order-2 order-1 relative overflow-hidden">
              <div className="relative aspect-video md:aspect-[16/9] max-w-4xl mx-auto shadow-xl">
                <AnimatePresence initial={false}>
                  <motion.div
                    key={accessories[activeIndex].id}
                    className="absolute inset-0"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={slideVariants}
                  >
                    <div className="relative h-full">
                      <img
                        src={accessories[activeIndex].image}
                        alt={accessories[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                      {accessories[activeIndex].isNew && (
                        <div className="absolute top-6 left-6 bg-white px-4 py-2 shadow-md">
                          <span className="text-xs font-medium tracking-wider uppercase">New Arrival</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-8 flex space-x-2">
                  {accessories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === activeIndex ? "bg-white scale-110 shadow-md" : "bg-gray-300 bg-opacity-60"
                      }`}
                    />
                  ))}
                </div>
                
                {/* Navigation Arrows */}
                <div className="absolute bottom-8 right-8 flex space-x-3">
                  <motion.button 
                    onClick={prevSlide}
                    className="w-10 h-10 flex items-center justify-center bg-white hover:bg-black hover:text-white transition-colors duration-300 shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </motion.button>
                  <motion.button 
                    onClick={nextSlide}
                    className="w-10 h-10 flex items-center justify-center bg-white hover:bg-black hover:text-white transition-colors duration-300 shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Accessories Benefits with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="text-center p-8 bg-white rounded-sm shadow-sm border border-gray-50"
              variants={benefitVariants}
              initial="initial"
              whileHover="hover"
              onHoverStart={() => setHoveredBenefit(index)}
              onHoverEnd={() => setHoveredBenefit(null)}
            >
              <div className={`flex justify-center mb-6 text-gray-800 transition-transform duration-500 ${hoveredBenefit === index ? 'scale-110' : ''}`}>
                {benefit.icon}
              </div>
              <h4 className="text-xl font-light mb-3">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Testimonials Section */}
        <div className="mb-24 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-light mb-2">What Our Customers Say</h3>
            <div className="w-16 h-0.5 bg-black mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="p-8 bg-white border border-gray-100 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <svg className="h-8 w-8 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8v12H0V14C0 8.494 4.5 4 10 4v4zm18-4v4c5.5 0 10 4.494 10 10v6H28V8h-8z" />
                </svg>
                <p className="text-lg italic mb-4 text-gray-700">{testimonial.quote}</p>
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Editorial Banner */}
        <div className="mt-16 relative overflow-hidden bg-gradient-to-r from-gray-100 to-white p-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-light mb-4">Complete Your Look</h3>
            <p className="max-w-2xl mx-auto mb-8 text-gray-600">
              Explore our curated collection of accessories designed to complement any outfit. From statement pieces to everyday essentials, find the perfect finishing touch.
            </p>
            <motion.button
              className="border border-black bg-black text-white px-12 py-4 text-sm uppercase tracking-wider hover:bg-transparent hover:text-black transition-colors duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Shop All Accessories
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesShowcase;