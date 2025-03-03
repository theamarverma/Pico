import CoffeeGallery from "@/components/gallery/CoffeeGallery";
import GalleryBanner from "@/components/gallery/GalleryBanner";
import VideoContainer from "@/components/gallery/VideoContainer";

import React from "react";

const page = () => {
  return (
    <div>
      {" "}
      <section className="pt-28">
        <GalleryBanner />
      </section>
      <section className="mx-20 my-28">
        <VideoContainer />
      </section>
      <section className="mx-20 my-28">
        <CoffeeGallery />
      </section>
      <section className="mx-20 my-28">
        <CoffeeGallery />
      </section>
    </div>
  );
};

export default page;
