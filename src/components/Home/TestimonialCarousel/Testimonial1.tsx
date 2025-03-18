import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div className="w-full bg-bgCream">
      <div className="parent relative flex h-[500px] w-[80%] flex-col bg-picoTeal bg-cover">
        <div className="mx-10 flex h-full w-[60%] items-center justify-center">
          {" "}
          <div className="flex flex-col items-start justify-start gap-6">
            {" "}
            <h1 className="text-subheader text-white">What They Say:</h1>
            <p className="text-lg font-light text-white">
              Worth it. And definitely worth a few visits. Loved the Fungi Pesto
              Pizza. Out of the world. And the Tiramisu is unparalleled.
            </p>
            {/* Name */}
            <div className="flex w-full items-center justify-start gap-3">
              {" "}
              <div className="w-[20%] border-t-2 border-borderGray"></div>
              <h1 className="text-xl tracking-label text-white">Arpit Lohia</h1>
            </div>
            {/* Right side  */}
            <div className="space-y-4 self-end">
              <div className="flex justify-end gap-2 text-lg text-white">
                4.5{" "}
                <span>
                  <svg
                    width="24"
                    height="22"
                    viewBox="0 0 24 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z"
                      fill="#FFC986"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 font-light text-white">
                Review from
                <Image
                  src={"/images/homepage/testimonial/zomato.png"}
                  alt="user"
                  width={120}
                  height={50}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Popup-Image */}
        <div className="-bottom-24 -right-44 md:absolute">
          <Image
            src={"/images/homepage/testimonial/pizza.png"}
            alt="popup"
            width={480}
            height={500}
          />
        </div>
      </div>
      {/* Counter and Buttons */}
      <div className="flex w-[50%] justify-between">
        <h1 className="text-xl text-picoOrange md:text-header">03/10</h1>
        <div className="buttons">Buttons</div>
      </div>
    </div>
  );
};

export default Testimonial;
