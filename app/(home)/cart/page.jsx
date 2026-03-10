import Image from 'next/image'
import React from 'react'
import { RxCross2 } from "react-icons/rx";

const page = () => {
  return (
    <div className='py-25'>
      {/* Container */}
      <div className="max-w-352.5 mx-auto">
        {/* Header */}
        <h3 className='text-[35px] text-[#222222] font-bold leading-12.5'>CART</h3>
        {/* Top Slider */}
        <div className="flex items-center py-12.5">
          <div className="border-b-2 border-[#222222] pb-3 w-117.5">
            <div className="flex items-center gap-x-2.5 text-lg text-[#222222] font-medium leading-6.5">
              <h5>01</h5>
              <h5>SHOPPING BAG</h5>
            </div>
            <p className='text-sm leading-7.5 text-[#767676] pl-7.5'>Manage Your Items List</p>
          </div>
          <div className="border-b-2 border-[#E4E4E4] pb-3 w-117.5">

            <div className="flex flex-row items-center gap-x-2.5 text-lg text-[#767676] font-medium leading-6.5">
              <h5>02</h5>
              <h5>SHIPPING AND CHECKOUT</h5>
            </div>
            <p className='text-sm leading-7.5 text-[#767676] pl-8'>Checkout Your Items List</p>
          </div>

          <div className="border-b-2 border-[#E4E4E4] pb-3 w-117.5">
            <div className="flex items-center gap-x-2.5 text-lg text-[#767676] font-medium leading-6.5">
              <h5>03</h5>
              <h5>CONFIRMATION</h5>
            </div>
            <p className='text-sm leading-7.5 text-[#767676] pl-8'>Review And Submit Your Order</p>
          </div>
        </div>
        {/* Add Content */}
        <div className="flex justify-between items-start">
          {/* Left Side */}
          <div className="">
            <div className="flex items-center pb-2.5 border-b-2 border-[#E4E4E4] text-[#222222] text-sm font-medium leading-6">
              <h6 className='pr-106.75'>PRODUCT</h6>
              <h6 className='pr-22.75'>PRICE</h6>
              <h6 className='pr-24.75'>QUANTITY</h6>
              <h6 className='pr-19.5'>SUBTOTAL</h6>
            </div>
            {/* Products */}
            <div className="mt-7.5 border-b border-[#E4E4E4] pb-7.5 flex items-center">
              <Image src="/images/cart.png" alt="cart" width={120} height={120} />
              <p className='text-base text-[#222222] leading-5.75 ml-7.5 mr-61.75'>Zessi Dresses</p>
              <p className='text-base text-[#767676] leading-5.75 mr-25'>$99</p>
              <div className="border-2 border-[#E4E4E4] py-3.5 px-5 flex items-center mr-14.5">
                <p className="text-base text-[#767676] leading-6 cursor-pointer">-</p>
                <p className="text-base text-[#767676] px-6 leading-6">3</p>
                <p className="text-base text-[#767676] leading-6 cursor-pointer">+</p>
              </div>
              <p className='text-base text-[#222222] font-medium leading-5.75 mr-23.5'>$399</p>
              <RxCross2 className='justify-end text-[#767676] text-base cursor-pointer' />
            </div>
            <div className="mt-7.5 border-b border-[#E4E4E4] pb-7.5 flex items-center">
              <Image src="/images/cart.png" alt="cart" width={120} height={120} />
              <div className="ml-7.5 mr-58.5">
                <p className='text-base text-[#222222] leading-5.75'>Kirby T-Shirt</p>
                <p className='text-sm text-[#767676] leading-6 w-26'>Color:  Yellow
                  Size: L</p></div>
              <p className='text-base text-[#767676] leading-5.75 mr-25'>$99</p>
              <div className="border-2 border-[#E4E4E4] py-3.5 px-5 flex items-center mr-14.5">
                <p className="text-base text-[#767676] leading-6 cursor-pointer">-</p>
                <p className="text-base text-[#767676] px-6 leading-6">3</p>
                <p className="text-base text-[#767676] leading-6 cursor-pointer">+</p>
              </div>
              <p className='text-base text-[#222222] font-medium leading-5.75 mr-23.5'>$399</p>
              <RxCross2 className='justify-end text-[#767676] text-base cursor-pointer' />
            </div>
            <div className="mt-7.5 border-b border-[#E4E4E4] pb-7.5 flex items-center">
              <Image src="/images/cart.png" alt="cart" width={120} height={120} />
              <p className='text-base text-[#222222] leading-5.75 ml-7.5 mr-58.5'>Cableknit Shawl</p>
              <p className='text-base text-[#767676] leading-5.75 mr-25'>$99</p>
              <div className="border-2 border-[#E4E4E4] py-3.5 px-5 flex items-center mr-14.5">
                <p className="text-base text-[#767676] leading-6 cursor-pointer">-</p>
                <p className="text-base text-[#767676] px-6 leading-6">3</p>
                <p className="text-base text-[#767676] leading-6 cursor-pointer">+</p>
              </div>
              <p className='text-base text-[#222222] font-medium leading-5.75 mr-23.5'>$399</p>
              <RxCross2 className='justify-end text-[#767676] text-base cursor-pointer' />
            </div>
            {/* Cupon */}
            <div className="flex justify-between mt-8">
              <div className="border-2 border-[#E4E4E4] py-4 px-5 flex justify-between">
                <input type="text" placeholder='Coupon Code' className='border-none outline-none w-[185px]' />
                <button className='cursor-pointer text-sm font-medium text-[#222222] leading-6 ml-10'>APPLY COUPON</button>
              </div>
              <button className="cursor-pointer text-sm font-medium text-[#222222] leading-6 px-13.75 pt-5.5 pb-3.5 bg-[#E4E4E4]">UPDATE CART</button>
            </div>
          </div>
          {/* Right Side */}
          <div className="">
            <div className="px-10 pt-9.5 pb-5.5 border-[#222222] border-2">
              <h5 className='text-base text-[#222222] font-medium leading-5.75'>CART TOTALS</h5>
              <div className="flex mt-8 border-b border-[#E4E4E4] pb-3">
                <p className='text-sm text-[#222222] font-medium leading-6 mr-33.5'>SUBTOTAL</p>
                <p className='text-sm text-[#222222] font-medium leading-6 mr-24.5'>$1300</p>
              </div>

              <div className="flex mt-4 border-b border-[#E4E4E4] pb-6">
                <p className='text-sm text-[#222222] font-medium leading-6 mr-33.5'>SHIPPING</p>
                <div className="">
                  <div className="flex items-center">
                    <input type="checkbox" className='border-[#E4E4E4] border' />
                    <p className='text-sm text-[#222222] leading-6 mr-6.5 ml-3'>Free shipping</p>
                  </div>
                  <div className="flex items-center py-3">
                    <input type="checkbox" className='border-[#E4E4E4] border' />
                    <p className='text-sm text-[#222222] leading-6 mr-6.5 ml-3'>Flat rate: $49</p>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className='border-[#E4E4E4] border' />
                    <p className='text-sm text-[#222222] leading-6 mr-6.5 ml-3'>Local pickup: $8</p>
                  </div>
                  <p className='ml-0.5 text-sm leading-6 text-[#222222] pt-2.5 pb-1.5'>Shipping to AL.</p>
                  <button className='-ml-2 text-sm font-medium leading-6 text-[#222222] relative after:content-"" after:absolute after:left-1 after:bottom-0 after:w-17 after:h-0.5 after:bg-[#222222] cursor-pointer'>CHANGE ADDRESS</button>
                </div>
              </div>

              <div className="flex mt-4 border-b border-[#E4E4E4] pb-3">
                <p className='text-sm text-[#222222] font-medium leading-6 mr-43.5'>VAT</p>
                <p className='text-sm text-[#222222] font-medium leading-6 mr-28.75'>$19</p>
              </div>

              <div className="flex mt-4">
                <p className='text-sm text-[#222222] font-medium leading-6 mr-39.75'>TOTAL</p>
                <p className='text-sm text-[#222222] font-medium leading-6 mr-25'>$1319</p>
              </div>
            </div>

            <button className="text-sm text-white font-medium leading-6 pl-34.75 pr-29.5 pt-5.25 pb-3.75 bg-[#222222] mt-5 cursor-pointer">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div >
  )
}

export default page