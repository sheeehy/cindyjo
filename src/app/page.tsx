"use client";
import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import ReactLenis from "@studio-freight/react-lenis";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import Nav from "../../src/app/components/Nav";
import AnimatedLink from "../../src/app/components/AnimatedLink";

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const galleryWrapperRef = useRef<HTMLDivElement>(null);
  const mainImgRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      if (typeof window !== "undefined" && window.innerWidth >= 640) {
        gsap.registerPlugin(ScrollTrigger);

        const calculateMaxScale = () => {
          const screenWidth = window.innerWidth;
          if (screenWidth < 1024) return 4;
          return 2.65;
        };

        ScrollTrigger.create({
          trigger: `.${styles.ws}`,
          start: "top bottom",
          end: "bottom bottom",
          scrub: 1,
          onUpdate: (self) => {
            const galleryWrapper = galleryWrapperRef.current;
            const sideCols = document.querySelectorAll(`.${styles.col}:not(.${styles.main})`);
            const mainImg = mainImgRef.current;
            const maxScale = calculateMaxScale();
            const scale = 1 + self.progress * maxScale;
            const yTranslate = self.progress * 300;
            const mainImgScale = 2 - self.progress * 0.85;

            if (galleryWrapper) {
              galleryWrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;
            }

            sideCols.forEach((col) => {
              (col as HTMLElement).style.transform = `translateY(${yTranslate}px)`;
            });

            if (mainImg) {
              mainImg.style.transform = `scale(${mainImgScale})`;
            }
          },
        });

        return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }
    },
    { scope: container }
  );

  const headingVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.4 },
    },
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.8 },
    },
  };

  const linkContainerVariants = {
    hidden: {},
    visible: {
      transition: { delayChildren: 1.05, staggerChildren: 0.15 },
    },
  };

  const linkItemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <ReactLenis root className="w-full h-[800vh]">
      <Nav />

      {/* MOBILE (Below 'sm') - Single Portrait Image */}
      <div className="block sm:hidden relative w-screen h-screen overflow-hidden">
        <Image src="/cj5.png" alt="" fill style={{ objectFit: "cover" }} />
        <div className="absolute bottom-0 w-full p-4 text-white">
          <motion.h1 className="text-4xl mb-2" initial="hidden" animate="visible" variants={headingVariants}>
            CINDY JORGJI
          </motion.h1>
          <motion.h2 className="text-lg mb-4" initial="hidden" animate="visible" variants={subheadingVariants}>
            PHOTOGRAPHER
          </motion.h2>

          <motion.div className="flex flex-col space-y-2 text-2xl" initial="hidden" animate="visible" variants={linkContainerVariants}>
            <motion.div variants={linkItemVariants}>
              <AnimatedLink href="/about">ABOUT</AnimatedLink>
            </motion.div>
            <motion.div variants={linkItemVariants}>
              <AnimatedLink href="/gallery">GALLERY</AnimatedLink>
            </motion.div>
            <motion.div variants={linkItemVariants}>
              <AnimatedLink href="/contact">CONTACT</AnimatedLink>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* DESKTOP (From 'sm' and up) - Original Scroll Animation */}
      <div className="hidden sm:block">
        <motion.section className={styles.sticky} initial="hidden" animate="visible" variants={imageVariants}>
          <div className={styles.galleryWrapper} ref={galleryWrapperRef}>
            <div className={`${styles.col} ${styles.side1}`}>
              <div className={styles.img}>
                <Image src="/d1.jpeg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div className={styles.img}>
                <Image src="/d2.jpeg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div className={styles.img}>
                <Image src="/d3.jpeg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
            </div>

            <div className={`${styles.col} ${styles.side2}`}>
              <div className={styles.img}>
                <Image src="/d4.jpeg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div className={styles.img}>
                <Image src="/d5.jpeg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div className={styles.img}>
                <Image src="/d9.jpeg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
            </div>

            <div className={`${styles.col} ${styles.main}`}>
              <div className={styles.img}>
                <Image src="/d8.jpeg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div className={`${styles.img} ${styles.main}`}>
                <Image src="/d2.jpeg" alt="" fill style={{ objectFit: "cover" }} ref={mainImgRef} />
              </div>
              <div className={styles.img}>
                <Image src="/d3.jpeg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
            </div>

            <div className={`${styles.col} ${styles.side3}`}>
              <div className={styles.img}>
                <Image src="/d3.jpeg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div className={styles.img}>
                <Image src="/d9.jpeg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div className={styles.img}>
                <Image src="/d8.jpeg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
            </div>

            <div className={`${styles.col} ${styles.side4}`}>
              <div className={styles.img}>
                <Image src="/d6.jpg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div className={styles.img}>
                <Image src="/d7.jpg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
              <div className={styles.img}>
                <Image src="/d1.jpg" alt="" fill style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </motion.section>

        <div className={styles.container} ref={container}>
          <section className={styles.hero}>
            <div className="relative flex flex-col w-full justify-start text-white -mb-2 px-4 sm:px-8 sm:pb-0 ">
              <motion.h1 className="text-4xl sm:text-6xl md:text-8xl" initial="hidden" animate="visible" variants={headingVariants}>
                CINDY JORGJI
              </motion.h1>
              <motion.h2 className="text-lg sm:text-xl md:text-2xl ml-0 sm:ml-3 mb-4" initial="hidden" animate="visible" variants={subheadingVariants}>
                PHOTOGRAPHER
              </motion.h2>
            </div>
          </section>

          <section className={styles.ws}></section>

          <section>
            <div className={styles.outro}>
              <motion.div
                className="absolute bottom-44 sm:bottom-32 left-4 sm:left-8 text-4xl sm:text-5xl md:text-7xl flex flex-col space-y-2"
                initial="hidden"
                animate="visible"
                variants={linkContainerVariants}
              >
                <motion.div variants={linkItemVariants}>
                  <AnimatedLink href="/about">ABOUT</AnimatedLink>
                </motion.div>
                <motion.div variants={linkItemVariants}>
                  <AnimatedLink href="/gallery">GALLERY</AnimatedLink>
                </motion.div>
                <motion.div variants={linkItemVariants}>
                  <AnimatedLink href="/contact">CONTACT</AnimatedLink>
                </motion.div>
              </motion.div>

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-4 sm:space-y-0 text-left text-sm sm:text-base">
                <div>
                  <p>&copy; {new Date().getFullYear()} CINDY JORGJI</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0">
                  <AnimatedLink href="mailto:cindyjorgji2002@gmail.com">EMAIL</AnimatedLink>
                  <AnimatedLink href="https://www.instagram.com/cindyyjo/" target="_blank">
                    INSTAGRAM
                  </AnimatedLink>
                </div>
                <div>
                  <AnimatedLink href="https://remise.ie" target="_blank">
                    CREDITS
                  </AnimatedLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </ReactLenis>
  );
}
