import BestMenu from "@/components/Home/BestMenu";
import Features from "@/components/Home/Features";
import FindUs from "@/components/Home/FindUs";
import HeaderBanner from "@/components/Home/HeaderBanner";
import Overview from "@/components/Home/Overview";
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
      <section className="my-14">
        {" "}
        <FindUs />
      </section>
    </>
  );
}
