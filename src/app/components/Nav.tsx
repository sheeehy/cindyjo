"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedLink from "./AnimatedLink";
import MobileMenu from "./MobileMenu";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, when: "beforeChildren" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav className="absolute w-full bg-transparent text-sm z-50 text-white" variants={containerVariants} initial="hidden" animate="visible">
      <div className="mx-auto px-4 sm:px-8 py-6 flex justify-between items-start">
        <motion.div variants={itemVariants}>
          <AnimatedLink href="/">CINDY JORGJI</AnimatedLink>
        </motion.div>

        <div className="hidden md:block">
          <motion.h1 variants={itemVariants}>PHOTOGRAPHER</motion.h1>
          <motion.h1 variants={itemVariants}>TORONTO, CA</motion.h1>
        </div>

        <div className="hidden md:block text-right">
          <motion.div variants={itemVariants}>
            <AnimatedLink href="https://www.instagram.com/cindyyjo/" target="_blank">
              INSTAGRAM
            </AnimatedLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <AnimatedLink href="mailto:cindyjorgji2002@gmail.com">EMAIL</AnimatedLink>
          </motion.div>
        </div>

        <div className="hidden md:block text-right">
          <motion.div variants={itemVariants}>
            <AnimatedLink href="/contact">CONTACT</AnimatedLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <AnimatedLink href="/gallery">GALLERY</AnimatedLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <AnimatedLink href="/about">ABOUT</AnimatedLink>
          </motion.div>
        </div>

        <motion.button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} variants={itemVariants}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </motion.nav>
  );
};

export default Nav;
