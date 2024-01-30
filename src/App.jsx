import Navbar from "./sections/Navbar";
import About from "./sections/About";
import Education from "./sections/Education";
import Work from "./sections/Work";
import Project from "./sections/Project";
import Footer from "./sections/Footer";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

function App() {
  const [section1Ref, section1InView] = useInView({ threshold: 0.5 });
  const [section2Ref, section2InView] = useInView({ threshold: 0.5 });
  const [section3Ref, section3InView] = useInView({ threshold: 0.5 });
  const [section4Ref, section4InView] = useInView({ threshold: 0.5 });

  const [section, setSection] = useState(1);

  useEffect(() => {
    if (section1InView) setSection(1);
    else if (section2InView) setSection(2);
    else if (section3InView) setSection(3);
    else if (section4InView) setSection(4);
  }, [section1InView, section2InView, section3InView, section4InView]);

  return (
    <div>
      <Navbar section={section} />
      <About innerRef={section1Ref} />
      <Education innerRef={section2Ref} />
      <Work innerRef={section3Ref} />
      <Project innerRef={section4Ref} />
      <Footer />
    </div>
  );
}

export default App;
