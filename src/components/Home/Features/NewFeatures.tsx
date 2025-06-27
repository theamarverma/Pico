// components/PizzaExperience.jsx
import Image from "next/image";

interface Feature {
  id: number;
  icon: string;
  alt: string;
  title: string;
  description: string;
}
const features: Feature[] = [
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

const PizzaExperience = () => {
  const leftFeatures = [features[0], features[2]]; // Wood-Fired and Specialty Coffee
  const rightFeatures = [features[1], features[3]]; // Cozy Ambiance and Quality Ingredients

  return (
    <div className="flex min-h-screen items-center justify-center bg-bgCreamDark py-12">
      <div className="container mx-auto px-8">
        <div className="text-center md:mb-12">
          <h2 className="mb-2 font-serif text-xl text-gray-800 md:text-4xl">
            Where Flavour Meets Perfection
          </h2>
          <p className="text-gray-600 md:text-xl">
            The Ultimate Coffee & Pizza Experience
          </p>
        </div>
        {/* //----------------------- */}
        {/* Desktop Design */}
        {/* //----------------------- */}
        <div className="hidden flex-col items-center justify-center gap-12 md:flex lg:flex-row">
          {/* Left Column Features */}
          <div className="order-2 flex flex-col gap-24 md:grid-cols-2 lg:order-1 lg:w-[20%]">
            {leftFeatures.map((feature: any) => (
              <div key={feature.id} className="flex flex-col">
                <div className="mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.alt}
                    width={100}
                    height={98}
                    className="h-24 w-24 text-teal-600"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-700">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Pizza Image */}
          <div className="order-1 flex justify-center lg:order-2 lg:w-[60%]">
            <Image
              src="/images/homepage/features/pizza_c.png"
              alt="Delicious Mixo Pizza"
              width={1000}
              height={1000}
              className="h-auto max-w-full object-cover"
              priority
            />
          </div>

          {/* Right Column Features */}
          <div className="order-3 flex flex-col gap-24 md:grid-cols-2 lg:order-3 lg:w-[20%]">
            {rightFeatures.map((feature: any) => (
              <div
                key={feature.id}
                className="flex flex-col items-end text-end"
              >
                <div className="mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.alt}
                    width={100}
                    height={98}
                    className="h-24 w-24 text-teal-600"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-700">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* //----------------------- */}
        {/* Mobile Design */}
        {/* //----------------------- */}
        <div className="flex flex-col items-center justify-center md:hidden">
          {/* Left Column Features */}
          <div className="order-1 flex flex-col">
            {leftFeatures.map((feature: any) => (
              <div
                key={feature.id}
                className="flex items-center justify-center gap-4"
              >
                <div className="h-36 w-36">
                  <Image
                    src={feature.icon}
                    alt={feature.alt}
                    width={100}
                    height={98}
                    className="h-full w-full text-teal-600"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-700">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pizza Image */}
          <div className="order-3 flex justify-center">
            <Image
              src="/images/homepage/features/pizza_c.png"
              alt="Delicious Mixo Pizza"
              width={1000}
              height={1000}
              className="h-full max-w-full object-cover"
              priority
            />
          </div>

          {/* Right Column Features */}
          <div className="order-1 flex flex-col">
            {rightFeatures.map((feature: any) => (
              <div
                key={feature.id}
                className="flex items-center justify-center gap-4"
              >
                <div className="h-36 w-36">
                  <Image
                    src={feature.icon}
                    alt={feature.alt}
                    width={100}
                    height={98}
                    className="h-full w-full text-teal-600"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-700">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaExperience;
