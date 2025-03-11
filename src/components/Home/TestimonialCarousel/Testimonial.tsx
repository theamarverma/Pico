"use client";
import type { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCallback, useState, useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import React from "react";

interface TestimonialProps {
  review: string;
  name: string;
  companyName: string;
  rating: number;
  imgsrc: string;
  companyLogo: string;
}

const TestimonialSection = ({
  review,
  name,
  companyName,
  rating,
  imgsrc,
  companyLogo,
}: TestimonialProps) => {
  return (
    <>
      <div className="hidden w-full bg-bgCream md:block">
        <div className="parent relative flex h-[500px] flex-col bg-picoTeal bg-cover md:w-[80%]">
          <div className="mx-10 flex h-full items-center justify-center md:w-[60%]">
            <div className="flex flex-col items-start justify-center gap-6 text-center md:justify-start">
              <h1 className="w-full text-xl text-white md:text-subheader">
                What They Say:
              </h1>
              <p className="font-light text-white md:text-lg">{review}</p>
              <div className="flex w-full items-center justify-start gap-3">
                <div className="w-[20%] border-t-2 border-borderGray"></div>
                <h1 className="text-sm tracking-label text-white md:text-xl">
                  {name}
                </h1>
              </div>

              <div className="space-y-4 self-end">
                <div className="flex justify-end gap-2 text-lg text-white">
                  {rating}{" "}
                  <span>
                    <svg
                      width="24"
                      height="22"
                      viewBox="0 0 24 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                        fill="#FFC986"
                      />
                    </svg>
                  </span>
                </div>
                {/* Rating Section */}
                <div className="flex items-center justify-center gap-2 font-light text-white">
                  Review from
                  <Image
                    src={companyLogo}
                    alt={`${companyName} logo`}
                    width={120}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Food Image  */}
          <div className="absolute md:-bottom-32 md:-right-44">
            <Image
              src={imgsrc}
              alt="popup"
              width={480}
              height={500}
              className=""
            />
          </div>
        </div>
      </div>
      {/* Mobile Screen */}

      <div className="relative block h-[600px] w-full bg-bgCream md:hidden">
        <div className="parent flex h-[70%] flex-col bg-picoTeal bg-cover md:w-[80%]">
          <div className="mt-6 flex items-center justify-center">
            <div className="flex flex-col items-start justify-center gap-3 text-center md:justify-start">
              <h1 className="w-full text-xl text-white md:text-subheader">
                What They Say:
              </h1>
              <p className="font-light text-white md:text-lg">{review}</p>
              <div className="flex w-full items-center justify-center gap-3">
                {" "}
                <div className="flex gap-2 text-lg text-white">
                  {rating}{" "}
                  <span>
                    <svg
                      width="24"
                      height="22"
                      viewBox="0 0 24 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                        fill="#FFC986"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="flex w-full flex-col items-center justify-center space-y-4">
                <h1 className="w-full text-xl tracking-label text-white">
                  {name}
                </h1>
                {/* Rating Section */}
                <div className="flex items-center justify-center gap-2 font-light text-white">
                  Review from
                  <Image
                    src={companyLogo}
                    alt={`${companyName} logo`}
                    width={120}
                    height={50}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Food Image  */}
          <div className="absolute top-[55%] z-30">
            <div className="mx-10 h-full w-full">
              <Image
                src={imgsrc}
                alt="popup"
                width={480}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Testimonial = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: TestimonialProps[] = [
    {
      review:
        "Worth it. And definitely worth a few visits. Loved the Fungi Pesto Pizza. Out of the world. And the Tiramisu is unparalleled.",
      name: "Arpit Lohia",
      companyName: "Zomato",
      rating: 4.5,
      imgsrc: "/images/homepage/testimonial/pizza.png",
      companyLogo: "/images/homepage/testimonial/zomato.png",
    },
    {
      review:
        "Amazing food and fantastic service! The ambience makes every visit memorable.",
      name: "John Doe",
      companyName: "Foodie Magazine",
      rating: 4.7,
      imgsrc: "/images/homepage/testimonial/testimonial2.png",
      companyLogo: "/images/homepage/testimonial/foodiemag.png",
    },
    {
      review:
        "A delightful experience. The pizza was perfectly baked and the atmosphere was inviting.",
      name: "Jane Smith",
      companyName: "Gourmet Reviews",
      rating: 4.9,
      imgsrc: "/images/homepage/testimonial/testimonial3.png",
      companyLogo: "/images/homepage/testimonial/gourmet.png",
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
      <Swiper
        onSwiper={setSwiperRef}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
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
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialSection {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Below the carousel Buttons  */}
      <div>
        <div className="btns my-4 flex items-center justify-center md:block md:w-1/2">
          <div className="flex gap-4">
            <div>
              <button
                className="hover:bg-primary-dark hover:text-charity-primary flex h-10 w-10 items-center justify-center rounded-full border border-picoTextGray text-picoTextGray md:h-16 md:w-16"
                onClick={handlePrevious}
              >
                <GrPrevious size={24} />
              </button>
            </div>
            <div>
              <button
                className="hover:bg-primary-dark hover:text-charity-primary flex h-10 w-10 items-center justify-center rounded-full border border-picoJuteBrown text-picoJuteBrown md:h-16 md:w-16"
                onClick={handleNext}
              >
                <GrNext size={24} />
              </button>
            </div>
          </div>
        </div>
        <span className="hidden md:block">
          {String(currentSlide + 1).padStart(2, "0")}/
          {String(testimonials.length).padStart(2, "0")}
        </span>
      </div>
    </>
  );
};

export default Testimonial;
