"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const elements = [
  { type: "circle", top: "8%", left: "5%", size: 10, color: "rgba(255,255,255,0.12)", duration: 5.5 },
  { type: "bracket", top: "18%", left: "88%", size: 16, color: "rgba(72,202,228,0.18)", duration: 7, text: "{ }" },
  { type: "star", top: "55%", left: "8%", size: 14, color: "rgba(255,215,0,0.15)", duration: 6 },
  { type: "circle", top: "70%", left: "92%", size: 8, color: "rgba(255,255,255,0.1)", duration: 4.5 },
  { type: "bracket", top: "40%", left: "3%", size: 14, color: "rgba(72,202,228,0.15)", duration: 6.5, text: "< />" },
  { type: "star", top: "25%", left: "93%", size: 12, color: "rgba(255,215,0,0.12)", duration: 5 },
  { type: "circle", top: "85%", left: "15%", size: 6, color: "rgba(255,255,255,0.08)", duration: 8 },
  { type: "bracket", top: "65%", left: "80%", size: 13, color: "rgba(72,202,228,0.12)", duration: 7.5, text: "( )" },
];

const FloatingElements = () => {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 1 }}>
      {elements.map((el, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -12, 0],
            rotate: [0, el.type === "star" ? 15 : 5, el.type === "star" ? -15 : -5, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
            delay: i * 0.3,
          }}
          style={{
            position: "absolute",
            top: el.top,
            left: el.left,
          }}
        >
          {el.type === "circle" && (
            <div
              style={{
                width: el.size,
                height: el.size,
                borderRadius: "50%",
                background: el.color,
              }}
            />
          )}
          {el.type === "star" && (
            <Star size={el.size} fill={el.color} stroke="none" />
          )}
          {el.type === "bracket" && (
            <span
              style={{
                fontSize: el.size,
                color: el.color,
                fontFamily: "monospace",
                fontWeight: "bold",
              }}
            >
              {el.text}
            </span>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
