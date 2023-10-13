import React from "react";
import clsx from "clsx";

interface TitleProps {
  children: React.ReactNode;
  active?: Boolean;
  onClick?: () => void;
}

function Title({ children, active, onClick }: TitleProps) {
  return (
    <div onClick={onClick} className="w-full">
      <h2
        className={clsx(
          `uppercase font-bold`,
          active && "border-b border-highlight w-fit"
        )}
      >
        {children}
      </h2>
    </div>
  );
}

export default Title;
