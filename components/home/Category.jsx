import Image from "next/image";
import React from "react";
import img_1 from "@/public/images/Image.png";
import Header from "../Header";

const Category = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6">
        <Header text="SHOP BY SHAPE" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          <div>
            <Image src={img_1} alt="1" className="mx-auto" />
            <h1 className="mt-2 font-semibold">SQUARE</h1>
          </div>
          <div>
            <Image src={img_1} alt="2" className="mx-auto" />
            <h1 className="mt-2 font-semibold">AVIATOR</h1>
          </div>
          <div>
            <Image src={img_1} alt="3" className="mx-auto" />
            <h1 className="mt-2 font-semibold">RECTANGULAR</h1>
          </div>
          <div>
            <Image src={img_1} alt="4" className="mx-auto" />
            <h1 className="mt-2 font-semibold">ROUNDED</h1>
          </div>
          <div>
            <Image src={img_1} alt="5" className="mx-auto" />
            <h1 className="mt-2 font-semibold">OVAL</h1>
          </div>
          <div>
            <Image src={img_1} alt="6" className="mx-auto" />
            <h1 className="mt-2 font-semibold">GEOMETRIC</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
