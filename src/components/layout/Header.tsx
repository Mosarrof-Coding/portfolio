"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="top-0 left-0 z-50 fixed bg-background shadow-md w-full transition-colors">
      <div className="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-3 lg:py-4 max-w-7xl">
        {/* Logo or Name */}
        <Link href="/" className="link">
          <span className="w-[190px] font-bold text-royal text-xl lg:text-2xl">
            Mosharof
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:block space-x-6">
          <Link href="#about" className="transition">
            About
          </Link>
          <Link href="#projects" className="transition">
            Projects
          </Link>
          <Link href="#skills" className="transition">
            Skills
          </Link>
          <Link href="#contact" className="transition">
            Contact
          </Link>
        </nav>

        {/* Resume + Theme Toggle */}
        <div className="flex items-center gap-6 ressume">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1 active:border rounded-full cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button className="btn">Download CV</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
