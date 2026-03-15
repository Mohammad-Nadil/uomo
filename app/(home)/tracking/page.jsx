import CustomInp from "@/components/CustomInp";
import React from "react";

const page = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-white py-22.5">
      <div className="w-full lg:max-w-125 max-w-90 text-center">
        {/* Heading */}
        <h3 className="text-[35px] md:text-2xl font-bold leading-12.75 text-primary uppercase mb-8">
          Order Tracking
        </h3>

        {/* Instructions */}
        <p className="text-secondary text-sm md:text-xs leading-6 mb-5 max-w-105 mx-auto">
          To track your order please enter your Order ID in the box below and
          press the "Track" button. This was given to you on your receipt and in
          the confirmation email you should have received.
        </p>

        {/* Form - Standard HTML Actions */}
        <form action="/api/track" method="POST" className="space-y-5">
          {/* Order ID Input */}
          <div className="w-full">
            <CustomInp label="Order ID" type="text" />
            {/* <input
              type="text"
              name="orderId"
              placeholder=""
              required
              className="w-full border-2 border-[#E4E4E4] p-4 text-sm focus:outline-none focus:border-black placeholder:text-secondary"
            /> */}
          </div>

          {/* Billing Email Input with Border Label */}
          <div className="relative mt-7.5 mb-0">
            <CustomInp label="Billing email" type="email" />
            {/* <label
              htmlFor="email"
              className="absolute -top-3 left-4 bg-white pl-1 pr-3 text-sm leading-6 text-primary"
            >
              Billing email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email address"
              required
              className="w-full border-2 border-primary p-4 text-sm focus:outline-none"
            /> */}
          </div>

          {/* Track Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white font-medium py-5 mt-6 uppercase leading-6 text-sm"
          >
            Track
          </button>
        </form>
      </div>
    </section>
  );
};

export default page;
