import ContactBanner from "@/components/contact-us/ContactBanner";
import ContactSection from "@/components/contact-us/ContactSection";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="pt-28">
        <ContactBanner />
      </section>
      <section className="pt-28">
        <ContactSection />
      </section>
    </div>
  );
};

export default page;
