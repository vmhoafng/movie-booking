import clsx from "clsx";
import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const Image: React.FC<ImageProps> = ({ src, alt, width, height }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx(width && `w-[${width}px]`, height && `h-[${height}px]`)}
    />
  );
};

export default Image;
