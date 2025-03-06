import Image from "next/image";
import React from "react";

const ContactBanner = () => {
  return (
    <div className="">
      <div className="px-20 py-12">
        {" "}
        <h1 className="text-header text-picoTeal">Brewed strong - </h1>
        <h1 className="text-header text-picoJuteBrown">Baked fresh.</h1>
        <div className="flex gap-2">
          <div className="mt-4 w-[10%] border-t-2 border-picoTextGray"></div>
          <div>
            {" "}
            <div className="text-2xl font-extrabold uppercase tracking-label">
              Open Everyday
            </div>
            <p className="text-xl font-light">11 AM - 11 PM</p>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <Image
          className="w-full"
          src={"/images/contact/banner.png"}
          alt="map"
          width={1400}
          height={400}
        />
        {/* popup image */}
        <div className="absolute -top-48 right-32 z-[10]">
          <div className="h-[470px] w-[380px] bg-[url(/images/about/popupCard.png)] bg-cover bg-center">
            <div className="flex flex-col items-center justify-center p-8">
              <div className="flex w-full items-center gap-2">
                <div className="w-1/6 border-t border-white"></div>
                <h1 className="text-lg uppercase text-white">our vibe</h1>
              </div>
              <p className="mt-4 font-light leading-[38px] text-white">
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
