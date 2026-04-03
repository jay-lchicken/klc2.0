"use client";
import Navigation from "@/components/Navigation";
import { ThumbsUp, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import StatCard from "@/components/StatCard";
import TiltCard from "@/components/TiltCard";
import FloatingElements from "@/components/FloatingElements";

export default function About() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navigation />
      <FloatingElements />
      <motion.header
        className="pt-16 pb-10 flex justify-center mt-20 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <motion.h1
            className="gradient-text-white text-5xl font-bold"
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
      <div className="w-full flex justify-center items-center flex-col relative z-10">
        <motion.p
          className="w-[90%] text-center my-8 text-white"
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
          <TiltCard intensity={8}>
            <StatCard
              icon={
                <ThumbsUp size={28} className="text-blue-500" strokeWidth={2.5} />
              }
              target={70}
              suffix="%"
              description="Students who agree/strongly agree that our workshops were enjoyable"
            />
          </TiltCard>
          <TiltCard intensity={8}>
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
          </TiltCard>
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
              className="glow-card quote bg-blue-50 p-5 rounded-xl shadow-md border-l-4 border-blue-500 italic text-gray-700"
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
              className="glow-card quote bg-blue-50 p-5 rounded-xl shadow-md border-l-4 border-blue-500 italic text-gray-700"
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
