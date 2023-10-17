import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return (
    <h2 className="h-14 lg:h-16 py-2 text-white/90 font-semibold uppercase font-inter flex items-center">
      <span
        className="
    leading-10
  [text-shadow:0.5px_0.5px_1px_var(--tw-shadow-color)]
  shadow-black/50
  "
      >
        {children}
      </span>
    </h2>
  );
}

export default Title;
