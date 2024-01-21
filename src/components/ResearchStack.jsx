import { SiImagej } from "react-icons/si";

function ResearchTechStack({ size = 48 }) {
  return (
    <div className="flex flex-wrap gap-3 py-3">
      <img
        width={size}
        height={size}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
      />

      <img
        width={size}
        height={size}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"
      />
      <SiImagej size={size} title="ImageJ" />
    </div>
  );
}

export default ResearchTechStack;
