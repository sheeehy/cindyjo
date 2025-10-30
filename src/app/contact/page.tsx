"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import MyForm from "../components/MyForm";

const containerVariants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Contact() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show" className="min-h-screen bg-black text-white flex flex-col px-4 py-8 sm:p-8 lg:p-16 mt-32">
      <motion.div variants={itemVariants} className="flex items-center justify-center mb-24 ">
      
      <div className=" text-5xl max-w-2xl">Share your vision - What kind of shoot are you looking to do?
      </div>
      </motion.div>
      
      <motion.div variants={itemVariants} className="w-full">
        <MyForm />
      </motion.div>
      <div className="flex items-center justify-center mt-24">
        <motion.div variants={itemVariants} className="mb-12 lg:mb-16 ">
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 sm:gap-6">
            <motion.div variants={itemVariants}>
              <Link href="https://www.instagram.com/cindyyjo/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                INSTAGRAM
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="https://x.com/CindyJorgji" target="_blank" rel="noopener noreferrer" className="hover:underline">
                TWITTER
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href="mailto:cindyjorgji.contact@gmail.com" className="hover:underline">
                EMAIL
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
