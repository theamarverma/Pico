import Image from "next/image";
import Link from "next/link";
import React from "react";

const FindUs = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      <h1 className="text-xl md:text-header">Find us at</h1>
      <div className="mx-4 flex gap-3 md:mx-0 md:h-[154px] md:gap-6">
        <Link
          href="https://www.google.com/search?kgmid=/g/11vwyjrp3w&hl=en-IN&q=Pico+-+Pizzeria+%26+Coffee+Bar&shndl=30&shem=lcuae&source=sh/x/loc/osrp/m5/2&kgs=facea45e0b2316b4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="h-full"
            src={"/images/homepage/icons/google.png"}
            alt="google"
            width={154}
            height={154}
          />
        </Link>

        <Link
          href="https://www.swiggy.com/restaurants/pico-pizzeria-and-coffee-bar-ballygunge-kolkata-903624/dineout/menu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="h-full"
            src={"/images/homepage/icons/swiggy.png"}
            alt="swiggy"
            width={154}
            height={600}
          />
        </Link>

        <Link
          href="https://www.zomato.com/kolkata/pico-pizzeria-coffee-bar-southern-avenue/menu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="h-full"
            src={"/images/homepage/icons/zomato.png"}
            alt="zomato"
            width={154}
            height={600}
          />
        </Link>

        <Link
          href="https://www.tripadvisor.com/Restaurant_Review-g304558-d28051666-Reviews-Pico_Pizzeria_Coffee_Bar-Kolkata_Calcutta_Kolkata_District_West_Bengal.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="h-full"
            src={"/images/homepage/icons/trip.png"}
            alt="trip advisor"
            width={154}
            height={600}
          />
        </Link>
      </div>
    </div>
  );
};

export default FindUs;
