"use client";
import Link from "next/link";
import { ReactNode } from "react";

interface AnimatedLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
}

export default function AnimatedLink({ href, children, className = "", target }: AnimatedLinkProps) {
  return (
    <div>
      <Link
        href={href}
        className={`group relative inline-flex items-center justify-center overflow-hidden ${className}`}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        <span className="relative inline-flex items-center justify-center overflow-hidden">
          <span className="translate-y-0 transition duration-500 group-hover:translate-y-[100%]">{children}</span>
          <span className="absolute -translate-y-[100%] transition duration-500 group-hover:translate-y-0" aria-hidden="true">
            {children}
          </span>
        </span>
      </Link>
    </div>
  );
}
