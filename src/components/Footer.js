"use client";
import { motion } from "framer-motion";

const partners = [
  { href: "https://formbricks.com", src: "/footerlogo.e272c0f1.svg", alt: "Formbricks", width: "250px" },
  { href: "https://bitly.com", src: "/bitly-logo-black-transparent.png", alt: "Bitly", width: "120px" },
  { href: "", src: "/rulang-primary-school.png", alt: "Rulang PS", width: "100px" },
  { href: "", src: "/logo.jpg", alt: "Anderson PS", width: "200px" },
];

const Footer = () => {
  return (
    <footer className="mt-20 w-full bg-white">
      <div className="h-1 animated-gradient-blue w-full"></div>
      <div className="flex flex-col items-center p-8 rounded-lg">
        <p className="text-xl font-bold mb-6 text-gray-800">Our Partners</p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <a href={partner.href} key={partner.alt}>
              <motion.img
                src={partner.src}
                alt={partner.alt}
                style={{ width: partner.width, maxWidth: "100%", height: "auto" }}
                className="grayscale opacity-60 transition-all duration-400"
                whileHover={{ filter: "grayscale(0)", opacity: 1, scale: 1.08 }}
                animate={{ y: [0, -4, 0] }}
                transition={{
                  y: { duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut" },
                }}
              />
            </a>
          ))}
        </div>
        <p className="text-gray-400 text-sm mt-8">2025 Kids Learn Code. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
