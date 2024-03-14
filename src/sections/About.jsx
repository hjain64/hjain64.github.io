import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { RiMediumLine } from "react-icons/ri";
import profile from "../assets/my-pic-2.png";

function About({ innerRef }) {
  return (
    <section ref={innerRef} id="about" className="scroll-m-9">
      <div className="h-screen w-full text-center">
        <div className="max-w-screen-xl mx-auto w-full h-full pt-14 p-4 flex flex-col justify-around items-center">
          <div className="w-64 h-64 mx-auto overflow-hidden rounded-full">
            <img src={profile} alt="me" />
          </div>
          <h2 className="text-5xl py-1 text-indigo-500 font-medium font-rocksalt">
            Himanshu Jain
          </h2>
          <h3 className="text-3xl italic">Software Engineer</h3>
          <p className="text-gray-600 lg:text-xl md:text-lg sm:text-base max-w-md mx-auto">
            Experienced Software Engineer with a knack for turning ideas into
            efficient and scalable solutions. From coding to deployment, I bring
            a proven track record in software development. Explore my portfolio
            to see how I bring innovation to every line of code.
          </p>
          <div className="text-5xl flex justify-center lg:gap-16 md:gap-12 sm:gap-8 py-4 text-gray-600">
            <a
              target="_blank"
              href="https://linkedin.com/in/jainmanshu"
              className="hover:underline me-4 md:me-6"
            >
              <AiFillLinkedin />
            </a>
            <a
              target="_blank"
              href="https://medium.com/@jainmanshu"
              className="hover:underline me-4 md:me-6"
            >
              <RiMediumLine />
            </a>
            <a
              target="_blank"
              href="https://github.com/jainmanshu"
              className="hover:underline me-4 md:me-6"
            >
              <AiFillGithub />
            </a>
            <a href="mailto:jainmanshu@gmail.com" className="hover:underline">
              <SiGmail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
