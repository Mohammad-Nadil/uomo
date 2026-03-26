import CustomInp from "@/components/CustomInp";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="py-25">
      {/* Container */}
      <div className="max-w-352.5 mx-auto">
        {/* Header */}
        <h3 className="text-[35px] text-primary font-bold leading-12.5 text-center lg:text-left">
          SHIPPING AND CHECKOUT
        </h3>
        {/* Top Slider */}
        <div className="flex lg:flex-row flex-col items-start py-12.5 ">
          <div className="border-b-2 border-primary pb-3 lg:w-117.5 w-fit mx-auto">
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
          <div className="border-b-2 border-primary pb-3 lg:w-117.5 w-fit my-3 lg:mt-0 mx-auto">
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
          <div className="border-b-2 border-[#E4E4E4] pb-3 lg:w-117.5 w-fit mx-auto">
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

        {/* Content */}
        <div className="lg:flex-row flex-col flex items-start justify-between">
          <div className="lg:w-232.5 w-95 mx-auto">
            <h6 className="text-base font-medium mt-10">BILLING DETAILS</h6>

            {/* Name */}
            <div className="flex gap-7.5 mt-8.5">
              <CustomInp label="First Name" name="firstName" />
              <CustomInp label="Last Name" name="lastName" />
            </div>

            <CustomInp
              label="Company Name (optional)"
              name="company"
              className="my-7.5"
            />

            {/* Select (same thakbe) */}
            <div className="relative w-full my-7.5">
              <label className="absolute -top-3 left-4 bg-white px-2 text-sm">
                Country / Region *
              </label>
              <select className="w-full border-2 border-gray-300 p-5 text-sm focus:border-primary outline-none">
                <option>Bangladesh</option>
                <option>Turkey</option>
              </select>
            </div>

            <CustomInp label="Street Address *" name="address1" />
            <CustomInp
              label="Apartment, suite (optional)"
              name="address2"
              className="mt-2.5"
            />

            <CustomInp label="Town / City *" name="city" className="my-7.5" />
            <CustomInp label="Postcode / ZIP *" name="zip" />
            <CustomInp label="Province *" name="province" className="my-7.5" />
            <CustomInp label="Phone *" name="phone" />
            <CustomInp
              label="Your Email"
              type="email"
              name="email"
              className="my-7.5"
            />

            {/* Checkbox */}
            <div className="flex items-center gap-2.5">
              <input type="checkbox" />
              <p className="text-sm font-medium">CREATE AN ACCOUNT?</p>
            </div>

            <div className="flex items-center gap-2.5 mt-3 mb-6.5">
              <input type="checkbox" />
              <p className="text-sm font-medium">
                SHIP TO A DIFFERENT ADDRESS?
              </p>
            </div>

            {/* Textarea */}
            <textarea
              placeholder="Order Notes (optional)"
              className="w-full h-50 border-2 border-gray-300 p-5 outline-none focus:border-primary"
            />
          </div>

          {/* Right */}
          <div className="lg:w-105 w-95 mx-auto mt-5 lg:mt-0">
            <div className="border-2 border-primary px-10 pt-9.5 pb-7.5 w-full">
              <h6 className="text-base font-medium text-primary leading-6 mb-8">
                YOUR ORDER
              </h6>
              <div className="flex items-center justify-between border-b border-[#E4E4E4] pb-3.5">
                <p className="text-sm text-primary font-medium leading-6">
                  PRODUCT
                </p>
                <p className="text-sm text-primary font-medium leading-6">
                  SUBTOTAL
                </p>
              </div>
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
              <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
                <p className="text-sm text-primary font-medium leading-6">
                  SUBTOTAL
                </p>
                <p className="text-sm text-primary font-medium leading-6">
                  $89.90
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
                <p className="text-sm text-primary font-medium leading-6">
                  SHIPPING
                </p>
                <p className="text-sm text-primary leading-6">Free shipping</p>
              </div>
              <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
                <p className="text-sm text-primary font-medium leading-6">
                  VAT
                </p>
                <p className="text-sm text-primary font-medium leading-6">
                  $19
                </p>
              </div>
              <div className="flex items-center justify-between pt-4">
                <p className="text-sm text-primary font-medium leading-6">
                  TOTAL
                </p>
                <p className="text-sm text-primary font-medium leading-6">
                  $1319
                </p>
              </div>
            </div>
            <div className="border-2 border-[#E4E4E4] px-10 pt-9.5 pb-7.5 w-full my-5">
              <div className="flex items-start gap-x-4">
                <input type="radio" />
                <p className="text-base text-primary leading-6">
                  Direct bank transfer
                  <p className="mt-2 text-sm">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference.Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </p>
              </div>
              <div className="flex items-start gap-x-4 py-5">
                <input type="radio" />
                <p className="text-base text-primary leading-6">
                  Check payments
                </p>
              </div>
              <div className="flex items-start gap-x-4 pb-5">
                <input type="radio" />
                <p className="text-base text-primary leading-6">
                  Cash on delivery
                </p>
              </div>
              <div className="flex items-start gap-x-4 pb-5">
                <input type="radio" />
                <p className="text-base text-primary leading-6">PayPal</p>
              </div>
              <p className="text-xs text-primary leading-6 ">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
                <span className="text-[#C32929]">privacy policy.</span>
              </p>
            </div>
            <Link href="/order-received" className="text-sm  text-white font-medium text-center leading-6 py-5 w-full! bg-primary hover:bg-black/50 duration-300 cursor-pointer">
              PLACE ORDER
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
