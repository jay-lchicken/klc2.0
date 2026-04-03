"use client";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const StatCard = ({ icon, target, suffix, description }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [counted, setCounted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView && !counted && animationComplete) {
      controls.start({ scale: 1, opacity: 1 });
      const duration = 1200;
      const interval = 30;
      const steps = duration / interval;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
          setCounted(true);
        } else {
          setCount(Math.floor(current));
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView, target, controls, counted, animationComplete]);

  const containerVariants = {
    hidden: { scale: 0.3, opacity: 0, rotate: 180 },
    visible: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.3,
        stiffness: 120,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.3 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      whileHover={animationComplete ? { scale: 1.09 } : {}}
      onAnimationComplete={() => setAnimationComplete(true)}
      className="glow-card flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-lg min-h-[270px] max-h-[270px] border-t-4 border-blue-500 mt-4 w-full"
    >
      <motion.div
        variants={childVariants}
        className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center m-2 border-2 border-blue-500"
      >
        {icon}
      </motion.div>

      <motion.h2
        variants={childVariants}
        className="text-blue-800 text-4xl sm:text-5xl md:text-6xl font-extrabold bg-blue-100 px-4 py-1 rounded-xl mt-2"
      >
        {count}
        {suffix}
      </motion.h2>

      <motion.p
        variants={childVariants}
        className="text-blue-700 text-base sm:text-lg md:text-xl font-semibold text-center mt-4"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

export default StatCard;
