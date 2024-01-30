import Chips from "../components/Chips";
import { IoBookSharp } from "react-icons/io5";
import { SiIeee, SiAcm, SiLinux } from "react-icons/si";
import { GiLion } from "react-icons/gi";
import WorkTechStack from "../components/WorkTechStack";
import ResearchTechStack from "../components/ResearchStack";
import C1TechStack from "../components/C1TechStack";

function Work({ innerRef }) {
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
    <section ref={innerRef} id="work" className="scroll-mt-16">
      <div className="py-4 max-w-3xl mx-auto">
        <div className="-my-2">
          <div className="relative pl-8 sm:pl-32 py-3 group">
            <div className="font-caveat font-semibold text-2xl text-indigo-500 mb-1 sm:mb-0">
              Trimble Inc.
              <div className="font-caveat font-medium text-sm ml-1">
                Minnetonka, Minnesota, USA
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <div className="sm:absolute lg:-ml-8 left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-25 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                Jun 2018 - Present
              </div>
              <div className="text-xl font-bold text-slate-900"></div>
            </div>
            <div>
              <div className="italic font-bold text-slate-600 ml-2">
                Sr. Software Engineer
              </div>
              <ul className="list-disc text-sm text-slate-700 ml-5">
                <li>
                  Worked on modernization of NextGen fleet telematics
                  application, optimizing fleet management for a substantial
                  customer base, achieving 35% increase in customer retention.
                </li>
                <li>
                  Deployed Single-Sign-On (SSO) capability through a tailored
                  federation approach connecting OAuth2.0 with enterprise
                  identity using openID connect, resulting in a 30% reduction in
                  login times.
                </li>
                <li>
                  Built a robust internal open-source web component library,
                  based on React with adherence to Material-UI design principles
                  and UX considerations, resulting in an average of 150+ weekly
                  downloads, documented using Storybook.js.
                </li>
                <li>
                  Owned and developed Node microservices using PostgreSQL as
                  database, Kafka for event streaming, Redis for caching,
                  Elasticsearch for document store , Docker/Kubernetes for
                  containerization and AWS for reliability and scalability.
                </li>
                <li>
                  Conducted code reviews, authored technical design
                  documentation, mentored junior team members, and facilitated
                  agile practices, resulting in a streamlined development
                  process and heightened team productivity.{" "}
                </li>
                <WorkTechStack />
              </ul>
            </div>
          </div>
          <div className="relative pl-8 sm:pl-32 py-3 group">
            <div className="font-caveat font-semibold text-2xl text-indigo-500 mb-1 sm:mb-0">
              Titus Lab, University of Minnesota
              <div className="font-caveat font-medium text-sm ml-1">
                Minneapolis, Minnesota, USA
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <div className="sm:absolute lg:-ml-8 left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-25 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                Jan 2018 - May 2018
              </div>
              <div className="text-xl font-bold text-slate-900"></div>
            </div>
            <div>
              <div className="italic font-bold text-slate-600 ml-2">
                Undergraduate Research Assistant
              </div>
              <ul className="list-disc text-sm text-slate-700 ml-5">
                <li>
                  Developed and documented a cellular image analysis application
                  responsible for extracting key parameters (cell count, area,
                  intensity, filopodia length) for Metazoa and Amoebozoa, vital
                  for early-stage cancer cell detection.
                </li>
                <li>
                  Refactored the application code from MatLab to an automated
                  ImageJ JavaScript application, cutting down the overall stats
                  generation time by 80%, significantly improving performance
                  and elevating user experience.
                </li>
                <ResearchTechStack />
              </ul>
            </div>
          </div>
          <div className="relative pl-8 sm:pl-32 py-3 group">
            <div className="font-caveat font-semibold text-2xl text-indigo-500 mb-1 sm:mb-0">
              ConvergeOne
              <div className="font-caveat font-medium text-sm ml-1">
                Minneapolis, Minnesota, USA
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <div className="sm:absolute lg:-ml-8 left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-25 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                May 2017 - Aug 2017
              </div>
              <div className="text-xl font-bold text-slate-900"></div>
            </div>
            <div>
              <div className="italic font-bold text-slate-600 ml-2">
                Application Developer Intern
              </div>
              <ul className="list-disc text-sm text-slate-700 ml-5">
                <li>
                  Engineered a contact center application with Cisco Unified
                  Communications Manager, adhering closely to agile
                  methodologies, resulting in a significant 66.7% reduction in
                  average call wait time from 15 minutes to 5 minutes.
                </li>
                <li>
                  Orchestrated full-stack application development, showcasing
                  proficiency in backend technologies such as C#, .NET SQL, REST
                  API, VXML, and frontend technologies including Typescript,
                  Angular.js, Karma testing, and Bower.
                </li>
                <C1TechStack />
              </ul>
            </div>
          </div>
          <div className="relative pl-8 sm:pl-32 py-3 group">
            <div className="font-caveat font-semibold text-2xl text-indigo-500 mb-1 sm:mb-0">
              Unite Distance Learning
              <div className="font-caveat font-medium text-sm ml-1">
                Minneapolis, Minnesota, USA
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 lg:-ml-8 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-25 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                Jan 2017 - Apr 2017
              </time>
              <div className="text-xl font-bold text-slate-900"></div>
            </div>
            <div>
              <div className="italic font-bold text-slate-600 ml-2">
                Audio Visual Technician
              </div>
              <ul className="list-disc text-sm text-slate-700 ml-5">
                <li>
                  Operated TV studio classrooms, which broadcast live courses to
                  off campus student.
                </li>
                <li>
                  Responsible for setting up classroom and operating the master
                  control during lectures
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
