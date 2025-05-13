import React from "react";

function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <nav className="flex flex-row-reverse text-center">
        <a href="" className="basis-64 bg-amber-200">
          Home
        </a>
        <a href="" className="basis-64 bg-amber-600">
          About
        </a>
        <a href="" className="basis-80 bg-sky-300">
          Contact
        </a>
      </nav>
    </div>
  );
}

export default Navbar;
