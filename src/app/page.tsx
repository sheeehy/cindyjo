"use client";
import React from "react";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import FadeInAnimation from "./components/FadeInAnimation";

export default function page() {
  return (
    <div className="">
      <FadeInAnimation duration={1} delay={3.25} ease={[0.33, 0.2, 0, 1]}>
        <Navbar />
      </FadeInAnimation>
      <Intro />
    </div>
  );
}
