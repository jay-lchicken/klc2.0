"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ThumbsUp, GraduationCap, Speech, Lightbulb, LaptopMinimalCheck, Ear, ParkingCircle } from 'lucide-react';
import NavigationHome from "../components/NavigationHome";
import EntryAnimation from "../components/EntryAnimation";
import ParallaxHeader from "@/components/parralax";
import ParallaxText from "@/components/ParallaxText";

const Timeline = () => {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: false, amount: 0.2 });
  
  const timelineEvents = [
    { year: "2022", title: "Foundation", description: "Kids Learn Code was established with our first coding workshop." },
    { year: "2023", title: "Expansion", description: "Reached 200+ students across multiple schools." },
    { year: "2024", title: "Innovation", description: "Launched specialized workshops in AI and game development." },
    { year: "2025", title: "Community", description: "Created student mentor program and expanded to underserved communities." }
  ];

  return (
    <div ref={timelineRef} className="relative max-w-6xl mx-auto px-4 py-12">
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 opacity-70"></div>
      
      {timelineEvents.map((event, index) => (
        <motion.div 
          key={index}
          className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className={`md:w-1/2 px-4 z-20 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
            <div className="bg-white p-6 rounded-lg shadow-lg h-full min-h-[160px] flex flex-col justify-center">
              <h3 className="text-blue-800 text-xl font-bold">{event.year}</h3>
              <h4 className="text-blue-700 text-lg font-semibold mt-1">{event.title}</h4>
              <p className="text-gray-700 mt-2">{event.description}</p>
            </div>
          </div>
          <div className="flex items-center justify-center my-4 md:my-0 md:w-0">
            <div className="bg-blue-500 w-6 h-6 rounded-full border-4 border-white shadow"></div>
          </div>
          <div className="md:w-1/2"></div>
        </motion.div>
      ))}
    </div>
  );
};

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

const SkillCard = ({ icon, title, description, delay }) => {
  const skillRef = useRef(null);
  const isInView = useInView(skillRef, { once: false, amount: 0.3 });
  
  return (
    <motion.div 
      ref={skillRef}
      className="flex flex-col items-center justify-center mx-2 sm:mx-4 mb-6"
      initial={{ scale: 0.3, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }}
      transition={{ duration: 0.5, delay: delay, type: "spring", damping: 20 }}
    >
      {icon}
      <h1 className="text-blue-800 text-lg sm:text-xl font-semibold mt-2 text-center">{title}</h1>
      <p className="text-blue-700 text-sm sm:text-base text-center">{description}</p>
    </motion.div>
  );
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const timelineRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleAnimationComplete = () => {
    setShowContent(true);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-b from-[#00639A] to-[#004d77]">
      {!showContent && <EntryAnimation onAnimationComplete={handleAnimationComplete} />}
      
      {showContent && (
        <>
          
          <NavigationHome sectionRefs={[homeRef, aboutRef, timelineRef, contactRef]} />
          <header ref={homeRef} id="home" className="relative text-center text-white w-full px-4 sm:w-[85%] z-10 pt-16 sm:pt-20">
            {/* <div className="relative w-full overflow-hidden rounded-xl sm:rounded-3xl">
              <Image
                className="header w-full h-auto blur-md"
                src="/Screenshot%202025-04-28%20at%207.27.21%E2%80%AFAM.png"
                alt="Kids Learn Code Header"
                width={1200}
                height={600}
                priority
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-4">
                <motion.h1 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="font-red-rose text-3xl sm:text-5xl lg:text-7xl font-extrabold drop-shadow-lg"
                >
                  Kids Learn Code
                </motion.h1>
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="font-red-rose text-lg sm:text-xl lg:text-3xl mt-2 font-medium drop-shadow"
                >
                  Allowing all students to learn coding for free
                </motion.p>
              </div>
            </div> */}
            <ParallaxHeader />
          </header>
          
          <ScrollReveal className="flex grid-cols-1 md:grid-cols-2 items-center justify-between gap-4 sm:gap-8 z-10 w-full px-4 sm:w-[85%]">
            <StatCard 
              icon={<ThumbsUp size={28} className="text-blue-500" strokeWidth={2.5} />}
              target={70}
              suffix="%"
              description="Students who agree/strongly agree that our workshops were enjoyable"
            />
            <StatCard 
              icon={<GraduationCap size={28} className="text-blue-500" strokeWidth={2.5} />}
              target={300}
              suffix="+"
              description="Students participated in our workshops from 2022-2023"
            />
          </ScrollReveal>
          <div ref={aboutRef} id="about" className="w-full bg-white mt-10 py-16 sm:py-20">
            <ScrollReveal className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
              <h1 className="text-blue-800 text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Mission</h1>
              <div className="h-1 w-16 sm:w-20 bg-blue-500 mx-auto mb-6 sm:mb-8"></div>
              <p className="text-blue-900 text-xl sm:text-2xl md:text-3xl font-medium text-center max-w-3xl">
                Engage and ignite the passion for coding among all students in an evolving world.
              </p>
            </ScrollReveal>
          </div>
          
          <div ref={aboutRef} id="about" className="w-full mt-0 py-16 sm:py-20 bg-gradient-to-b from-[#00639A] to-[#004d77]">
            <ScrollReveal className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">One Step At A Time</h1>
              <div className="h-1 w-16 sm:w-20 bg-white mx-auto mb-6 sm:mb-8"></div>
              <p className="text-white text-xl sm:text-2xl md:text-3xl w-full sm:w-[90%] md:w-[80%] text-center font-medium">
                We aim to engage and ignite kids' passion for coding in an evolving world, and we envision a world where every child has access to quality coding education.
              </p>
            </ScrollReveal>
          </div>
          
          <div ref={skillsRef} className="w-full bg-white py-16 sm:py-20">
            <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
              <ScrollReveal>
                <h1 className="text-blue-800 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Skills Developed</h1>
                <div className="h-1 w-16 sm:w-20 bg-blue-500 mx-auto mb-6 sm:mb-8"></div>
              </ScrollReveal>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 w-full">
                <SkillCard 
                  icon={<Speech size={48} className="text-blue-500" />}
                  title="Confidence"
                  description="Students are taught how to make slides and present them in our workshops."
                  delay={0}
                />
                <SkillCard 
                  icon={<Lightbulb size={48} className="text-blue-500" />}
                  title="Originality"
                  description="Students are encouraged to come up with new ideas using the problem statement."
                  delay={0.1}
                />
                <SkillCard 
                  icon={<LaptopMinimalCheck size={48} className="text-blue-500" />}
                  title="Digital Literacy"
                  description="Students learn how to stay safe and code better with Computational Thinking."
                  delay={0.2}
                />
                <SkillCard 
                  icon={<Ear size={48} className="text-blue-500" />}
                  title="Engagement"
                  description="Quizzes and hackathons keep students focused and satisfied during workshops!"
                  delay={0.3}
                />
              </div>
            </div>
          </div>
          
          <div ref={timelineRef} id="timeline" className="w-full py-16 sm:py-20 bg-gradient-to-b from-[#00639A] to-[#004d77]">
            <ScrollReveal className="w-full">
              <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Our Journey</h1>
              <div className="h-1 w-16 sm:w-20 bg-blue-500 mx-auto mb-6 sm:mb-8"></div>
              <Timeline />
            </ScrollReveal>
          </div>
          
          <div ref={contactRef} id="contact" className="w-full bg-white py-16 sm:py-20">
            <ScrollReveal className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
              <h1 className="text-blue-800 text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Contact Us</h1>
              <div className="h-1 w-16 sm:w-20 bg-blue-500 mx-auto mb-6 sm:mb-8"></div>
              <p className="text-blue-900 text-xl md:text-2xl text-center mb-8">
                Have questions or want to get involved? Reach out to us!
              </p>
              <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
                <div className="bg-blue-50 p-6 rounded-xl shadow-md flex-1">
                  <h3 className="text-blue-800 text-xl font-bold mb-3">Email Us</h3>
                  <p className="text-blue-600">contact@kidslearncode.org</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl shadow-md flex-1">
                  <h3 className="text-blue-800 text-xl font-bold mb-3">Follow Us</h3>
                  <p className="text-blue-600">@kids_learn_code</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </>
      )}
    </div>
  );
}