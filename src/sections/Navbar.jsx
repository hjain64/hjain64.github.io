import resume from "../resume/Resume.pdf";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 p-2">
      <ul className="flex flex-wrap justify-end items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="#about" className="hover:underline me-4 md:me-6">
            About
          </a>
        </li>
        <li>
          <a href="#education" className="hover:underline me-4 md:me-6">
            Education
          </a>
        </li>
        <li>
          <a href="#work" className="hover:underline me-4 md:me-6">
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline me-4 md:me-6">
            Projects
          </a>
        </li>
        <li>
          <a target="_blank" href={resume} className="hover:underline">
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
