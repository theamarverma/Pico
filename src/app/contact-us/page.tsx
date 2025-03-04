import ContactBanner from "@/components/contact-us/ContactBanner";
import ContactSection from "@/components/contact-us/ContactSection";
import FormSection from "@/components/contact-us/FormSection";

import React from "react";

const page = () => {
  return (
    <div>
      <section className="pt-28">
        <ContactBanner />
      </section>
      <section className="bg-bgCreamDark">
        <FormSection />
      </section>
      <section className="bg-bgCreamDark py-24">
        <ContactSection />
      </section>
    </div>
  );
};

export default page;
