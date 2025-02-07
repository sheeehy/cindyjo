"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ReactLenis from "@studio-freight/react-lenis";

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

function ImageCard({ item, index }: { item: ImageData; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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
        quality={100}
        unoptimized
      />
    </motion.div>
  );
}

export default function Gallery({ images }: { images: ImageData[] }) {
  return (
    <ReactLenis>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-20">
        {images.map((item, index) => (
          <ImageCard key={item._id} item={item} index={index} />
        ))}
      </div>
    </ReactLenis>
  );
}
