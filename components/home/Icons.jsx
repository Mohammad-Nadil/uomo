import Image from 'next/image'
import React from 'react'
import Icon1 from '@/public/icons/shipping.png'
import Icon2 from '@/public/icons/headphone.png'
import Icon3 from '@/public/icons/shield.png'
import Icon4 from '@/public/icons/gift.png'

const Icons = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-16">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
         <div className="flex gap-3">
         <Image src={Icon1} alt='1' className="w-8 h-8"/>
         <div>
         <h3 className="font-semibold">Fast and Free Delivery</h3>
         <p className="text-sm text-gray-500">
         Free delivery for all orders over $140
         </p>
         </div>
         </div>
         <div className="flex gap-3">
         <Image src={Icon2} alt='2' className="w-8 h-8"/>
         <div>
         <h3 className="font-semibold">24/7 Customer Support</h3>
         <p className="text-sm text-gray-500">
         Friendly 24/7 customer support
         </p>
         </div>
         </div>
         <div className="flex gap-3">
         <Image src={Icon3} alt='3' className="w-8 h-8"/>
         <div>
         <h3 className="font-semibold">Money Back Guarantee</h3>
         <p className="text-sm text-gray-500">
         We return money within 30 days
         </p>
         </div>
         </div>
         <div className="flex gap-3">
         <Image src={Icon4} alt='4' className="w-8 h-8"/>
         <div>
         <h3 className="font-semibold">Member Gifts</h3>
         <p className="text-sm text-gray-500">
         Discount coupons weekends
         </p>
         </div>
         </div>
         </div>
         </section>
    </>
  )
}

export default Icons
