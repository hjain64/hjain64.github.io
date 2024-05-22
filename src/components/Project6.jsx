import advent from "../assets/advent.png";
import Buttons from "./Buttons";

function Project6() {
  return (
    <div className="shadow-lg p-2 rounded-xl my-10">
      <h2 className="text-center text-3xl font-semibold text-indigo-700 pb-2">
        Advent of Code
      </h2>
      <img src={advent} className="w-full h-70" />
      <hr className="mt-2 h-0.5 border-t-0 bg-neutral-300 opacity-100" />
      <p className="text-xs py-4 text-slate-700">
        Every year I try to tackle Advent of Code challenge, pushing my Python
        skills to new heights as I strive to solve as many puzzles as possible.
        This consistent effort reflects a commitment to continuous learning and
        a passion for unraveling complex coding scenarios
      </p>
      {/* tech-logo-1, tech-logo-2  ............... "View on Github"*/}
      <hr className="mt-2 h-0.5 border-t-0 bg-neutral-300 opacity-100" />
      <div className="py-2 mx-2 flex flex-row justify-between">
        <div className="flex flex-wrap gap-3 py-1">
          <img
            width={36}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
          />
        </div>
        <div className="w-32 py-1 flex flex-col justify-end gap-3 items-center">
          <Buttons
            name="Github"
            href="https://github.com/jainmanshu/AdventOfCode"
          />
        </div>
      </div>
    </div>
  );
}

export default Project6;
