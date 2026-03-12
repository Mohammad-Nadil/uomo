import React from "react";

const page = () => {
  return (
    <section className="py-25">
      {/* Container */}
      <div className="max-w-352.5 mx-auto">
        {/* Header */}
        <h3 className="text-[35px] text-[#222222] font-bold leading-12.5">
          SHIPPING AND CHECKOUT
        </h3>
        {/* Top Slider */}
        <div className="flex items-center py-12.5">
          <div className="border-b-2 border-[#222222] pb-3 w-117.5">
            <div className="flex items-center gap-x-2.5 text-lg text-[#222222] font-medium leading-6.5">
              <h5>01</h5>
              <h5>SHOPPING BAG</h5>
            </div>
            <p className="text-sm leading-7.5 text-[#767676] pl-7.5">
              Manage Your Items List
            </p>
          </div>
          <div className="border-b-2 border-[#222222] pb-3 w-117.5">
            <div className="flex flex-row items-center gap-x-2.5 text-lg text-[#222222] font-medium leading-6.5">
              <h5>02</h5>
              <h5>SHIPPING AND CHECKOUT</h5>
            </div>
            <p className="text-sm leading-7.5 text-[#767676] pl-8">
              Checkout Your Items List
            </p>
          </div>

          <div className="border-b-2 border-[#E4E4E4] pb-3 w-117.5">
            <div className="flex items-center gap-x-2.5 text-lg text-[#767676] font-medium leading-6.5">
              <h5>03</h5>
              <h5>CONFIRMATION</h5>
            </div>
            <p className="text-sm leading-7.5 text-[#767676] pl-8">
              Review And Submit Your Order
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex items-start">
          {/* Left */}
          <div className="">
            <h6 className="text-base font-medium text-[#222222] leading-6">
              BILLING DETAILS
            </h6>
            <div className="flex gap-x-7.5 mt-8.5">
              <input
                type="text"
                placeholder="First Name"
                className="placeholder:text-[#767676] placeholder:text-sm placeholder:leading-6 p-5 border-2 border-[#E4E4E4] w-112.5"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="placeholder:text-[#767676] placeholder:text-sm placeholder:leading-6 p-5 border-2 border-[#E4E4E4] w-112.5"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name (optional)"
              className="placeholder:text-[#767676] placeholder:text-sm placeholder:leading-6 p-5 border-2 border-[#E4E4E4] w-232.5 my-7.5"
            />
            <div className="relative w-232.5">
              <label
                htmlFor="email"
                className="absolute -top-3 left-4 bg-white pl-1 pr-3 text-sm leading-6 text-[#222222]"
              >
                Country / Region *
              </label>
              <select className="w-full border-2 border-[#222222] p-5 text-sm focus:outline-none">
                <option className="">Turkey</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Street Address *"
              className="placeholder:text-[#767676] placeholder:text-sm placeholder:leading-6 p-5 border-2 border-[#E4E4E4] w-232.5 mt-7.5"
            />
            <input
              type="text"
              className="placeholder:text-[#767676] placeholder:text-sm placeholder:leading-6 p-5 border-2 border-[#E4E4E4] w-232.5 mt-2.5"
            />
            <input
              type="text"
              placeholder="Town / City *"
              className="placeholder:text-[#767676] placeholder:text-sm placeholder:leading-6 p-5 border-2 border-[#E4E4E4] w-232.5 my-7.5"
            />
            <input
              type="text"
              placeholder="Postcode / ZIP *"
              className="placeholder:text-[#767676] placeholder:text-sm placeholder:leading-6 p-5 border-2 border-[#E4E4E4] w-232.5"
            />
            <input
              type="text"
              placeholder="Province *"
              className="placeholder:text-[#767676] placeholder:text-sm placeholder:leading-6 p-5 border-2 border-[#E4E4E4] w-232.5 my-7.5"
            />
            <input
              type="text"
              placeholder="Phone *"
              className="placeholder:text-[#767676] placeholder:text-sm placeholder:leading-6 p-5 border-2 border-[#E4E4E4] w-232.5"
            />
            <input
              type="email"
              placeholder="Your Mail"
              className="placeholder:text-[#767676] placeholder:text-sm placeholder:leading-6 p-5 border-2 border-[#E4E4E4] w-232.5 my-7.5"
            />
            <div className="flex items-center gap-x-2.5">
              <input type="checkbox" className="" />
              <p className="text-sm font-medium leading-6 text-[#222222]">
                CREATE AN ACCOUNT?
              </p>
            </div>
            <div className="flex items-center gap-x-2.5 mt-3 mb-6.5">
              <input type="checkbox" className="" />
              <p className="text-sm font-medium leading-6 text-[#222222]">
                SHIP TO A DIFFERENT ADDRESS?
              </p>
            </div>
            <textarea
              className="placeholder:text-[#767676] placeholder:text-sm placeholder:leading-6 p-5 border-2 border-[#E4E4E4] w-232.5 h-50"
              placeholder="Order Notes (optional)"
            ></textarea>
          </div>
          {/* Right */}
          <div className="">
            <div className="border-2 border-[#222222] px-10 pt-9.5 pb-7.5 w-105">
              <h6 className="text-base font-medium text-[#222222] leading-6 mb-8">
                YOUR ORDER
              </h6>
              <div className="flex items-center justify-between border-b border-[#E4E4E4] pb-3.5">
                <p className="text-sm text-[#222222] font-medium leading-6">
                  PRODUCT
                </p>
                <p className="text-sm text-[#222222] font-medium leading-6">
                  SUBTOTAL
                </p>
              </div>
              <div className="flex items-center justify-between pt-3.5">
                <p className="text-sm text-[#767676] font-medium leading-6">
                  Zessi Dresses x2
                </p>
                <p className="text-sm text-[#767676] font-medium leading-6">
                  $32.50
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
                <p className="text-sm text-[#767676] font-medium leading-6">
                  Kirby T-Shirt
                </p>
                <p className="text-sm text-[#767676] font-medium leading-6">
                  $29.90
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
                <p className="text-sm text-[#222222] font-medium leading-6">
                  SUBTOTAL
                </p>
                <p className="text-sm text-[#222222] font-medium leading-6">
                  $89.90
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
                <p className="text-sm text-[#222222] font-medium leading-6">
                  SHIPPING
                </p>
                <p className="text-sm text-[#222222] leading-6">
                  Free shipping
                </p>
              </div>
              <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
                <p className="text-sm text-[#222222] font-medium leading-6">
                  VAT
                </p>
                <p className="text-sm text-[#222222] font-medium leading-6">
                  $19
                </p>
              </div>
              <div className="flex items-center justify-between pt-4">
                <p className="text-sm text-[#222222] font-medium leading-6">
                  TOTAL
                </p>
                <p className="text-sm text-[#222222] font-medium leading-6">
                  $1319
                </p>
              </div>
            </div>
            <div className="border-2 border-[#E4E4E4] px-10 pt-9.5 pb-7.5 w-105 my-5">
              <div className="flex items-start gap-x-4">
                <input type="radio" />
                <p className="text-base text-[#222222] leading-6">
                  Direct bank transfer
                  <p className="mt-2 text-sm ">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference.Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </p>
              </div>
              <div className="flex items-start gap-x-4 py-5">
                <input type="radio" />
                <p className="text-base text-[#222222] leading-6">
                  Check payments
                </p>
              </div>
              <div className="flex items-start gap-x-4 pb-5">
                <input type="radio" />
                <p className="text-base text-[#222222] leading-6">
                  Cash on delivery
                </p>
              </div>
              <div className="flex items-start gap-x-4 pb-5">
                <input type="radio" />
                <p className="text-base text-[#222222] leading-6">PayPal</p>
              </div>
              <p className="text-xs text-[#222222] leading-6 ">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our{" "}
                <span className="text-[#C32929]">privacy policy.</span>
              </p>
              <button className="text-sm text-white font-medium text-center leading-6 py-5 w-full bg-[#222222] mt-5 cursor-pointer">
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
