import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Pre-footer newsletter section */}
      <div className="bg-[#232323] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-2xl font-light tracking-wide mb-3 text-white">Join Our World</h3>
            <p className="text-gray-300 mb-6 font-light">
              Subscribe to receive exclusive updates, early access to collections, and personalized style recommendations.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-5 py-4 bg-[#2c2c2c] border border-[#3d3d3d] focus:border-white text-white focus:outline-none text-sm placeholder-gray-500"
              />
              <motion.button
                type="submit"
                className="absolute right-0 top-0 bottom-0 bg-white text-black px-6 text-xs uppercase tracking-wider"
                whileHover={{ backgroundColor: "#e6e6e6" }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
            <p className="text-gray-500 text-xs mt-3">
              By subscribing, you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand column */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-light tracking-wide mb-0 text-white">
                <span className="font-serif">C</span>ollective
                <span className="ml-1 h-1.5 w-1.5 rounded-full bg-white inline-block align-middle"></span>
              </h2>
            </div>
            <p className="text-gray-300 mb-8 font-light leading-relaxed max-w-md">
              Redefining fashion with meticulously curated collections that celebrate individuality 
              and timeless elegance. Each piece tells a story of craftsmanship and consciousness.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="text-white mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-sm text-gray-300">
                  Ntinda, Kampala<br />
                  Uganda
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-white mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <a href="mailto:info@collective.com" className="text-sm text-gray-300 hover:text-white transition-colors">
                  contact@collective.com
                </a>
              </div>
              <div className="flex items-start">
                <div className="text-white mr-3 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+15551234567" className="text-sm text-gray-300 hover:text-white transition-colors">
                  +256 755 976 605 
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex space-x-5 mt-8">
              <motion.a 
                href="#" 
                className="w-10 h-10 border border-[#3d3d3d] flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 border border-[#3d3d3d] flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 border border-[#3d3d3d] flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </motion.a>
              <motion.a 
                href="#" 
                className="w-10 h-10 border border-[#3d3d3d] flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">Pinterest</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="md:col-span-8 lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Shop column */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-5">Collections</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">New Arrivals</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Women</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Men</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Children</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Accessories</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Sale</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Lookbook</a></li>
                </ul>
              </div>

              {/* Help column */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-5">Customer Care</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Track Your Order</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Returns & Exchanges</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Shipping Information</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Size Guide</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                </ul>
              </div>

              {/* About column */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-5">About</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Our Story</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Sustainability</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Press</a></li>
                  <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Affiliates</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-[#333333]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-xs mb-4 md:mb-0">
              © {new Date().getFullYear()} Collective. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                Accessibility
              </a>
              <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                Cookie Preferences
              </a>
            </div>
          </div>
          
          {/* Payment methods */}
          <div className="mt-8 flex justify-center space-x-4">
            <div className="w-10 h-6 bg-[#2c2c2c] rounded"></div>
            <div className="w-10 h-6 bg-[#2c2c2c] rounded"></div>
            <div className="w-10 h-6 bg-[#2c2c2c] rounded"></div>
            <div className="w-10 h-6 bg-[#2c2c2c] rounded"></div>
            <div className="w-10 h-6 bg-[#2c2c2c] rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 