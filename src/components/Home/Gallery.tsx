import Image from "next/image";
import React from "react";
import PicoButton from "../Global/PicoButton";
import Link from "next/link";

interface GalleryImageCardProps {
  src: string;
  alt: string;
  priority?: boolean;
}

const GalleryImageCard = ({
  src,
  alt,
  priority = false,
}: GalleryImageCardProps) => (
  <div className="relative h-[150px] md:h-[300px]">
    <Image
      className="h-full w-full object-cover"
      src={src}
      alt={alt}
      width={600}
      height={1000}
      priority={priority}
    />
  </div>
);
const Gallery = () => {
  return (
    <div>
      <div className="">
        <div className="flex items-center justify-center gap-2 text-xl md:text-header">
          <h1 className="">PICO</h1>
          <h3 className="italic text-picoTeal">Frames</h3>
        </div>
        <div className="flex items-center justify-center pb-10 text-picoTextGray md:text-xl">
          A Glimpse Into Our World
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        <GalleryImageCard
          src="/images/homepage/gallery/coffee.png"
          alt="A steaming cup of coffee"
          priority={true}
        />
        <GalleryImageCard
          src="/images/homepage/gallery/iceTea.png"
          alt="A glass of refreshing iced tea"
          priority={true}
        />
        <GalleryImageCard
          src="/images/homepage/gallery/noodles.png"
          alt="A bowl of delicious noodles"
          priority={true}
        />

        {/* Second Row (automatically created by grid) */}
        <GalleryImageCard
          src="/images/homepage/gallery/coffee.png"
          alt="Another steaming cup of coffee"
        />
        <GalleryImageCard
          src="/images/homepage/gallery/iceTea.png"
          alt="Another glass of refreshing iced tea"
        />
        <GalleryImageCard
          src="/images/homepage/gallery/noodles.png"
          alt="Another bowl of delicious noodles"
        />
      </div>

      <Link href="/gallery" className="mt-10 flex items-center justify-center">
        <PicoButton title="Visit Gallery " />
      </Link>
    </div>
  );
};

export default Gallery;
