import React from "react";
import PicoImage from "../Global/PicoImage";

const CoffeeGallery = () => {
  return (
    <div>
      <h1 className="flex items-center justify-center">Speciality Coffee</h1>
      <div className="grid grid-cols-3 gap-4">
        <PicoImage path="/images/gallery/coffees/1.png" name="Coffee 1" />
        <PicoImage path="/images/gallery/coffees/1.png" name="Coffee 1" />
        <PicoImage path="/images/gallery/coffees/1.png" name="Coffee 1" />
        <PicoImage path="/images/gallery/coffees/1.png" name="Coffee 1" />
        <PicoImage path="/images/gallery/coffees/1.png" name="Coffee 1" />
        <PicoImage path="/images/gallery/coffees/1.png" name="Coffee 1" />
      </div>
    </div>
  );
};

export default CoffeeGallery;
