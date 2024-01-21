import resume from "../resume/Resume.pdf";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 p-2">
      <ul className="flex flex-wrap gap-2 justify-end items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="#about"
            className="inline-flex items-center text-slate-700 px-5 py-2.5 text-xs font-medium text-center rounded-lg hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#education"
            className="inline-flex items-center text-slate-700 px-5 py-2.5 text-xs font-medium text-center rounded-lg hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Education
          </a>
        </li>
        <li>
          <a
            href="#work"
            className="inline-flex items-center text-slate-700 px-5 py-2.5 text-xs font-medium text-center rounded-lg hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="inline-flex items-center text-slate-700 px-5 py-2.5 text-xs font-medium text-center rounded-lg hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href={resume}
            className="inline-flex items-center text-slate-700 px-5 py-2.5 text-xs font-medium text-center rounded-lg hover:bg-indigo-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
