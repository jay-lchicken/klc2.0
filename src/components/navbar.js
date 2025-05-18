import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import useScrollSpy from "react-use-scrollspy";

const links = [
  { label: "Home", url: "home" },
  { label: "About", url: "about" },
  { label: "Timeline", url: "timeline" },
  { label: "Contact", url: "contact" }
];
const active = {
  color: "#1e40af",
  fontWeight: "bold"
};

const inactive = {
  color: "#4b5563",
  fontWeight: "normal"
};

const NavBar = ({ sectionRefs }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    
    if (id === 'about') {
      const aboutElement = document.getElementById('about');
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const homeEl = document.getElementById('home');
      
      const aboutEls = document.querySelectorAll('#about');
      const aboutEl = aboutEls.length > 0 ? aboutEls[0] : null;
      const aboutEl2 = aboutEls.length > 1 ? aboutEls[1] : null;
      
      const skillsEl = document.querySelector('[ref=skillsRef]') || 
                       document.querySelector('.w-full.bg-white.py-16.sm\\:py-20') ||
                       sectionRefs[2]?.current;
                       
      const timelineEl = document.getElementById('timeline');
      const contactEl = document.getElementById('contact');
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (contactEl && scrollY + windowHeight * 0.7 > contactEl.offsetTop) {
        setActiveIndex(3);
        return;
      }
      
      if (timelineEl && scrollY + windowHeight * 0.6 > timelineEl.offsetTop) {
        setActiveIndex(2);
        return;
      }
      
      if ((aboutEl && scrollY + windowHeight * 0.3 > aboutEl.offsetTop) || 
          (aboutEl2 && scrollY + windowHeight * 0.3 > aboutEl2.offsetTop) ||
          (skillsEl && scrollY + windowHeight * 0.4 > skillsEl.offsetTop)) {
        setActiveIndex(1);
        return;
      }
      
      setActiveIndex(0);
    };
    
    // Initial check and add event listener
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionRefs]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-1 sm:py-2' : 'py-3 sm:py-5'}`}>
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
  );
};

export default NavBar;
