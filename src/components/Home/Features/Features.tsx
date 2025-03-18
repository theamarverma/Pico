import React from "react";
import FeaturesGrid from "./FeatureGrid";

const Features = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="w-[90%] md:w-2/3">
          <div className="left flex items-center rounded-br-[50px] bg-picoTeal px-3 text-white md:justify-center md:px-0">
            <h1 className="flex flex-col text-xl md:text-header">
              Where flavours{" "}
              <div className="flex w-full items-center gap-6">
                meet <span className="w-1/2 border-t-2 border-white"></span>
              </div>
            </h1>
          </div>
        </div>

        <div className="right mx-4 space-y-6 md:mx-0">
          <div className="flex items-center justify-start gap-4">
            <div className="w-1/6 border-t-2 border-borderGray"></div>{" "}
            <h1 className="text-lg uppercase tracking-label">Features</h1>
          </div>
          <p className="text-lg font-light leading-[38px]">
            We serve up a mix of tradition & innovation—because great food &
            coffee deserve the best.
          </p>
        </div>
      </div>

      <FeaturesGrid />
    </section>
  );
};

export default Features;
