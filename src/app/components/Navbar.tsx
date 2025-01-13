import React from "react";
import Link from "next/link";
import { BsTwitterX, BsInstagram, BsEnvelope } from "react-icons/bs";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { TfiMenu } from "react-icons/tfi";

export default function Navbar() {
  return (
    <nav className="z-50 tracking-wider text-xl text-black sm:px-8 sm:py-4 px-4 py-2">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className=" select-none hover:opacity-70 transition ease-in-out">
          Cindy Jorgji
        </Link>

        {/* Traditional navbar for larger screens */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:opacity-70 transition ease-in-out">
            Home
          </Link>
          <Link href="/gallery" className="hover:opacity-70 transition ease-in-out">
            GALLERY
          </Link>
          <Link href="/contact" className="hover:opacity-70 transition ease-in-out">
            CONTACT
          </Link>
        </div>

        {/* Burger menu for mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <TfiMenu />
            </SheetTrigger>
            <SheetContent side="right" className="bg-white select-none text-2xl z-50">
              <SheetHeader className="flex flex-col justify-center h-full">
                <div className="flex flex-col justify-center gap-4 flex-1">
                  <Link href="/" className="select-none hover:opacity-70 transition ease-in-out pl-4">
                    Home
                  </Link>
                  <Link href="/gallery" className="select-none hover:opacity-70 transition ease-in-out pl-4">
                    GALLERY
                  </Link>
                  <Link href="/contact" className="select-none hover:opacity-70 transition ease-in-out pl-4 mb-8">
                    CONTACT
                  </Link>
                  <Link target="_blank" href="https://www.instagram.com/jordonfiles/" className="select-none hover:opacity-70 transition  text-zinc-400 ease-in-out pl-4">
                    INSTAGRAM
                  </Link>
                  <Link href="https://twitter.com/JORDONFILES" target="_blank" className="select-none hover:opacity-70 transition text-zinc-400 ease-in-out pl-4">
                    TWITTER
                  </Link>
                  <Link href="mailto:jordonfilesbooking@gmail.com" target="_blank" className="select-none hover:opacity-70 transition text-zinc-400 ease-in-out pl-4">
                    EMAIL
                  </Link>
                </div>
                <Link href="https://remise.ie" target="_blank" className="select-none hover:opacity-70 transition ease-in-out pl-4">
                  <h1 className="text-sm text-zinc-400">Site Credits</h1>
                </Link>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
