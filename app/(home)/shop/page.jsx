'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, Heart, Share2 } from 'lucide-react';

const page = () => {
  const [quantity, setQuantity] = useState(3);
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-sans">
      {/* Top Navigation */}
      <div className="flex justify-between items-center mb-8 text-xs md:text-sm tracking-widest text-gray-500 font-medium">
        <p>HOME / THE SHOP</p>
        <div className="flex gap-4">
          <button className="flex items-center hover:text-black uppercase">
            <ChevronLeft size={16} /> PREV
          </button>
          <button className="flex items-center hover:text-black uppercase">
            NEXT <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">

        {/* Left Side: Image Gallery */}
        <div className="w-full lg:w-3/5 flex gap-4">
          {/* Vertical Thumbnails (Hidden on small screens) */}
          <div className="hidden md:flex flex-col gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-22 h-22 shrink-0 cursor-pointer overflow-hidden">
                <Image src={"/images/shop1.png"} alt='ok' height={90} width={90} /></div>
            ))}
          </div>

          {/* Main Image Container */}
          < div className="relative grow aspect-square md:aspect-auto" >
            {/* <div className=" animate-pulse" /> Placeholder */}
            < Image src={"/images/shop.png"} alt='ok' height={700} width={712} />
            {/* Gallery Navigation Buttons */}
            <button button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-sm" >
              <ChevronLeft size={20} />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-sm">
              <ChevronRight size={20} />
            </button>
            <button className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-sm">
              <Maximize2 size={18} />
            </button>
          </div>
        </div>

        {/* Right Side: Product Info */}
        <div className="w-full lg:w-2/5">
          <h1 className="text-2xl md:text-3xl text-gray-800 font-light mb-4">
            Lightweight Puffer Jacket With a Hood
          </h1>
          <p className="text-2xl font-medium mb-6">$449</p>

          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            Phasellus sed volutpat orci. Fusce eget lore mauris vehicula elementum gravida nec dui.
            Aenean aliquam varius ipsum, non ultricies tellus sodales eu. Donec dignissim viverra
            nunc, ut aliquet magna posuere eget.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex items-center border border-gray-200 px-4 py-3 justify-between sm:w-32">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-lg">-</button>
              <span className="text-sm font-medium">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="text-lg">+</button>
            </div>
            <button className="bg-[#1a1a1a] text-white text-xs font-bold tracking-widest px-10 py-4 grow hover:bg-black transition-colors uppercase">
              Add to Cart
            </button>
          </div>

          {/* Wishlist and Share */}
          <div className="flex gap-6 border-b border-gray-100 pb-8 mb-8">
            <button className="flex items-center gap-2 text-xs font-bold tracking-widest hover:text-gray-500 uppercase">
              <Heart size={16} /> Add to Wishlist
            </button>
            <button className="flex items-center gap-2 text-xs font-bold tracking-widest hover:text-gray-500 uppercase">
              <Share2 size={16} /> Share
            </button>
          </div>

          {/* Meta Information */}
          <div className="space-y-2 text-[11px] md:text-xs tracking-wider font-medium">
            <p className="text-gray-400">SKU: <span className="text-gray-600">N/A</span></p>
            <p className="text-gray-400 uppercase">Categories:
              <span className="text-gray-600"> Casual & Urban Wear, Jackets, Men</span>
            </p>
            <p className="text-gray-400 uppercase">Tags:
              <span className="text-gray-600"> biker, black, bomber, leather</span>
            </p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default page