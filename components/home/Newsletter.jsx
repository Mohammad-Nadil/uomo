import Image from 'next/image'
import React from 'react'
import I_1 from '@/public/images/I-1.png'

const Newsletter = () => {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
          <Image src={I_1} alt='1' className="w-full"/>
          <div className="absolute bottom-10 left-10 text-white">
          <h3 className="text-sm">COLLECTION</h3>
          <h1 className="text-xl font-bold mb-4">SUNGLASSES MEN'S</h1>
          <button className="border-b border-white">SHOP NOW</button>
          </div>
             </div>
             <div className="relative">
          <Image src={I_1} alt='2' class="w-full"/>
          <div className="absolute bottom-10 left-10 text-white">
          <h3 className="text-sm">COLLECTION</h3>
          <h1 className="text-xl font-bold mb-4">SUNGLASSES WOMEN'S</h1>
          <button className="border-b border-white">SHOP NOW</button>
          </div>
             </div>
        </div>
      </section>
    </>
  )
}

export default Newsletter
