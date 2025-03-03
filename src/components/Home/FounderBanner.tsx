import Image from "next/image";
import React from "react";

const FounderBanner = () => {
  return (
    <div className="">
      <div className="relative h-[600px] w-[80%] bg-picoTeal">
        <div className="flex w-[60%] flex-col gap-10 p-10">
          {" "}
          <div className="flex items-center justify-start gap-3">
            {" "}
            <div className="w-[10%] border-t-2 border-borderGray"></div>
            <h5 className="uppercase text-white">About the founder</h5>
          </div>
          <h2 className="text-white">Meet Prateek Didwania</h2>
          <p className="text-sm text-picoText">
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
    </div>
  );
};

export default FounderBanner;
