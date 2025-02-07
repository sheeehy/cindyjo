"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Parent container controls staggering
const containerVariants = {
  hidden: { opacity: 1 }, // can be 0 if you'd like it hidden initially
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // animate children sequentially
    },
  },
};

// Each child item fades in and moves up slightly
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="min-h-screen bg-black text-white flex flex-col md:flex-row items-start md:items-end justify-between p-4 sm:p-8 sm:mt-0 mt-32"
    >
      <motion.div variants={itemVariants} className="flex flex-col items-start w-full md:w-1/2 mb-8 md:mb-0">
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl md:text-8xl mb-6">
          CONTACT
        </motion.h1>

        <motion.div variants={itemVariants} className="flex flex-wrap space-x-6">
          <motion.div variants={itemVariants}>
            <Link href="https://www.instagram.com/cindyyjo/" target="_blank" rel="noopener noreferrer">
              INSTAGRAM
            </Link>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link href="mailto:cindyjorgji2002@gmail.com">EMAIL</Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full md:w-1/2 justify-end items-start">
        <motion.div variants={itemVariants}>
          <Image src="/c5.jpg" alt="Silhouette" width={600} height={600} className="w-full h-auto object-cover" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <Image src="/c1.jpg" alt="Silhouette" width={600} height={600} className="w-full h-auto object-cover" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
