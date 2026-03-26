import Image from "next/image";
import React from "react";
import I_1 from "@/public/images/I-1.png";
import Container from "../Container";
import Link from "next/link";

const Newsletter = () => {
  return (
    <>
      <section className="mt-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href={"/blog"} className="relative">
              <Image src={I_1} alt="1" className="w-full brightness-75" />
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-sm">COLLECTION</h3>
                <h1 className="text-xl font-bold mb-4">SUNGLASSES MEN'S</h1>
                <button className="border-b border-white">SHOP NOW</button>
              </div>
            </Link>
            <Link href={"/blog"} className="relative">
              <Image src={I_1} alt="2" className="w-full brightness-75" />
              <div className="absolute bottom-10 left-10 text-white">
                <h3 className="text-sm">COLLECTION</h3>
                <h1 className="text-xl font-bold mb-4">SUNGLASSES WOMEN'S</h1>
                <button className="border-b border-white">SHOP NOW</button>
              </div>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Newsletter;
