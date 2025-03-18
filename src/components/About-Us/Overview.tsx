import Image from "next/image";
import React from "react";

const Overview = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2">
        <div className="left flex w-[90%] flex-col items-start justify-center gap-4">
          <div className="flex w-full items-center gap-2">
            <span className="w-1/6 border-t-2 border-picoTextGray"></span>{" "}
            <h1 className="uppercase tracking-label md:text-xl">Overview</h1>
          </div>
          <h1 className="text-xl md:text-subheader">
            A perfect blend of brews and wood-fired magic
          </h1>

          <p className="font-light md:leading-[38px]">
            <i className="font-semibold">
              Nestled near Vivekananda Park in South Kolkata,
            </i>{" "}
            Pico Pizzeria &amp; Coffee Bar is your go-to spot for authentic{" "}
            <i className="font-semibold">
              Neapolitan pizzas and specialty coffees.
            </i>{" "}
            We&apos;re more than just a caf&eacute;; we&apos;re a community hub
            where flavours and conversations blend seamlessly. After three years
            of meticulous planning and research, we opened our doors to offer
            Kolkata a unique caf&eacute; experience. Our mission? To be a
            sanctuary for both coffee aficionados and pizza lovers. Designed
            with a{" "}
            <i className="font-semibold">minimalist wood-and-bamboo theme,</i>{" "}
            Pico offers a cozy and inviting atmosphere. With a seating capacity
            of 55, patrons can choose between indoor seating, an outdoor area,
            or perch at our coffee bar to watch our baristas in action.
          </p>
        </div>
        <div className="right">
          <Image
            className="object-cover object-center"
            src={"/images/about/chair.png"}
            alt="banner"
            width={873}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
