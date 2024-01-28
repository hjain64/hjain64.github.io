import Maze from "../assets/maze.png";
import Buttons from "./Buttons";

function Project2() {
  return (
    <div>
      <div className="shadow-lg p-2 rounded-xl my-10">
        <h2 className="text-center text-3xl font-semibold text-indigo-700 pb-2">
          Agent Path Finding
        </h2>
        <img src={Maze} className="w-full h-45" />
        <hr className="mt-2 h-0.5 border-t-0 bg-neutral-300 opacity-100" />
        <p className="text-xs py-4 text-slate-700">
          Crafted a randomized Maze Solver in a Java IDE environment, visually
          representing mazes using the Java StdDraw external library. The solver
          employed diverse algorithms such as Depth-first Search, Breadth-first
          Search, A* search, and Dijkstra algorithm. This project aimed at
          deepening my understanding of pathfinding in Artificial Intelligence.
        </p>
        {/* tech-logo-1, tech-logo-2  ............... "View on Github"*/}
        <hr className="mt-2 h-0.5 border-t-0 bg-neutral-300 opacity-100" />
        <div className="py-1 mx-2 flex flex-row justify-between">
          <div className="flex flex-wrap gap-3">
            <img
              width={42}
              height={42}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
            />

            <img
              width={42}
              height={42}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/thealgorithms/thealgorithms-plain-wordmark.svg"
            />
          </div>
          <div className="w-32 py-3 flex justify-end">
            <Buttons
              name="Github"
              href="https://github.com/hjain64/AI-Maze-Solver"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project2;
