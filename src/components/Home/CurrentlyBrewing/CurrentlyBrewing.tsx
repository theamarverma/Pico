"use client";
import type { Swiper as SwiperClass } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useCallback, useState, useEffect } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Autoplay, Keyboard, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { title } from "process"; // This import is not used and can be removed
import Image from "next/image";
import "./CurrentlyBrewing.css";

export default function CurrentlyBrewing() {
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

  // Removed handlePrevious and handleNext as Swiper's navigation will handle it directly
  // for both desktop and mobile buttons when navigation.prevEl/nextEl are used.

  return (
    <>
      <div className="flex flex-col md:my-10">
        <div className="hidden items-center justify-start gap-8 uppercase tracking-[4px] md:flex">
          <span className="mt-2 h-2 w-20 border-t border-black"></span>
          what;&apos;s new
        </div>
        <div className="my-10 flex justify-center gap-2 text-2xl md:my-0 md:justify-start md:text-header">
          <h3>Currently</h3>{" "}
          <h3 className="inline-block italic text-picoTeal">Brewing</h3>
        </div>
        {/* The btns div here was empty or not used for the Swiper navigation directly,
            so keeping it only if it serves another purpose. Otherwise, remove it. */}
        <div className="btns">
          <div className="hidden gap-4 md:flex">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={1}
          spaceBetween={32}
          keyboard={{
            enabled: true,
          }}
          // If you only want navigation, remove the pagination prop entirely
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: "#custom-prev-button", // Connect to external prev button
            nextEl: "#custom-next-button", // Connect to external next button
          }}
          loop={false}
          autoplay={
            isMobile
              ? {
                  delay: 3000,
                  disableOnInteraction: false,
                }
              : false
          }
          className="mySwiper h-[300px] md:h-[500px]"
          modules={[Keyboard, Navigation, Pagination, Autoplay]}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                <div className="mx-auto flex w-[80%] flex-col justify-center">
                  <div className="relative h-[200px] overflow-hidden rounded-xl md:h-[400px]">
                    <Image
                      src={card.imageSrc}
                      alt={card.title}
                      width={1000}
                      height={500}
                      className="w-full rounded-xl object-contain"
                    />
                  </div>
                  <h1 className="text-start md:text-header"> {card.title}</h1>
                  <h3>{card.date}</h3>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute top-1/2 z-10 hidden w-full -translate-y-1/2 justify-between px-4 md:flex">
          <button
            id="custom-prev-button"
            className="hover:bg-primary-dark hover:text-charity-primary flex h-10 w-10 items-center justify-center rounded-full border border-picoJuteBrown text-picoJuteBrown shadow-md md:h-16 md:w-16"
          >
            <GrPrevious size={24} />
          </button>
          <button
            id="custom-next-button"
            className="hover:bg-primary-dark hover:text-charity-primary flex h-10 w-10 items-center justify-center rounded-full border border-picoJuteBrown text-picoJuteBrown shadow-md md:h-16 md:w-16"
          >
            <GrNext size={24} />
          </button>
        </div>
      </div>

      {/* Removed the 'mobile buttons' div since the main navigation buttons
          are now linked to Swiper and handle all navigation.
          If you want different styling/positioning for mobile, you'd adjust
          the Tailwind classes on the main navigation div. */}
      {/* <div className="btns my-4 flex items-center justify-center md:hidden">
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
      </div> */}
    </>
  );
}
