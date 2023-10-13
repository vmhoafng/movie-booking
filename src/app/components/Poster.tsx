import React from "react";
import Image from "./Image";
import clsx from "clsx";

interface PosterProps {
  src?: string;
  alt?: string;
  horizontal?: boolean;
  name: string;
  subname: string;
}

function Poster({ src, alt, horizontal, name, subname }: PosterProps) {
  return (
    <div className="flex flex-col border-transparent rounded [box-shadow:_2px_2px_4px_0px_rgba(0, 0, 0, 0.50);]">
      <div className={clsx(``, horizontal)}>
        <Image
          width={horizontal ? 250 : 290}
          height={horizontal ? 165 : 430}
          src={src || "images/poster.png"}
          alt={alt || "images/poster.png"}
        />
      </div>

      <div className="flex flex-col gap-3 py-5">
        <div className="uppercase text-white font-bold">{name}</div>
        <div className="uppercase text-white/60 font-bold text-sm">
          {subname}
        </div>
      </div>
    </div>
  );
}

export default Poster;
