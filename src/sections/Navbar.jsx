// import resume from "../resume/Resume.pdf";

// eslint-disable-next-line react/prop-types
function Navbar({ section }) {
  return (
    <header className="sticky top-0 z-50 p-1 bg-zinc-50 shadow-sm">
      <div className="flex justify-between">
        <p className="pt-1 m-2 items-center lg:text-3xl md:text-xl sm:text-xs font-rocksalt text-gray-500 sm:mt-0">
          Himanshu Jain
        </p>
        <ul className="flex flex-wrap lg:gap-10 md:gap-4 sm:gap-1 justify-end items-center mt-2 text-sm font-medium text-gray-500 sm:mt-0 sm:text-xs">
          <li>
            <a
              href="#about"
              className={`inline-flex items-center text-slate-700 px-1.5 py-2.5 text-xs font-medium text-center rounded-lg hover:bg-indigo-300 focus:ring-4 focus:outline-none focus:ring-blue-300 ${
                section == 1 ? `bg-indigo-400` : ``
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={`inline-flex items-center text-slate-700 px-1.5 py-2.5 text-xs font-medium text-center rounded-lg hover:bg-indigo-300 focus:ring-4 focus:outline-none focus:ring-blue-300 ${
                section == 2 ? `bg-indigo-400` : ``
              }`}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#work"
              className={`inline-flex items-center text-slate-700 px-1.5 py-2.5 text-xs font-medium text-center rounded-lg hover:bg-indigo-300 focus:ring-4 focus:outline-none focus:ring-blue-300 ${
                section == 3 ? `bg-indigo-400` : ``
              }`}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`inline-flex items-center text-slate-700 px-1.5 py-2.5 text-xs font-medium text-center rounded-lg hover:bg-indigo-300 focus:ring-4 focus:outline-none focus:ring-blue-300 ${
                section == 4 ? `bg-indigo-400` : ``
              }`}
            >
              Projects
            </a>
          </li>
          {/* <li>
            <a
              target="_blank"
              href={resume}
              className="inline-flex items-center text-slate-700 px-1.5 py-2.5 text-xs font-medium text-center rounded-lg hover:bg-indigo-300 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Resume
            </a>
          </li> */}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
