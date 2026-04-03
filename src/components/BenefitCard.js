"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BenefitCard = ({ icon, title, description }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className="glow-card bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-all duration-300"
    >
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 border-2 border-blue-500">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-blue-800 mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default BenefitCard;
