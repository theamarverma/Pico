import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="h-screen">
      <div className="parent relative flex h-[500px] flex-col bg-[url('/images/homepage/testimonial/bg.png')] bg-cover">
        <h1 className="text-white">What they say:</h1>
        <p className="text-white">
          Worth it. And definitely worth a few visits. Loved the Fungi Pesto
          Pizza. Out of the world. And the Tiramisu is unparalleled.
        </p>

        <div className="flex items-center justify-start gap-3">
          {" "}
          <div className="w-[20%] border-t-2 border-borderGray"></div>
          <h5 className="text-white">Arpit Lohia</h5>
        </div>

        {/* Popup-Image */}
        <div className="absolute -bottom-20 -right-10">
          <Image
            src={"/images/homepage/testimonial/pizza.png"}
            alt="popup"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
