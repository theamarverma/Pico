import BestMenu from "@/components/Home/BestMenu";
import Features from "@/components/Home/Features";
import FindUs from "@/components/Home/FindUs";
import FounderBanner from "@/components/Home/FounderBanner";
import HeaderBanner from "@/components/Home/HeaderBanner";
import MediaCarousel from "@/components/Home/MediaCarousel/MediaCarousel";
import Overview from "@/components/Home/Overview";
import Testimonial from "@/components/Home/TestimonialCarousel/Testimonial";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="">
        {" "}
        <HeaderBanner />
      </section>
      <section className="my-14">
        {" "}
        <Overview />
      </section>
      <section className="my-14">
        {" "}
        <Features />
      </section>
      <section className="my-14">
        {" "}
        <BestMenu />
      </section>
      <section className="my-14">
        {" "}
        <FindUs />
      </section>
      <section className="mx-20 my-14">
        {" "}
        <MediaCarousel />
      </section>
      <section className="mx-20 my-14">
        {" "}
        <Testimonial />
      </section>
      <section className="mx-20 my-14">
        {" "}
        <FounderBanner />
      </section>
    </>
  );
}
