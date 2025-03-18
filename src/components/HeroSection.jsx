import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

// Optionally, set your Cloudinary cloud name as an environment variable.
// e.g., REACT_APP_CLOUDINARY_CLOUD_NAME="df3lhzzy7"
const cloudName = "df3lhzzy7";

// Construct the public video URL without any credentials
// const videoUrl = `https://res.cloudinary.com/${cloudName}/video/upload/v1742310600/fashion-showcase-vid_e3v6ri.mp4`;

const HeroSection = () => {
  const videoRef = useRef(null);
  const videoUrl = "https://res.cloudinary.com/df3lhzzy7/video/upload/v1742310431/showcase-fashion-pics_mf15cb.mp4";
  
  // Controls for each moving block (added buyControls)
  const buyControls = useAnimation();
  const atControls = useAnimation();
  const theControls = useAnimation();
  const bestControls = useAnimation();
  const pricesControls = useAnimation();
  
  // Store positions to detect collisions (added buyPosition)
  const buyPosition = {x: useMotionValue(0), y: useMotionValue(0)};
  const atPosition = {x: useMotionValue(0), y: useMotionValue(0)};
  const thePosition = {x: useMotionValue(0), y: useMotionValue(0)};
  const bestPosition = {x: useMotionValue(0), y: useMotionValue(0)};
  const pricesPosition = {x: useMotionValue(0), y: useMotionValue(0)};

  // Handle video looping
  useEffect(() => {
    if (videoRef.current) {
      const videoElement = videoRef.current;
      videoElement.loop = true;
      videoElement.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
      
      return () => {
        videoElement.removeEventListener('ended', () => {});
      };
    }
  }, []);

  // Function to check for collisions and adjust movements
  const checkCollision = (block1, block2, direction, magnitude) => {
    const overlap = 20; // Collision detection threshold
    
    const pos1 = {
      x: block1.x.get(),
      y: block1.y.get(),
      width: 120, // Approximate width for collision detection
      height: 80  // Approximate height for collision detection
    };
    
    const pos2 = {
      x: block2.x.get(),
      y: block2.y.get(),
      width: 120,
      height: 80
    };
    
    // Check for collision
    if (
      pos1.x < pos2.x + pos2.width + overlap &&
      pos1.x + pos1.width + overlap > pos2.x &&
      pos1.y < pos2.y + pos2.height + overlap &&
      pos1.y + pos1.height + overlap > pos2.y
    ) {
      // If collision detected, adjust the movement
      return magnitude * 0.5; // Reduced push effect
    }
    
    return 0; // No collision
  };
  
  // Puzzle-like animation sequence
  const animateBlocks = async () => {
    // Define possible movement directions
    const directions = [
      { x: 20, y: 0 },    // right
      { x: -20, y: 0 },   // left
      { x: 0, y: 20 },    // down
      { x: 0, y: -20 },   // up
      { x: 15, y: 15 },   // down-right
      { x: -15, y: 15 },  // down-left
      { x: 15, y: -15 },  // up-right
      { x: -15, y: -15 }  // up-left
    ];
    
    // More constrained movement for BUY (mostly vertical with slight horizontal)
    const buyDirections = [
      { x: 5, y: 20 },    // slightly right + down
      { x: -5, y: 20 },   // slightly left + down
      { x: 5, y: -20 },   // slightly right + up
      { x: -5, y: -20 },  // slightly left + up
      { x: 0, y: 25 },    // down
      { x: 0, y: -25 }    // up
    ];
    
    // Animation loop
    while (true) {
      // Get random directions for each block
      const buyDir = buyDirections[Math.floor(Math.random() * buyDirections.length)];
      const atDir = directions[Math.floor(Math.random() * directions.length)];
      const theDir = directions[Math.floor(Math.random() * directions.length)];
      const bestDir = directions[Math.floor(Math.random() * directions.length)];
      const pricesDir = directions[Math.floor(Math.random() * directions.length)];
      
      // Calculate collisions and adjust movements
      // Add BUY collisions
      const buyAtCollision = checkCollision(buyPosition, atPosition, buyDir, 0.3);
      const buyTheCollision = checkCollision(buyPosition, thePosition, buyDir, 0.3);
      
      // Existing collisions
      const atTheCollision = checkCollision(atPosition, thePosition, atDir, 0.3);
      const atBestCollision = checkCollision(atPosition, bestPosition, atDir, 0.3);
      const theBestCollision = checkCollision(thePosition, bestPosition, theDir, 0.3);
      const pricesAtCollision = checkCollision(pricesPosition, atPosition, pricesDir, 0.3);
      
      // Add BUY collisions for other blocks
      const atBuyCollision = checkCollision(atPosition, buyPosition, atDir, 0.3);
      
      // Boundary constraints (keep blocks within container)
      const boundaryConstraint = (pos, dir) => {
        const currentX = pos.x.get();
        const currentY = pos.y.get();
        
        // Check if next move would go out of bounds (-80 to 80 px range)
        const nextX = currentX + dir.x;
        const nextY = currentY + dir.y;
        
        return {
          x: nextX > 80 ? 80 : (nextX < -80 ? -80 : nextX),
          y: nextY > 60 ? 60 : (nextY < -60 ? -60 : nextY)
        };
      };
      
      // More strict boundary for BUY (keep it mostly on the left)
      const buyBoundaryConstraint = (pos, dir) => {
        const currentX = pos.x.get();
        const currentY = pos.y.get();
        
        // Restrict BUY to mostly stay on the left side but allow some movement
        const nextX = currentX + dir.x;
        const nextY = currentY + dir.y;
        
        return {
          x: nextX > 30 ? 30 : (nextX < -30 ? -30 : nextX),
          y: nextY > 60 ? 60 : (nextY < -60 ? -60 : nextY)
        };
      };
      
      // Apply movements with constraints
      const buyNextPos = buyBoundaryConstraint(buyPosition, buyDir);
      const atNextPos = boundaryConstraint(atPosition, atDir);
      const theNextPos = boundaryConstraint(thePosition, theDir);
      const bestNextPos = boundaryConstraint(bestPosition, bestDir);
      const pricesNextPos = boundaryConstraint(pricesPosition, pricesDir);
      
      // Animate all blocks simultaneously
      await Promise.all([
        buyControls.start({
          x: buyNextPos.x + buyAtCollision + buyTheCollision,
          y: buyNextPos.y,
          transition: { duration: 3.2, ease: "easeInOut" }
        }),
        atControls.start({
          x: atNextPos.x + atTheCollision + atBestCollision + atBuyCollision,
          y: atNextPos.y,
          transition: { duration: 2.5, ease: "easeInOut" }
        }),
        theControls.start({
          x: theNextPos.x + theBestCollision,
          y: theNextPos.y,
          transition: { duration: 2.8, ease: "easeInOut" }
        }),
        bestControls.start({
          x: bestNextPos.x,
          y: bestNextPos.y,
          transition: { duration: 3, ease: "easeInOut" }
        }),
        pricesControls.start({
          x: pricesNextPos.x + pricesAtCollision,
          y: pricesNextPos.y,
          transition: { duration: 2.7, ease: "easeInOut" }
        })
      ]);
      
      // Small pause between movements
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  };
  
  // Start the animation
  useEffect(() => {
    animateBlocks();
  }, []);

  return (
    <section className="relative h-[60vh] md:h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dynamic Text Block Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative p-5 md:p-10 rounded-sm w-full max-w-3xl h-[250px] md:h-[400px]">
          {/* Vertical "BUY" text - now animated */}
          <motion.div 
            className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 origin-center"
            animate={buyControls}
            style={{ x: buyPosition.x, y: buyPosition.y }}
          >
            <h2 className="vertical-text text-white font-black text-3xl md:text-5xl tracking-widest text-block">
              BUY
            </h2>
          </motion.div>
          
          {/* Moving blocks - made responsive */}
          <motion.div 
            className="text-block absolute top-[20%] left-[40%] text-white text-xl md:text-3xl font-light px-2 md:px-4 py-1 md:py-2 rounded-sm"
            animate={atControls}
            style={{ x: atPosition.x, y: atPosition.y }}
          >
            AT
          </motion.div>
          
          <motion.div 
            className="text-block absolute top-[40%] left-[30%] text-white text-2xl md:text-4xl font-medium px-2 md:px-4 py-1 md:py-2 rounded-sm"
            animate={theControls}
            style={{ x: thePosition.x, y: thePosition.y }}
          >
            THE
          </motion.div>
          
          <motion.div 
            className="text-block absolute top-[55%] left-[50%] text-white text-4xl md:text-6xl font-bold px-2 md:px-4 py-1 md:py-2 rounded-sm"
            animate={bestControls}
            style={{ x: bestPosition.x, y: bestPosition.y }}
          >
            BEST
          </motion.div>
          
          <motion.div 
            className="text-block absolute top-[70%] left-[35%] text-white text-3xl md:text-5xl font-semibold px-2 md:px-4 py-1 md:py-2 rounded-sm"
            animate={pricesControls}
            style={{ x: pricesPosition.x, y: pricesPosition.y }}
          >
            PRICES
          </motion.div>
          
          {/* Shop Button - Centered on mobile, right-aligned on larger screens */}
          <div className="absolute bottom-[-24px] left-0 right-0 flex md:justify-end justify-center md:pr-8">
            <button className="bg-white text-black px-4 md:px-8 py-2 md:py-3 hover:bg-black hover:text-white transition-colors duration-300 text-xs md:text-sm tracking-widest font-medium">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      
      {/* Add the CSS for vertical text */}
      <style jsx="true">{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          letter-spacing: 0.5em;
        }
        
        .text-block {
          will-change: transform;
          user-select: none;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
