import fastSearch from "../assets/fast-search.png";
import Buttons from "./Buttons";
import elastic from "../assets/elastic.png";

function Project7() {
  return (
    <div className="shadow-lg p-2 rounded-xl my-10">
      <h2 className="text-center text-3xl font-semibold text-indigo-700 pb-2">
        Fast Search
      </h2>
      <img src={fastSearch} className="w-full h-70" />
      <hr className="mt-2 h-0.5 border-t-0 bg-neutral-300 opacity-100" />
      <p className="text-xs py-4 text-slate-700">
        Crafted a fast search application that showcases the performance and
        capabilities of three popular search engines: Redis, PostgreSQL, and
        Elasticsearch. It allows users to perform searches for country names,
        demonstrating how each search engine handles the query and returns
        results. The app highlights the strengths and use cases of each search
        engine, providing insights into their performance, scalability, and
        suitability for different types of search requirements.
      </p>
      {/* tech-logo-1, tech-logo-2  ............... "View on Github"*/}
      <hr className="mt-2 h-0.5 border-t-0 bg-neutral-300 opacity-100" />
      <div className="py-2 mx-2 flex flex-row justify-between">
        <div className="flex flex-wrap gap-3 py-1">
          <img
            width={48}
            height={48}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg"
          />
          <img width={48} height={48} src={elastic} />
          <img
            width={48}
            height={48}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg"
          />
          <img
            width={48}
            height={48}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg"
          />
        </div>
        <div className="w-32 py-1 flex justify-end gap-1 items-center">
          {/* <Buttons name="Demo" href="https://fast-search-tau.vercel.app/" /> */}
          <Buttons
            name="Github"
            href="https://github.com/jainmanshu/fast-search"
          />
        </div>
      </div>
    </div>
  );
}

export default Project7;
