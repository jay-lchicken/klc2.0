"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function EntryAnimation({ onAnimationComplete }) {
  const [randomIndex, setRandomIndex] = useState(0);
  const letters = ["K", "i", "d", "s", "  ", "L", "e", "a", "r", "n", "  ", "C", "o", "d", "e"];

  useEffect(() => {
    let newRandomIndex;
    do {
      newRandomIndex = Math.floor(Math.random() * letters.length);
    } while (newRandomIndex === 1);
    setRandomIndex(newRandomIndex);
    
    // After 2 seconds, trigger the callback to show the main content
    const timer = setTimeout(() => {
      if (onAnimationComplete) {
        onAnimationComplete();
      }
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [letters.length, onAnimationComplete]);

  const movementDirection = Math.random() > 0.5 ? 1 : -1;

  const variants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.28, 1.1, 0.74, 1],
        delay: 0.2 + i * 0.05 * movementDirection
      }
    }),
    hidden: { 
      y: 100,
      opacity: 0
    }
  };

  return (
    <div className="fixed inset-0 z-50" style={{ 
      fontFamily: "Manrope",
      textAlign: "center",
      width: "100vw",
      height: "100vh",
      display: "flex",
      placeContent: "center",
      placeItems: "center",
      margin: 0,
      color: "white",
      backgroundColor: "#00639A",
      overflow: "hidden"
    }}>
      <div className="wrapper">
        {letters.map((letter, index) => (
          <motion.div
            className="letter_container"
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <motion.span 
              className={`${index === randomIndex ? "pixeled" : ""}`}
            >
              {letter}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
