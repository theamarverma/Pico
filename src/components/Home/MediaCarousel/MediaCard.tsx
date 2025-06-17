import Image from "next/image";
import Link from "next/link";
type MediaCardProps = {
  title: string;
  date: string;
  imageSrc: string;
  link: string;
};
const MediaCard = ({ title, date, imageSrc, link }: MediaCardProps) => {
  return (
    <Link href={link} target="_blank">
      <div className="bg-bgCreamDark p-4">
        <div className="relative">
          <Image
            className="h-[300px]"
            src={imageSrc}
            alt="media"
            width={1000}
            height={300}
          />
        </div>
      </div>
      <h1 className="mt-3 text-lg xl:text-xl">{title}</h1>
      <p className="text-picoTextGray">{date}</p>
      {/* Popup arrow */}
      <div className="absolute right-8 top-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bgCreamDark p-3">
          <Image
            src={"/images/homepage/media/arrowIcon.png"}
            alt="arrow"
            width={100}
            height={100}
          />
        </div>
      </div>
    </Link>
  );
};

export default MediaCard;
