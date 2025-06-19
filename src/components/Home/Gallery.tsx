import Image from "next/image";
import React from "react";
import PicoButton from "../Global/PicoButton";
import Link from "next/link";

const Gallery = () => {
  return (
    <div>
      <div className="">
        <div className="flex items-center justify-center gap-2 text-xl md:text-header">
          <h1 className="">PICO</h1>
          <h3 className="italic text-picoTeal">Frames</h3>
        </div>
        <div className="flex items-center justify-center pb-10 text-xl text-picoTextGray">
          A Glimpse Into Our World
        </div>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-4">
        <div className="h-[300px]">
          <Image
            className="h-full w-full object-cover"
            src={"/images/homepage/gallery/coffee.png"}
            alt=""
            width={600}
            height={1000}
          />
        </div>

        <div className="h-[300px]">
          <Image
            className="h-full"
            src={"/images/homepage/gallery/iceTea.png"}
            alt=""
            width={600}
            height={1000}
          />
        </div>
        <div className="h-[300px]">
          <Image
            className="h-full object-cover"
            src={"/images/homepage/gallery/noodles.png"}
            alt=""
            width={600}
            height={1000}
          />
        </div>
        <div className="h-[300px]">
          <Image
            className="h-full w-full object-cover"
            src={"/images/homepage/gallery/coffee.png"}
            alt=""
            width={600}
            height={1000}
          />
        </div>

        <div className="h-[300px]">
          <Image
            className="h-full object-cover"
            src={"/images/homepage/gallery/iceTea.png"}
            alt=""
            width={600}
            height={1000}
          />
        </div>
        <div className="h-[300px]">
          <Image
            className="h-full object-cover"
            src={"/images/homepage/gallery/noodles.png"}
            alt=""
            width={600}
            height={1000}
          />
        </div>
      </div>

      <Link href="/gallery" className="mt-10 flex items-center justify-center">
        <PicoButton title="Visit Gallery " />
      </Link>
    </div>
  );
};

export default Gallery;
