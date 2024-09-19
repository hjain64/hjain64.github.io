import leaderboard from "../assets/leaderboard.png";
import Buttons from "./Buttons";

function Project8() {
  return (
    <div className="shadow-xl p-2 rounded-xl my-10">
      <h2 className="text-center lg:text-2xl md:text-xl font-semibold text-indigo-700 pb-2">
        Paris Olympics Stats 2024
        <div className="text-sm">Chrome Extension</div>
      </h2>
      <img src={leaderboard} className="w-full h-70" />
      <hr className="mt-2 h-0.5 border-t-0 bg-neutral-300 opacity-100" />
      <p className="text-xs py-4 text-slate-700">
        Developed the Paris Olympics 2024 Standings Chrome Extension to provide
        real-time medal updates for the Paris 2024 Summer Olympics. Using React,
        TypeScript, and Tailwind CSS, the extension features a user-friendly
        interface that displays the top-performing countries and a comprehensive
        leaderboard.
      </p>
      {/* tech-logo-1, tech-logo-2  ............... "View on Github"*/}
      <hr className="mt-2 h-0.5 border-t-0 bg-neutral-300 opacity-100" />
      <div className="py-2 mx-2 flex flex-row justify-between items-center ">
        <div className="flex flex-wrap gap-3 py-1">
          <img
            width={48}
            height={48}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
          />
          <img
            width={48}
            height={48}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
          />
          <img
            width={48}
            height={48}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chrome/chrome-original.svg"
          />
          <img
            width={48}
            height={48}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg"
          />
          <img
            width={48}
            height={48}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          />
        </div>
        <div className="w-36 py-1 flex flex-col justify-end gap-3 items-center">
          <Buttons
            name="Chrome store"
            href="https://chromewebstore.google.com/detail/paris-olympics-2024-stats/dfdcmllfkdjklbcefknhalbcmbgmlcnf"
          />
          <Buttons
            name="Github"
            href="https://github.com/jainmanshu/olympics-tracker-extension"
          />
        </div>
      </div>
    </div>
  );
}

export default Project8;
