import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className='py-25'>
      {/* Container */}
      <div className="max-w-352.5 mx-auto">
        {/* Header */}
        <h3 className='text-[35px] text-[#222222] font-bold leading-12.5 uppercase'>Order received</h3>
        {/* Top Slider */}
        <div className="flex items-center py-12.5 border-b-2 border-[#222222] pb-3">
          <div className="w-117.5">
            <div className="flex items-start gap-x-2.5 text-lg text-[#222222] font-medium leading-6.5">
              <h5>01</h5>
              <div className="">
                <h5>SHOPPING BAG</h5>
                <p className='text-sm leading-7.5 text-[#767676] font-normal'>Manage Your Items List</p>
              </div>
            </div>
          </div>
          <div className="w-117.5">
            <div className="flex flex-row items-start gap-x-2.5 text-lg text-[#222222] font-medium leading-6.5">
              <h5>02</h5>
              <div className="">
                <h5>SHIPPING AND CHECKOUT</h5>
                <p className='text-sm leading-7.5 text-[#767676] font-normal'>Checkout Your Items List</p>
              </div>
            </div>
          </div>
          <div className="w-117.5">
            <div className="flex items-start gap-x-2.5 text-lg text-[#222222] font-medium leading-6.5">
              <h5>03</h5>
              <div className="">
                <h5>CONFIRMATION</h5>
                <p className='text-sm leading-7.5 text-[#767676] font-normal'>Review And Submit Your Order</p>
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="w-92 mx-auto mt-13.5 text-center">
          <Image src={"/images/orderReceived.png"} width={80} height={80} alt={"order"} className='mx-auto' />
          <h4 className='text-[#222222] text-[35px] leading-12.75'>Your order is completed!</h4>
          <p className='text-sm text-[#767676] leading-6'>Thank you. Your order has been received.</p>
        </div>
        {/* 1st Box */}
        <div className="my-9 border-dashed w-225 mx-auto border-2 border-[#222222] py-10 px-11">
          <div className="flex items-center">
            <div className="font-medium mr-21.75">
              <p className='text-sm text-[#767676] leading-6 pb-1'>Order Number</p>
              <p className='text-base text-[#222222] leading-5.75'>13119</p>
            </div>

            <div className="font-medium mr-21.75">
              <p className='text-sm text-[#767676] leading-6 pb-1'>Date</p>
              <p className='text-base text-[#222222] leading-5.75'>27/11/2020</p>
            </div>
            <div className="font-medium mr-21.75">
              <p className='text-sm text-[#767676] leading-6 pb-1'>Total</p>
              <p className='text-base text-[#222222] leading-5.75'>$40.10</p>
            </div>
            <div className="font-medium mr-21.75">
              <p className='text-sm text-[#767676] leading-6 pb-1'>Payment Method</p>
              <p className='text-base text-[#222222] leading-5.75'>Direct Bank Transfer</p>
            </div>
          </div>
        </div>
        {/* 2nd Box */}
        <div className="border-2 border-[#222222] px-10 pt-9.5 pb-7.5 w-225 mx-auto">
          <h6 className='text-base font-medium text-[#222222] leading-6 mb-8'>ORDER DETAILS</h6>
          <div className="flex items-center justify-between border-b border-[#E4E4E4] pb-3.5">
            <p className='text-sm text-[#222222] font-medium leading-6'>PRODUCT</p>
            <p className='text-sm text-[#222222] font-medium leading-6'>SUBTOTAL</p>
          </div>
          <div className="flex items-center justify-between pt-3.5">
            <p className='text-sm text-[#767676] font-medium leading-6'>Zessi Dresses x2</p>
            <p className='text-sm text-[#767676] font-medium leading-6'>$32.50</p>
          </div>
          <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
            <p className='text-sm text-[#767676] font-medium leading-6'>Kirby T-Shirt</p>
            <p className='text-sm text-[#767676] font-medium leading-6'>$29.90</p>
          </div>
          <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
            <p className='text-sm text-[#222222] font-medium leading-6'>SUBTOTAL</p>
            <p className='text-sm text-[#222222] font-medium leading-6'>$89.90</p>
          </div>
          <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
            <p className='text-sm text-[#222222] font-medium leading-6'>SHIPPING</p>
            <p className='text-sm text-[#222222] leading-6'>Free shipping</p>
          </div>
          <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
            <p className='text-sm text-[#222222] font-medium leading-6'>VAT</p>
            <p className='text-sm text-[#222222] font-medium leading-6'>$19</p>
          </div>
          <div className="flex items-center justify-between border-b border-[#E4E4E4] py-4">
            <p className='text-sm text-[#222222] font-medium leading-6'>PAYMENT METHOD</p>
            <p className='text-sm text-[#222222] font-medium leading-6'>Direct bank transfer</p>
          </div>
          <div className="flex items-center justify-between pt-4">
            <p className='text-sm text-[#222222] font-medium leading-6'>TOTAL</p>
            <p className='text-sm text-[#222222] font-medium leading-6'>$1319</p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default page