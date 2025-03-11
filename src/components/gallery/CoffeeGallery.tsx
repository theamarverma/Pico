"use client";
import type { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid"; // Import grid CSS
import { useCallback, useState, useEffect } from "react";
import {
  GrFormNextLink,
  GrFormPreviousLink,
  GrNext,
  GrPrevious,
} from "react-icons/gr";
import { Autoplay, Grid } from "swiper/modules";
import PicoImage from "../Global/PicoImage";
import React from "react";

const CoffeeGallery = () => {
  const coffeItems = [
    { name: "Coffee 1", path: "/images/gallery/coffees/1.png" },
    { name: "Coffee 2", path: "/images/gallery/coffees/1.png" },
    { name: "Coffee 3", path: "/images/gallery/coffees/1.png" },
    { name: "Coffee 4", path: "/images/gallery/coffees/1.png" },
    { name: "Coffee 5", path: "/images/gallery/coffees/1.png" },
    { name: "Coffee 6", path: "/images/gallery/coffees/1.png" },
    { name: "Coffee 7", path: "/images/gallery/coffees/1.png" },
    { name: "Coffee 8", path: "/images/gallery/coffees/1.png" },
    { name: "Coffee 9", path: "/images/gallery/coffees/1.png" },
    { name: "Coffee 10", path: "/images/gallery/coffees/1.png" },
    { name: "Coffee 11", path: "/images/gallery/coffees/1.png" },
    { name: "Coffee 12", path: "/images/gallery/coffees/1.png" },
  ];
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [isMobile, setIsMobile] = useState(false);

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
      <h1 className="flex items-center justify-center text-xl md:text-header">
        Speciality Coffee
      </h1>
      {isMobile ? (
        // Mobile view: normal slider without grid
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={2}
          spaceBetween={16}
          loop={false}
          autoplay={{
            delay: 300,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {coffeItems.map((item, index) => (
            <SwiperSlide key={index}>
              <PicoImage path={item.path} name={item.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        // Desktop view: enable grid (2 rows, 3 slides per row = 6 slides visible)
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
          grid={{ rows: 2, fill: "row" }}
          spaceBetween={16}
          loop={false}
          modules={[Grid]}
        >
          {coffeItems.map((item, index) => (
            <SwiperSlide key={index}>
              <PicoImage path={item.path} name={item.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {/* Desktop Navigation Buttons */}
      <div className="btns mt-4">
        <div className="hidden justify-between gap-4 md:flex">
          <button
            className="hover:bg-primary-dark hover:text-charity-primary flex h-16 w-16 items-center justify-center rounded-full border border-picoJuteBrown text-picoJuteBrown"
            onClick={handlePrevious}
          >
            <GrPrevious size={24} />
          </button>
          <button
            className="hover:bg-primary-dark hover:text-charity-primary flex h-16 w-16 items-center justify-center rounded-full border border-picoJuteBrown text-picoJuteBrown"
            onClick={handleNext}
          >
            <GrNext size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Buttons */}
      <div className="btns mt-4">
        <div className="flex items-center justify-center gap-4 md:hidden">
          <div>
            <button
              className="hover:bg-primary-dark hover:text-charity-primary flex h-10 w-10 items-center justify-center rounded-full border border-picoJuteBrown text-picoJuteBrown"
              onClick={handlePrevious}
            >
              <GrPrevious />
            </button>
          </div>
          <div>
            <button
              className="hover:bg-primary-dark hover:text-charity-primary flex h-10 w-10 items-center justify-center rounded-full border border-picoJuteBrown text-picoJuteBrown"
              onClick={handleNext}
            >
              <GrNext />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeGallery;
