import BestMenu from "@/components/Home/BestMenu";
import Features from "@/components/Home/Features";
import FindUs from "@/components/Home/FindUs";
import FounderBanner from "@/components/Home/FounderBanner";
import Gallery from "@/components/Home/Gallery";
import HeaderBanner from "@/components/Home/HeaderBanner";
import MediaCarousel from "@/components/Home/MediaCarousel/MediaCarousel";
import Overview from "@/components/Home/Overview";
import Services from "@/components/Home/Services";
import Testimonial from "@/components/Home/TestimonialCarousel/Testimonial";

export default function HomePage() {
  return (
    <>
      <section className="bg-bgCream pt-28">
        {" "}
        <HeaderBanner />
      </section>
      <section className="bg-bgCream py-24">
        {" "}
        <Overview />
      </section>
      <section className="bg-bgCream pb-24">
        {" "}
        <Features />
      </section>
      <section className="bg-bgCream pb-24">
        {" "}
        <BestMenu />
      </section>
      <section className="bg-bgCream pb-24">
        {" "}
        <FindUs />
      </section>
      <section className="bg-bgCream px-20 pb-24">
        {" "}
        <MediaCarousel />
      </section>
      <section className="bg-bgCream px-20 pb-24">
        {" "}
        <Testimonial />
      </section>
      <section className="bg-bgCream px-20 pb-24">
        {" "}
        <FounderBanner />
      </section>
      <section className="bg-bgCream px-20 pb-24">
        {" "}
        <Services />
      </section>
      <section className="bg-bgCream px-20 pb-24">
        {" "}
        <Gallery />
      </section>
    </>
  );
}
