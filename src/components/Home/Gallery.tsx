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
  <div className="relative h-[150px] md:h-[500px]">
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
  const galleryImages = [
    {
      src: "https://res.cloudinary.com/dzpuwffzh/image/upload/v1751557610/DOC-20250703-WA0002_bxpt3s.jpg",
      alt: "A steaming cup of coffee",
    },
    {
      src: "https://res.cloudinary.com/dzpuwffzh/image/upload/v1751557584/DOC-20250703-WA0004_lqqsrv.jpg",
      alt: "A glass of refreshing iced tea",
    },
    {
      src: "https://res.cloudinary.com/dzpuwffzh/image/upload/v1751557609/DOC-20250703-WA0003_z8mcyh.jpg",
      alt: "A bowl of delicious noodles",
    },
    {
      src: "https://res.cloudinary.com/dzpuwffzh/image/upload/v1751557594/DOC-20250703-WA0005_qsuzic.jpg",
      alt: "Another steaming cup of coffee",
    },
    {
      src: "https://res.cloudinary.com/dzpuwffzh/image/upload/v1751557604/DOC-20250703-WA0007_fyj3aa.jpg",
      alt: "Another glass of refreshing iced tea",
    },
    {
      src: "https://res.cloudinary.com/dzpuwffzh/image/upload/v1751557622/DOC-20250703-WA0006_y6w5v8.jpg",
      alt: "Another bowl of delicious noodles",
    },
  ];
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
        {galleryImages.map((image, index) => (
          <GalleryImageCard
            key={index}
            src={image.src}
            alt={image.alt}
            priority={index === 0}
          />
        ))}
      </div>

      <Link href="/gallery" className="mt-10 flex items-center justify-center">
        <PicoButton title="Visit Gallery " />
      </Link>
    </div>
  );
};

export default Gallery;
