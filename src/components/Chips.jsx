import React from "react";

function Chips({ name, icon, ...iconProps }) {
  return (
    <div className="relative grid select-none items-center whitespace-nowrap rounded-lg border border-gray-900 py-1.5 px-3 font-sans text-xs/[8px] font-bold uppercase text-gray-700">
      <div className="absolute top-2/4 left-1.5 -translate-y-2/4">
        {React.createElement(icon, { ...iconProps })}
      </div>
      <span className="ml-[14px]">{name}</span>
    </div>
  );
}

export default Chips;
