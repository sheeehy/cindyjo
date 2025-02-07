"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import ReactLenis from "@studio-freight/react-lenis";

export default function Contact() {
  const headingRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const textRef = useRef(null);
  const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });
      tl.from(headingRef.current, { y: 50, autoAlpha: 0 })
        .from(image1Ref.current, { y: 50, autoAlpha: 0 }, "-=0.8")
        .from(image2Ref.current, { y: 50, autoAlpha: 0 }, "-=0.8")
        .from(textRef.current, { y: 50, autoAlpha: 0 }, "-=0.8")
        .from(linkRefs.current, { y: 20, autoAlpha: 0, stagger: 0.2 }, "-=0.8");
    });
    return () => ctx.revert();
  }, []);

  return (
    <ReactLenis root className="w-full">
      <div>
        <div className="min-h-screen bg-black text-white flex flex-col p-4 sm:p-8">
          <div className="mt-16 sm:mt-44">
            <h1 ref={headingRef} className="text-5xl sm:text-5xl sm:max-w-2xl w-full leading-[1.2]">
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO
            </h1>
          </div>

          <div className="mt-24 flex flex-col justify-end items-end sm:justify-end sm:items-end sm:flex-row gap-8">
            <div className="flex flex-col sm:flex-row gap-8">
              <Image ref={image1Ref} src="/c2.jpg" alt="Silhouette" width={288} height={288} className="w-full sm:w-auto h-auto sm:h-72 object-cover" />
              <Image ref={image2Ref} src="/c7.jpg" alt="Silhouette" width={288} height={288} className="w-full sm:w-auto h-auto sm:h-72 object-cover" />
            </div>

            <div className="flex flex-col sm:ml-8">
              <p ref={textRef} className="max-w-2xl text-xl text-md mt-4 sm:mt-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                <br />
                <br />
              </p>
              <div className="flex mt-8 gap-8">
                <Link
                  href="https://www.instagram.com/cindyyjo/"
                  target="_blank"
                  ref={(el) => {
                    linkRefs.current[0] = el;
                  }}
                >
                  INSTAGRAM
                </Link>
                <Link
                  href="mailto:cindyjorgji2002@gmail.com"
                  ref={(el) => {
                    linkRefs.current[1] = el;
                  }}
                >
                  EMAIL
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ReactLenis>
  );
}
