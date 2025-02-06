"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "../components/Nav";
import CustomLightbox from "../components/CustomLightbox";
import ReactLenis from "@studio-freight/react-lenis";
import { motion } from "framer-motion";

const images = ["/c1.jpg", "/c2.jpg", "/c3.jpg", "/c6.jpg", "/c5.jpg", "/c4.jpg", "/c7.jpg", "/c2.jpg", "/c3.jpg", "/c1.jpg", "/c5.jpg", "/c4.jpg"];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <ReactLenis root className="w-full">
      <div className="min-h-screen bg-black text-white">
        <Nav />
        <main className="px-4 sm:px-8 mx-auto sm:pt-52 pt-24 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
            {images.map((src, index) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.35 }}
                className="aspect-[3/4] relative cursor-pointer mb-4 sm:mb-0"
                onClick={() => openLightbox(index)}
              >
                <Image src={src || "/placeholder.svg"} alt={`Gallery image ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
              </motion.div>
            ))}
          </div>
        </main>
        <CustomLightbox isOpen={lightboxOpen} onClose={closeLightbox} images={images} currentIndex={currentIndex} onPrev={goToPrevious} onNext={goToNext} />
      </div>
    </ReactLenis>
  );
}
