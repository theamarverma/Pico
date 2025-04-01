import CoffeeGallery from "@/components/gallery/CoffeeGallery";
import FoodGallery from "@/components/gallery/FoodGallery";
import GalleryBanner from "@/components/gallery/GalleryBanner";
import VideoContainer from "@/components/gallery/VideoContainer";

import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <section className="bg-bgCream pt-20 md:pt-28">
        <GalleryBanner />
      </section>
      <section className="bg-bgCream px-4 py-14 md:px-20 md:py-24">
        <VideoContainer />
      </section>
      <section className="bg-bgCream px-4 pb-14 md:px-20 md:pb-24">
        <CoffeeGallery />
      </section>
      <section className="bg-bgCream px-4 pb-14 md:px-20 md:pb-24">
        <FoodGallery />
      </section>
    </div>
  );
};

export default page;
