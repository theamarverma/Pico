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
      <section className="">
        {" "}
        <Overview />
      </section>
    </>
  );
}
