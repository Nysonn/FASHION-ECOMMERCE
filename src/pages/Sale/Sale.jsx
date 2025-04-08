import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sale = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // Mock data - in production this would come from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: "Tailored Wool Blazer",
          originalPrice: 299.99,
          salePrice: 159.99,
          discount: 47,
          category: "women",
          image: "https://res.cloudinary.com/dhgyqabfx/image/upload/v1744124443/RD_D5_S04_RJ21A_UJ83U_RJ23A_RK71A_RK54A_213_SS25-1_Full_Studio_Portrait_nwz9tc.avif",
          tag: "Best Seller",
          rating: 4.8,
        },
        {
          id: 2,
          name: "Classic Pinstripe Suit",
          originalPrice: 349.99,
          salePrice: 199.99,
          discount: 43,
          category: "women",
          image: "https://res.cloudinary.com/dhgyqabfx/image/upload/v1744124846/john-lawrence-sullivan-aw18_v1zheb.avif",
          tag: "Limited",
          rating: 4.6,
        },
        {
          id: 3,
          name: "Slim Fit Navy Blazer",
          originalPrice: 279.99,
          salePrice: 139.99,
          discount: 50,
          category: "men",
          image: "https://res.cloudinary.com/dhgyqabfx/image/upload/v1744125159/966186791_02_bvxxun.jpg",
          tag: "New",
          rating: 4.7,
        },
        {
          id: 4,
          name: "Structured Linen Jacket",
          originalPrice: 189.99,
          salePrice: 94.99,
          discount: 50,
          category: "women",
          image: "https://res.cloudinary.com/dhgyqabfx/image/upload/v1744125491/87025930_37_xwf4gy.avif",
          rating: 4.5,
        },
        {
          id: 5,
          name: "Double-Breasted Blazer",
          originalPrice: 249.99,
          salePrice: 149.99,
          discount: 40,
          category: "men",
          image: "https://res.cloudinary.com/dhgyqabfx/image/upload/v1744125692/61zLrCYQ8xL._AC_SL1114__gppcd5.jpg",
          rating: 4.9,
        },
        {
          id: 6,
          name: "Italian Wool Suit",
          originalPrice: 499.99,
          salePrice: 299.99,
          discount: 40,
          category: "men",
          image: "https://res.cloudinary.com/dhgyqabfx/image/upload/v1744125968/STZV-100-BRONZE_ii8rfq.jpg",
          tag: "Premium",
          rating: 5.0,
        },
      ]);
      setLoading(false);
    }, 800);
  }, []);

  // Filter products based on selected category
  const filteredProducts = products.filter((product) => {
    if (filter === "all") return true;
    return product.category === filter;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "priceAsc":
        return a.salePrice - b.salePrice;
      case "priceDesc":
        return b.salePrice - a.salePrice;
      case "discount":
        return b.discount - a.discount;
      default: // newest
        return b.id - a.id;
    }
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="pt-20 bg-gray-50 min-h-screen">
      {/* Hero section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-opacity-40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/df3lhzzy7/image/upload/v1742328533/women-suits_mxniif.jpg)`,
          }}
        ></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center text-white"
        >
          <h1 className="text-5xl md:text-6xl font-serif font-light mb-4">
            Seasonal Sale
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-lg mb-8">
            Up to 50% off on selected items. Limited time offer.
          </p>
          <div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-black uppercase tracking-wider text-sm font-medium"
            >
              Shop now
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-serif">Sale Items</h2>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-3">Filter:</span>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="border border-gray-300 py-2 px-4 bg-white text-sm"
              >
                <option value="all">All Items</option>
                <option value="women">Women</option>
                <option value="men">Men</option>
              </select>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-3">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 py-2 px-4 bg-white text-sm"
              >
                <option value="newest">Newest</option>
                <option value="priceAsc">Price: Low to High</option>
                <option value="priceDesc">Price: High to Low</option>
                <option value="discount">Discount</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products grid */}
        {loading ? (
          <div className="flex justify-center items-center h-96">
            <div className="w-12 h-12 rounded-full border-4 border-gray-200 border-t-black animate-spin"></div>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {sortedProducts.map((product) => (
              <motion.div
                key={product.id}
                className="group bg-white"
                variants={itemVariants}
              >
                <div className="relative overflow-hidden">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="absolute top-4 right-4 bg-white py-1 px-3">
                    <span className="text-red-600 font-medium text-sm">
                      -{product.discount}%
                    </span>
                  </div>
                  {product.tag && (
                    <div className="absolute top-4 left-4 bg-black py-1 px-3">
                      <span className="text-white font-medium text-xs uppercase tracking-wider">
                        {product.tag}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-1">
                    <Link
                      to={`/product/${product.id}`}
                      className="text-gray-900 hover:text-black"
                    >
                      {product.name}
                    </Link>
                  </h3>
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating)
                              ? "fill-current"
                              : "text-gray-300"
                          }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">
                      ({product.rating})
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium text-lg mr-2">
                      ${product.salePrice.toFixed(2)}
                    </span>
                    <span className="text-gray-500 line-through text-sm">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <button className="w-full py-2 border border-black text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-300">
                    Add to cart
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-1">
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-black bg-black text-white">
              1
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 bg-white">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 bg-white">
              3
            </button>
            <button className="w-10 h-10 flex items-center justify-center border border-gray-300 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sale;