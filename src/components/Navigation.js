"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from 'lucide-react';
import Link from "next/link";

const navigationLinks = [
  { label: "About Us", url: "/about" },
  { label: "Impact", url: "/impact" },
  { label: "Workshops", url: "/workshops" },
  {label: "Join Us", url: "/joinus" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
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

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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

  const isLinkActive = (url) => {
    return pathname === url;
  };

  return (
    <>
      <nav className="w-full flex max-h-[90px] justify-between items-center fixed z-30 p-4 sm:p-6 backdrop-blur-md bg-white bg-opacity-70">
        <Link href="/">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[130px]"
            src="/Kids Learn Code (130 x 50 px)-2.png"
            alt="Kids Learn Code"
          />
        </Link>
        
        <div className="hidden lg:flex items-center space-x-8 max-h-[50px">
          {navigationLinks.map((link) => (
            <Link
              key={link.url}
              href={link.url}
              className={`text-base font-medium transition-colors hover:text-blue-600 ${
                isLinkActive(link.url) ? "text-blue-700 font-bold" : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        <motion.button
          className="flex lg:hidden flex-col justify-center items-center cursor-pointer z-50 text-black rounded-full p-2 md:p-3 transition-all duration-200"
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

export default Navigation;