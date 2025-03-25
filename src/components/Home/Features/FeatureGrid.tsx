import Image from "next/image";

import React from "react";

const features = [
  {
    id: 1,
    icon: "/images/svgs/fire.svg",
    alt: "fire",
    title: "Wood-Fired Perfection",
    description:
      "Hand-tossed Neapolitan pizzas, baked to crispy perfection in a wood-fired oven.",
  },
  {
    id: 2,
    icon: "/images/svgs/cozy.svg",
    alt: "cozy",
    title: "Cozy Ambiance",
    description:
      "A warm, inviting space perfect for good food and great conversations.",
  },
  {
    id: 3,
    icon: "/images/svgs/coffee.svg",
    alt: "coffee",
    title: "Specialty Coffee",
    description:
      "Freshly brewed, single-origin coffee with rich aroma and bold flavors.",
  },
  {
    id: 4,
    icon: "/images/svgs/quality.svg",
    alt: "quality",
    title: "Quality Ingredients",
    description:
      "Only the freshest, finest ingredients for an authentic taste in every bite.",
  },
];

const FeaturesGrid = () => {
  return (
    <div className="mx-4 grid grid-cols-1 gap-8 md:mx-20 md:mt-10 md:grid-cols-2">
      {features.map((feature) => (
        <div key={feature.id} className="flex items-center gap-4">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-picoJuteBrown p-3 md:h-24 md:w-24">
            <Image
              src={feature.icon}
              alt={feature.alt}
              width={60}
              height={60}
            />
          </div>
          <div className="md:space-y-2">
            <div className="text-base font-medium text-picoTextGray md:text-2xl">
              {feature.title}
            </div>
            <p className="text-sm font-light md:text-base">
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
