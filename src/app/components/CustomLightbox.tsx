import type React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface CustomLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

const CustomLightbox: React.FC<CustomLightboxProps> = ({ isOpen, onClose, images, currentIndex, onPrev, onNext }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          className="relative w-full h-full max-w-4xl max-h-[90vh] px-4 sm:px-0"
          onClick={(e) => e.stopPropagation()}
        >
          <Image src={images[currentIndex] || "/placeholder.svg"} alt={`Lightbox image ${currentIndex + 1}`} layout="fill" objectFit="contain" />
          <button className="absolute top-4 right-4 text-white text-4xl sm:text-2xl z-10" onClick={onClose}>
            &times;
          </button>
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-5xl sm:text-4xl z-10" onClick={onPrev}>
            &#8249;
          </button>
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-5xl sm:text-4xl z-10" onClick={onNext}>
            &#8250;
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CustomLightbox;
