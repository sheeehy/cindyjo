"use client";

import React from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import Image from "next/image";

gsap.registerPlugin(Draggable);

const desktopPositions = [
  { top: "10%", left: `${Math.floor(Math.random() * (79 - 12 + 1) + 12)}%` },
  { top: "13%", left: `${Math.floor(Math.random() * (79 - 12 + 1) + 12)}%` },
  { top: "46%", left: `${Math.floor(Math.random() * (79 - 12 + 1) + 12)}%` },
  { top: "23%", left: `${Math.floor(Math.random() * (79 - 12 + 1) + 12)}%` },
  { top: "29%", left: `${Math.floor(Math.random() * (79 - 12 + 1) + 12)}%` },
  { top: "34%", left: `${Math.floor(Math.random() * (79 - 12 + 1) + 12)}%` },
  { top: "39%", left: `${Math.floor(Math.random() * (79 - 12 + 1) + 12)}%` },
  { top: "18%", left: `${Math.floor(Math.random() * (79 - 12 + 1) + 12)}%` },
  { top: "51%", left: `${Math.floor(Math.random() * (79 - 12 + 1) + 12)}%` },
  { top: "59%", left: `${Math.floor(Math.random() * (79 - 12 + 1) + 12)}%` },
  { top: "39%", left: `${Math.floor(Math.random() * (79 - 12 + 1) + 12)}%` },
  { top: "38%", left: `${Math.floor(Math.random() * (79 - 12 + 1) + 12)}%` },
  { top: "59%", left: `${Math.floor(Math.random() * (79 - 12 + 1) + 12)}%` },
];
const mobilePositions = [
  { top: "10%", left: `${Math.floor(Math.random() * (49 - 10 + 1) + 10)}%` },
  { top: "18%", left: `${Math.floor(Math.random() * (49 - 10 + 1) + 10)}%` },
  { top: "26%", left: `${Math.floor(Math.random() * (49 - 10 + 1) + 10)}%` },
  { top: "34%", left: `${Math.floor(Math.random() * (49 - 10 + 1) + 10)}%` },
  { top: "42%", left: `${Math.floor(Math.random() * (49 - 10 + 1) + 10)}%` },
  { top: "50%", left: `${Math.floor(Math.random() * (49 - 10 + 1) + 10)}%` },
  { top: "58%", left: `${Math.floor(Math.random() * (49 - 10 + 1) + 10)}%` },
  { top: "62%", left: `${Math.floor(Math.random() * (49 - 10 + 1) + 10)}%` },
  { top: "64%", left: `${Math.floor(Math.random() * (49 - 10 + 1) + 10)}%` },
  { top: "53%", left: `${Math.floor(Math.random() * (49 - 10 + 1) + 10)}%` },
  { top: "28%", left: `${Math.floor(Math.random() * (49 - 10 + 1) + 10)}%` },
  { top: "48%", left: `${Math.floor(Math.random() * (49 - 10 + 1) + 10)}%` },
  { top: "13%", left: `${Math.floor(Math.random() * (49 - 10 + 1) + 10)}%` },
];
const imageSources = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg", "/7.jpg", "/8.jpg", "/9.jpg", "/10.jpg", "/11.jpg", "/12.jpg", "/13.jpg"];

export default function Intro() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const positions = isMobile ? mobilePositions : desktopPositions;

  React.useEffect(() => {
    gsap.set(".img", {
      top: "45%",
      left: "50%",
      visibility: "visible",
      transform: "translate(-50%, -50%) scale(0)",
      zIndex: 1, // Set initial z-index
    });

    gsap.to(".img", {
      scale: 1,
      width: "300px",
      height: "400px",
      stagger: 0.15,
      duration: 0.75,
      ease: "power2.out",
      delay: 1,
      onComplete: scatterAndShrink,
    });

    function scatterAndShrink() {
      gsap.to(".img", {
        top: (i) => positions[i].top,
        left: (i) => positions[i].left,
        transform: "none",
        width: "175px",
        height: "200px",
        stagger: 0.03,
        duration: 0.75,
        ease: "power1.inOut",
        onComplete: () => makeDraggable(),
      });
    }

    function makeDraggable() {
      Draggable.create(".img", {
        type: "x,y",
        bounds: "body",
        edgeResistance: 0.65,
        zIndexBoost: false, // Disable zIndexBoost to manage z-index manually
        onPress: function () {
          this.target.style.zIndex = 2; // Increase z-index when pressed
        },
        onDragStart: function () {
          this.target.style.zIndex = 3; // Set higher z-index when dragging starts
        },
        onRelease: function () {
          this.target.style.zIndex = 1; // Reset z-index when released
        },
      });
    }
  }, [positions]);

  return (
    <div className="">
      {imageSources.map((src, index) => (
        <div className="img  absolute" key={index} style={{ width: "300px", height: "400px" }}>
          <a href="/gallery">
            <Image src={src} alt="Your Image" width={300} height={400} />
          </a>
        </div>
      ))}
    </div>
  );
}
