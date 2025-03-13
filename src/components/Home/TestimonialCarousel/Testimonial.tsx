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
      {/* Desktop Screen */}
      <div className="hidden w-full bg-bgCream md:block">
        <div className="parent relative flex h-[500px] flex-col bg-picoTeal bg-cover md:w-[80%]">
          <div className="mx-10 flex h-full items-center justify-center md:w-[60%]">
            <div className="flex flex-col items-start justify-center gap-6 text-center md:justify-start">
              <h1 className="w-full text-xl text-white md:text-subheader">
                What They Say:
              </h1>
              <p className="font-light text-white">{review}</p>
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
              <p className="mx-10 font-light text-white md:text-lg">{review}</p>
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
        "All 5 stars to this place! Tried the pesto burrata pizza, filo starter, berry blast coffee & cranberry cold brew. All the items were fantastic. Excellent & warm staff. Fine decor. Quick service too. I can see myself visiting Pico more often. Must visit.",
      name: "Joy",
      companyName: "Zomato",
      rating: 5,
      imgsrc: "/images/homepage/testimonial/pizza.png",
      companyLogo: "/images/homepage/testimonial/zomato.png",
    },
    {
      review:
        "Had the pleasure of visiting Pico today, and as always, the warmth and hospitality were truly unmatched—especially when it’s anything connected with Prateek Didwania. From the perfectly grilled fish to the delicious pizza, every bite was a delight! But what truly stole the show was the experience behind the coffee bar—where magic unfolds with every brew. A short yet excitement-filled visit that left me completely overwhelmed in the best way possible. Absolutely loved the place and can’t wait to be back again (and again)!",
      name: "Kobid Sinha",
      companyName: "Zomato",
      rating: 5,
      imgsrc: "/images/homepage/testimonial/pizza.png",
      companyLogo: "/images/homepage/testimonial/zomato.png",
    },
    {
      review:
        "Pico - Pizzeria & Coffee Bar is a fantastic spot for a delightful meal. We tried the Fire E Chicken pizza, which was bursting with flavor and perfectly cooked, and the grilled chicken steak, which was tender, juicy, and excellently prepared. The ambience adds to the experience, offering a cozy and inviting atmosphere that’s perfect for a relaxed dining outing. Highly recommended for both the food and the vibe!",
      name: "Akash Mahendra Basu",
      companyName: "Google Reviews",
      rating: 5,
      imgsrc: "/images/homepage/testimonial/pizza.png",
      companyLogo: "/images/homepage/testimonial/google.png",
    },
    {
      review:
        "The ambiance is really good. The drinks and beverages were nicely explained to us by the waiters. All the staff were very well mannered and hospitable. The food and drinks were absolutely fantastic. Really recommended to visit.",
      name: "Dhruba Chakraborty",
      companyName: "Google Reviews",
      rating: 5,
      imgsrc: "/images/homepage/testimonial/pizza.png",
      companyLogo: "/images/homepage/testimonial/google.png",
    },
    {
      review:
        "Had the hazelnut coffee and Alfredo pizza at Pico—absolutely delightful! The coffee was smooth with a perfect nutty kick, and the pizza had a creamy, cheesy richness that hit all the right notes. A must-visit!",
      name: "Neeyantri Banerjee",
      companyName: "Google Reviews",
      rating: 5,
      imgsrc: "/images/homepage/testimonial/pizza.png",
      companyLogo: "/images/homepage/testimonial/google.png",
    },
    {
      review:
        "South Kolkata's newest hotspot Pico, is a visual dream! With stunning aesthetics and Instagram-worthy interiors, every corner is a photo op. Beyond the looks, their coffee is top-notch, especially the Hazelnut one. Don't miss their Bhetki dish either. A must-visit for coffee lovers and social media enthusiasts alike.",
      name: "Surojit Das",
      companyName: "Google Reviews",
      rating: 5,
      imgsrc: "/images/homepage/testimonial/pizza.png",
      companyLogo: "/images/homepage/testimonial/google.png",
    },
    {
      review:
        "My seventh time coming in a course of 2 months? Absolutely love the food and my favourite Biscoff coffee. Extremely hospitable staff and great playlist. 10/10 recommend.",
      name: "Rumi Das",
      companyName: "Zomato",
      rating: 5,
      imgsrc: "/images/homepage/testimonial/pizza.png",
      companyLogo: "/images/homepage/testimonial/zomato.png",
    },
    {
      review:
        "Super service by the team and great recommendations. Had a variety of food and beverages and loved them all. Have already recommended Pico to a few of my connections. This would be a must visit for me every time I am in town.",
      name: "Akash Agrawal",
      companyName: "Zomato",
      rating: 5,
      imgsrc: "/images/homepage/testimonial/pizza.png",
      companyLogo: "/images/homepage/testimonial/zomato.png",
    },
    {
      review:
        "I like coming to this cafe for its great coffees and tasty Neapolitan pizzas. I tried the Biscoff Latte, which is a must have, and the Alfredo Chicken Pizza was delicious too.",
      name: "Kasturi Paul",
      companyName: "Zomato",
      rating: 5,
      imgsrc: "/images/homepage/testimonial/pizza.png",
      companyLogo: "/images/homepage/testimonial/zomato.png",
    },
    {
      review:
        "In my recent visit to PICO pizzeria I had an amazing experience. The cozy welcoming atmosphere sets the perfect vibe for a relaxing meal. The pizza was crispy, fresh and delicious. The coffee was flavorful and the churro was perfectly done. The decor is very pretty. Whether you are grabbing a coffee, or a meal, this place is a must visit!",
      name: "Peeyasa Sarkar",
      companyName: "Google Reviews",
      rating: 5,
      imgsrc: "/images/homepage/testimonial/pizza.png",
      companyLogo: "/images/homepage/testimonial/google.png",
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
      <div className="justify-between md:flex md:w-[80%]">
        {/* Counter */}
        <span className="mt-4 hidden md:block">
          <div className="flex">
            <h1 className="text-4xl text-picoJuteBrown">
              {String(currentSlide + 1).padStart(2, "0")}
            </h1>

            <h1 className="self-end text-3xl text-picoJuteBrown">
              {" "}
              /{String(testimonials.length).padStart(2, "0")}
            </h1>
          </div>
        </span>
        {/* buttons */}
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
      </div>
    </>
  );
};

export default Testimonial;
