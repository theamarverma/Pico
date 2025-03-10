"use client";
import type { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCallback, useState, useEffect } from "react";

import {
  GrFormNextLink,
  GrFormPreviousLink,
  GrNext,
  GrPrevious,
} from "react-icons/gr";

import { Autoplay } from "swiper/modules";

const VideoContainer = () => {
  const mediaItems = [1, 2, 3, 4, 5];
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on component mount and window resize
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
      <h1 className="text-header flex items-center justify-center">
        Experience the Magic in Motion
      </h1>

      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1} // Default to 1 slide for mobile
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
        {mediaItems.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="min-h-[500px] border border-picoTextGray">
              <video
                className="h-full min-h-[500px]"
                height="440"
                controls
                preload="none"
              >
                <source src="/videos/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Carousel Buttons  */}
      <div className="btns mt-4">
        <div className="hidden justify-between gap-4 md:flex">
          <div>
            <button
              className="hover:bg-primary-dark hover:text-charity-primary flex h-16 w-16 items-center justify-center rounded-full border border-picoJuteBrown text-picoJuteBrown"
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

      {/* Mobile Navigation Buttons */}
      <div className="mt-5 flex w-full items-center justify-center gap-8 md:hidden">
        <div>
          <button
            className="border-primary-dark hover:bg-primary-dark hover:text-charity-primary flex h-14 w-14 items-center justify-center rounded-full border"
            onClick={handlePrevious}
          >
            <GrFormPreviousLink size={30} />
          </button>
        </div>
        <div>
          <button
            className="border-primary-dark hover:bg-primary-dark hover:text-charity-primary flex h-14 w-14 items-center justify-center rounded-full border"
            onClick={handleNext}
          >
            <GrFormNextLink size={30} />
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoContainer;
