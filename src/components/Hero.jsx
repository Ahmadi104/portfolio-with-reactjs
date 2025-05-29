import React from "react";
import profileImg from "../assets/ezat.jpeg";
function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 bg-gray-800 px-6 md:px-16"
    >
      <div className="max-w-xl text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Hi,I'm <span className="text-blue-500">Ezatullah</span>{" "}
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          I’m a passionate front-end developer who loves turning ideas into
          beautiful and responsive websites. I specialize in building modern
          user interfaces with React.js and Tailwind CSS, focusing on clean
          code, accessibility, and performance.I’m currently seeking
          opportunities to work with creative teams and contribute to real-world
          web projects.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-2xl shadow md:px-12 transition duration-300"
        >
          Projects
        </a>
      </div>
      <div className="mb-8 md:mb-0 flex-shrink-0">
        <img
          src={profileImg}
          alt="my img"
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full  shadow-lg"
        />
      </div>
    </section>
  );
}

export default Hero;
