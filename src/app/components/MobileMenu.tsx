import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  hidden: { x: "100%" },
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
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 bg-black/80 text-white z-50" variants={menuVariants} initial="hidden" animate="visible" exit="exit">
          <div className="flex flex-col h-full justify-center items-end">
            <button onClick={onClose} className="absolute top-6 right-6 text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav className="text-right px-2">
              <motion.div variants={linkVariants} custom={0} initial="hidden" animate="visible" className="my-4">
                <Link href="/" className="text-2xl font" onClick={onClose}>
                  HOME
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} custom={1} initial="hidden" animate="visible" className="my-4">
                <Link href="/gallery" className="text-2xl font" onClick={onClose}>
                  GALLERY
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} custom={2} initial="hidden" animate="visible" className="my-4">
                <Link href="/about" className="text-2xl font" onClick={onClose}>
                  ABOUT
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} custom={3} initial="hidden" animate="visible" className="my-4">
                <Link href="/contact" className="text-2xl" onClick={onClose}>
                  CONTACT
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} custom={4} initial="hidden" animate="visible" className="my-4">
                <Link href="https://www.instagram.com/cindyyjo/" target="_blank" className="text-2xl" onClick={onClose}>
                  INSTAGRAM
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} custom={5} initial="hidden" animate="visible" className="my-4">
                <Link href="mailto:cindyjorgji2002@gmail.com" className="text-2xl" onClick={onClose}>
                  EMAIL
                </Link>
              </motion.div>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
