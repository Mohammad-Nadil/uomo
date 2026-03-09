import React from 'react'

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
            <p className='text-sm leading-7.5 text-[#767676] pl-8'>Manage Your Items List</p>
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
      </div>
    </div>
  )
}

export default page