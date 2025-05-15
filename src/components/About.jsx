function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 my-8 shadow-md bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 md:px-12"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-8">
          I’m a dedicated front-end developer who loves turning ideas into
          responsive, user-friendly websites. My core skills include React.js,
          JavaScript, and Tailwind CSS, which I use to build modern, accessible
          interfaces. I focus on clean code, performance, and intuitive user
          experiences across devices. Every project is a chance for me to learn,
          improve, and bring creative solutions to real-world problems. I enjoy
          exploring new web technologies and continuously pushing my skills
          forward. My goal is to become a professional front-end engineer and
          contribute to impactful digital products.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {/* tech badges like React, JS, Tailwind etc. */}
          <span className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-white px-4 py-2 rounded-full text-sm font-semibold">
            React
          </span>
          <span className="bg-yellow-200 text-yellow-500 dark:bg-yellow-800 dark:text-white px-4 py-2 rounded-full text-sm font-semibold">
            JavaScript
          </span>
          <span className="bg-cyan-100 text-cyan-800 dark:bg-cyan-800 dark:text-white px-4 py-2 rounded-full text-sm font-semibold">
            Tailwind CSS
          </span>
          <span className="bg-gray-400 text-gray-900 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-full text-sm font-semibold">
            Git
          </span>
        </div>
      </div>
    </section>
  );
}

export default About;
