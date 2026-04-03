"use client";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ThumbsUp, GraduationCap, Speech, Lightbulb, LaptopMinimalCheck, Ear } from 'lucide-react';
import NavigationHome from "../components/NavigationHome";
import ParallaxHeader from "@/components/parralax";
import ScrollReveal from "@/components/ScrollReveal";
import StatCard from "@/components/StatCard";
import TiltCard from "@/components/TiltCard";
import FloatingElements from "@/components/FloatingElements";

const Timeline = () => {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: false, amount: 0.2 });
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });

  const timelineEvents = [
    { year: "2022", title: "Foundation", description: "Kids Learn Code was established with our first coding workshop." },
    { year: "2023", title: "Expansion", description: "Reached 200+ students across multiple schools." },
    { year: "2024", title: "Innovation", description: "Launched specialised workshops in AI and game development." },
    { year: "2025", title: "Community", description: "Organised more workshops and increased our reach within the community in Singapore." }
  ];

  return (
    <div ref={timelineRef} className="relative max-w-6xl mx-auto px-4 py-12">
      {/* Background track */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-300 opacity-30"></div>
      {/* Animated fill line */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-400 origin-top"
        style={{ scaleY: scrollYProgress, height: "100%" }}
      />

      {timelineEvents.map((event, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          initial={{ opacity: 0, y: 50, rotateX: -15, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0, scale: 1 } : { opacity: 0, y: 50, rotateX: -15, scale: 0.95 }}
          transition={{ duration: 0.6, delay: index * 0.3, type: "spring", damping: 20 }}
          style={{ perspective: 1000 }}
        >
          <div className={`md:w-1/2 px-4 z-20 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
            <div className="glow-card bg-white p-6 rounded-lg shadow-lg h-full min-h-[160px] flex flex-col justify-center">
              <h3 className="text-blue-800 text-xl font-bold">{event.year}</h3>
              <h4 className="text-blue-700 text-lg font-semibold mt-1">{event.title}</h4>
              <p className="text-gray-700 mt-2">{event.description}</p>
            </div>
          </div>
          {/* Glowing timeline dot */}
          <div className="flex items-center justify-center my-4 md:my-0 md:w-0 relative">
            <motion.div
              className="absolute bg-blue-400 rounded-full w-6 h-6"
              animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="bg-blue-500 w-6 h-6 rounded-full border-4 border-white shadow z-10"></div>
          </div>
          <div className="md:w-1/2"></div>
        </motion.div>
      ))}
    </div>
  );
};

const SkillCard = ({ icon, title, description, delay }) => {
  const skillRef = useRef(null);
  const isInView = useInView(skillRef, { once: false, amount: 0.3 });

  return (
    <TiltCard intensity={10}>
      <motion.div
        ref={skillRef}
        className="glow-card flex flex-col items-center justify-center mx-2 sm:mx-4 mb-6 p-6 bg-white rounded-2xl shadow-md"
        initial={{ scale: 0.3, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.3, opacity: 0 }}
        transition={{ duration: 0.5, delay: delay, type: "spring", damping: 20 }}
      >
        {icon}
        <h1 className="text-blue-800 text-lg sm:text-xl font-semibold mt-2 text-center">{title}</h1>
        <p className="text-blue-700 text-sm sm:text-base text-center">{description}</p>
      </motion.div>
    </TiltCard>
  );
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [showContent, setShowContent] = useState(true);
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-2">

      {showContent && (
        <>
          <NavigationHome sectionRefs={[homeRef, aboutRef, timelineRef, contactRef]} />
          <header ref={homeRef} id="home" className="relative text-center text-white w-full px-4 sm:w-[85%] z-10 pt-16 sm:pt-20">
            <ParallaxHeader />
          </header>

          <ScrollReveal className="flex grid-cols-1 md:grid-cols-2 items-center justify-between gap-4 sm:gap-8 z-10 w-full px-4 sm:w-[85%]">
            <TiltCard intensity={8}>
              <StatCard
                icon={<ThumbsUp size={28} className="text-blue-500" strokeWidth={2.5} />}
                target={70}
                suffix="%"
                description="Students who agree/strongly agree that our workshops were enjoyable"
              />
            </TiltCard>
            <TiltCard intensity={8}>
              <StatCard
                icon={<GraduationCap size={28} className="text-blue-500" strokeWidth={2.5} />}
                target={300}
                suffix="+"
                description="Students participated in our workshops from 2022-2023"
              />
            </TiltCard>
          </ScrollReveal>

          <div ref={aboutRef} id="about" className="w-full bg-white mt-10 py-16 sm:py-20">
            <ScrollReveal className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
              <h1 className="gradient-text text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our Mission</h1>
              <div className="h-1 w-16 sm:w-20 bg-blue-500 mx-auto mb-6 sm:mb-8"></div>
              <p className="text-blue-900 text-xl sm:text-2xl md:text-3xl font-medium text-center max-w-3xl">
                Engage and ignite the passion for coding among all students in an evolving world.
              </p>
            </ScrollReveal>
          </div>

          <div className="w-full mt-0 py-16 sm:py-20 animated-gradient-blue relative overflow-hidden">
            <FloatingElements />
            <ScrollReveal className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center relative z-10">
              <h1 className="gradient-text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">One Step At A Time</h1>
              <div className="h-1 w-16 sm:w-20 bg-white mx-auto mb-6 sm:mb-8"></div>
              <p className="text-white text-xl sm:text-2xl md:text-3xl w-full sm:w-[90%] md:w-[80%] text-center font-medium">
                We aim to engage and ignite kids' passion for coding in an evolving world, and we envision a world where every child has access to quality coding education.
              </p>
            </ScrollReveal>
          </div>

          <div ref={skillsRef} className="w-full bg-white py-16 sm:py-20 relative overflow-hidden">
            <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center">
              <ScrollReveal>
                <h1 className="gradient-text text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Skills Developed</h1>
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

          <div ref={timelineRef} id="timeline" className="w-full py-16 sm:py-20 animated-gradient-dark relative overflow-hidden">
            <FloatingElements />
            <ScrollReveal className="w-full relative z-10">
              <h1 className="gradient-text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Our Journey</h1>
              <div className="h-1 w-16 sm:w-20 bg-blue-500 mx-auto mb-6 sm:mb-8"></div>
              <Timeline />
            </ScrollReveal>
          </div>

          <div ref={contactRef} id="contact" className="w-full py-16 sm:py-20 relative overflow-hidden">
            <FloatingElements />
            <ScrollReveal className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center relative z-10">
              <h1 className="gradient-text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Contact Us</h1>
              <div className="h-1 w-16 sm:w-20 bg-blue-500 mx-auto mb-6 sm:mb-8"></div>
              <p className="text-white text-xl md:text-2xl text-center mb-8">
                Have questions or want to get involved? Reach out to us!
              </p>
              <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl">
                <TiltCard intensity={8} className="flex-1">
                  <div className="glow-card bg-blue-50 p-6 rounded-xl shadow-md h-full">
                    <h3 className="text-blue-800 text-xl font-bold mb-3">Email Us</h3>
                    <p className="text-blue-600">contact@kidslearncode.org</p>
                  </div>
                </TiltCard>
                <TiltCard intensity={8} className="flex-1">
                  <div className="glow-card bg-blue-50 p-6 rounded-xl shadow-md h-full">
                    <h3 className="text-blue-800 text-xl font-bold mb-3">Follow Us</h3>
                    <p className="text-blue-600">@kids_learn_code</p>
                  </div>
                </TiltCard>
              </div>
            </ScrollReveal>
          </div>
        </>
      )}

    </div>
  );
}
