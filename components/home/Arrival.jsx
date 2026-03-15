import React from 'react'
import Image from 'next/image'
import img1 from '@/public/images/MP_1.png'
import Header from '../Header'

const Arrival = () => {
  return (
    <>
        <section className="max-w-7xl mx-auto px-6">
         <Header text="NEW ARRIVAL"/>
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center">
         <div>
         <Image src={img1} alt='img1' className="mx-auto"/>
         <h1 className="font-bold mt-4">AVIATOR CLASSIC</h1>
         <p className="text-gray-500">$499</p>
         </div>
         <div>
         <Image src={img1} alt='img1' className="mx-auto"/>
         <h1 className="font-bold mt-4">NEW WAYFARER CLASSIC</h1>
         <p className="text-gray-500">$399</p>
         </div>
         <div>
         <Image src={img1} alt='img1' className="mx-auto"/>
         <h1 className="font-bold mt-4">AVIATOR CLASSIC</h1>
         <p className="text-gray-500">$499</p>
         </div>
         <div>
         <Image src={img1} alt='img1' className="mx-auto"/>
         <h1 className="font-bold mt-4">NEW WAYFARER CLASSIC</h1>
         <p className="text-gray-500">$399</p>
         </div>
         </div>
         <div className="text-center text-lg font-semibold mt-10">
           <button className="group">
            SEE ALL PRODUCT <span className="block h-0.5 w-2/3 bg-black mt-1 transition-all duration-300 group-hover:w-full"></span>
           </button>
         </div>
         </section>
    </>
  )
}

export default Arrival
