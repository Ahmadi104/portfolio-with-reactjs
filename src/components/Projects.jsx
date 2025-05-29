import { Fragment } from "react";
import projectImg from "../assets/download.png";
function Projects() {
  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 px-4 md:px-12"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-18 text-gray-800 dark:text-gray-100">
          Projects
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Each project card */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              src={projectImg}
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                To-Do List App
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A simple to-do list app with add, delete, and mark-as-done
                features, built using React and Tailwind.
              </p>
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full">
                  React
                </span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full">
                  Tailwind
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://your-live-link"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Live
                </a>
                <a
                  href="https://github.com/your-username/todo-app"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-300 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              src={projectImg}
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                To-Do List App
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A simple to-do list app with add, delete, and mark-as-done
                features, built using React and Tailwind.
              </p>
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full">
                  React
                </span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full">
                  Tailwind
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://your-live-link"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Live
                </a>
                <a
                  href="https://github.com/your-username/todo-app"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-300 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              src={projectImg}
              alt="Project 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                To-Do List App
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                A simple to-do list app with add, delete, and mark-as-done
                features, built using React and Tailwind.
              </p>
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full">
                  React
                </span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-full">
                  Tailwind
                </span>
              </div>
              <div className="flex gap-4">
                <a
                  href="https://your-live-link"
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Live
                </a>
                <a
                  href="https://github.com/your-username/todo-app"
                  target="_blank"
                  className="text-gray-600 dark:text-gray-300 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          {/* Add more cards the same way */}
        </div>
      </div>
    </section>
  );
}

export default Projects;
