"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from 'lucide-react';
import Link from "next/link";
const links = [
  { label: "Stats", url: "home" },
  { label: "About", url: "about" },
  { label: "Timeline", url: "timeline" },
  { label: "Contact", url: "contact" }
];
const navigationLinks = [
  { label: "About Us", url: "/about" },
  { label: "Impact", url: "/impact" },
  { label: 
    "Workshops", url: "/workshops" },
      {label: "Join Us", url: "/joinus" },

  
  
];

const active = {
  color: "#1e40af",
  fontWeight: "bold"
};

const inactive = {
  color: "#4b5563",
  fontWeight: "normal"
};

const NavigationHome = ({ sectionRefs }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scrolling for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Smooth scroll function
  const handleNavClick = (e, id) => {
    e.preventDefault();
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu when a link is clicked
    }
  };
  const isLinkActive = (url) => {
    return pathname === url;
  };

  // Active section detection on scroll
  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const timelineSection = document.getElementById('timeline');
      const contactSection = document.getElementById('contact');
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Use the actual DOM elements to detect scroll position
      if (contactSection && scrollY + windowHeight * 0.7 > contactSection.offsetTop) {
        setActiveIndex(3);
      } else if (timelineSection && scrollY + windowHeight * 0.6 > timelineSection.offsetTop) {
        setActiveIndex(2);
      } else if (aboutSection && scrollY + windowHeight * 0.3 > aboutSection.offsetTop) {
        setActiveIndex(1);
      } else {
        setActiveIndex(0);
      }
    };
    
    // Initial check and add event listener
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Mobile menu animations
  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { 
      x: 20, 
      opacity: 0 
    },
    open: { 
      x: 0, 
      opacity: 1 
    }
  };

  return (
    <>
      

      {/* Mobile Navigation */}
      <nav className=" w-full flex justify-between items-center fixed z-30 p-4 sm:p-6 backdrop-blur-md bg-white bg-opacity-70">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[130px]"
          src="/Kids Learn Code (130 x 50 px)-2.png"
          alt="Kids Learn Code"
        />
        <nav className={`hidden lg:block fixed top-2 left-0 w-full  transition-all duration-300 py-1 sm:py-2`}>
        <motion.ul 
          className={`flex items-center justify-center gap-3 sm:gap-6 px-2 sm:px-6 py-2 sm:py-3 mx-auto rounded-full max-w-fit transition-all duration-300 ${
            scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-md shadow-lg'
          }`}
        >
          {links.map(({ label, url }, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.li 
                key={index} 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a 
                  href={"#" + url} 
                  onClick={(e) => handleNavClick(e, url)}
                  className={`px-3 py-2 transition-all duration-300 relative block text-sm sm:text-base ${
                    isActive ? 'font-semibold scale-105' : 'hover:text-blue-600'
                  }`}
                >
                  {isActive && (
                    <motion.span 
                      layoutId="navIndicator" 
                      className="absolute inset-0 bg-blue-100 rounded-full -z-10" 
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span style={isActive ? active : inactive}>{label}</span>
                  {isActive && (
                    <motion.div 
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </motion.li>
            );
          })}
        </motion.ul>
      </nav>
        {/* Menu button */}
        <motion.button
          className="flex flex-col justify-center items-center cursor-pointer z-50 text-black rounded-full p-2 md:p-3 transition-all duration-200"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </motion.button>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              id="mobile-menu"
              className="fixed top-0 right-0 h-screen w-64 md:w-80 bg-white shadow-lg p-6 z-40 flex flex-col"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="flex flex-col space-y-6 mt-16">
                {navigationLinks.map((link) => (
                  <Link href={link.url} key={link.url}>
                    <motion.span
                      whileHover={{ x: 10 }}
                      variants={itemVariants}
                      className="text-lg font-medium transition-colors hover:text-blue-600 block"
                      style={
                        isLinkActive(link.url)
                          ? { color: "#1e40af", fontWeight: "bold" }
                          : { color: "#4b5563", fontWeight: "normal" }
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Backdrop overlay when menu is open */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default NavigationHome;
