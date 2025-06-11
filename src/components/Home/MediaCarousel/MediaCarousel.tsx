"use client";
import type { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCallback, useState, useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Autoplay } from "swiper/modules";
import MediaCard from "./MediaCard";
import { title } from "process";

const MediaCarousel = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const cards = [
    {
      title: "From Pi to Co",
      date: "11 June 2025",
      imageSrc: "/images/homepage/media/epapertele.jpg",
      link: "https://epaper.telegraphindia.com/calcutta-edition/29/2025-06-11/page-24/article-1107447235.html",
    },
    {
      title: "Serving the Best Coffee",
      date: "4 June 2025",
      imageSrc: "/images/homepage/media/pioneer.jpg",
      link: "https://www.dailypioneer.com/2025/state-editions/from-iim-to-kashmir-to-serving-the-best-coffee--one-man-who-dared-to-dream-----the-story-of-prateek-didwania.html",
    },
    {
      title: "2 article on Orange",
      date: "11 Jan 2025",
      imageSrc: "/images/homepage/media/2article.jpeg",
      link: "https://epaper.telegraphindia.com/imageview/494689/52343533/undefined.html",
    },
    {
      title: "My Kolkata Article",
      date: "03 Dec 2024",
      imageSrc: "/images/homepage/media/MyKolkata.jpeg",
      link: "https://www.telegraphindia.com/my-kolkata/food/picos-new-tasting-menu-for-winter-serves-up-big-flavours-in-small-plates-photogallery/cid/2067862?slide=4",
    },
    {
      title: "t2 article",
      date: "11 Nov 2024",
      imageSrc: "/images/homepage/media/t2Article.jpeg",
      link: "https://epaper.telegraphindia.com/t2/2024-11-11/79/Page-7.html",
    },
    {
      title: "t2 article online",
      date: "11 Nov 2024",
      imageSrc: "/images/homepage/media/t2ArticleOnline.jpeg",
      link: "https://t2online.in/goodlife/food-beverage/t2-checked-out-pico-s-new-decadent-dessert-and-coffee-menu/1213143?sfnsn=wiwspwa",
    },
    {
      title: "Indulge Article",
      date: "27 July 2024",
      imageSrc: "/images/homepage/media/indulge.jpeg",
      link: "https://www.indulgexpress.com/food/food-calcutta/2024/Jul/26/this-new-pizzeria-in-south-kolkataserves-delightful-combinations",
    },
    {
      title: "The Telegraph Online",
      date: "9 July 2024",
      imageSrc: "/images/homepage/media/telegraph.png",
      link: "https://www.telegraphindia.com/my-kolkata/food/prateek-didwania-brain-behind-pico-pizzeria-and-coffee-bar-talks-about-his-love-for-coffee-and-his-vision-for-building-a-coffee-community-in-kolkata/cid/2032653",
    },
    {
      title: "telegraph my kolkata",
      date: "19 June 2024",
      imageSrc: "/images/homepage/media/telegraphkolkata.jpeg",
      link: "https://www.telegraphindia.com/my-kolkata/food/pico-pizzeria-and-coffee-bar-near-south-kolkatas-vivekananda-park-is-dishing-out-woodfire-pizzas-freshly-baked-bread-and-a-range-of-hot-and-cold-artisanal-coffee-photogallery/cid/2028265",
    },
    {
      title: "t2 coverage",
      date: "29 May 2024",
      imageSrc: "/images/homepage/media/t2Coverage.jpeg",
      link: "https://epaper.telegraphindia.com/imageview/472267/13539605/undefined.html",
    },
    {
      title: "t2 online",
      date: "29 May 2024",
      imageSrc: "/images/homepage/media/t2online.jpeg",
      link: "https://t2online.in/goodlife/food-beverage/pico-is-the-ideal-place-for-the-ultimate-pizza-and-coffee-experience.-t2-gets-you-the-first-look/957815?fbclid=IwZXh0bgNhZW0CMTEAAR0UlyOcD8ZyCq6asB9GD-HHRXGtmlI0sZ_KeWqlOqDzY2YdQC55uiKtmQM_aem_AbVI3TLI--GduLq9pKCQQzsKjMA6ezTEYdfbfFyCnnPgn4qpT55HL6FDUg2hJcyYVxUipnCatsFWBMaZfNHxN0cc",
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
      {/* buttons */}
      <div className="btns my-4 flex items-center justify-center md:hidden">
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
    </>
  );
};

export default MediaCarousel;
