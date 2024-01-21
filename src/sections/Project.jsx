import Project1 from "../components/Project1";
import Project2 from "../components/Project2";
import Project3 from "../components/Project3";
import Project4 from "../components/Project4";
import Project5 from "../components/Project5";
import Project6 from "../components/Project6";

function Project() {
  return (
    <div
      id="projects"
      className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full"
    >
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
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
