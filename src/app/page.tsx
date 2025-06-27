"use client";
import BestMenu from "@/components/Home/BestMenu";
import CurrentlyBrewing from "@/components/Home/CurrentlyBrewing/CurrentlyBrewing";
import Features from "@/components/Home/Features/Features";
import PizzaExperience from "@/components/Home/Features/NewFeatures";
import FindUs from "@/components/Home/FindUs";
import FounderBanner from "@/components/Home/FounderBanner";
import Gallery from "@/components/Home/Gallery";
import HeaderBanner from "@/components/Home/HeaderBanner";
import MediaCarousel from "@/components/Home/MediaCarousel/MediaCarousel";
import NewsLetter from "@/components/Home/NewsLetter";
import Overview from "@/components/Home/Overview";
import PicoStory from "@/components/Home/PicoStory";
import Services from "@/components/Home/Services";
import Testimonial from "@/components/Home/TestimonialCarousel/Testimonial";

export default function HomePage() {
  return (
    // <>
      <section className="bg-bgCream pt-24 md:pt-40">
        {" "}
        <HeaderBanner />
      </section>
      <section className="bg-bgCream py-10 md:py-24">
        {" "}
        <Overview />
      </section>
      <section className="bg-bgCream pb-10 md:pb-24">
        {" "}
        <PizzaExperience />
      </section>
      <section className="bg-bgCream px-4 pb-24 md:px-20">
        {" "}
        <FounderBanner />
      </section>
      <section className="bg-bgCream px-4 pb-10 md:px-20 md:pb-24">
        {" "}
        <Services />
      </section>

      <section className="bg-bgCream pb-10 md:pb-24">
        {" "}
        <FindUs />
      </section>
      <section className="bg-bgCream pb-14 md:px-20 md:pb-24">
        {" "}
        <Testimonial />
      </section>

      <section className="border border-picoJuteBrown bg-[#FCEFE0] px-4 pb-10 md:px-20 md:pb-24">
        {" "}
        <CurrentlyBrewing />
      </section>
      <section className="bg-bgCream px-4 py-10 md:px-20 md:py-24">
        {" "}
        <Gallery />
      </section>
      <section className="hidden bg-bgCream px-4 pb-10 md:block md:px-20 md:pb-24">
        {" "}
        <NewsLetter />
      </section>
    </>
  );
}
