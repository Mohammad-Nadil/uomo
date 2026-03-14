import React from 'react'
import Image from 'next/image'
import img1 from '@/public/images/img1.png'
import Header from '../Header'

const Arrival = () => {
  return (
    <>
        <section class="max-w-7xl mx-auto px-6">
         <Header text="NEW ARRIVAL"/>
         <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
         <div>
         <Image src={img1} class="mx-auto"/>
         <h1 class="font-bold mt-4">AVIATOR CLASSIC</h1>
         <p class="text-gray-500">$499</p>
         </div>
         <div>
         <Image src={img1} class="mx-auto"/>
         <h1 class="font-bold mt-4">NEW WAYFARER CLASSIC</h1>
         <p class="text-gray-500">$399</p>
         </div>
         <div>
         <Image src={img1} class="mx-auto"/>
         <h1 class="font-bold mt-4">AVIATOR CLASSIC</h1>
         <p class="text-gray-500">$499</p>
         </div>
         <div>
         <Image src={img1} class="mx-auto"/>
         <h1 class="font-bold mt-4">NEW WAYFARER CLASSIC</h1>
         <p class="text-gray-500">$399</p>
         </div>
         </div>
         <div class="text-center text-lg font-semibold mt-10">
           <button class="group">
            SEE ALL PRODUCT <span class="block h-0.5 w-2/3 bg-black mt-1 transition-all duration-300 group-hover:w-full"></span>
           </button>
         </div>
         </section>
    </>
  )
}

export default Arrival
