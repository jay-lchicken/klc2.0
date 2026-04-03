"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CursorTrail = () => {
  const [sparkles, setSparkles] = useState([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const lastTime = useRef(0);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(hover: hover)").matches);
  }, []);

  const handleMouseMove = useCallback((e) => {
    const now = Date.now();
    if (now - lastTime.current < 50) return;
    lastTime.current = now;

    const sparkle = {
      id: now + Math.random(),
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 8 + 4,
      rotation: Math.random() * 360,
    };

    setSparkles((prev) => [...prev.slice(-18), sparkle]);
  }, []);

  const removeSparkle = useCallback((id) => {
    setSparkles((prev) => prev.filter((s) => s.id !== id));
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop, handleMouseMove]);

  if (!isDesktop) return null;

  return (
    <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 9999 }}>
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            initial={{ scale: 0, opacity: 1, rotate: sparkle.rotation }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [1, 0.8, 0],
              y: [0, -20],
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            onAnimationComplete={() => removeSparkle(sparkle.id)}
            style={{
              position: "absolute",
              left: sparkle.x - sparkle.size / 2,
              top: sparkle.y - sparkle.size / 2,
              width: sparkle.size,
              height: sparkle.size,
              background: "linear-gradient(135deg, #FFD700, #FFA500)",
              borderRadius: "1px",
              transform: `rotate(45deg)`,
              boxShadow: "0 0 6px rgba(255, 215, 0, 0.6)",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CursorTrail;
