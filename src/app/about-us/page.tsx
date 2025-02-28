import AboutBanner from "@/components/About-Us/AboutBanner";
import Overview from "@/components/About-Us/Overview";
import Specialities from "@/components/About-Us/Specialities";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="pt-28">
        <AboutBanner />
      </section>
      <section className="my-24 ml-20">
        <Overview />
      </section>
      <section className="my-24">
        <Specialities />
      </section>
    </div>
  );
};

export default page;
