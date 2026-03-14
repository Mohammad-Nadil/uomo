import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="py-25">
      {/* Container */}
      <div className="max-w-352.5 mx-auto">
        {/* Header */}
        <h3 className="text-[35px] text-primary font-bold leading-12.5 uppercase lg:text-left text-center">
          Order received
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
          <div className="border-b-2 border-primary pb-3 lg:w-117.5 w-fit my-3 lg:mt-0">
            <div className="flex items-start gap-x-2.5 text-lg text-primary font-medium lg:leading-6.5">
              <h5>02</h5>
              <div className="">
                <h5>SHIPPING AND CHECKOUT</h5>
                <p className="text-sm lg:leading-7.5 text-secondary font-normal">
                  Checkout Your Items List
                </p>
              </div>
            </div>
          </div>
          <div className="border-b-2 border-primary pb-3 lg:w-117.5 w-fit">
            <div className="flex items-start gap-x-2.5 text-lg text-primary font-medium lg:leading-6.5">
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
        {/* Content */}
        <div className="container mx-auto px-4 py-10">
          {/* Header Section */}
          <div className="max-w-md mx-auto text-center mb-10">
            <Image
              src={"/images/orderReceived.png"}
              width={80}
              height={80}
              alt={"order"}
              className="mx-auto"
            />
            <h4 className="text-primary text-2xl md:text-[35px] leading-tight mt-4">
              Your order is completed!
            </h4>
            <p className="text-sm text-secondary leading-6">
              Thank you. Your order has been received.
            </p>
          </div>

          {/* 1st Box: Order Summary */}
          <div className="mb-9 border-dashed max-w-4xl mx-auto border-2 border-primary py-8 px-6 md:px-11">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="font-medium">
                <p className="text-xs md:text-sm text-secondary leading-6 pb-1 tracking-wider">
                  Order Number
                </p>
                <p className="text-sm md:text-base text-primary">13119</p>
              </div>

              <div className="font-medium">
                <p className="text-xs md:text-sm text-secondary leading-6 pb-1 tracking-wider">
                  Date
                </p>
                <p className="text-sm md:text-base text-primary">27/11/2020</p>
              </div>

              <div className="font-medium">
                <p className="text-xs md:text-sm text-secondary leading-6 pb-1 tracking-wider">
                  Total
                </p>
                <p className="text-sm md:text-base text-primary">$40.10</p>
              </div>

              <div className="font-medium">
                <p className="text-xs md:text-sm text-secondary leading-6 pb-1 tracking-wider">
                  Payment Method
                </p>
                <p className="text-sm md:text-base text-primary">
                  Direct Bank Transfer
                </p>
              </div>
            </div>
          </div>

          {/* 2nd Box: Order Details */}
          <div className="border-2 border-primary px-6 md:px-10 pt-9.5 pb-7.5 max-w-4xl mx-auto">
            <h6 className="text-base font-medium text-primary leading-6 mb-8 uppercase tracking-widest">
              ORDER DETAILS
            </h6>

            {/* Table Header */}
            <div className="flex items-center justify-between border-b border-[#E4E4E4] pb-3.5">
              <p className="text-sm text-primary font-medium leading-6">
                PRODUCT
              </p>
              <p className="text-sm text-primary font-medium leading-6">
                SUBTOTAL
              </p>
            </div>

            {/* Product Items */}
            <div className="flex items-center justify-between pt-3.5">
              <p className="text-sm text-secondary font-medium leading-6">
                Zessi Dresses x2
              </p>
              <p className="text-sm text-secondary font-medium leading-6">
                $32.50
              </p>
            </div>
            <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
              <p className="text-sm text-secondary font-medium leading-6">
                Kirby T-Shirt
              </p>
              <p className="text-sm text-secondary font-medium leading-6">
                $29.90
              </p>
            </div>

            {/* Summary Lines */}
            {[
              { label: "SUBTOTAL", value: "$89.90" },
              { label: "SHIPPING", value: "Free shipping" },
              { label: "VAT", value: "$19" },
              { label: "PAYMENT METHOD", value: "Direct bank transfer" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-[#E4E4E4] py-4"
              >
                <p className="text-sm text-primary font-medium leading-6">
                  {item.label}
                </p>
                <p className="text-sm text-primary leading-6">{item.value}</p>
              </div>
            ))}

            {/* Final Total */}
            <div className="flex items-center justify-between pt-6">
              <p className="text-base text-primary font-medium  leading-6">
                TOTAL
              </p>
              <p className="text-lg text-primary font-medium  leading-6">
                $1319
              </p>
            </div>
          </div>
        </div>
        {/* vvvvvvvvvvvvv */}
      </div>
    </section>
  );
};

export default page;
