"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Career", href: "/career" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 md:px-6">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 md:px-6 ${
          scrolled
            ? "glass-nav shadow-lg shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl bg-white px-3 py-1.5 transition-opacity hover:opacity-90"
          aria-label="서울대학교 홈"
        >
          <Image
            src="/images/snu-logo.png"
            alt="서울대학교 Seoul National University"
            width={160}
            height={40}
            className="h-7 w-auto md:h-8"
            priority
          />
        </Link>
        <nav className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-xs font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white md:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
