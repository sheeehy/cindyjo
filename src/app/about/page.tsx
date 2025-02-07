"use client";
import React from "react";
import Navbar from "@/app/components/Navbar";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/Nav";
import ReactLenis from "@studio-freight/react-lenis";

export default function Contact() {
  return (
    <ReactLenis root className="w-full ">
      <div>
        <Nav />
        <div className="min-h-screen bg-black text-white flex flex-col p-4 sm:p-8">
          <div className="mt-16 sm:mt-44">
            <h1 className="text-5xl sm:text-5xl sm:max-w-2xl w-full leading-[1.2]">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO</h1>
          </div>

          <div className="mt-24 flex flex-col sm:flex-row gap-8">
            <div className="flex flex-col sm:flex-row gap-8">
              <Image src="/c2.jpg" alt="Silhouette" width={288} height={288} className="w-full sm:w-auto h-auto sm:h-72 object-cover" />
              <Image src="/c7.jpg" alt="Silhouette" width={288} height={288} className="w-full sm:w-auto h-auto sm:h-72 object-cover" />
            </div>

            <div className="flex flex-col sm:ml-8">
              <p className="max-w-2xl text-md mt-4 sm:mt-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div className="flex mt-8 gap-8">
                <Link href="https://www.instagram.com/cindyyjo/" target="_blank">
                  INSTAGRAM
                </Link>
                <Link href="mailto:cindyjorgji2002@gmail.com">EMAIL</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}
