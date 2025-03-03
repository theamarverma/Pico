import Image from "next/image";
import React from "react";

const Overview = () => {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="left flex w-[90%] flex-col items-start justify-center gap-4">
          <div>Overview</div>
          <h2>A perfect blend of brews and wood-fired magic</h2>

          <p>
            <i>Nestled near Vivekananda Park in South Kolkata,</i> Pico Pizzeria
            &amp; Coffee Bar is your go-to spot for authentic{" "}
            <i>Neapolitan pizzas and specialty coffees.</i> We're more than just
            a café; we're a community hub where flavours and conversations blend
            seamlessly. After three years of meticulous planning and research,
            we opened our doors to offer Kolkata a unique café experience. Our
            mission? To be a sanctuary for both coffee aficionados and pizza
            lovers. Designed with a <i>minimalist wood-and-bamboo theme,</i>{" "}
            Pico offers a cozy and inviting atmosphere. With a seating capacity
            of 55, patrons can choose between indoor seating, an outdoor area,
            or perch at our coffee bar to watch our baristas in action.
          </p>
        </div>
        <div className="right">
          <Image
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
