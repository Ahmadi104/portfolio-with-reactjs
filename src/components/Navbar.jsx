import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="bg-gray-100 shadow-md fixed top-0
    left-0 z-50 w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div>
            <h1 className="text-2xl font-bold text-blue-800">My Portfolio</h1>
          </div>
          <div className="flex items-center">
            <button
              onClick={(e) => setIsOpen(!isOpen)}
              className="text-2xl text-gray-700 sm:hidden"
            >
              ☰
            </button>
            <div
              className={`absolute sm:static top-12 right-0 sm:w-auto bg-gray-100 sm:bg-transparent sm:flex ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-gray-700 font-medium p-4 sm:p-0">
                <li>
                  <a href="#hero" className="hover:text-blue-800">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-800">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-blue-800">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-800">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
