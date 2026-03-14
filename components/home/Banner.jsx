import React from "react";
import Image from "next/image";
import Banner1 from "@/public/images/about-bannar.png";

const Banner = () => {
  return (
    <>
      <section class="relative">
         <Image src={Banner1} alt="Banner" class="w-full h-[400px] md:h-[600px] object-cover"/>
         <div class="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-20">
         <h3 class="text-white text-xs md:text-sm font-semibold mb-4">
         <span class="w-10 h-1 bg-white inline-block mr-2"></span>
         EYEWEAR
         </h3>
         <h1 class="text-white text-2xl md:text-5xl font-bold mb-6 leading-tight">
         UP TO $60 OFF POLARISED <br class="hidden md:block"/>
         SUNGLASSES
         </h1>
         <button class="px-6 py-3 bg-white text-black font-semibold hover:bg-black hover:text-white transition">
         SHOP NOW
         </button>
         </div>
         </section>
    </>
  );
};

export default Banner;
