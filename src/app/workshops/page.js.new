"use client";
import { useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";

// ScrollReveal component for scroll-activated animations
const ScrollReveal = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Card animation component
const AnimatedCard = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, threshold: 0.1 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ 
        duration: 0.7, 
        delay: delay, 
        type: "spring", 
        stiffness: 100 
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="mb-16 bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {children}
    </motion.div>
  );
};

export default function Workshops() {
    return (
        <div className="min-h-screen">
            <Navigation />
           
            <motion.header 
                className="mt-20 pt-16 pb-10 flex justify-center bg-gradient-to-r"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="text-center">
                    <motion.h1 
                        className="text-5xl font-bold text-white"
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Our Workshops
                    </motion.h1>
                    <motion.p 
                        className="font-['Barlow_Semi_Condensed'] text-xl mt-4 text-white"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Discover coding adventures for curious minds
                    </motion.p>
                </div>
            </motion.header>
            
            <section className="px-6 py-12 max-w-6xl mx-auto">
                <AnimatedCard delay={0.1}>
                    <div className="p-8">
                        <div className="flex items-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-blue-700">Scratch</h2>
                        </div>
                        
                        <ScrollReveal delay={0.2} className="mt-6">
                            <p className="font-bold text-xl text-gray-800 mb-3">What is Scratch?</p>
                            <p className="text-gray-700">Scratch is a free programming language offered to kickstart students' journey in programming. It allows students to use block-based tools to program games, stories or interactive animations easily.</p>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={0.3} className="my-8">
                            <figure className="rounded-lg overflow-hidden border border-gray-200 text-black">
                                <img src="/ScratchSample.png" alt="Scratch Workshop Interface" className="w-full h-auto" />
                                <figcaption className="text-sm italic text-center py-2 bg-gray-50">A screenshot of the Scratch Interface used in workshops</figcaption>
                            </figure>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={0.4} className="mt-8">
                            <p className="font-bold text-xl text-gray-800 mb-3">What is included in our course?</p>
                            <div className="space-y-2 pl-6">
                                <p className="relative text-gray-700">
                                    <span className="absolute -left-6 text-blue-600 font-bold">1.</span>
                                    Basic, Intermediate and Advanced Segments of Scratch
                                </p>
                                <p className="relative text-gray-700">
                                    <span className="absolute -left-6 text-blue-600 font-bold">2.</span>
                                    Presentation Skills + Usage of Google Slides/PowerPoint
                                </p>
                                <p className="relative text-gray-700">
                                    <span className="absolute -left-6 text-blue-600 font-bold">3.</span>
                                    Hackathon Segment
                                </p>
                                <p className="relative text-gray-700">
                                    <span className="absolute -left-6 text-blue-600 font-bold">4.</span>
                                    To successfully complete the course, students must achieve a minimum score of 70% on the End-of-Course test.
                                </p>
                                <p className="relative text-gray-700">
                                    <span className="absolute -left-6 text-blue-600 font-bold">5.</span>
                                    [Optional] Cyberwellness Module
                                </p>
                                <p className="relative text-gray-700">
                                    <span className="absolute -left-6 text-blue-600 font-bold">6.</span>
                                    [Optional] Computational Thinking Module
                                </p>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={0.5} className="mt-8">
                            <p className="font-bold text-xl text-gray-800 mb-3">Pre-Requisites of the Course</p>
                            <div className="bg-blue-50 p-5 rounded-lg">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-5 h-5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <p className="text-gray-700">Working Computer and Stable Internet for all Students</p>
                                </div>
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-5 h-5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <p className="text-gray-700">Printer (to print Summary Notes, if possible)</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-5 h-5 rounded-full bg-blue-600 flex-shrink-0"></div>
                                    <p className="text-gray-700">Time of the course should be a minimum of 9 Hours (Combined)</p>
                                </div>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={0.6} className="mt-8">
                            <p className="font-bold text-xl text-gray-800 mb-3">Sample Quiz and Resources</p>
                            <div className="bg-gray-50 p-5 rounded-lg">
                                <div className="mb-3">
                                    <Link href="https://create.kahoot.it/share/sprites-backdrops-and-costumes/e9773274-013c-491b-a5b0-1eb147ee746d" 
                                          className="text-blue-600 hover:text-blue-800 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        Sprites, Backdrops and Costumes Kahoot
                                    </Link>
                                </div>
                                <div>
                                    <Link href="https://kidslearncode-my.sharepoint.com/:p:/g/personal/ltang_kidslearncode_org1/EYOeRMLm_cJEiGmXq5qLTrYBi1KLL7A5oOiZjk4yYl3PZw?e=bbu2bV" 
                                          className="text-blue-600 hover:text-blue-800 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Sample Variables Lesson
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={0.7} className="mt-8">
                            <p className="font-bold text-xl text-gray-800 mb-3">Suitability Questionnaire</p>
                            <div className="bg-yellow-50 p-5 rounded-lg">
                                <p className="font-medium mb-3 text-black">Is this workshop right for your students?</p>
                                <div className="space-y-2">
                                    <p className="relative pl-6 text-gray-700">
                                        <span className="absolute left-0 text-yellow-600 font-bold">1.</span>
                                        Is the target student audience aged between 7 to 12?
                                    </p>
                                    <p className="relative pl-6 text-gray-700">
                                        <span className="absolute left-0 text-yellow-600 font-bold">2.</span>
                                        Is it the students' first programming language?
                                    </p>
                                    <p className="relative pl-6 text-gray-700">
                                        <span className="absolute left-0 text-yellow-600 font-bold">3.</span>
                                        Are students proficient in using the mouse and keyboard?
                                    </p>
                                </div>
                                <p className="italic mt-4 text-gray-600">If the answer to 2 or more questions is yes, Kids Learn Code's Scratch Programme will be suitable!</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </AnimatedCard>
                
                <AnimatedCard delay={0.3}>
                    <div className="p-8 text-black">
                        <div className="flex items-center">
                            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mr-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-indigo-700">Python</h2>
                        </div>
                        
                        <ScrollReveal delay={0.4} className="mt-6">
                            <p className="font-bold text-xl text-gray-800 mb-3">What is Python?</p>
                            <p className="text-gray-700">Python is a text-based programming language which is powerful as it can be used for almost everything from APIs to Games.</p>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={0.5} className="my-8">
                            <figure className="rounded-lg overflow-hidden border border-gray-200">
                                <img src="/PythonSample.png" alt="Python Workshop Interface" className="w-full h-auto" />
                                <figcaption className="text-sm italic text-center py-2 bg-gray-50">A screenshot of an IDE for Python used in workshops (Source: Replit)</figcaption>
                            </figure>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={0.6} className="mt-8">
                            <p className="font-bold text-xl text-gray-800 mb-3">What is included in our course?</p>
                            <div className="space-y-2 pl-6">
                                <p className="relative text-gray-700">
                                    <span className="absolute -left-6 text-indigo-600 font-bold">1.</span>
                                    Basic, Intermediate and Advanced Segments of Python
                                </p>
                                <p className="relative text-gray-700">
                                    <span className="absolute -left-6 text-indigo-600 font-bold">2.</span>
                                    Setting up of Replit account
                                </p>
                                <p className="relative text-gray-700">
                                    <span className="absolute -left-6 text-indigo-600 font-bold">3.</span>
                                    Setting up of Coursemology account to test code
                                </p>
                                <p className="relative text-gray-700">
                                    <span className="absolute -left-6 text-indigo-600 font-bold">4.</span>
                                    Presentation Skills + Usage of Google Slides/PowerPoint
                                </p>
                                <p className="relative text-gray-700">
                                    <span className="absolute -left-6 text-indigo-600 font-bold">5.</span>
                                    Hackathon Segment
                                </p>
                                <p className="relative text-gray-700">
                                    <span className="absolute -left-6 text-indigo-600 font-bold">6.</span>
                                    To successfully complete the course, students must achieve a minimum score of 70% on the End-of-Course test.
                                </p>
                                <p className="relative text-gray-700">
                                    <span className="absolute -left-6 text-indigo-600 font-bold">7.</span>
                                    [Optional] Cyberwellness Module
                                </p>
                                <p className="relative text-gray-700">
                                    <span className="absolute -left-6 text-indigo-600 font-bold">8.</span>
                                    [Optional] Computational Thinking Module
                                </p>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={0.7} className="mt-8">
                            <p className="font-bold text-xl text-gray-800 mb-3">Pre-Requisites of the Course</p>
                            <div className="bg-indigo-50 p-5 rounded-lg">
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-5 h-5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <p className="text-gray-700">Working Computer and Stable Internet for all Students</p>
                                </div>
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-5 h-5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <p className="text-gray-700">Printer (to print Summary Notes, if possible)</p>
                                </div>
                                <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-5 h-5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <p className="text-gray-700">Time of the course should be a minimum of 9 Hours (Combined)</p>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-5 h-5 rounded-full bg-indigo-600 flex-shrink-0"></div>
                                    <p className="text-gray-700">Recommended time spent on the course should be 12 Hours (Combined) including practice @ home</p>
                                </div>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={0.8} className="mt-8">
                            <p className="font-bold text-xl text-gray-800 mb-3">Sample Quiz and Resources</p>
                            <div className="bg-gray-50 p-5 rounded-lg">
                                <div className="mb-3">
                                    <Link href="https://kidslearncode-my.sharepoint.com/:p:/g/personal/ltang_kidslearncode_org1/EVF880n_D4BFjHlPTbs5PtEBv7gXXZnQIqqHbjeENygcEg?e=Jq25cg" 
                                          className="text-indigo-600 hover:text-indigo-800 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Lesson Slides: Variables and Print
                                    </Link>
                                </div>
                                <div>
                                    <Link href="https://kahoot.it/challenge/006490919?challenge-id=9f3ff350-2038-46e1-9a2b-21e27e08502d_1729413647667" 
                                          className="text-indigo-600 hover:text-indigo-800 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        Basic Python - Kahoot
                                    </Link>
                                </div>
                            </div>
                        </ScrollReveal>
                        
                        <ScrollReveal delay={0.9} className="mt-8">
                            <p className="font-bold text-xl text-gray-800 mb-3">Suitability Questionnaire</p>
                            <div className="bg-purple-50 p-5 rounded-lg">
                                <p className="font-medium text-black mb-3">Is this workshop right for your students?</p>
                                <div className="space-y-2">
                                    <p className="relative pl-6 text-gray-700">
                                        <span className="absolute left-0 text-purple-600 font-bold">1.</span>
                                        Is the target student audience aged between 9 to 12?
                                    </p>
                                    <p className="relative pl-6 text-gray-700">
                                        <span className="absolute left-0 text-purple-600 font-bold">2.</span>
                                        Have the students used programming languages before?
                                    </p>
                                    <p className="relative pl-6 text-gray-700">
                                        <span className="absolute left-0 text-purple-600 font-bold">3.</span>
                                        Are students proficient in using the mouse and keyboard?
                                    </p>
                                </div>
                                <p className="italic mt-4 text-gray-600">If the answer to 2 or more questions is yes, Kids Learn Code's Python Programme will be suitable!</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </AnimatedCard>
            </section>
            
            <motion.div 
                className="w-full py-16 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.7 }}
            >
                <h2 className="text-3xl font-bold text-white mb-6">Ready to transform learning?</h2>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                    <Link href="/about" className="bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300">
                        Learn More About Us
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
