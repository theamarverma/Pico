import AboutBanner from "@/components/About-Us/AboutBanner";
import Overview from "@/components/About-Us/Overview";
import Specialities from "@/components/About-Us/Specialities";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="bg-bgCream pt-28">
        <AboutBanner />
      </section>
      <section className="bg-bgCream py-24 pl-20">
        <Overview />
      </section>
      <section className="bg-bgCream pb-24">
        <Specialities />
      </section>
    </div>
  );
};

export default page;
