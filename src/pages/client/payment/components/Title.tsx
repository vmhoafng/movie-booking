import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

function Title({ children }: TitleProps) {
  return (
    <h2 className="h-14 lg:h-16 py-2 text-white/90 font-semibold uppercase font-inter flex items-center">
      {children}
    </h2>
  );
}

export default Title;
