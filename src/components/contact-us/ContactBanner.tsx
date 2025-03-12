import Image from "next/image";
import React from "react";

const ContactBanner = () => {
  return (
    <div className="">
      <div className="px-4 md:px-20 md:py-12">
        {" "}
        <h1 className="text-xl text-picoTeal md:text-header">
          Brewed strong -{" "}
        </h1>
        <h1 className="text-xl text-picoJuteBrown md:text-header">
          Baked fresh.
        </h1>
        <div className="flex gap-2">
          <div className="mt-4 w-[20%] border-t-2 border-picoTextGray md:w-[10%]"></div>
          <div>
            {" "}
            <div className="text-xl uppercase md:text-2xl md:font-extrabold md:tracking-label">
              Open Everyday
            </div>
            <p className="text-xl font-light">11 AM - 11 PM</p>
          </div>
        </div>
      </div>

      <div className="relative h-[300px] w-full px-4 md:mx-0 md:h-full">
        <Image
          className="h-[180px] w-full md:h-full"
          src={"/images/contact/banner.png"}
          alt="map"
          width={1400}
          height={400}
        />
        {/* popup image */}
        <div className="absolute bottom-8 z-[10] md:-top-48 md:right-32">
          <div className="mx-10 bg-[url(/images/about/popupCard.png)] bg-cover bg-center md:mx-0 md:h-[470px] md:w-[380px]">
            <div className="flex flex-col items-center justify-center p-4 md:p-8">
              <div className="hidden w-full items-center gap-2 md:flex">
                <div className="w-1/6 border-t border-white"></div>
                <h1 className="uppercase text-white md:text-lg">our vibe</h1>
              </div>
              <p className="text-sm font-light text-white md:mt-4 md:text-base md:leading-[38px]">
                We invite you to experience the best Pizzeria &amp; Coffee Bar,
                where every meal is a celebration of flavors and every cup of
                coffee tells a story. Whether you&apos;re here for a casual
                hangout or an intimate gathering, we promise an experience that
                will linger in your memory...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
