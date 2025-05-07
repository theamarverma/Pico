"use client";
import type { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCallback, useState, useEffect } from "react";

import { GrNext, GrPrevious } from "react-icons/gr";

import { Autoplay } from "swiper/modules";

interface VideoPlayerProps {
  videoUrl: string;
}
const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
      }}
      className="h-[20rem] w-full"
    >
      <video
        src={videoUrl}
        controls
        autoPlay={false}
        style={{
          position: "absolute",
          top: 0,
          left: 0,

          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

const VideoContainer = () => {
  const mediaItems = [
    {
      videourl:
        "https://res.cloudinary.com/dzpuwffzh/video/upload/v1746632314/pour_over_at_home_jbocva.mp4?autoplay=false",
    },
    {
      videourl:
        "https://res.cloudinary.com/dzpuwffzh/video/upload/v1746632311/being_cafe_owner_is_weird_mmlha6.mp4?autoplay=false",
    },
    {
      videourl:
        "https://res.cloudinary.com/dzpuwffzh/video/upload/v1746632285/why_coffee_is_good_for_you_j51gap.mp4?autoplay=false",
    },

    {
      videourl:
        "https://res.cloudinary.com/dzpuwffzh/video/upload/v1742217050/ledosqb3kbich0efpo3o.mp4?autoplay=false",
    },
    {
      videourl:
        "https://res.cloudinary.com/dzpuwffzh/video/upload/v1742217080/lf78ky8lthi2hijjwlca.mp4?autoplay=false",
    },
    {
      videourl:
        "https://res.cloudinary.com/dzpuwffzh/video/upload/v1742216996/duyfytpptl62aazggdmz.mp4?autoplay=false",
    },
    {
      videourl:
        "https://res.cloudinary.com/dzpuwffzh/video/upload/v1742217890/Pico_Neapolitan_Pizza_Making_Reel_b1gpkh.mp4?autoplay=false",
    },
    {
      videourl:
        "https://res.cloudinary.com/dzpuwffzh/video/upload/v1742217875/Reel_7_Pizza_Making_thvnue.mp4?autoplay=false",
    },
    {
      videourl:
        "https://res.cloudinary.com/dzpuwffzh/video/upload/v1742217142/lzzacxdijdj8xb35vrsr.mp4?autoplay=false",
    },
    {
      videourl:
        "https://res.cloudinary.com/dzpuwffzh/video/upload/v1742217132/ru8m5jcmujzztxkksp5q.mp4?autoplay=false",
    },
    {
      videourl:
        "https://res.cloudinary.com/dzpuwffzh/video/upload/v1742217106/qzjkjeut0z7nfe745f2b.mp4?autoplay=false",
    },
    {
      videourl:
        "https://res.cloudinary.com/dzpuwffzh/video/upload/v1742217127/abrmgpi8btj9n7kopork.mp4?autoplay=false",
    },
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
        Experience the Magic in Motion
      </h1>

      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={2} // Default to 1 slide for mobile
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
            <VideoPlayer videoUrl={item.videourl} />
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

export default VideoContainer;
