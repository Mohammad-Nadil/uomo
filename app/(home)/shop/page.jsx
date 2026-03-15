"use client";
import Image from "next/image";
import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaRegHeart } from "react-icons/fa6";
import { BsShare } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import { useState } from "react";
import Product from "@/components/Product";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeTab, setActiveTab] = useState("description");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let [count, setCount] = useState(3);
  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handlePlus = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  return (
    <>
      <div className="mt-[74px] mb-6  lg:mt-12.5 lg:mb-25">
        <div className="max-w-[1410px] mx-auto">
          <div className="flex flex-col xl:flex-row gap-y-8 xl:gap-x-15">
            {/* Left Side: Images */}
            <div className="flex flex-col-reverse xl:flex-row gap-2.5 ">
              <div className="flex xl:flex-col gap-2.5 overflow-x-auto lg:overflow-visible ">
                <div className="min-w-[80px] xl:w-auto">
                  <Image
                    src={"/images/shop.png"}
                    alt="vvvv"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="min-w-[80px] xl:w-auto">
                  <Image
                    src={"/images/shop.png"}
                    alt="vvvv"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="min-w-[80px] xl:w-auto">
                  <Image
                    src={"/images/shop.png"}
                    alt="vvvv"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="min-w-[80px] xl:w-auto">
                  <Image
                    src={"/images/shop.png"}
                    alt="vvvv"
                    width={80}
                    height={80}
                  />
                </div>
              </div>

              {/* Main Slider */}
              <div className="w-full xl:w-[570px] relative group">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: ".button-next-custom",
                    prevEl: ".button-prev-custom",
                  }}
                  spaceBetween={10}
                  slidesPerView={1}
                  className="w-full h-auto"
                >
                  {[1, 2, 3].map((_, index) => (
                    <SwiperSlide
                      key={index}
                      className="relative flex justify-center items-center bg-[#F5F5F5]"
                    >
                      <Image
                        src={"/images/shop.png"}
                        alt="vvv"
                        width={80}
                        height={80}
                        className="w-full h-auto object-contain"
                      />
                      <Image
                        src={"/images/shop.png"}
                        alt="vvv"
                        width={80}
                        height={80}
                        className="absolute bottom-4 right-4 lg:bottom-7.5 lg:right-7.5 h-6 w-6 cursor-pointer"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Slider Arrows */}
                <div className="button-prev-custom absolute left-2 xl:left-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/80 p-2 xl:p-4 rounded-full shadow-sm">
                  <GrFormPrevious size={20} />
                </div>
                <div className="button-next-custom absolute right-2 xl:right-5 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/80 p-2 xl:p-4 rounded-full shadow-sm">
                  <MdNavigateNext size={20} />
                </div>
              </div>
            </div>

            {/* Right Side: Product Details */}
            <div className="text-start px-4 md:px-20 lg:px-0">
              <div className="hidden xl:flex justify-between items-center mb-10">
                <h4 className="texts_14_medium text-head">HOME / THE SHOP</h4>
                <div className="flex gap-x-6">
                  <button className="flex items-center gap-x-1 texts_14_medium cursor-pointer text-head">
                    <GrFormPrevious /> PREV
                  </button>
                  <button className="flex items-center gap-x-1 texts_14_medium cursor-pointer text-head">
                    NEXT <MdNavigateNext />
                  </button>
                </div>
              </div>

              <h3 className="text-xl xl:head_26_regular font-normal text-head">
                Lightweight Puffer Jacket With a Hood
              </h3>
              <h4 className="text-[22px] font-medium text-head mt-2">$449</h4>

              <p className="texts_14_regular text-head max-w-125 leading-6 pt-4 lg:pt-6.25">
                Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
                elementum gravida nec dui. Aenean aliquam varius ipsum, non
                ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
                aliquet magna posuere eget.
              </p>

              {/* Buttons Container */}
              <div className="flex items-center gap-x-2.5 lg:gap-x-5 my-6 lg:my-8">
                {/* Quantity Selector */}
                <div className="w-[100px] lg:w-[125px] h-12 lg:h-[60px] border border-[#e4e4e4] flex items-center justify-between px-3 lg:px-5 shrink-0">
                  <button
                    onClick={handleMinus}
                    className="cursor-pointer text-xl text-[#767676] hover:text-black transition-colors"
                  >
                    -
                  </button>
                  <span className="text-head font-medium">{count}</span>
                  <button
                    onClick={handlePlus}
                    className="cursor-pointer text-xl text-[#767676] hover:text-black transition-colors"
                  >
                    +
                  </button>
                </div>
                <button className="h-12  lg:w-[280px] lg:h-[60px] bg-head text-white text-[12px] lg:texts_14_medium  tracking-widest cursor-pointer uppercase px-10 lg:px-0">
                  ADD TO CART
                </button>
              </div>

              {/* Wishlist & Share */}
              <div className="flex gap-x-8 lg:pb-8">
                <button className="text-head text-[13px] font-medium flex items-center gap-x-2 uppercase relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-[80%] after:border-b-2 after:border-head">
                  <FaRegHeart /> Add to wishlist
                </button>

                <button className="text-head text-[13px] font-medium flex items-center gap-x-2 uppercase ">
                  <BsShare /> Share
                </button>
              </div>

              {/* Meta Info */}
              <div className="space-y-1 mt-8">
                <h5 className="texts_13_regular text-[#767676]">
                  SKU: <span className="text-head">N/A</span>
                </h5>
                <h5 className="texts_13_regular text-[#767676]">
                  Categories:{" "}
                  <span className="text-head">
                    Casual & Urban Wear, Jackets, Men
                  </span>
                </h5>
                <h5 className="texts_13_regular text-[#767676]">
                  Tags:{" "}
                  <span className="text-head">
                    biker, black, bomber, leather
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* vvvvvvvvvvvvvvv */}
      <div className="w-full">
        <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-x-10 xl:gap-x-19 gap-y-6 sm:gap-y-0 texts_16_medium text-[#767676]">
          {/* DESCRIPTION Button */}
          <button
            onClick={() => setActiveTab("description")}
            className={`relative hover:text-head after:content-[''] after:block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
              activeTab === "description"
                ? "text-head after:w-full after:bg-head"
                : "after:w-0 hover:after:w-full after:bg-head"
            }`}
          >
            DESCRIPTION
          </button>

          {/* ADDITIONAL INFORMATION Button */}
          <button
            onClick={() => setActiveTab("additional")}
            className={`relative hover:text-head after:content-[''] after:block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
              activeTab === "additional"
                ? "text-head after:w-full after:bg-head"
                : "after:w-0 hover:after:w-full after:bg-head"
            }`}
          >
            ADDITIONAL INFORMATION
          </button>

          {/* REVIEWS Button */}
          <button
            onClick={() => setActiveTab("reviews")}
            className={`relative hover:text-head after:content-[''] after:block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300 ${
              activeTab === "reviews"
                ? "text-head after:w-full after:bg-head"
                : "after:w-0 hover:after:w-full after:bg-head"
            }`}
          >
            REVIEWS (3)
          </button>
        </div>
        <div className={"px-4 md:px-20 xl:px-60 mt-8 md:mt-10 lg:mt-12.5"}>
          <div className="">
            {/* DESCRIPTION CONTENT */}
            {activeTab === "description" && (
              <div className="animate-fadeIn">
                <div className="">
                  <h5 className="texts_16_medium text-head">
                    Sed do eiusmod tempor incididunt ut labore
                  </h5>
                  <p className="texts_14_regular text-head w-full xl:w-232.5 leading-7.5 pt-6 lg:pt-11.25 text-justify lg:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Sed ut perspiciatis
                    unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                    illo inventore veritatis et quasi architecto beatae vitae
                    dicta sunt explicabo.
                  </p>
                </div>
                <div className="mt-9.75 flex flex-col md:flex-row gap-y-8 md:gap-x-20 xl:gap-x-37.5">
                  <div className="">
                    <h4 className="texts_16_medium text-head">
                      Why choose product?
                    </h4>
                    <div className="mt-6 lg:mt-10.75 space-y-3 lg:space-y-0">
                      <div className="flex items-center gap-x-2.5">
                        <div className="h-1.5 w-1.5 bg-[#C4C4C4] rounded-full"></div>
                        <p className="texts_14_regular text-head ">
                          Creat by cotton fibric with soft and smooth
                        </p>
                      </div>
                      <div className=" flex items-center gap-x-2.5">
                        <div className="h-1.5 w-1.5 bg-[#C4C4C4] rounded-full"></div>
                        <p className="texts_14_regular text-head ">
                          Simple, Configurable (e.g. size, color, etc.), bundled
                        </p>
                      </div>
                      <div className="flex items-center gap-x-2.5">
                        <div className="h-1.5 w-1.5 bg-[#C4C4C4] rounded-full"></div>
                        <p className="texts_14_regular text-head ">
                          Downloadable/Digital Products, Virtual Products
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <h4 className="texts_16_medium text-head">
                      Sample Number List
                    </h4>
                    <div className="mt-6 lg:mt-10.75 space-y-3 lg:space-y-0">
                      <div className="flex items-start gap-x-2.5">
                        <p className="texts_14_regular text-head ">
                          1 Create Store-specific attrittbutes on the fly
                        </p>
                      </div>
                      <div className=" flex items-start gap-x-2.5">
                        <p className="texts_14_regular text-head ">
                          2 Simple, Configurable (e.g. size, color, etc.),
                          bundled
                        </p>
                      </div>
                      <div className="flex items-start gap-x-2.5">
                        <p className="texts_14_regular text-head ">
                          3 Downloadable/Digital Products, Virtual Products
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="texts_16_medium text-head pt-9.25">Lining</h4>
                <p className="texts_14_regular text-head pb-4 lg:pb-0">
                  100% Polyester, Main: 100% Polyeste
                </p>
              </div>
            )}

            {/* ADDITIONAL INFORMATION CONTENT */}
            {activeTab === "additional" && (
              <div className="flex flex-row gap-x-10 md:gap-x-16 lg:gap-x-22.5 my-8 lg:my-12.5 animate-fadeIn">
                <div className="w-[100px] lg:w-[82px] space-y-[20px] lg:space-y-[31px]">
                  <h4 className="texts_16_medium text-head whitespace-nowrap">
                    Weight
                  </h4>
                  <h4 className="texts_16_medium text-head whitespace-nowrap">
                    Dimensions
                  </h4>
                  <h4 className="texts_16_medium text-head whitespace-nowrap">
                    Size
                  </h4>
                  <h4 className="texts_16_medium text-head whitespace-nowrap">
                    Color
                  </h4>
                  <h4 className="texts_16_medium text-head whitespace-nowrap">
                    Storage
                  </h4>
                </div>
                <div className="space-y-[20px] lg:space-y-[31px]">
                  <h5 className="texts_14_regular text-head">1.25 kg</h5>
                  <h5 className="texts_14_regular text-head">
                    90 x 60 x 90 cm
                  </h5>
                  <h5 className="texts_14_regular text-head">
                    XS, S, M, L, XL
                  </h5>
                  <h5 className="texts_14_regular text-head">
                    Black, Orange, White
                  </h5>
                  <h5 className="texts_14_regular text-head leading-relaxed">
                    Relaxed fit shirt-style dress with a rugged
                  </h5>
                </div>
              </div>
            )}

            {/* REVIEWS CONTENT */}
            {activeTab === "reviews" && (
              <div className="animate-fadeIn space-y-8">
                {/* Review 1 */}
                <div className="border-b border-footer pb-5.75">
                  <h4 className="texts_16_medium text-head">Reviews</h4>
                  <div className="flex gap-x-4 md:gap-x-7.5 items-start md:items-center mt-6.5">
                    <div className="flex-shrink-0 w-12 md:w-auto">
                      <Image src={"/images/shop.png"} alt="vvv" />
                    </div>
                    <div className="w-full">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
                        <h5 className="texts_14_regular text-head">
                          Janice Miller
                        </h5>
                        <div className="flex text-yellow-400 mt-1 md:mt-0">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                      </div>
                      <span className="texts_14_regular text-[#767676] block mt-1">
                        April 06, 2020
                      </span>
                    </div>
                  </div>
                  <p className="pt-5 md:pl-21 texts_14_regular text-[#767676] w-full lg:w-210 leading-6">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est…
                  </p>
                </div>

                {/* Review 2 */}
                <div className="my-7.5">
                  <div className="flex gap-x-4 md:gap-x-7.5 items-start md:items-center">
                    <div className="flex-shrink-0 w-12 md:w-auto">
                      <Image imgSrc={"/images/shop.png"} alt="vvv" />
                    </div>
                    <div className="w-full">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
                        <h5 className="texts_14_regular text-head">
                          Benjam Porter
                        </h5>
                        <div className="flex text-yellow-400 mt-1 md:mt-0">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>★</span>
                          ))}
                        </div>
                      </div>
                      <span className="texts_14_regular text-[#767676] block mt-1">
                        April 06, 2020
                      </span>
                    </div>
                  </div>
                  <p className="pt-5 md:pl-21 texts_14_regular text-[#767676] w-full lg:w-210 leading-6">
                    Nam libero tempore, cum soluta nobis est eligendi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est…
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* vvvvvvvvvvvvvvv */}
      <div className=" mt-7 lg:mt-[54px]">
        <div className="max-w-[1410px] mx-auto">
          <div className="">
            <h3 className="texts_18_medium text-head">
              Be the first to review “Message Cotton T-Shirt”
            </h3>
            <h4 className="texts_14_regular text-head py-3 lg:pb-7.5">
              Your email address will not be published. Required fields are
              marked *
            </h4>

            <div className="flex flex-col lg:flex-row lg:items-center gap-x-2 lg:mb-[26px]">
              <span className="texts_14_regular text-head">Your rating *</span>
              <div className="flex  text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>

            <form className="space-y-3 lg:space-y-7.5">
              {/* Review Textarea */}
              <div>
                <textarea
                  placeholder="Your Review"
                  className="w-full border border-footer p-[17px] h-[213px] outline-none focus:border-head texts_14_regular text-[#767676"
                />
              </div>

              {/* Floating Label Name Input */}
              <div className="relative">
                <label className="absolute -top-3 left-3 bg-white px-1 texts_14_regular text-head">
                  Name *
                </label>
                <input
                  type="text"
                  defaultValue="Ali"
                  className="w-full border border-head p-[17px] outline-none"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  placeholder="Email address *"
                  className="w-full border border-footer texts_14_regular text-[#767676] p-[17px] outline-none focus:border-head"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="save-info"
                  className="mt-1 w-4 h-4"
                />
                <label className="texts_14_regular text-[#767676]">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-head text-white px-10 lg:px-0 texts_14_medium h-12 lg:w-[280px] lg:h-[60px] cursor-pointer"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* vvvvvvvvvvvvvvv */}
      <div className="mt-9.5 mb-25 hidden lg:block">
        <div className="max-w-[1410px] mx-auto">
          <h3 className="head_26_regular text-head">
            RELATED <span className="head_26_bold ">PRODUCTS</span>
          </h3>
          <div className="mt-8.5 flex gap-x-7.5">
            <Product
              catagory={"Dresses"}
              // imgSrc={product}
              itemName={"Cropped Faux Leather Jacket"}
              itemPrice={"29"}
            />
            <Product
              catagory={"Dresses"}
              // imgSrc={product}
              itemName={"Calvin Shorts"}
              itemPrice={"62"}
            />
            <Product
              catagory={"Dresses"}
              // imgSrc={product}
              itemName={"Kirby T-Shirt"}
              itemPrice={"17"}
            />
            <Product
              catagory={"Dresses"}
              // imgSrc={product}
              itemName={"Cableknit Shawl"}
              itemPrice={"129"}
              discountPrice={"99"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
