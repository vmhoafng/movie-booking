import React from "react";
import Image from "./Image";
import clsx from "clsx";
import Button from "./button/Button";

interface PosterProps {
  src?: string;
  alt?: string;
  horizontal?: boolean;
  name: string;
  subname: string;
}

function Poster({ src, alt, horizontal, name, subname }: PosterProps) {
  return (
    <div
      className="w-fit
        flex
        flex-col
        border-transparent
        rounded
        [box-shadow:_2px_2px_4px_0px_rgba(0, 0, 0, 0.50);]
        overflow-hidden group"
    >
      <div className={clsx(`relative`, horizontal)}>
        <Image
          horizontal={horizontal}
          src={src || "assets/images/poster.png"}
          alt={alt || "assets/images/poster.png"}
        />
        <div
          className="
            flex
            absolute 
            bg-black/60
            h-full
            w-full
            top-0
            items-center
            justify-center
            transition-all
            duration-100
            ease-linear
            opacity-0
            group-hover:opacity-100
            "
        >
          <Button highlight rounded uppercase borderWhite sm={horizontal}>
            buy ticket
          </Button>
        </div>
      </div>
      <div className="relative
          flex
          flex-col
          gap-[10px]
          py-5">
        <div
          className="
          absolute 
          bg-white/60
          h-full
          w-full
          top-0
          transition-all
          duration-100
          ease-linear
          opacity-0
          group-hover:opacity-100
        "
        ></div>
        <div
          className={clsx(
            "uppercase text-white font-bold transition-all duration-100 ease-linear group-hover:px-[10px] truncate",
            horizontal
              ? "text-[15px] xl:text-base max-w-[220px] xl:max-w-[250px]"
              : "max-w-[200px] xl:max-w-[290px]"
          )}
        >
          {name}
        </div>
        <div
          className={clsx(
            "uppercase text-white/60 font-bold transition-all duration-100 ease-linear group-hover:px-[10px]",
            horizontal
              ? "text-xs xl:text-[13px] max-w-[220px] xl:max-w-[250px]"
              : "text-sm max-w-[200px] xl:max-w-[290px]"
          )}
        >
          {subname}
        </div>
      </div>
    </div>
  );
}

export default Poster;
