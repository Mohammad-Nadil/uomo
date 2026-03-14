import Image from "next/image";
import React from "react";
import { RxCross2 } from "react-icons/rx";

const page = () => {
  return (
    <section className="py-25">
      {/* Container */}
      <div className="max-w-352.5 mx-auto">
        {/* Header */}
        <h3 className="text-[35px] text-primary font-bold leading-12.5">
          CART
        </h3>
        {/* Top Slider */}
        <div className="flex lg:flex-row flex-col items-start py-12.5">
          <div className="border-b-2 border-primary pb-3 lg:w-117.5 w-fit">
            <div className="flex items-start gap-x-2.5 text-lg text-primary font-medium lg:leading-6.5">
              <h5>01</h5>
              <div className="">
                <h5>SHOPPING BAG</h5>
                <p className="text-sm lg:leading-7.5 text-secondary font-normal">
                  Manage Your Items List
                </p>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-[#E4E4E4] pb-3 lg:w-117.5 w-fit my-3 lg:mt-0">
            <div className="flex items-start gap-x-2.5 text-lg text-secondary font-medium lg:leading-6.5">
              <h5>02</h5>
              <div className="">
                <h5>SHIPPING AND CHECKOUT</h5>
                <p className="text-sm lg:leading-7.5 text-secondary font-normal">
                  Checkout Your Items List
                </p>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-[#E4E4E4] pb-3 lg:w-117.5 w-fit">
            <div className="flex items-start gap-x-2.5 text-lg text-secondary font-medium lg:leading-6.5">
              <h5>03</h5>
              <div className="">
                <h5>CONFIRMATION</h5>
                <p className="text-sm lg:leading-7.5 text-secondary font-normal">
                  Review And Submit Your Order
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Add Content */}
        <div className="container mx-auto px-4 py-10">
          <div className="flex lg:flex-row flex-col gap-10 items-start">
            {/* Left Side: Product Table */}
            <div className="w-full lg:w-2/3 overflow-x-auto">
              {/* Header - Desktop Only */}
              <div className="hidden md:flex items-center pb-2.5 border-b-2 border-[#E4E4E4] text-[#222222] text-sm font-medium">
                <h6 className="w-2/5">PRODUCT</h6>
                <h6 className="w-1/5 text-center">PRICE</h6>
                <h6 className="w-1/5 text-center">QUANTITY</h6>
                <h6 className="w-1/5 text-right pr-10">SUBTOTAL</h6>
              </div>

              {/* Product Items */}
              {[
                { name: "Zessi Dresses", price: 99, sub: 399, meta: "" },
                {
                  name: "Kirby T-Shirt",
                  price: 99,
                  sub: 399,
                  meta: "Color: Yellow Size: L",
                },
                { name: "Cableknit Shawl", price: 99, sub: 399, meta: "" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="mt-7.5 border-b border-[#E4E4E4] pb-7.5 flex flex-col md:flex-row items-center gap-4 md:gap-0"
                >
                  {/* Product Info */}
                  <div className="flex items-center w-full md:w-2/5">
                    <div className="flex-shrink-0">
                      <Image
                        src="/images/cart.png"
                        alt="cart"
                        width={100}
                        height={100}
                        className="bg-[#F5F5F5]"
                      />
                    </div>
                    <div className="ml-5">
                      <p className="text-base text-[#222222] font-medium">
                        {item.name}
                      </p>
                      {item.meta && (
                        <p className="text-xs text-[#767676] mt-1">
                          {item.meta}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <p className="w-full md:w-1/5 text-center text-base text-[#767676] flex justify-between md:block">
                    <span className="md:hidden font-medium">Price:</span> $
                    {item.price}
                  </p>

                  {/* Quantity Toggle */}
                  <div className="w-full md:w-1/5 flex justify-center">
                    <div className="border-2 border-[#E4E4E4] py-2 px-4 flex items-center">
                      <span className="cursor-pointer px-2">-</span>
                      <span className="px-6">3</span>
                      <span className="cursor-pointer px-2">+</span>
                    </div>
                  </div>

                  {/* Subtotal & Remove */}
                  <div className="w-full md:w-1/5 flex items-center justify-between md:justify-end gap-5">
                    <p className="text-base text-[#222222] font-medium">
                      ${item.sub}
                    </p>
                    <RxCross2 className="text-[#767676] text-lg cursor-pointer hover:text-red-500" />
                  </div>
                </div>
              ))}

              {/* Coupon & Update Section */}
              <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
                <div className="border-2 border-[#E4E4E4] py-3 px-5 flex w-full md:w-auto">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="border-none outline-none bg-transparent w-full"
                  />
                  <button className="whitespace-nowrap text-sm font-medium text-primary ml-4">
                    APPLY COUPON
                  </button>
                </div>
                <button className="w-full md:w-auto text-sm font-medium text-primary px-10 py-4 bg-[#E4E4E4] hover:bg-gray-300 transition-all">
                  UPDATE CART
                </button>
              </div>
            </div>

            {/* Right Side: Cart Totals */}
            <div className="w-full lg:w-1/3">
              <div className="px-6 md:px-10 pt-9 pb-6 border-primary border-2">
                <h5 className="text-base text-primary font-medium mb-8">
                  CART TOTALS
                </h5>

                <div className="flex justify-between border-b border-[#E4E4E4] pb-4">
                  <p className="text-sm font-medium">SUBTOTAL</p>
                  <p className="text-sm font-medium">$1300</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between mt-4 border-b border-[#E4E4E4] pb-6">
                  <p className="text-sm font-medium mb-3 md:mb-0">SHIPPING</p>
                  <div className="space-y-3">
                    {[
                      "Free shipping",
                      "Flat rate: $49",
                      "Local pickup: $8",
                    ].map((method, i) => (
                      <div className="flex gap-x-3" key={i}>
                        <input
                          type="checkbox"
                          name="shipping"
                          className="accent-primary"
                        />
                        <label
                          key={i}
                          className="flex items-center justify-end gap-3 cursor-pointer"
                        >
                          <span className="text-sm text-primary">{method}</span>
                        </label>
                      </div>
                    ))}
                    <p className="text-sm text-right text-primary pt-2">
                      Shipping to AL.
                    </p>
                    <button className="block ml-auto text-sm font-medium cursor-pointer custom-underline">
                      CHANGE ADDRESS
                    </button>
                  </div>
                </div>

                <div className="flex justify-between py-4 border-b border-[#E4E4E4]">
                  <p className="text-sm font-medium">VAT</p>
                  <p className="text-sm font-medium">$19</p>
                </div>

                <div className="flex justify-between pt-5">
                  <p className="text-sm font-medium">TOTAL</p>
                  <p className="text-sm font-medium">$1319</p>
                </div>
              </div>

              <button className="w-full text-sm text-white font-medium py-5 bg-primary mt-5 hover:bg-black transition-all">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
        {/* ccccccccccccc */}
      </div>
    </section>
  );
};

export default page;
