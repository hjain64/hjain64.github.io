import truck from "../assets/trucking.png";
import Buttons from "./Buttons";
import signal from "../assets/signalzen-logo.png";

function Project4() {
  return (
    <div className="shadow-lg p-2 rounded-xl my-10">
      <h2 className="text-center text-3xl font-semibold text-indigo-700 pb-2">
        Trucking Website
      </h2>
      <img src={truck} className="w-full h-70" />
      <hr className="mt-2 h-0.5 border-t-0 bg-neutral-300 opacity-100" />
      <p className="text-xs py-4 text-slate-700">
        Built a trucking website during my internship at Trimble (formely
        PeopleNet Communications). I was primarily responsible for the
        development of a customer support chatbot made with using SignalZen,
        seamlessly enabling end-to-end messaging on the website. The chatbot was
        integrated with Slack for swift and effective responses, enhancing the
        overall user experience.
      </p>
      {/* tech-logo-1, tech-logo-2  ............... "View on Github"*/}
      <hr className="mt-2 h-0.5 border-t-0 bg-neutral-300 opacity-100" />
      <div className="py-2 mx-2 flex flex-row justify-between">
        <div className="flex flex-wrap gap-3 py-3">
          <div className="w-1/3 pt-3">
            <img height={20} src={signal} />
          </div>

          <img
            width={32}
            height={32}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
          />

          <img
            width={42}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original-wordmark.svg"
          />
        </div>
        <div className="w-32 py-3 flex justify-end">
          <Buttons
            name="Github"
            href="https://github.com/hjain64/trucking_website"
          />
        </div>
      </div>
    </div>
  );
}

export default Project4;
