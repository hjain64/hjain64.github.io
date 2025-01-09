import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaMedium } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import profile from "../assets/my-pic-2.png";

// eslint-disable-next-line react/prop-types
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
          <p className="text-gray-600 lg:text-xl md:text-lg sm:text-base max-w-xl mx-auto">
            Experienced Software Engineer with a passion for transforming ideas
            into efficient, scalable, and user-friendly solutions. From concept
            to deployment, I bring a proven track record of delivering impactful
            software by solving complex problems, crafting intuitive designs,
            and leveraging modern technologies. Let’s create something
            extraordinary together!
          </p>
          <div className="text-5xl flex justify-center lg:gap-16 md:gap-12 sm:gap-8 py-4 text-gray-600">
            <a
              target="_blank"
              href="https://linkedin.com/in/jainmanshu"
              className="hover:underline me-4 md:me-6"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              target="_blank"
              href="https://medium.com/@jainmanshu"
              className="hover:underline me-4 md:me-6"
              rel="noreferrer"
            >
              <FaMedium />
            </a>
            <a
              target="_blank"
              href="https://github.com/jainmanshu"
              className="hover:underline me-4 md:me-6"
              rel="noreferrer"
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
