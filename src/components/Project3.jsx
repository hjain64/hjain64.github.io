import game from "../assets/game.png";
import Buttons from "./Buttons";

function Project3() {
  return (
    <div className="shadow-lg p-2 rounded-xl my-10">
      <h2 className="text-center text-3xl font-semibold text-indigo-700 pb-2">
        Zombie Defender Game
      </h2>
      <img src={game} className="w-full h-70" />
      <hr className="mt-2 h-0.5 border-t-0 bg-neutral-300 opacity-100" />
      <p className="text-xs py-4 text-slate-700">
        Created a Zombie Defender Game Mobile App using C# in Unity Engine,
        aimed at learning mobile game development. The app runs on both Android
        and iOS, providing an engaging experience. Defend your garden from
        zombie attacks, strategically using stars to spawn defenders. With three
        progressively challenging levels, the game offers an enjoyable
        experience for players.
      </p>
      {/* tech-logo-1, tech-logo-2  ............... "View on Github"*/}
      <hr className="mt-2 h-0.5 border-t-0 bg-neutral-300 opacity-100" />
      <div className="py-2 mx-2 flex flex-row justify-between">
        <div className="flex flex-wrap gap-3 py-3">
          <img
            width={38}
            height={38}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original-wordmark.svg"
          />
          <img
            width={40}
            height={40}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original-wordmark.svg"
          />
          <img
            width={36}
            height={36}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original-wordmark.svg"
          />
          <img
            width={36}
            height={36}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg"
          />
        </div>
        <div className="w-32 py-3 flex justify-end">
          <Buttons
            name="Github"
            href="https://github.com/hjain64/Zombie-Defender-Game-Mobile-App"
          />
        </div>
      </div>
    </div>
  );
}

export default Project3;
