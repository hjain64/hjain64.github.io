import data from "../assets/data.png";
import Buttons from "./Buttons";

function Project5() {
  return (
    <div>
      <div className="shadow-lg p-2 rounded-xl my-10">
        <h2 className="text-center text-3xl font-semibold text-indigo-700 pb-2">
          Language Translator
        </h2>
        <img src={data} className="w-full h-70" />
        <hr className="mt-2 h-0.5 border-t-0 bg-neutral-300 opacity-100" />
        <p className="text-xs py-4 text-slate-700">
          Developed a CDAL-Language-Translator compiler to translate Climate
          Data Analysis Language (CDAL) programs into C++. Adhered to the Google
          C++ style guide during code implementation and employed industry
          design practices with an Iterative development model cycle. Ensured
          the application's reliability through thorough testing using the
          CxxTest library's unit testing framework.
        </p>
        {/* tech-logo-1, tech-logo-2  ............... "View on Github"*/}
        <hr className="mt-2 h-0.5 border-t-0 bg-neutral-300 opacity-100" />
        <div className="py-2 mx-2 flex flex-row justify-between">
          <div className="flex flex-wrap gap-3 py-3">
            <img
              width={36}
              height={36}
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-line.svg"
            />
          </div>
          <div className="w-32 py-3 flex justify-end">
            <Buttons
              name="Github"
              href="https://github.com/hjain64/CDAL-Language-Translator"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project5;
