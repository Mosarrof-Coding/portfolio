import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="top-0 left-0 z-50 fixed bg-white shadow-md w-full">
      <div className="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 py-4 max-w-7xl">
        {/* Logo or Name */}
        <Link href="/" className="link">
          <span className="font-bold text-indigo-600 text-xl">Mosharof</span>
        </Link>

        {/* Navigation */}
        <nav className="space-x-6">
          <Link
            href="#about"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Skills
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Contact
          </Link>
        </nav>
        {/* resume */}
        <div className="flex items-center gap-8 ressume">
          <div>sun moon</div>
          <button className="cursor-pointer btn">Download CV</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
