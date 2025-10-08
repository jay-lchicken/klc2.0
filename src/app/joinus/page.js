"use client";
import { useEffect, useState } from "react";
import { Users, Heart, Award, Mail } from "lucide-react";
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
      className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-all duration-300"
    >
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 border-2 border-blue-500">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-blue-800 mb-3">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default function Volunteer() {
  return (
    <div className="relative min-h-screen  text-white">
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
            Empowering Volunteers
          </motion.h1>
          <motion.p
            className="font-['Barlow_Semi_Condensed'] text-xl mt-4 text-white"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            To give without any limits
          </motion.p>
        </div>
      </motion.header>

      <div className="w-full flex justify-center items-center flex-col">
        <motion.p
          className="w-[90%] text-center my-8 text-lg leading-relaxed text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          If you would like to join us to make a difference in the lives of underprivileged children, and are a Secondary School student, fill out the form at the bottom to add you to our volunteering list to be informed of the latest workshops or events you can volunteer at. Service hours will definitely be provided to you to build up your portfolio while helping others! Your response will be kept at the strictest confidentiality.
        </motion.p>

        <ScrollReveal className="grid grid-cols-1 md:grid-cols-3 items-center justify-between gap-4 sm:gap-8 z-10 w-full px-4 sm:w-[85%]">
          <StatCard
            icon={
              <Users size={28} className="text-blue-500" strokeWidth={2.5} />
            }
            target={50}
            suffix="+"
            description="Active student volunteers helping our community"
          />
          <StatCard
            icon={
              <Heart size={28} className="text-blue-500" strokeWidth={2.5} />
            }
            target={500}
            suffix="+"
            description="Service hours completed by our volunteers"
          />
          <StatCard
            icon={
              <Award size={28} className="text-blue-500" strokeWidth={2.5} />
            }
            target={15}
            suffix="+"
            description="Workshops successfully organised with volunteers"
          />
        </ScrollReveal>

        <ScrollReveal className="w-full px-4 sm:w-[85%] mt-12">
          <motion.h2
            className="text-3xl font-bold text-white text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Why Volunteer With Us?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <BenefitCard
              icon={<Users size={24} className="text-blue-500" />}
              title="Make New Friends"
              description="Connect with like-minded students who share your passion for helping others and making a positive impact in the community."
            />
            <BenefitCard
              icon={<Heart size={24} className="text-blue-500" />}
              title="Give Back to Society"
              description="Do something meaningful by helping underprivileged children learn valuable coding skills and build their confidence."
            />
            <BenefitCard
              icon={<Award size={24} className="text-blue-500" />}
              title="Build Your Portfolio"
              description="Earn service hours to strengthen your portfolio while gaining valuable leadership and teaching experience."
            />
          </div>
        </ScrollReveal>

        

        <ScrollReveal className="w-[90%] text-center mb-8">
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-500"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="flex items-center justify-center mb-4">
              <Mail size={32} className="text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold text-blue-800">Have Questions?</h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Contact us now at{" "}
              <motion.a
                href="mailto:volunteer@kidslearncode.org"
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                volunteer@kidslearncode.org
              </motion.a>
            </p>
            <p className="text-lg font-semibold text-blue-700">
              Join us now to make a positive impact!
            </p>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal className="w-full px-4 mb-12">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-500 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">
              Join Our Volunteer Team
            </h2>

            <div className="flex justify-center">
              <div
data-heyform-id="Oj9xyyrL"
data-heyform-type="modal"
data-heyform-custom-url="https://forms.kidslearncode.org/form/"
data-heyform-size="large"
data-heyform-open-trigger="click"
data-heyform-open-delay="5"
data-heyform-open-scroll-percent="30"
data-heyform-trigger-background="#1d4ed8"
data-heyform-trigger-text="Open Form"
data-heyform-hide-after-submit="false"
data-heyform-auto-close="5"
><button class="heyform__trigger-button" type="button" onclick="HeyForm.openModal('Oj9xyyrL')">Open Form</button></div>
<script src="https://www.unpkg.com/@heyform-inc/embed@latest/dist/index.umd.js"></script>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </div>
  );
}