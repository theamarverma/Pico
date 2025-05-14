import Image from "next/image";
import Link from "next/link";
import React from "react";
import PicoButton from "../Global/PicoButton";

const PicoStory = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex">
        <div className="relative w-[80%] bg-picoTeal md:h-[600px]">
          <div className="flex w-[60%] flex-col p-2 md:gap-10 md:p-10">
            {" "}
            <div className="flex items-center justify-start gap-3">
              {" "}
              <div className="hidden w-[20%] border-t-2 border-borderGray md:block"></div>
              <h1 className="tracking-label text-white">
                Brewed with Heart: The PICO Story
              </h1>
            </div>
            <h1 className="text-xl text-white md:text-header">
              <span className="text-picoOrange">A Coffee</span> Haven Crafted by
              an Introvert
            </h1>
            <p className="text-sm font-light leading-[25px] text-picoText md:text-base md:leading-[38px]">
              PICO, led by Prateek Didwania, is redefining the coffee experience
              by creating a space where coffee lovers feel at home. As an
              introvert, Prateek simplifies coffee lingo and focuses on
              authenticity, comfort, and learning. PICO is all about enjoying
              great coffee without the intimidation.
            </p>
          </div>
          {/* Popup-Image */}
          <div className="absolute -right-48 bottom-0">
            <div className="w-72 md:w-full">
              {" "}
              <Image
                className="md:block"
                src={"/images/homepage/founder/founder_pico.png"}
                alt="popup"
                width={585}
                height={450}
              />
            </div>
          </div>
        </div>
        <Link
          href={
            "https://www.telegraphindia.com/my-kolkata/lifestyle/kolkata-brands-that-are-raising-the-bar-on-instagram-and-reeling-in-customers/cid/2097146"
          }
          target="_blank"
          className="mx-8 my-10 hidden md:flex"
        >
          <PicoButton title="Learn More" />
        </Link>
      </div>
      {/* Mobile */}
      <div className="md:hidden">
        <div className="relative w-[80%] bg-picoTeal">
          <div className="flex w-[90%] flex-col px-2 py-6 md:gap-10 md:p-10">
            {" "}
            <div className="flex items-center justify-start gap-3">
              {" "}
              <h1 className="text-sm uppercase tracking-label text-white">
                About the founder
              </h1>
            </div>
            <h1 className="text-xl text-white">
              <span className="text-picoOrange">Meet</span> Prateek Didwania
            </h1>
            <p className="w-[80%] text-sm font-light leading-[25px] text-picoText md:text-base md:leading-[38px]">
              The man behind the beans and dough.{" "}
              <i className="font-semibold">
                {" "}
                Prateek, an IIM Kozhikode graduate,
              </i>{" "}
              left the corporate world to follow his passion. After the success
              of Snacking Café, he created PICO to marry his love for coffee and
              pizza. The result? A space where creativity and quality meet.
            </p>
          </div>
          {/* Popup-Image */}
          <div className="absolute -right-20 top-24">
            <div className="w-40">
              {" "}
              <Image
                className=""
                src={"/images/homepage/founder/founder_mob.png"}
                alt="popup"
                width={585}
                height={450}
              />
            </div>
          </div>
        </div>
        <Link href={"/contact-us"} className="mx-8 my-10 hidden md:flex">
          <PicoButton title="Contact Us" />
        </Link>
      </div>
    </>
  );
};

export default PicoStory;
