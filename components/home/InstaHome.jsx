import Image from 'next/image'
import React from 'react'
import P_I from '@/public/images/P_I.png'

const InstaHome = () => {
  return (
    <div>
      <section className="relative mt-24">
         <Image src={P_I} alt='' className="w-full h-[350px] md:h-[450px] object-cover"/>
         <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
         <h1 className="text-xl md:text-3xl font-semibold mb-4">
         DON'T MISS THE CHANCE TO GET 40% OFF
         </h1>
         <p className="mb-6">Choose your favorite color</p>
         <div className="flex flex-col md:flex-row gap-3">
         <input
         type="text"
         placeholder="Your email address"
         class="border px-4 py-3 w-72"
         />
         <button className="bg-red-600 text-white px-6 py-3 hover:text-red-500 hover:bg-white hover:border">
         Join
         </button>
         </div>
         </div>
         </section>
    </div>
  )
}

export default InstaHome
