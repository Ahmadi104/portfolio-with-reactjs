import icon from "../assets/download.png";
function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-6 mt-12 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          © 2025 Ezatullah Ahmadzai. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-3">
          {/* Optional social links */}
          <a
            href={icon}
            target="_blank"
            className="border-1 rounded-lg px-4 hover:text-blue-500"
          >
            GitHub
          </a>
          <a
            href={icon}
            target="_blank"
            className=" border-1 rounded-lg px-4 hover:text-blue-500"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <ul className="flex gap-4 justify-center mt-4">
        <li>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
