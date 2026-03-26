"use client";
import Image from "next/image";
import { Image as AntImage } from "antd";
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
import Link from "next/link";
import Container from "@/components/Container";
import { CiZoomIn } from "react-icons/ci";

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
    <section id="product">
      <Container className={`pb-10`}>
        <div className="mt-18.5 mb-6  lg:mt-12.5 lg:mb-25">
          <div className="flex flex-col xl:flex-row gap-y-8 xl:gap-x-15">
            {/* Left Side: Images */}
            <div className="flex flex-col-reverse xl:flex-row gap-2.5 ">
              <div className="flex xl:flex-col gap-2.5 overflow-x-auto lg:overflow-visible ">
                <div className="min-w-20 xl:w-auto">
                  <Image
                    src={"/images/shop.png"}
                    alt="vvvv"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="min-w-20 xl:w-auto">
                  <Image
                    src={"/images/shop.png"}
                    alt="vvvv"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="min-w-20 xl:w-auto">
                  <Image
                    src={"/images/shop.png"}
                    alt="vvvv"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="min-w-20 xl:w-auto">
                  <Image
                    src={"/images/shop.png"}
                    alt="vvvv"
                    width={80}
                    height={80}
                  />
                </div>
              </div>

              {/* Main Slider */}
              <div className="w-full xl:w-142.5 relative group">
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
                      className="relative flex justify-center items-center bg-[#F5F5F5] group "
                    >
                      <AntImage
                        src={"/images/shop.png"}
                        alt="vvv"
                        className="object-contain relative z-20"
                      />
                      <CiZoomIn className="absolute bottom-10 right-10 opacity-0 z-30 lg:group-hover:opacity-100 transition-all duration-300 text-3xl lg:text-5xl text-primary" />
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
                <h4 className="text-sm font-medium text-primary">
                  HOME / THE SHOP
                </h4>
                <div className="flex gap-x-6">
                  <button className="flex items-center gap-x-1 text-sm font-medium cursor-pointer text-primary">
                    <GrFormPrevious /> PREV
                  </button>
                  <button className="flex items-center gap-x-1 text-sm font-medium cursor-pointer text-primary">
                    NEXT <MdNavigateNext />
                  </button>
                </div>
              </div>

              <h3 className="text-xl xl:text-[26px] font-normal text-primary">
                Lightweight Puffer Jacket With a Hood
              </h3>
              <h4 className="text-[22px] font-medium text-primary mt-2">
                $449
              </h4>

              <p className="text-sm text-primary max-w-125 leading-6 pt-4 lg:pt-6.25">
                Phasellus sed volutpat orci. Fusce eget lore mauris vehicula
                elementum gravida nec dui. Aenean aliquam varius ipsum, non
                ultricies tellus sodales eu. Donec dignissim viverra nunc, ut
                aliquet magna posuere eget.
              </p>

              {/* Buttons Container */}
              <div className="flex items-center gap-x-2.5 lg:gap-x-5 my-6 lg:my-8">
                {/* Quantity Selector */}
                <div className="w-25 lg:w-31.25 h-12 lg:h-15 border-2 border-[#E4E4E4] flex items-center justify-between px-3 lg:px-5 shrink-0">
                  <button
                    onClick={handleMinus}
                    className="cursor-pointer text-xl text-secondary hover:text-black transition-colors"
                  >
                    -
                  </button>
                  <span className="text-primary font-medium">{count}</span>
                  <button
                    onClick={handlePlus}
                    className="cursor-pointer text-xl text-secondary hover:text-black transition-colors"
                  >
                    +
                  </button>
                </div>
                <Link
                  href="/cart"
                  className="h-12 flex items-center justify-center lg:w-70 lg:h-15 bg-primary text-white text-[12px] lg:text-sm lg:font-medium hover:bg-black/50 duration-300 cursor-pointer uppercase px-10 lg:px-0"
                >
                  ADD TO CART
                </Link>
              </div>

              {/* Wishlist & Share */}
              <div className="flex gap-x-8 lg:pb-8">
                <button className="text-primary text-[13px] font-medium flex items-center gap-x-2 uppercase relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-[80%] after:border-b-2 after:border-primary">
                  <FaRegHeart /> Add to wishlist
                </button>

                <button className="text-primary text-[13px] font-medium flex items-center gap-x-2 uppercase ">
                  <BsShare /> Share
                </button>
              </div>

              {/* Meta Info */}
              <div className="space-y-1 mt-8">
                <h5 className="text-sm text-secondary">
                  SKU: <span className="text-primary">N/A</span>
                </h5>
                <h5 className="text-sm text-secondary">
                  Categories:{" "}
                  <span className="text-primary">
                    Casual & Urban Wear, Jackets, Men
                  </span>
                </h5>
                <h5 className="text-sm text-secondary">
                  Tags:{" "}
                  <span className="text-primary">
                    biker, black, bomber, leather
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-x-10 xl:gap-x-19 gap-y-6 sm:gap-y-0 text-base font-medium text-secondary">
            {/* DESCRIPTION Button */}
            <button
              onClick={() => setActiveTab("description")}
              className={`relative hover:text-primary after:content-[''] after:block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300 cursor-pointer ${
                activeTab === "description"
                  ? "text-primary after:w-full after:bg-primary"
                  : "after:w-0 hover:after:w-full after:bg-primary"
              }`}
            >
              DESCRIPTION
            </button>

            {/* ADDITIONAL INFORMATION Button */}
            <button
              onClick={() => setActiveTab("additional")}
              className={`relative hover:text-primary after:content-[''] after:block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300 cursor-pointer ${
                activeTab === "additional"
                  ? "text-primary after:w-full after:bg-primary"
                  : "after:w-0 hover:after:w-full after:bg-primary"
              }`}
            >
              ADDITIONAL INFORMATION
            </button>

            {/* REVIEWS Button */}
            <button
              onClick={() => setActiveTab("reviews")}
              className={`relative hover:text-primary after:content-[''] after:block after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:transition-all after:duration-300 cursor-pointer ${
                activeTab === "reviews"
                  ? "text-primary after:w-full after:bg-primary"
                  : "after:w-0 hover:after:w-full after:bg-primary"
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
                    <h5 className="text-base font-medium text-primary">
                      Sed do eiusmod tempor incididunt ut labore
                    </h5>
                    <p className="text-sm text-primary w-full xl:w-232.5 leading-7.5 pt-6 lg:pt-11.25 text-justify lg:text-left">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                  <div className="mt-9.75 flex flex-col md:flex-row gap-y-8 md:gap-x-20 xl:gap-x-37.5">
                    <div className="">
                      <h4 className="text-base font-medium text-primary">
                        Why choose product?
                      </h4>
                      <div className="mt-6 lg:mt-10.75 space-y-3 lg:space-y-0">
                        <div className="flex items-center gap-x-2.5">
                          <div className="h-1.5 w-1.5 bg-[#C4C4C4] rounded-full"></div>
                          <p className="text-sm text-primary ">
                            Creat by cotton fibric with soft and smooth
                          </p>
                        </div>
                        <div className=" flex items-center gap-x-2.5">
                          <div className="h-1.5 w-1.5 bg-[#C4C4C4] rounded-full"></div>
                          <p className="text-sm text-primary ">
                            Simple, Configurable (e.g. size, color, etc.),
                            bundled
                          </p>
                        </div>
                        <div className="flex items-center gap-x-2.5">
                          <div className="h-1.5 w-1.5 bg-[#C4C4C4] rounded-full"></div>
                          <p className="text-sm text-primary ">
                            Downloadable/Digital Products, Virtual Products
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <h4 className="text-base font-medium text-primary">
                        Sample Number List
                      </h4>
                      <div className="mt-6 lg:mt-10.75 space-y-3 lg:space-y-0">
                        <div className="flex items-start gap-x-2.5">
                          <p className="text-sm text-primary ">
                            1 Create Store-specific attrittbutes on the fly
                          </p>
                        </div>
                        <div className=" flex items-start gap-x-2.5">
                          <p className="text-sm text-primary ">
                            2 Simple, Configurable (e.g. size, color, etc.),
                            bundled
                          </p>
                        </div>
                        <div className="flex items-start gap-x-2.5">
                          <p className="text-sm text-primary ">
                            3 Downloadable/Digital Products, Virtual Products
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-base font-medium text-primary pt-9.25">
                    Lining
                  </h4>
                  <p className="text-sm text-primary pb-4 lg:pb-0">
                    100% Polyester, Main: 100% Polyeste
                  </p>
                </div>
              )}

              {/* ADDITIONAL INFORMATION CONTENT */}
              {activeTab === "additional" && (
                <div className="flex flex-row gap-x-10 md:gap-x-16 lg:gap-x-22.5 my-8 lg:my-12.5 animate-fadeIn">
                  <div className="w-25 lg:w-20.5 space-y-5 lg:space-y-7.75">
                    <h4 className="text-base font-medium text-primary whitespace-nowrap">
                      Weight
                    </h4>
                    <h4 className="text-base font-medium text-primary whitespace-nowrap">
                      Dimensions
                    </h4>
                    <h4 className="text-base font-medium text-primary whitespace-nowrap">
                      Size
                    </h4>
                    <h4 className="text-base font-medium text-primary whitespace-nowrap">
                      Color
                    </h4>
                    <h4 className="text-base font-medium text-primary whitespace-nowrap">
                      Storage
                    </h4>
                  </div>
                  <div className="space-y-5 lg:space-y-7.75">
                    <h5 className="text-sm text-primary">1.25 kg</h5>
                    <h5 className="text-sm text-primary">90 x 60 x 90 cm</h5>
                    <h5 className="text-sm text-primary">XS, S, M, L, XL</h5>
                    <h5 className="text-sm text-primary">
                      Black, Orange, White
                    </h5>
                    <h5 className="text-sm text-primary leading-relaxed">
                      Relaxed fit shirt-style dress with a rugged
                    </h5>
                  </div>
                </div>
              )}

              {/* REVIEWS CONTENT */}
              {activeTab === "reviews" && (
                <div className="animate-fadeIn space-y-8">
                  {/* Review 1 */}
                  <div className="border-b-2 border-[#E4E4E4] pb-5.75">
                    <h4 className="text-base font-medium text-primary">
                      Reviews
                    </h4>
                    <div className="flex gap-x-4 md:gap-x-7.5 items-start md:items-center mt-6.5">
                      <div className="shrink-0 w-12 md:w-auto">
                        <Image
                          src={"/images/review.png"}
                          alt="vvv"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="w-full">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
                          <h5 className="text-sm text-primary">
                            Janice Miller
                          </h5>
                          <div className="flex text-yellow-400 mt-1 md:mt-0">
                            {[...Array(5)].map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-secondary block mt-1">
                          April 06, 2020
                        </span>
                      </div>
                    </div>
                    <p className="pt-5 md:pl-21 text-sm text-secondary w-full lg:w-210 leading-6">
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat
                      facere possimus, omnis voluptas assumenda est…
                    </p>
                  </div>

                  {/* Review 2 */}
                  <div className="my-7.5">
                    <div className="flex gap-x-4 md:gap-x-7.5 items-start md:items-center">
                      <div className="shrink-0 w-12 md:w-auto">
                        <Image
                          src={"/images/review.png"}
                          alt="vvv"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="w-full">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center w-full">
                          <h5 className="text-sm text-primary">
                            Benjam Porter
                          </h5>
                          <div className="flex text-yellow-400 mt-1 md:mt-0">
                            {[...Array(5)].map((_, i) => (
                              <span key={i}>★</span>
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-secondary block mt-1">
                          April 06, 2020
                        </span>
                      </div>
                    </div>
                    <p className="pt-5 md:pl-21 text-sm text-secondary w-full lg:w-210 leading-6">
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat
                      facere possimus, omnis voluptas assumenda est…
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mt-7 lg:mt-13.5">
            <div className="px-4 md:px-20 2xl:px-60">
              <h3 className="text-lg font-medium text-primary">
                Be the first to review “Message Cotton T-Shirt”
              </h3>
              <h4 className="text-sm text-primary py-3 lg:pb-7.5">
                Your email address will not be published. Required fields are
                marked *
              </h4>

              <div className="flex flex-col lg:flex-row lg:items-center gap-x-2 lg:mb-6.5">
                <span className="text-sm text-primary">Your rating *</span>
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
                    className="w-full border-2 border-[#E4E4E4] p-4.25 h-53.25 outline-none focus:border-primary text-sm text-secondary"
                  />
                </div>

                {/* Floating Label Name Input */}
                <div className="relative">
                  <label className="absolute -top-3 left-3 bg-white px-1 text-sm text-primary">
                    Name *
                  </label>
                  <input
                    type="text"
                    defaultValue="Ali"
                    className="w-full border border-primary p-4.25 outline-none"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    placeholder="Email address *"
                    className="w-full border-2 border-[#E4E4E4] text-sm text-secondary p-4.25 outline-none focus:border-primary"
                  />
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="mt-1 w-4 h-4"
                  />
                  <label className="text-sm text-secondary">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-primary text-white px-10 lg:px-0 text-sm font-medium h-12 lg:w-70 lg:h-15 cursor-pointer"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-9.5 mb-25 hidden lg:block px-10">
          <h3 className="text-[26px] text-primary">
            RELATED <span className="font-bold">PRODUCTS</span>
          </h3>
          <div className="mt-8.5 flex gap-x-7.5">
            <Product
              catagory={"Dresses"}
              itemName={"Cropped Faux Leather Jacket"}
              itemPrice={"29"}
            />
            <Product
              catagory={"Dresses"}
              itemName={"Calvin Shorts"}
              itemPrice={"62"}
            />
            <Product
              catagory={"Dresses"}
              itemName={"Kirby T-Shirt"}
              itemPrice={"17"}
            />
            <Product
              catagory={"Dresses"}
              itemName={"Cableknit Shawl"}
              itemPrice={"129"}
              discountPrice={"99"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default page;
