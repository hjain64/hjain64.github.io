import Chips from "../components/Chips";
import { IoBookSharp } from "react-icons/io5";
import { SiIeee, SiAcm, SiLinux } from "react-icons/si";
import { GiLion } from "react-icons/gi";

function Career({ innerRef }) {
  const courseWorks = [
    "Artificial Intelligence",
    "Operating Systems",
    "Internet Programming",
    "Advanced Programming",
    "Language Processors",
    "Software Engineering Principles.",
  ];

  const courseWorks2 = [
    "Computer Architecture",
    "Data Structures",
    "Design & Analysis of Algorithms",
    "Object Oriented Programming",
    "Database Management System",
  ];

  return (
    <section ref={innerRef} id="education" className="scroll-mt-16">
      <div className="py-4 max-w-3xl mx-auto">
        <div className="-my-2">
          <div className="relative pl-8 sm:pl-32 py-3 group">
            <div className="font-caveat font-semibold text-2xl text-indigo-500 mb-1 sm:mb-0">
              University of Minnesota Twin Cities
              <div className="font-caveat font-medium text-sm ml-1">
                Minneapolis, Minnesota, USA
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                2016-2018
              </time>
              <div className="text-xl font-bold text-slate-900"></div>
            </div>
            <div>
              <div className="italic text-slate-700 ml-2 font-medium">
                Bachelor's of Science, Computer Science
              </div>
              <div className="flex flex-wrap gap-2 pl-4 pt-2">
                <div className="relative grid select-none items-center whitespace-nowrap rounded-lg border border-gray-900 py-1.5 px-3 font-sans text-xs/[8px] font-bold uppercase text-gray-700">
                  <div className="absolute top-2/4 left-1.5 -translate-y-2/4">
                    <SiIeee size={30} />
                  </div>
                  <span className="ml-[28px]">Member of IEEE Society</span>
                </div>
                <div className="relative grid select-none items-center whitespace-nowrap rounded-lg border border-gray-900 py-1.5 px-3 font-sans text-xs/[8px] font-bold uppercase text-gray-700">
                  <div className="absolute top-2/4 left-1.5 -translate-y-2/4">
                    <SiAcm size={15} />
                  </div>
                  <span className="ml-[14px]">Member of ACM </span>
                </div>
              </div>
            </div>
            <div>
              <div className="italic text-slate-700 mt-2 ml-2">Courseworks</div>
              <div className="flex flex-wrap gap-2 pl-4 pt-2">
                {courseWorks.map((name, key) => (
                  <Chips key={key} name={name} icon={IoBookSharp} />
                ))}
              </div>
            </div>
          </div>
          <div className="relative pl-8 sm:pl-32 py-3 group">
            <div className="font-caveat font-medium text-xl text-indigo-500 mb-1 sm:mb-0">
              Manipal University
              <div className="font-caveat font-medium text-sm ml-1">
                Manipal, Karnatka, India
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                2014 - 2016
              </time>
              <div className="text-xl font-bold text-slate-900"></div>
            </div>
            <div>
              <div className="italic text-slate-700 font-medium ml-2">
                Bachelor's of Science, Computer Science
              </div>
              <div className="flex flex-wrap gap-2 pl-4 pt-2">
                <div className="relative grid select-none items-center whitespace-nowrap rounded-lg border border-gray-900 py-1.5 px-3 font-sans text-xs/[8px] font-bold uppercase text-gray-700">
                  <div className="absolute top-2/4 left-1.5 -translate-y-2/4">
                    <GiLion size={15} />
                  </div>
                  <span className="ml-[14px]">Member of Lions Club</span>
                </div>
                <div className="relative grid select-none items-center whitespace-nowrap rounded-lg border border-gray-900 py-1.5 px-3 font-sans text-xs/[8px] font-bold uppercase text-gray-700">
                  <div className="absolute top-2/4 left-1.5 -translate-y-2/4">
                    <SiLinux size={15} />
                  </div>
                  <span className="ml-[14px]">
                    Member of Linux Research Group
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="italic text-slate-700 mt-2 ml-2">Courseworks</div>
              <div className="flex flex-wrap gap-2 pl-4 pt-2">
                {courseWorks2.map((name, key) => (
                  <Chips key={key} name={name} icon={IoBookSharp} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Career;
