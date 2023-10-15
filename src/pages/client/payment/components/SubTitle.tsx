import React from "react";

interface SubTitleProps {
  children: React.ReactNode;
}

function SubTitle({ children }: SubTitleProps) {
  return (
    <h3 className="text-white/90 uppercase text-sm font-semibold leading-6">
      <span
        className="
        [text-shadow:0.5px_0.5px_1px_var(--tw-shadow-color)]
        shadow-black/50
"
      >
        {children}
      </span>
    </h3>
  );
}

export default SubTitle;
