"use client";
import type { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid"; // Import grid CSS
import { useCallback, useState, useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Autoplay, Grid } from "swiper/modules";
import PicoImage from "../Global/PicoImage";
import React from "react";

const CoffeeGallery = () => {
  const coffeItems = [
    {
      name: "Basil Coffee Concoction",
      path: "/images/gallery/coffees/basilCoffee.jpg",
    },
    {
      name: "Coffee Lemonade",
      path: "/images/gallery/coffees/cinnamonCoffee.png",
    },
    { name: "Latte", path: "/images/gallery/coffees/latte.png" },
    {
      name: "Orange Coffee Concoction",
      path: "/images/gallery/coffees/orangeCoffee.png",
    },
    { name: "Pourover V-60", path: "/images/gallery/coffees/pourover.jpg" },
    {
      name: "Tart Coffee Concoction",
      path: "/images/gallery/coffees/tartCoffee.jpg",
    },
    {
      name: "Vietnamese Coffee",
      path: "/images/gallery/coffees/viatnamese.jpg",
    },
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
