import Project1 from "../components/Project1";
import Project2 from "../components/Project2";
import Project3 from "../components/Project3";
import Project4 from "../components/Project4";
import Project5 from "../components/Project5";
import Project6 from "../components/Project6";
import Project7 from "../components/Project7";
import Project8 from "../components/Project8";

function Project({ innerRef }) {
  return (
    <div
      ref={innerRef}
      id="projects"
      className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full scroll-m-16"
    >
      <section className="w-full">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <Project8 />
          <Project7 />
          <Project1 />
          <Project2 />
          <Project6 />
          <Project3 />
          <Project4 />
          <Project5 />
        </div>
      </section>
    </div>
  );
}

export default Project;
