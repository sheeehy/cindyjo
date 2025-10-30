"use client";

import { useState } from "react";
import Image from "next/image";
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
    <div className="w-full min-h-screen bg-black text-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-8 pt-24 sm:pt-52 pb-12">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 sm:gap-6 space-y-4">
          {images.map((src, i) => (
            <div
              key={src}
              className="relative mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-lg"
              onClick={() => openLightbox(i)}
            >
              <Image
                src={src}
                alt={`Image ${i + 1}`}
                width={800}
                height={1000}
                className="w-full h-auto object-cover transform-gpu transition-transform duration-200 ease-out hover:scale-[1.015]"
                unoptimized
                loading="lazy"
                draggable={false}
                priority={i < 6}
              />
            </div>
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
  );
}
