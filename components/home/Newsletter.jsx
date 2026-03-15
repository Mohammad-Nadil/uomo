import Image from 'next/image'
import React from 'react'
import I_1 from '@/public/images/I-1.png'

const Newsletter = () => {
  return (
    <>
      <section class="max-w-7xl mx-auto px-6 mt-20">
        <div class="grid md:grid-cols-2 gap-8">
          <div class="relative">
          <Image src={I_1} alt='' class="w-full"/>
          <div class="absolute bottom-10 left-10 text-white">
          <h3 class="text-sm">COLLECTION</h3>
          <h1 class="text-xl font-bold mb-4">SUNGLASSES MEN'S</h1>
          <button class="border-b border-white">SHOP NOW</button>
          </div>
             </div>
             <div class="relative">
          <Image src={I_1} alt='' class="w-full"/>
          <div class="absolute bottom-10 left-10 text-white">
          <h3 class="text-sm">COLLECTION</h3>
          <h1 class="text-xl font-bold mb-4">SUNGLASSES WOMEN'S</h1>
          <button class="border-b border-white">SHOP NOW</button>
          </div>
             </div>
        </div>
      </section>
    </>
  )
}

export default Newsletter
