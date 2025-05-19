"use client";
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Head from "next/head";
import Image from "next/image";
import { ThumbsUp, GraduationCap } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
const ScrollReveal = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
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
      className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 bg-white rounded-2xl shadow-lg min-h-[270px] max-h-[270px] border-t-4 border-blue-500 mt-4 w-full"
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
export default function About() {
  return (
    <div className="relative min-h-screen">
      <Navigation />
      <motion.header
        className="pt-16 pb-10 flex justify-center bg-gradient-to-r  mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <motion.h1
            className="text-5xl font-bold text-white"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Empowering Students
          </motion.h1>
          <motion.p
            className="font-['Barlow_Semi_Condensed'] text-xl mt-4 text-white"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From All Backgrounds
          </motion.p>
        </div>
      </motion.header>
      <div className="w-full flex justify-center items-center flex-col">
        <motion.p
          className="w-[90%] text-center my-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Yearly, Kids Learn Code organises a free coding workshop to help
          students from all backgrounds who are interested in learning coding to
          join us for our virtual workshop. This virtual workshop is conducted
          by experienced student trainers, ensuring that learning is fun through
          engaging quizzes and interactions.
        </motion.p>
        <ScrollReveal className="flex grid-cols-1 md:grid-cols-2 items-center justify-between gap-4 sm:gap-8 z-10 w-full px-4 sm:w-[85%]">
          <StatCard
            icon={
              <ThumbsUp size={28} className="text-blue-500" strokeWidth={2.5} />
            }
            target={70}
            suffix="%"
            description="Students who agree/strongly agree that our workshops were enjoyable"
          />
          <StatCard
            icon={
              <GraduationCap
                size={28}
                className="text-blue-500"
                strokeWidth={2.5}
              />
            }
            target={300}
            suffix="+"
            description="Students participated in our workshops from 2022-2023"
          />
        </ScrollReveal>
        <ScrollReveal className="grid mt-5 grid-cols-1 md:grid-cols-2 items-center justify-center gap-4 sm:gap-8 z-10 w-full px-4 sm:w-[85%]">
          <motion.img
            className="w-[600px] rounded-3xl shadow-lg"
            src="/media.png"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          />
          <div className="flex flex-col items-center justify-center space-y-4">
            <motion.p
              className="quote bg-blue-50 p-5 rounded-xl shadow-md border-l-4 border-blue-500 italic text-gray-700"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            >
              "My daughter was lucky to hear about this course and decided to
              try it out with her classmate. They were apprehensive at first,
              but after the first lesson, she was elated. The facilitators were
              patient and knowledgeable, making the course fun and informative."
              <span className="block mt-2 font-semibold text-blue-700">
                - Kannagi Marcelino
              </span>
            </motion.p>
            <motion.p
              className="quote bg-blue-50 p-5 rounded-xl shadow-md border-l-4 border-blue-500 italic text-gray-700"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            >
              "The workshop exceeded all my expectations; the instructors
              engaged the children well and demonstrated patience throughout the
              sessions. My daughter was actively engaged and learned basic
              coding skills."
              <span className="block mt-2 font-semibold text-blue-700">
                - Mrs Tay-Phua Ei Ling
              </span>
            </motion.p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
