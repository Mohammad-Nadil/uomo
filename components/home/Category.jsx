import Image from 'next/image'
import React from 'react'
import img_1 from '@/public/images/images_1.png'

const Category = () => {
  return (
    <>
      <section class="max-w-7xl mx-auto px-6">
         <h1 class="text-2xl md:text-4xl text-center font-semibold mt-20 mb-10">
         Shop By <span class="font-bold">Shape</span>
         </h1>
         <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
         <div>
         <Image src={img_1} alt='' class="mx-auto"/>
         <h1 class="mt-2 font-semibold">SQUARE</h1>
         </div>
         <div>
         <Image src={img_1} alt='' class="mx-auto"/>
         <h1 class="mt-2 font-semibold">AVIATOR</h1>
         </div>
         <div>
         <Image src={img_1} alt='' class="mx-auto"/>
         <h1 class="mt-2 font-semibold">RECTANGULAR</h1>
         </div>
         <div>
         <Image src={img_1} alt='' class="mx-auto"/>
         <h1 class="mt-2 font-semibold">ROUNDED</h1>
         </div>
         <div>
         <Image src={img_1} alt='' class="mx-auto"/>
         <h1 class="mt-2 font-semibold">OVAL</h1>
         </div>
         <div>
         <Image src={img_1} alt='' class="mx-auto"/>
         <h1 class="mt-2 font-semibold">GEOMETRIC</h1>
         </div>
         </div>
         </section>
    </>
  )
}

export default Category
