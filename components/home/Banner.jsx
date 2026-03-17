import React from "react";
import Image from "next/image";
import Banner1 from "@/public/images/about-bannar.png";
import Container from "../Container";

const Banner = () => {
  return (
    <>
      <section className="relative w-full py-65 z-1">
        <Image
          src={Banner1}
          alt="Banner"
          className="absolute -z-10 top-0 left-0 w-full h-full object-cover object-center brightness-75"
        />
        <Container>
          <div className=" h-full w-full  flex flex-col justify-center items-start px-6 md:px-20">
            <h3 className="text-white text-xs md:text-sm font-semibold mb-4">
              <span className="w-10 h-1 bg-white inline-block mr-2"></span>
              EYEWEAR
            </h3>
            <h1 className="text-white text-2xl md:text-5xl font-bold mb-6 leading-tight">
              UP TO $60 OFF POLARISED <br className="hidden md:block" />
              SUNGLASSES
            </h1>
            <button className="px-6 py-3 bg-white text-black font-semibold hover:bg-black hover:text-white transition">
              SHOP NOW
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Banner;
