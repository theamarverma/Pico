"use client";
import { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCallback, useState, useEffect } from "react"; // Add useEffect

import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";

import { Autoplay } from "swiper/modules"; // Import Autoplay module

import MediaCard from "./MediaCard";

const MediaCarousel = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile screen size
  const mediaItems = [1, 2, 3, 4, 5];
  // Check screen size on component mount and window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set isMobile to true if screen width is less than 768px
    };

    // Initial check
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
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
      <div className="mx-4 mb-10 flex justify-between">
        <h1
          data-aos-duration="200"
          className="leading-tighter text-primary-dark text-center text-4xl font-semibold md:text-start"
        >
          Programs and Initiatives
        </h1>
        <div className="right">
          <div className="hidden gap-4 md:flex">
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
        </div>
      </div>

      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1} // Default to 1 slide for mobile
        spaceBetween={16}
        breakpoints={{
          576: {
            slidesPerView: 2, // 2 slides for tablets
          },
          768: {
            slidesPerView: 3, // 3 slides for desktop
          },
        }}
        loop={false}
        autoplay={
          isMobile
            ? {
                delay: 300, // Autoplay delay for mobile
                disableOnInteraction: false, // Continue autoplay after user interaction
              }
            : false // Disable autoplay for larger screens
        }
        modules={[Autoplay]} // Add Autoplay module
      >
        {mediaItems.map((item, index) => (
          <SwiperSlide key={index}>
            <MediaCard />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Mobile Navigation Buttons */}
      {/* <div className="mt-5 flex w-full items-center justify-center gap-8 md:hidden">
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
      </div> */}
    </>
  );
};

export default MediaCarousel;
