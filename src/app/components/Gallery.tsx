"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ImageData {
  _id: string;
  name: string;
  image: {
    url: string;
    metadata: {
      dimensions: {
        width: number;
        height: number;
      };
    };
  };
}

const Gallery: React.FC<{ images: ImageData[] }> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((item, index) => (
        <ImageCard key={item._id} item={item} index={index} />
      ))}
    </div>
  );
};

const ImageCard: React.FC<{ item: ImageData; index: number }> = ({ item, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  });

  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="overflow-hidden rounded-lg"
    >
      <Image
        src={item.image.url}
        alt={item.name}
        width={item.image.metadata.dimensions.width}
        height={item.image.metadata.dimensions.height}
        className="w-full h-auto object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        loading="lazy"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
    </motion.div>
  );
};

export default Gallery;
