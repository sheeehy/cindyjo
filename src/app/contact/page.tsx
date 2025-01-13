"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "@/app/components/Navbar";
import { gsap } from "gsap";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className="relative flex flex-col sm:justify-center sm:items-center mt-32 mb-6 px-4 sm:px-12 gap-4 text-sm select-none">
        <a href="mailto:jordonfilesbooking@gmail.com" className="sm:text-7xl text-5xl sm:mt-32  bg-zinc-900 px-4 py-4 rounded-xl hover:bg-opacity-75 transition ease-in-out">
          Book Now
        </a>
        <div className="gap-4 sm:gap-14 flex flex-col sm:flex-row mt-4">
          <div className="">
            <a
              className="text-left max-w-xl text-zinc-400 hover:text-white transition ease-in-out "
              href="https://www.instagram.com/jordonfiles/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className="">
            <a className="text-left max-w-xl text-zinc-400 hover:text-white transition ease-in-out " href="https://x.com/JORDONFILES" target="_blank" rel="noopener noreferrer">
              Twitter{" "}
            </a>
          </div>
          <div className="">
            <a
              className="text-left max-w-xl text-zinc-400 hover:text-white transition ease-in-out "
              href="mailto:jordonfilesbooking@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
