import React from 'react'
import LookbookImage from '@/public/images/images_1.png'
import Image from 'next/image'
const page = () => {
  return (
    <div>
       <section class="max-w-7xl mx-auto px-6 py-16">
      <h2 class="text-3xl font-semibold mb-10">LOOKBOOK</h2>
      <div class="grid grid-cols-12 grid-rows-12 gap-4">
        <div class="bg-gray-100 col-span-6 row-span-3 aspect-7/4 ">
          <div class="text-black h-full w-full flex justify-center">
            <div class="w-1/2 h-full flex flex-col justify-end items-start p-6">
                <p class="text-sm">STARTING AT $39</p>
                <h3 class="text-lg font-semibold">Men's Sportswear</h3>
            </div>
            <Image src={LookbookImage} alt="" class="w-4/5 h-full object-cover"/>
          </div>
        </div>
        <div class="col-span-6 row-span-6 col-start-7 ">
          <div class=" text-black h-full w-full relative z-10">
            <Image src={LookbookImage} alt="" class="w-full h-full object-cover aspect-7/8 absolute z-10"/>
            <div class="absolute bottom-6 left-6  z-10" >
              <p class="text-sm">STARTING AT $39</p>
              <h3 class="text-lg font-semibold">Men's Sportswear</h3>
            </div>
          </div>
        </div>
        <div class="bg-gray-100 col-span-6 row-span-3 row-start-4 aspect-7/4">
          <div class="h-full w-full flex justify-center text-black">
            <div class="w-1/2 h-full flex flex-col justify-end items-start p-6">
              <p class="text-sm">STARTING AT $21</p>
              <h3 class="text-lg font-semibold">Slim Fit Cotton Shorts</h3>
            </div>
            <Image src={LookbookImage} alt="" class="w-1/2 h-full object-cover"/>
          </div>
        </div>
        <div class="col-span-6 row-span-6 row-start-7">
          <div class="text-black h-full w-full relative z-10">
            <Image src={LookbookImage} alt="" class="w-full h-full object-cover aspect-7/8 absolute z-10"/>
            <div class="absolute bottom-6 left-6 z-10">
              <p class="text-sm">STARTING AT $39</p>
              <h3 class="text-lg font-semibold">Knee-length Cotton Shorts</h3>
            </div>
          </div>
        </div>
        <div class="col-span-6 row-span-3 col-start-7 row-start-7 aspect-7/4">
          <div class="bg-gray-100 h-full w-full flex justify-center text-black">
            <div class="w-1/2 h-full flex flex-col justify-end items-start p-6">
              <p class="text-sm">STARTING AT $19</p>
              <h3 class="text-lg font-semibold">Canvas Trainers</h3>
            </div>
            <Image src={LookbookImage} alt="" class="w-1/2 h-full object-cover"/>
          </div>
        </div>
        <div class="bg-gray-100 col-span-6 row-span-3 col-start-7 row-start-10 aspect-7/4">
          <div class="h-full w-full flex justify-center text-black">
            <div class="w-1/2 h-full flex flex-col justify-end items-start p-6">
              <p class="text-sm">STARTING AT $49</p>
              <h3 class="text-lg font-semibold">Slim Fit Cotton Pants</h3>
            </div>
            <Image src={LookbookImage} alt="" class="w-4/5 h-full object-cover"/>
          </div>
        </div>
      </div>
      <div class="text-center text-lg font-semibold mt-10">
        <button class="group">
          SHOW MORE
          <span class="block h-0.5 w-2/3 bg-black mt-1 transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    </section>
    </div>
  )
}

export default page