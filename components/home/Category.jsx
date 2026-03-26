import Image from "next/image";
import React from "react";
import img_1 from "@/public/images/Image.png";
import Header from "../Header";
import Link from "next/link";
import Container from "../Container";

const categories = [
  "SQUARE",
  "AVIATOR",
  "RECTANGULAR",
  "ROUNDED",
  "OVAL",
  "GEOMETRIC",
];

const Category = () => {
  return (
    <section >
      <Container>
        <Header text="SHOP BY SHAPE" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 text-center">
          {categories.map((item, i) => (
            <Link key={i} href="/shop" className="block">
              <Image src={img_1} alt={item} className="mx-auto" />
              <h1 className="mt-2 font-semibold">{item}</h1>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Category;
