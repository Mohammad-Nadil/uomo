"use client";
import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import placeholder from "@/public/images/img1.png";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const page = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [quantity, setQuantity] = useState(6);
  const [openSections, setOpenSections] = useState({
    categories: true,
    colors: true,
    sizes: true,
    brands: true,
    price: true,
  });

  const toggle = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const item1 = {
    id: 3,
    category: "Dresses",
    name: "Cotton Jersey T-Shirt",
    price: "$17",
    image: placeholder,
  };
  return (
    <section id="shop" className="shop">
      {showFilter && (
        <div
          onClick={() => setShowFilter(false)}
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
        />
      )}

      <Container className={`flex gap-10 relative`}>
        <div
          className={` w-3/4 lg:w-1/4 absolute lg:static top-0 left-0 z-50  transition-transform ${showFilter ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} `}
        >
          <div
            className={`h-full w-full p-3 bg-white  duration-300 flex flex-col
     
    `}
          >
            <div className="z-10 flex justify-between items-center  pb-5">
              <h3 className=" text-head uppercase">Filter By</h3>
              <button
                onClick={() => setShowFilter(false)}
                className="cursor-pointer lg:hidden"
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className=" flex-1 flex flex-col gap-y-10 overflow-y-auto no-scrollbar">
              {/* Categories */}
              <div className="">
                <button
                  onClick={() => toggle("categories")}
                  className="flex justify-between w-full texts_18_medium text-head uppercase"
                >
                  Product Categories
                  <span>
                    {openSections.categories ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </button>
                {openSections.categories && (
                  <div className="grid grid-cols-2 gap-2 mt-3.25 texts_14_regular text-head">
                    <span className="texts_14_medium text-head cursor-pointer">
                      Dresses
                    </span>
                    <span className="texts_14_medium text-head cursor-pointer">
                      Shorts
                    </span>
                    <span className="texts_14_medium text-head cursor-pointer">
                      Sweatshirts
                    </span>
                    <span className="texts_14_medium text-head cursor-pointer">
                      Swimwear
                    </span>
                    <span className="texts_14_medium text-head cursor-pointer">
                      Jackets
                    </span>
                    <span className="texts_14_medium text-head cursor-pointer">
                      T-Shirts & Tops
                    </span>
                    <span className="texts_14_medium text-head cursor-pointer">
                      Jeans
                    </span>
                    <span className="texts_14_medium text-head cursor-pointer">
                      Trousers
                    </span>
                    <span className="texts_14_medium text-head cursor-pointer">
                      Men
                    </span>
                    <span className="texts_14_medium text-head cursor-pointer">
                      Jumpers & Cardigans
                    </span>
                  </div>
                )}
              </div>

              {/* Colors */}
              <div className="">
                <button
                  onClick={() => toggle("colors")}
                  className="flex justify-between w-full texts_18_medium text-head uppercase"
                >
                  Color
                  <span>
                    {openSections.colors ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </button>
                {openSections.colors && (
                  <div className="flex flex-wrap gap-3 mt-3">
                    <div className="w-4 h-4 rounded-full bg-[#0A2472]"></div>
                    <div className="w-4 h-4 rounded-full bg-[#D7BB4F]"></div>
                    <div className="w-4 h-4 rounded-full bg-[#282828]"></div>
                    <div className="w-4 h-4 rounded-full bg-[#B1D6E8]"></div>
                    <div className="w-4 h-4 rounded-full bg-[#9C7539]"></div>
                    <div className="w-4 h-4 rounded-full bg-[#D29B48]"></div>
                    <div className="w-4 h-4 rounded-full bg-pink-300"></div>
                    <div className="w-4 h-4 rounded-full bg-red-500"></div>
                  </div>
                )}
              </div>

              {/* Sizes */}
              <div className="">
                <button
                  onClick={() => toggle("sizes")}
                  className="flex justify-between w-full texts_18_medium text-head uppercase"
                >
                  Sizes
                  <span>
                    {openSections.sizes ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </button>
                {openSections.sizes && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                      <button
                        key={size}
                        className="border px-3 py-1 text-sm hover:bg-black hover:text-white"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Brands */}
              <div className="">
                <button
                  onClick={() => toggle("brands")}
                  className="flex justify-between w-full texts_18_medium text-head uppercase"
                >
                  Brands
                  <span>
                    {openSections.brands ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </span>
                </button>
                {openSections.brands && (
                  <div className="mt-3">
                    <input
                      type="text"
                      placeholder="Search"
                      className="border-2 w-full px-3 py-2 mb-3 texts_14_medium"
                    />
                    <div className="space-y-2 texts_14_medium">
                      <label className="flex justify-between">
                        <span>
                          <input
                            type="checkbox"
                            className="mr-2 mb-5.75 mt-7.5"
                          />
                          Adidas
                        </span>
                        <span className="text-gray-400 mb-5.75 mt-7.5">2</span>
                      </label>
                      <label className="flex justify-between">
                        <span>
                          <input type="checkbox" className="mr-2 mb-5.75" />
                          Balmain
                        </span>
                        <span className="text-gray-400 mb-5.75">7</span>
                      </label>
                      <label className="flex justify-between">
                        <span>
                          <input type="checkbox" className="mr-2 mb-5.75" />
                          Balenciaga
                        </span>
                        <span className="text-gray-400 mb-5.75">10</span>
                      </label>
                      <label className="flex justify-between">
                        <span>
                          <input type="checkbox" className="mr-2 mb-5.75" />
                          Burberry
                        </span>
                        <span className="text-gray-400 mb-5.75">39</span>
                      </label>
                      <label className="flex justify-between">
                        <span>
                          <input type="checkbox" className="mr-2 mb-5.75" />
                          Kenzo
                        </span>
                        <span className="text-gray-400 mb-5.75">95</span>
                      </label>
                      <label className="flex justify-between">
                        <span>
                          <input type="checkbox" className="mr-2 mb-5.75" />
                          Givenchy
                        </span>
                        <span className="text-gray-400 mb-5.75">1092</span>
                      </label>
                      <label className="flex justify-between">
                        <span>
                          <input type="checkbox" className="mr-2 mb-5.75" />
                          Zara
                        </span>
                        <span className="text-gray-400 mb-5.75">48</span>
                      </label>
                    </div>
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="">
                <button
                  onClick={() => toggle("price")}
                  className="flex justify-between w-full texts_18_medium text-head uppercase"
                >
                  Price
                  <span>
                    {openSections.price ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </button>
                {openSections.price && (
                  <div className="mt-3">
                    <input type="range" min="29" max="937" className="w-full" />
                    <div className="flex justify-between texts_14_medium mt-2 text-head">
                      <span>Min Price: $29</span>
                      <span>Max: $937</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-3/4 w-full flex flex-col gap-5 sm:gap-8.5 pb-10 ">
          <div className="banner  w-full hidden sm:flex items-center justify-between p-6 lg:p-12.5 bg-[#eeeeee]  ">
            <div className="text flex flex-col gap-y-3 uppercase w-max">
              <div className="flex items-center gap-1 text-accent ">
                <hr className="w-12" />
                <p className="text-sm font-medium">new trend</p>
              </div>
              <h2 className="text-5xl ">
                summer sale stylish
                <br />
                <span className="font-bold">womens</span>
              </h2>
              <a
                href="/shop"
                className="custom-underline text-sm font-medium w-min text-nowrap"
              >
                discover more
              </a>
            </div>
            <div className="img w-1/3 aspect-4/5 relative">
              <Image
                fill
                src={placeholder}
                alt="placeholder"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex  items-center gap-x-10 justify-between">
            <div className="breadcrumb uppercase text-sm font-medium hidden lg:block flex-1">
              <Link href="/"> home</Link>
              <span>/</span>
              <Link href="/shop"> the shop</Link>
            </div>
            <div className="filterOpen lg:hidden flex flex-1 items-center">
              <button
                onClick={() => setShowFilter(true)}
                className="flex items-center gap-2"
              >
                <FaBars size={16} />
                <span className="text-sm font-medium">filter</span>
              </button>
            </div>
            <div className="sort  font-medium">
              <select className=" px-2 py-1">
                <option>default sorting</option>
                <option>sort by popularity</option>
                <option>sort by average rating</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2  sm:grid-cols-3 gap-3 md:gap-7.5">
            {new Array(quantity).fill(0).map((item, index) => (
              <ProductCard key={index} item={item1} />
            ))}
          </div>
          <button
            onClick={() => setQuantity(quantity + 6)}
            className="text-sm lg:text-xl custom-underline font-medium text-center mt-5 w-max mx-auto"
          >
            show more
          </button>
        </div>
      </Container>
    </section>
  );
};

export default page;
