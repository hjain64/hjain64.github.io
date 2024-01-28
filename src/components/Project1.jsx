import seven from "../assets/seven.png";
import Buttons from "../components/Buttons";
import ResearchTechStack from "../components/ResearchStack";

function Project1() {
  return (
    <div className="shadow-lg p-2 rounded-xl my-10">
      <h2 className="text-center text-3xl font-semibold text-indigo-700 pb-2">
        SEVEN
      </h2>
      <img src={seven} className="w-full h-50" />
      <hr className="mt-2 h-0.5 border-t-0 bg-neutral-300 opacity-100" />
      <p className="text-xs py-4 text-slate-700">
        Seven is an image analysis plugin developed by Titub Lab at the
        University of Minnesota. I played a key role in its enhancement,
        contributing features like filopodia length calculation and angle
        determination. Additionally, I streamlined cellular image analysis app,
        optimizing it from MatLab to ImageJ JavaScript, resulting in an 80%
        faster stats generation and enhancing its significance for early-stage
        cancer cell detection.
      </p>
      {/* tech-logo-1, tech-logo-2  ............... "View on Github"*/}
      <hr className="mt-2 h-0.5 border-t-0 bg-neutral-300 opacity-100" />
      <div className="py-2 mx-2 flex flex-row justify-between">
        <ResearchTechStack size={32} />
        <div className="w-32 py-3 flex justify-end">
          <Buttons name="Github" href="https://github.com/tituslabumn/Seven" />
        </div>
      </div>
    </div>
  );
}

export default Project1;
