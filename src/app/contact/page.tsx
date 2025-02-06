"use client";
import React, { useEffect, useRef } from "react";
import Navbar from "@/app/components/Navbar";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";

export default function Contact() {
  return (
    <div>
      <Nav />
      <div className="min-h-screen bg-black text-white flex flex-col md:flex-row items-end justify-center p-8">
        <div className="mb-8 md:mb-0 md:w-1/2">
          <h1 className="text-6xl md:text-8xl mb-6">CONTACT</h1>
          <div className="sm:ml-2 ml-0 flex space-x-6 ">
            <div>
              <Link href="https://www.instagram.com/cindyyjo/" target="_blank">
                INSTAGRAM
              </Link>
            </div>
            <div>
              <Link href="mailto:cindyjorgji2002@gmail.com">EMAIL</Link>
            </div>
          </div>
        </div>
        <div className="gap-8 flex items-center justify-center">
          <Image src="/c2.jpg" alt="Silhouette" width={288} height={288} className="h-72 w-auto object-cover" />
          <Image src="/c7.jpg" alt="Silhouette" width={288} height={288} className="h-72 w-auto object-cover" />
        </div>
      </div>
    </div>
  );
}
