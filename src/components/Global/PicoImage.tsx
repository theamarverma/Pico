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
        {/* Shadow Image on Top */}
        <Image
          src="/images/shadow.png"
          alt="Shadow Effect"
          fill
          className="absolute inset-0 z-20 object-cover"
        />
        {/* Text Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-30 p-2 text-center text-white">
          <h1 className="text-xl"> {name}</h1>
        </div>
      </div>
    </div>
  );
};

export default PicoImage;
