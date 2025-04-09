import React from "react";
import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaPinterestP 
} from "react-icons/fa";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

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
                  <FaMapMarkerAlt className="h-4 w-4" />
                </div>
                <div className="text-sm text-gray-300">
                  Ntinda, Kampala<br />
                  Uganda
                </div>
              </div>
              <div className="flex items-start">
                <div className="text-white mr-3 mt-0.5">
                  <FaEnvelope className="h-4 w-4" />
                </div>
                <Link to="mailto:info@collective.com" className="text-sm text-gray-300 hover:text-white transition-colors">
                  contact@collective.com
                </Link>
              </div>
              <div className="flex items-start">
                <div className="text-white mr-3 mt-0.5">
                  <FaPhone className="h-4 w-4" />
                </div>
                <Link to="tel:+256755976605" className="text-sm text-gray-300 hover:text-white transition-colors">
                  +256 755 976 605 
                </Link>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex space-x-5 mt-8">
              <MotionLink 
                to="#"
                className="w-10 h-10 border border-[#3d3d3d] flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">Facebook</span>
                <FaFacebookF className="h-4 w-4" />
              </MotionLink>
              <MotionLink 
                to="#"
                className="w-10 h-10 border border-[#3d3d3d] flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-4 w-4" />
              </MotionLink>
              <MotionLink 
                to="#"
                className="w-10 h-10 border border-[#3d3d3d] flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-4 w-4" />
              </MotionLink>
              <MotionLink 
                to="#"
                className="w-10 h-10 border border-[#3d3d3d] flex items-center justify-center text-gray-400 hover:border-white hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="sr-only">Pinterest</span>
                <FaPinterestP className="h-4 w-4" />
              </MotionLink>
            </div>
          </div>

          {/* Navigation columns */}
          <div className="md:col-span-8 lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Shop column */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-5">Collections</h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/new-in" className="text-sm text-gray-300 hover:text-white transition-colors">
                      New Arrivals
                    </Link>
                  </li>
                  <li>
                    <Link to="/women" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Women
                    </Link>
                  </li>
                  <li>
                    <Link to="/men" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Men
                    </Link>
                  </li>
                  <li>
                    <Link to="/home" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Children
                    </Link>
                  </li>
                  <li>
                    <Link to="/accessories" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Accessories
                    </Link>
                  </li>
                  <li>
                    <Link to="/sale" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Sale
                    </Link>
                  </li>
                  <li>
                    <Link to="/home" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Lookbook
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Help column */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-5">Customer Care</h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/home" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link to="/home" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Track Your Order
                    </Link>
                  </li>
                  <li>
                    <Link to="/home" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Returns &amp; Exchanges
                    </Link>
                  </li>
                  <li>
                    <Link to="/home" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Shipping Information
                    </Link>
                  </li>
                  <li>
                    <Link to="/home" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Size Guide
                    </Link>
                  </li>
                  <li>
                    <Link to="/home" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* About column */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-gray-400 font-medium mb-5">About</h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Sustainability
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                      Affiliates
                    </Link>
                  </li>
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
              <Link to="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                Accessibility
              </Link>
              <Link to="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                Cookie Preferences
              </Link>
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
