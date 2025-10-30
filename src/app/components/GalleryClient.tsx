"use client";

import { useState } from "react";
import Image from "next/image";
import ReactLenis from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import CustomLightbox from "../components/CustomLightbox";

export default function GalleryClient({ images }: { images: string[] }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (i: number) => {
    setCurrentIndex(i);
    setLightboxOpen(true);
  };
  const closeLightbox = () => setLightboxOpen(false);
  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <ReactLenis root className="w-full">
      <div className="min-h-screen bg-black text-white">
        <main className="px-4 sm:px-8 mx-auto sm:pt-52 pt-24 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
            {images.map((src, i) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="aspect-[3/4] relative cursor-pointer mb-4 sm:mb-0"
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={src}
                  alt={`Gallery image ${i + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  unoptimized
                />
              </motion.div>
            ))}
          </div>
        </main>

        <CustomLightbox
          isOpen={lightboxOpen}
          onClose={closeLightbox}
          images={images}
          currentIndex={currentIndex}
          onPrev={prev}
          onNext={next}
        />
      </div>
    </ReactLenis>
  );
}
