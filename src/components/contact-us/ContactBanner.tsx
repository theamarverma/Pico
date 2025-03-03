import Image from "next/image";
import React from "react";

const ContactBanner = () => {
  return (
    <div className="">
      <div className="px-20 py-12">
        {" "}
        <h2>Brewed strong -</h2>
        <h2>Baked fresh.</h2>
        <div>Open Everyday</div>
        <p>11 AM - 11 PM</p>
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
            <div className="flex flex-col items-center justify-center p-4">
              <h5 className="uppercase text-white">our vibe</h5>
              <p className="px-4 text-white">
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
