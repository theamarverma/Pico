import Image from "next/image";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import {
  IoLocationOutline,
  IoCallOutline,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { FaVolumeMute } from "react-icons/fa";
import { FaVolumeHigh } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

const HeaderBanner = () => {
  const [isDesktopMuted, setIsDesktopMuted] = useState(true);
  const [isMobileMuted, setIsMobileMuted] = useState(true);

  const toggleDesktopMute = () => {
    const video = document.getElementById("desktopVideo") as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      setIsDesktopMuted(video.muted);
    }
  };

  const toggleMobileMute = () => {
    const video = document.getElementById("mobileVideo") as HTMLVideoElement;
    if (video) {
      video.muted = !video.muted;
      setIsMobileMuted(video.muted);
    }
  };

  return (
    <div>
      <div className="mx-4 md:mx-20 md:w-[790px]">
        <h1 className="text-xl md:md:text-header">
          <span className="text-picoTeal"> Welcome to PICO –</span> <br />{" "}
          <span className="text-picoJuteBrown">Where Pizza Meets Coffee</span>
        </h1>

        <div className="flex gap-2 p-4">
          <div className="mt-3 w-1/2 border-t-2 border-borderGray md:w-2/4"></div>
          <p className="text-picoTextGray md:text-lg">
            your cozy corner for specialty coffee and hand-tossed
            Neapolitan-style pizzas. Good vibes, great food, —what more could
            you ask for?
          </p>
        </div>
      </div>

      {/* Laptop screen */}
      <div className="parent relative hidden w-full flex-col justify-end md:flex md:h-[1040px]">
        <video
          id="desktopVideo"
          autoPlay
          loop
          muted
          playsInline
          poster="images/homepage/header.png"
          className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source
            src="https://res.cloudinary.com/dzpuwffzh/video/upload/v1750159869/header_dprsgp.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={toggleDesktopMute}
          style={{
            position: "absolute",
            top: 15,
            left: 15,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            border: "none",
            borderRadius: 25,
            padding: 8,
            cursor: "pointer",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="mute-button"
        >
          {isDesktopMuted ? (
            <FaVolumeMute color="white" size={20} />
          ) : (
            <FaVolumeHigh color="white" size={20} />
          )}
        </button>
        {/* /----------------popup card---------------- */}
        <div className="absolute -top-[20%] right-16 z-10">
          <div className="parent flex h-[400px] w-[340px] flex-col justify-start bg-[url('/images/homepage/card.png')] bg-cover bg-center">
            <div className="mt-10 flex flex-col items-center justify-center">
              <h1 className="text-2xl text-white">Cafe Timings:</h1>
              <h3 className="text-2xl text-white">11am - 11 pm</h3>
              <div className="mt-6 space-y-4 text-white">
                <Link
                  href={"tel:+918240912328"}
                  target="_blank"
                  className="flex gap-2"
                >
                  <IoCallOutline color="white" size={32} />
                  <div className="">+91 8240912328</div>
                </Link>
                <Link
                  href={"mailto:info@picokolkata.com"}
                  target="_blank"
                  className="flex gap-2"
                >
                  <CiMail color="white" size={32} />
                  <div className="underline">info@picokolkata.com</div>
                </Link>
                <Link
                  href={"https://api.whatsapp.com/send?phone=+918240912328"}
                  target="_blank"
                  className="flex gap-2"
                >
                  <IoLogoWhatsapp color="white" size={32} />
                  <div className="underline">+91 8240912328</div>
                </Link>

                <Link
                  href={"https://maps.app.goo.gl/xoLKckSdLAG375uFA"}
                  target="_blank"
                  className="flex gap-2 underline hover:cursor-pointer"
                >
                  <IoLocationOutline color="white" size={32} /> P,559, Lake Rd,
                  Southern
                  <br /> Avenue , Kolkata - 700029 <br /> (Opp. Sabyasachi
                  Showroom)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile screen */}

      <div className="relative h-[370px] md:hidden">
        <video
          id="mobileVideo"
          autoPlay
          loop
          muted
          playsInline
          poster="images/homepage/header.png"
          className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source
            src="https://res.cloudinary.com/dzpuwffzh/video/upload/v1750159869/header_dprsgp.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={toggleMobileMute}
          style={{
            position: "absolute",
            top: 15,
            left: 15,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            border: "none",
            borderRadius: 25,
            padding: 8,
            cursor: "pointer",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="mute-button"
        >
          {isMobileMuted ? (
            <FaVolumeMute color="white" size={20} />
          ) : (
            <FaVolumeHigh color="white" size={20} />
          )}
        </button>
        <div className="top-2/4 mx-10 hidden w-[80%]">
          <div className="flex flex-col justify-start bg-picoTeal">
            <div className="mx-4 my-4 flex flex-col gap-2">
              <div className="mt-2 space-y-4 text-white">
                <Link
                  href={"tel:+918240912328"}
                  target="_blank"
                  className="flex gap-2"
                >
                  <IoCallOutline color="white" />
                  <div className="text-sm">+91 8240912328</div>
                </Link>
                <Link
                  href={"mailto:info@picokolkata.com"}
                  target="_blank"
                  className="flex gap-2"
                >
                  <CiMail color="white" />
                  <div className="text-sm underline">info@picokolkata.com</div>
                </Link>

                <Link
                  href={"https://maps.app.goo.gl/xoLKckSdLAG375uFA"}
                  target="_blank"
                  className="flex gap-2 text-sm underline hover:cursor-pointer"
                >
                  <IoLocationOutline color="white" /> P,559, Lake Rd, Southern
                  <br /> Avenue , Kolkata - 700029 <br /> (Opp. Sabyasachi
                  Showroom)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
