import Image from "next/image";
import React from "react";
import img1 from "@/public/images/MP_1.png";
import Header from "../Header";
import Container from "../Container";
import Link from "next/link";

const products = [
  { name: "AVIATOR CLASSIC", price: "$499" },
  { name: "NEW WAYFARER CLASSIC", price: "$399" },
  { name: "AVIATOR CLASSIC", price: "$499" },
  { name: "NEW WAYFARER CLASSIC", price: "$399" },
];

const Popular = () => {
  return (
    <section>
      <Container>
        <Header text="MOST POPULAR" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-8 text-center">
          {products.map((item, i) => (
            <Link href="/shop/id" key={i}>
              <Image src={img1} alt={item.name} className="mx-auto" />
              <h3 className="font-bold mt-4">{item.name}</h3>
              <p className="text-gray-500">{item.price}</p>
            </Link>
          ))}
        </div>
        <div className="flex  items-center justify-center" >
          <Link
            href="/shop"
            className="group text-center text-lg font-semibold mt-10 "
          >
            SEE ALL PRODUCT
            <span className="block h-0.5 w-2/3 bg-black mt-1 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Popular;
