import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLink from "./AnimatedLink";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  exit: {
    x: "100%",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom * 0.1,
      duration: 0.5,
    },
  }),
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const links = [
    { href: "/", label: "HOME" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
    { href: "https://www.instagram.com/cindyyjo/", label: "INSTAGRAM", target: "_blank" },
    { href: "mailto:cindyjorgji2002@gmail.com", label: "EMAIL" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 bg-black text-white z-50" variants={menuVariants} initial="hidden" animate="visible" exit="exit">
          <div className="flex flex-col h-full justify-center items-center">
            <button onClick={onClose} className="absolute top-6 right-6 text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="text-left">
              {links.map((link, index) => (
                <motion.div key={link.href} variants={linkVariants} custom={index} initial="hidden" animate="visible" className="my-4">
                  <AnimatedLink href={link.href} target={link.target} className="text-2xl">
                    {link.label}
                  </AnimatedLink>
                </motion.div>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
