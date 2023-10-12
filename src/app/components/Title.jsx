import React from "react";
import clsx from "clsx";
function Title({ title, active, onClick }) {
  return (
    <div onClick={onClick} className="w-full">  
      <h2
        className={clsx(
          `uppercase font-bold`,
          active && "border-b border-highlight w-fit"
        )}
      >
        {title}
      </h2>
    </div>
  );
}

export default Title;
