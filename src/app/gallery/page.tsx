import CoffeeGallery from "@/components/gallery/CoffeeGallery";
import GalleryBanner from "@/components/gallery/GalleryBanner";
import VideoContainer from "@/components/gallery/VideoContainer";

import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <section className="bg-bgCream pt-28">
        <GalleryBanner />
      </section>
      <section className="bg-bgCream px-20 py-24">
        <VideoContainer />
      </section>
      <section className="bg-bgCream px-20 pb-24">
        <CoffeeGallery />
      </section>
      <section className="bg-bgCream px-20 pb-24">
        <CoffeeGallery />
      </section>
    </div>
  );
};

export default page;
