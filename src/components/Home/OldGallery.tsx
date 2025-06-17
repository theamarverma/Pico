import Image from "next/image";
import React from "react";
import PicoButton from "../Global/PicoButton";
import Link from "next/link";

const Gallery = () => {
  return (
    <div>
      {/* Header */}
      <div className="space-y-4">
        <h1 className="flex items-center justify-center text-xl md:text-header">
          Pico Gallery
        </h1>
        <div className="flex items-center justify-center text-xl text-picoTextGray">
          A Glimpse Into Our World
        </div>
      </div>
      <div className="mt-8 grid max-h-[675px] grid-cols-3 gap-4 overflow-hidden">
        <div className="left col-span-2 space-y-2">
          <div className="h-1/2">
            <Image
              className="h-full w-full"
              src={"/images/homepage/gallery/coffee.png"}
              alt=""
              width={600}
              height={1000}
            />
          </div>
          <div className="flex h-1/2 w-full gap-3">
            <div className="left">
              <Image
                className="h-full"
                src={"/images/homepage/gallery/orange.png"}
                alt=""
                width={600}
                height={1000}
              />
            </div>
            <div className="right">
              <Image
                className="h-full"
                src={"/images/homepage/gallery/iceTea.png"}
                alt=""
                width={600}
                height={1000}
              />
            </div>
          </div>
        </div>
        <div className="right col-span-1">
          <Image
            className="h-full"
            src={"/images/homepage/gallery/noodles.png"}
            alt=""
            width={600}
            height={1000}
          />
        </div>
      </div>
      <Link href="/gallery" className="mt-10 flex items-center justify-center">
        <PicoButton title="Our Gallery " />
      </Link>
    </div>
  );
};

export default Gallery;
