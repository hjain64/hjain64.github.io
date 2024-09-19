import pokeballs from "../assets/pokeball-demo.gif";
import Buttons from "./Buttons";

function Project9() {
  return (
    <div className="shadow-xl p-2 rounded-xl my-10">
      <h2 className="text-center lg:text-2xl md:text-xl font-semibold text-indigo-700 pb-2">
        Million Poké Balls Challenge
      </h2>
      <img src={pokeballs} className="w-full h-70" />
      <hr className="mt-2 h-0.5 border-t-0 bg-neutral-300 opacity-100" />
      <p className="text-xs py-4 text-slate-700">
        Created a highly interactive and engaging web challenge where users
        opened Pokéballs in real-time, gaining unexpected popularity on Reddit
        with nearly 2.8K active users and completing the challenge in 8 days.
        This project demonstrated strong user engagement and scalability while
        handling high traffic efficiently.
      </p>
      {/* tech-logo-1, tech-logo-2  ............... "View on Github"*/}
      <hr className="mt-2 h-0.5 border-t-0 bg-neutral-300 opacity-100" />
      <div className="py-2 mx-2 flex flex-row justify-between items-center ">
        <div className="flex flex-wrap gap-3 py-1">
          <img
            width={48}
            height={48}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
          />
          <img
            width={56}
            height={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg"
          />
          <img
            width={42}
            height={42}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
          />

          <img
            width={56}
            height={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original-wordmark.svg"
          />
        </div>
        <div className="w-36 py-1 flex flex-col justify-end gap-3 items-center">
          <Buttons name="Demo" href="https://million-pokeballs.manshu.dev/" />
        </div>
      </div>
    </div>
  );
}

export default Project9;
