"use client";
import type { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCallback, useState, useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Autoplay } from "swiper/modules";
import MediaCard from "./MediaCard";

const MediaCarousel = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const cards = [
    {
      title: "The Telegraph Online",
      date: "9 July 2024",
      imageSrc: "/images/homepage/media/image.png",
      link: "https://www.telegraphindia.com/my-kolkata/food/...",
    },
    {
      title: "E paper",
      date: "29 May 2024",
      imageSrc: "/images/homepage/media/image.png",
      link: "https://epaper.telegraphindia.com/imageview/...",
    },
    {
      title: "T2 online",
      date: "29 May 2024",
      imageSrc: "/images/homepage/media/image.png",
      link: "https://t2online.in/goodlife/food-beverage/...",
    },
    {
      title: "The Telegraph Online",
      date: "19 June 2024",
      imageSrc: "/images/homepage/media/image.png",
      link: "https://www.telegraphindia.com/my-kolkata/food/...",
    },
    {
      title: "Indulge",
      date: "27 July 2024",
      imageSrc: "/images/homepage/media/image.png",
      link: "https://www.indulgexpress.com/food/food-calcutta/...",
    },
    {
      title: "E paper",
      date: "11 Nov 2024",
      imageSrc: "/images/homepage/media/image.png",
      link: "https://epaper.telegraphindia.com/t2/2024-11-11/...",
    },
    {
      title: "T2 online",
      date: "11 Nov 2024",
      imageSrc: "/images/homepage/media/image.png",
      link: "https://t2online.in/goodlife/food-beverage/...",
    },
    {
      title: "The Telegraph Online",
      date: "03 Dec 2024",
      imageSrc: "/images/homepage/media/image.png",
      link: "https://www.telegraphindia.com/my-kolkata/food/...",
    },
    {
      title: "T2 online",
      date: "11 Jan 2025",
      imageSrc: "/images/homepage/media/image.png",
      link: "https://epaper.telegraphindia.com/imageview/...",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <>
      <div className="mb-10 flex items-center justify-center md:justify-between">
        <h1 className="text-xl md:text-header">Media Coverage</h1>
        <div className="btns">
          <div className="hidden gap-4 md:flex">
            <div>
              <button
                className="hover:bg-primary-dark hover:text-charity-primary flex h-16 w-16 items-center justify-center rounded-full border border-picoTextGray text-picoTextGray"
                onClick={handlePrevious}
              >
                <GrPrevious size={24} />
              </button>
            </div>
            <div>
              <button
                className="hover:bg-primary-dark hover:text-charity-primary flex h-16 w-16 items-center justify-center rounded-full border border-picoJuteBrown text-picoJuteBrown"
                onClick={handleNext}
              >
                <GrNext size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        loop={false}
        autoplay={
          isMobile
            ? {
                delay: 300,
                disableOnInteraction: false,
              }
            : false
        }
        modules={[Autoplay]}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <MediaCard
              title={card.title}
              date={card.date}
              imageSrc={card.imageSrc}
              link={card.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MediaCarousel;
