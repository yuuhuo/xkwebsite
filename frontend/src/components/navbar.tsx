"use client";

import { useEffect, useState } from "react";

const navItems = ["Home", "About", "Projects", "Blog", "Gallery", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/55 bg-white/55 shadow-[0_8px_40px_rgba(90,122,150,0.12)] backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex min-h-20 w-full max-w-7xl flex-col items-start justify-center gap-3 px-5 py-4 sm:px-8 md:h-20 md:flex-row md:items-center md:justify-between md:gap-0 md:py-0 lg:px-10">
        <a
          href="#home"
          className="text-sm font-semibold tracking-[0.28em] text-slate-950 sm:tracking-[0.46em]"
          aria-label="X.K Home"
        >
          X.K
        </a>

        <div className="flex w-full items-center gap-5 overflow-x-auto pb-1 md:w-auto md:gap-8 md:overflow-visible md:pb-0">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
              className="shrink-0 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-slate-600 transition-colors duration-300 hover:text-slate-950 md:text-xs md:tracking-[0.22em]"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
