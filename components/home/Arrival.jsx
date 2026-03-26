import React from "react";
import Image from "next/image";
import img1 from "@/public/images/MP_1.png";
import Header from "../Header";
import Container from "../Container";
import Link from "next/link";

const products = [
  { id: 1, name: "AVIATOR CLASSIC", price: "$499" },
  { id: 2, name: "NEW WAYFARER CLASSIC", price: "$399" },
  { id: 3, name: "AVIATOR CLASSIC", price: "$499" },
  { id: 4, name: "NEW WAYFARER CLASSIC", price: "$399" },
];

const Arrival = () => {
  return (
    <section>
      <Container>
        <Header text="NEW ARRIVAL" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-8 text-center">
          {products.map((item) => (
            <Link
              key={item.id}
              href={`/shop/${item.id}`}
              className="block group"
            >
              <Image src={img1} alt={item.name} className="mx-auto" />

              <h3 className="font-bold mt-4 group-hover:text-accent transition-colors">
                {item.name}
              </h3>

              <p className="text-gray-500">{item.price}</p>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/shop"
            className="group text-lg font-semibold"
          >
            SEE ALL PRODUCT
            <span className="block h-0.5 w-2/3 bg-black mt-1 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Arrival;
