"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Teaching", href: "#teaching" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-[#f5f3ee]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#"
          className="flex items-center gap-3 transition-opacity hover:opacity-70"
          aria-label="서울대학교"
        >
          <Image
            src="/images/snu-logo.svg"
            alt="서울대학교"
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="hidden text-xs font-medium tracking-wide text-black/70 sm:inline">
            서울대학교
          </span>
        </a>
        <nav className="flex items-center gap-6 md:gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.2em] text-black/70 transition-colors hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
