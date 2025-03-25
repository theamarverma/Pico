import Image from "next/image";
import React from "react";

interface Props {
  path: string;
  name: string;
}
const PicoImage = ({ path, name }: Props) => {
  return (
    <div>
      <div className="relative h-[196px] md:h-[500px]">
        {/* Base Image */}
        <Image
          src={path}
          alt="Normal Image"
          fill
          className="absolute inset-0 z-10 object-cover"
        />
        {/* gradient */}
        <div className="absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-b from-black/5 via-black/30 to-black" />
        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-30 p-2 text-center text-white">
          <h1 className="text-xs md:text-xl"> {name}</h1>
        </div>
      </div>
    </div>
  );
};

export default PicoImage;
