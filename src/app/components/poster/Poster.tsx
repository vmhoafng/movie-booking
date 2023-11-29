import React from "react";
import Image from "../Image";
import clsx from "clsx";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import useWindowDimensions from "@/app/hooks/useWindowDimensions";

interface PosterProps {
  src?: string;
  alt?: string;
  horizontal?: boolean;
  name: string;
  subname: string;
  to?: string;
  onClick?: () => void;
}

function Poster({
  src,
  alt,
  horizontal,
  name,
  subname,
  to,
  onClick,
}: PosterProps) {
  const { width } = useWindowDimensions();
  return (
    <div
      className="
        flex
        flex-col
        border-transparent
        rounded
        group"
    >
      <div
        className={clsx(
          `relative`,
          horizontal
            ? "w-[220px] h-[145px] xl:w-[250px] xl:h-[165px]"
            : "w-full h-full min-w-[175px] md:h-[300px] md:w-[190px] xl:w-[290px] xl:h-[430px]"
        )}
      >
        <Image
          horizontal={horizontal}
          src={src || "/assets/images/poster.png"}
          alt={alt || "/assets/images/poster.png"}
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
            lg:group-hover:opacity-100
            "
        >
          <Link to={to!}>
            <Button
              highlight
              rounded
              uppercase
              borderWhite
              small={horizontal || (width > 960 && width < 1200)}
              medium={!horizontal}
              onClick={onClick}
            >
              buy ticket
            </Button>
          </Link>
        </div>
      </div>
      <div
        className={clsx(
          `relative
          flex
          flex-col
          gap-[10px]
          py-5`,
          horizontal
            ? "w-[220px] xl:w-[250px]"
            : "w-full min-w-[175px] md:w-[190px] xl:w-[290px]"
        )}
      >
        <div
          className="
          absolute 
          bg-white/10
          h-full
          w-full
          top-0
          transition-all
          duration-100
          ease-linear
          opacity-0
          lg:group-hover:opacity-100
        "
        ></div>
        <div
          className={clsx(
            "uppercase text-white font-bold transition-all duration-100 ease-linear lg:group-hover:px-[10px] truncate",
            horizontal && "text-[15px] xl:text-base"
          )}
        >
          {name}
        </div>
        <div
          className={clsx(
            "uppercase text-white/60 font-bold transition-all duration-100 ease-linear lg:group-hover:px-[10px] truncate",
            horizontal ? "text-xs xl:text-[13px] xl:leading-7" : "text-sm "
          )}
        >
          {subname}
        </div>
      </div>
    </div>
  );
}

export default Poster;
