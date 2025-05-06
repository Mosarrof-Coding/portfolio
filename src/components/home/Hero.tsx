import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center bg-white px-4 min-h-screen text-center"
    >
      <div className="max-w-3xl">
        {/* Optional Avatar */}
        <div className="mb-6">
          <Image
            src="/moss.jpg"
            alt="Mosharof Hosain"
            width={120}
            height={120}
            className="mx-auto rounded-full"
          />
        </div>

        {/* Name & Title */}
        <h1 className="mb-4 font-bold text-gray-900 text-4xl sm:text-5xl">
          Hi, I’m <span className="text-indigo-600">Mosharof Hosain</span>
        </h1>
        <h2 className="mb-6 text-gray-600 text-xl sm:text-2xl">
          Frontend Developer | React & Next.js Expert
        </h2>

        {/* Short Bio */}
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
          I craft responsive, accessible, and performance-focused web
          applications using modern technologies like Next.js, Tailwind CSS, and
          TypeScript. Passionate about clean UI, seamless UX, and building
          products users love.
        </p>

        {/* CTA Buttons */}
        <div className="flex sm:flex-row flex-col justify-center gap-4 mt-8">
          <a
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-md font-medium text-white transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="hover:bg-indigo-50 px-6 py-3 border border-indigo-600 rounded-md font-medium text-indigo-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
