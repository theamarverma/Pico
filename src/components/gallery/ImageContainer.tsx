"use client";
import type { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCallback, useState, useEffect } from "react";

import { GrNext, GrPrevious } from "react-icons/gr";
import { Autoplay, Grid } from "swiper/modules";
import Image from "next/image";

interface ImagePlayerProps {
  imageUrl: string;
  alt?: string;
}
const ImagePlayer = ({ imageUrl, alt = "" }: ImagePlayerProps) => (
  <div
    style={{ position: "relative", width: "100%" }}
    className="h-[10rem] w-full md:h-[40rem]"
  >
    <Image
      className="object-center"
      src={imageUrl}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  </div>
);

const ImageContainer = () => {
  const mediaItems = [
    // updated 9th - july
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1752070514/Pico_Cold_Brew_1_frp4cb.jpg",
      alt: "Image 1",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1752070514/Pico_Crew_4_iq1e8k.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1752070513/Pico_Coffee_3_obgspu.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1752070511/Pico_Newsletter_caqtqg.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1752070509/Pico_Crew_1_i1ubsw.jpg",
      alt: "Sample 5",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1752070507/Pico_Crew_3_r7thx3.jpg",
      alt: "Image 1",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1752070505/Pico_Cold_Brew_2_yxbtjo.jpg",
      alt: "Sample 2",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1752070502/Pico_Crew_2_s5p7ku.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1752070500/Pico_Mango_Tart_abo3iy.jpg",
      alt: "Image 1",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1752070499/Pico_Watermelon_Concoction_1_h8mxxj.jpg",
      alt: "Sample 2",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1752070499/Pico_Orange_Matcha_fghomv.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1752070498/Pico_Watermelon_Concoction_2_ckwtpt.jpg",
      alt: "Image 1",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1752070498/Pico_Chefs_1_z2o651.jpg",
      alt: "Sample 2",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1752070497/Pico_Chef_4_phehxh.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1752070495/Pico_Coffee_2_w3ranl.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1752070494/Pico_Chefs_2_xdqgbg.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1752070489/Pico_Coffee_1_axk4bd.jpg",
      alt: "Sample 3",
    },
    // break
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745212016/Nucleus_2_obkrkh.jpg",
      alt: "Image 1",
    },

    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745212012/Barista_Group_1_jbli3b.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745212010/Espresso_Tonic_ywnh9e.jpg",
      alt: "Image 1",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745212007/Iced_Matcha_acy6cz.jpg",
      alt: "Sample 2",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745212006/Barista_1_tfoalc.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745212006/Pico_Team_cjbzkw.jpg",
      alt: "Image 1",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745211995/Kitchen_Group_srohq7.jpg",
      alt: "Sample 2",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745211990/Cortado_n1ivpv.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745211984/Grinder_rvseqv.jpg",
      alt: "Image 1",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745212012/Woodfire_hey4ee.jpg",
      alt: "Sample 2",
    },

    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745217841/Basil_Concoction_h6wmk8.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745217840/Kitchen_Pizza_xdgnb8.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745217832/Idk_what_this_is_b0nsfs.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745217829/Cold_Brew_rewq9j.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745217828/Nucleus_Ball_dmczcp.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745217826/Chef_Shot_vcp3ei.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745217825/Orange_Concoction_qj4xpa.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745217816/Nucleus__Dripper_ew9tq8.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745217826/Hario_Cold_Drip_gmucku.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745212009/Barista_Group_2_my0ry6.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745211994/Syphon_pnquh5.jpg",
      alt: "Sample 3",
    },
    {
      imageUrl:
        "https://res.cloudinary.com/dzpuwffzh/image/upload/v1745211988/Espresso_mzgzor.jpg",
      alt: "Sample 3",
    },
  ];

  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile for autoplay
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
      <h1 className="mb-6 flex items-center justify-center text-xl md:mb-12 md:text-header">
        PICO Behind The Scenes
      </h1>

      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        spaceBetween={8}
        breakpoints={{
          576: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
        }}
        loop={false}
        grid={{ rows: 2, fill: "row" }}
        // autoplay={true}
        // autoplay={
        //   isMobile ? { delay: 3000, disableOnInteraction: false } : false
        // }
        modules={[Autoplay, Grid]}
      >
        {mediaItems.map((item, idx) => (
          <SwiperSlide key={idx}>
            <ImagePlayer imageUrl={item.imageUrl} alt={item.alt} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Desktop Prev/Next */}
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

      {/* Mobile Prev/Next */}
      <div className="btns mt-4 md:hidden">
        <div className="flex items-center justify-center gap-4">
          <button
            className="hover:bg-primary-dark hover:text-charity-primary flex h-10 w-10 items-center justify-center rounded-full border border-picoJuteBrown text-picoJuteBrown"
            onClick={handlePrevious}
          >
            <GrPrevious />
          </button>
          <button
            className="hover:bg-primary-dark hover:text-charity-primary flex h-10 w-10 items-center justify-center rounded-full border border-picoJuteBrown text-picoJuteBrown"
            onClick={handleNext}
          >
            <GrNext />
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageContainer;
