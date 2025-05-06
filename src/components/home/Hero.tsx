import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center bg-card px-4 min-h-screen text-center"
    >
      <div className="max-w-3xl">
        {/* Optional Avatar */}
        <div className="mb-6">
          <Image
            src="/moss.jpg"
            alt="Mosharof Hosain"
            width={120}
            height={120}
            className="drop-shadow-2xl mx-auto rounded-full"
          />
        </div>

        {/* Name & Title */}
        <h1 className="mb-4 font-bold text-4xl sm:text-5xl">
          Hi, I’m <span className="text-royal">Mosharof Hosain</span>
        </h1>
        <h2 className="mb-6 text-xl sm:text-2xl">
          Frontend Developer | React & Next.js Expert
        </h2>

        {/* Short Bio */}
        <p className="text-base sm:text-lg leading-relaxed">
          I craft responsive, accessible, and performance-focused web
          applications using modern technologies like Next.js, Tailwind CSS, and
          TypeScript. Passionate about clean UI, seamless UX, and building
          products users love.
        </p>

        {/* CTA Buttons */}
        <div className="flex sm:flex-row flex-col justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="px-6 py-3 rounded-md font-medium transition btn"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-border rounded-md font-medium transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
