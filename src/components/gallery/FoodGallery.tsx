"use client";
import type { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCallback, useState, useEffect } from "react";
import "swiper/css/grid";
import {
  GrFormNextLink,
  GrFormPreviousLink,
  GrNext,
  GrPrevious,
} from "react-icons/gr";
import { Autoplay, Grid } from "swiper/modules";
import PicoImage from "../Global/PicoImage";

const FoodGallery = () => {
  const foodItems = [
    {
      name: "Pumpkin Ravioli ",
      path: "/images/gallery/food/pumpkinRavioli.jpg",
    },
    { name: "Pesto Burrata ", path: "/images/gallery/food/pestoBurrata.jpg" },
    {
      name: "Pepporoni Pizza ",
      path: "/images/gallery/food/pepperoniPizza.jpg",
    },
    {
      name: "Margerita Pizza Veg ",
      path: "/images/gallery/food/mageritaPizza.jpg",
    },
    {
      name: "Fungi Pesto Pizza Veg ",
      path: "/images/gallery/food/fungiPesto.jpg",
    },
    { name: "Fire E Chicken ", path: "/images/gallery/food/fireChicken.jpg" },
    { name: "Filo Parmesan", path: "/images/gallery/food/filoParmesan.jpg" },
  ];
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
      <h1 className="flex items-center justify-center text-xl md:text-header">
        Wood Fired Specials
      </h1>

      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={2}
        grid={{
          rows: 2,
          fill: "row",
        }}
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
        modules={[Autoplay, Grid]}
      >
        {foodItems.map((item, index) => (
          <SwiperSlide key={index}>
            <PicoImage path={item.path} name={item.name} />
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

export default FoodGallery;
