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
      <div className="rounded-2xl bg-bgCreamDark p-2 md:h-[500px]">
        <div className="relative">
          <Image
            className="h-[400px] rounded-xl"
            src={imageSrc}
            alt="media"
            width={1000}
            height={500}
          />
          <h1 className="text-xl xl:text-3xl">{title}</h1>
          <p>{date}</p>
          {/* Popup arrow */}
          <div className="absolute right-2 top-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-bgCreamDark p-3">
              <Image
                src={"/images/homepage/media/arrowIcon.png"}
                alt="arrow"
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MediaCard;
