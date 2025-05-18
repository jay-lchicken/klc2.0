"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ParallaxHeader = () => {
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });
  
  // Transform values for parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  
  return (
    <div 
      ref={headerRef} 
      className="relative w-full overflow-hidden rounded-xl sm:rounded-3xl h-[300px] sm:h-[400px] md:h-[500px]"
    >
      <motion.div
        style={{ y, opacity, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          className="header w-full h-full object-cover"
          src="/Screenshot%202025-04-28%20at%207.27.21%E2%80%AFAM.png"
          alt="Kids Learn Code Header"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 85vw"
        />
        <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
      </motion.div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4 z-10">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="font-red-rose text-3xl sm:text-5xl lg:text-7xl font-extrabold drop-shadow-lg text-white text-center"
        >
          Kids Learn Code
        </motion.h1>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-red-rose text-lg sm:text-xl lg:text-3xl mt-2 font-medium drop-shadow text-white text-center"
        >
          Allowing all students to learn coding for free
        </motion.p>
      </div>
    </div>
  );
};

export default ParallaxHeader;