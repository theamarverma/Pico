import CancellationForm from "@/components/contact-us/CancellationForm";
import ContactBanner from "@/components/contact-us/ContactBanner";
import ContactSection from "@/components/contact-us/ContactSection";
import FormSection from "@/components/contact-us/FormSection";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="bg-bgCream pt-28">
        <ContactBanner />
      </section>
      {/* contact form and cancellation form */}
      <section className="bg-bgCream">
        <FormSection />
      </section>

      <section className="bg-bgCream py-14 md:py-24">
        <ContactSection />
      </section>
    </div>
  );
};

export default page;
