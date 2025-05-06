import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border/20 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-7xl">
        {/* Branding */}
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-royal text-xl md:text-2xl">
            Mosharof Hosain
          </h2>
          <p className="mt-2 text-sm text-center">
            Frontend Developer | Next.js Enthusiast | Building performant,
            modern web experiences.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 mt-6">
          <Link href="#about" className="hover:text-royal transition">
            About
          </Link>
          <Link href="#projects" className="hover:text-royal transition">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-royal transition">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-royal transition">
            Contact
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-5 mt-6">
          <a
            href="https://github.com/Mosarrof-Coding"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="w-6 h-6 hover:text-royal" />
          </a>
          <a
            href="https://www.linkedin.com/in/mosarrofhosain/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6 hover:text-royal" />
          </a>
          <a
            href="https://www.facebook.com/Mhosain66/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="facebook"
          >
            <FaFacebook className="w-6 h-6 hover:text-royal" />
          </a>
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="w-6 h-6 hover:text-royal" />
          </a>
        </div>

        {/* Copyright */}
        <div className="opacity-80 mt-6 text-sm text-center">
          © {new Date().getFullYear()} Mosharof Hosain. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
