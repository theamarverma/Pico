import Image from "next/image";
import Link from "next/link";
import React from "react";
import PicoButton from "../Global/PicoButton";

const FounderBanner = () => {
  return (
    <div className="flex">
      <div className="relative h-[600px] w-[80%] bg-picoTeal">
        <div className="flex w-[60%] flex-col gap-10 p-10">
          {" "}
          <div className="flex items-center justify-start gap-3">
            {" "}
            <div className="w-[30%] border-t-2 border-borderGray"></div>
            <h1 className="tracking-label uppercase text-white">
              About the founder
            </h1>
          </div>
          <h1 className="text-header text-white">
            <span className="text-picoOrange">Meet</span> Prateek Didwania
          </h1>
          <p className="font-light leading-[38px] text-picoText">
            The man behind the beans and dough. rateek, an IIM Kozhikode
            graduate, left the corporate world to follow his passion. After the
            success of Snacking Café, he created PICO to marry his love for
            coffee and pizza. The result? A space where creativity and quality
            meet.
          </p>
        </div>
        {/* Popup-Image */}
        <div className="absolute -right-48 bottom-0">
          <Image
            src={"/images/homepage/founder/founder.png"}
            alt="popup"
            width={585}
            height={450}
          />
        </div>
      </div>
      <Link href={"/contact-us"} className="mx-8 my-10 flex">
        <PicoButton title="Contact Us" />
      </Link>
    </div>
  );
};

export default FounderBanner;
