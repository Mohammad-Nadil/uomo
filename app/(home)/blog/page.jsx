import React from 'react'
import img1 from '@/public/images/img1.png'
import img2 from '@/public/images/images_1.png'
import img3 from '@/public/images/images_2.png'
import Image from 'next/image'

const page = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center uppercase">
        5 Tips to Increase Your Online Sales
      </h1>
      <div className="flex justify-center gap-6 text-gray-500 text-sm mt-2 mb-6">
        <p>BY ADMIN</p>
        <p>APRIL 05, 2020</p>
        <p>TRENDS</p>
      </div>

      <div className="w-full mb-6">
        <Image src={img1} alt="" className="w-full h-auto object-cover"/>
      </div>
      <p className="text-gray-600 leading-7 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit sapien. Tempor lectus ornare quis mi vel. Nibh euismod donec elit posuere lobortis consequat faucibus aliquam metus. Ornare consequat, vulputate sit maecenas mauris urna sed fringilla. Urna fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus. Facilisis quis vulputate sem gravida lacus, justo placerat.
      </p>
      <h2 className="text-xl font-semibold mb-3">
        Sed do eiusmod tempor incididunt ut labore
      </h2>

      <p className="text-gray-600 leading-7 mb-8">
        Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great.
      </p>

      <div className="grid md:grid-cols-2 gap-10 mb-8">

        <div>
          <h3 className="font-semibold mb-3">Why choose product?</h3>

          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Create by cotton fabric with soft and smooth</li>
            <li>Simple, Configurable (e.g. size, color, etc.)</li>
            <li>Downloadable/Digital Products</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Sample Number List</h3>

          <ol className="list-decimal pl-5 space-y-2 text-gray-600">
            <li>Create Store-specific attributes</li>
            <li>Simple, Configurable products</li>
            <li>Downloadable/Digital Products</li>
          </ol>
        </div>

      </div>

      <p className="text-gray-600 leading-7 mb-8">
        She'd years darkness days. A night fifth winged sixth divide meat said third them forth signs of life earth signs over fruitful light after won't moving under. Thing yielding upon seed. Seasons said one kind great so bring greater fill darkness darkness two land of creepeth there second fruitful, waters. Make don't void years Gathering gathering divide fill.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Image src={img2} alt="" className="w-full h-auto object-cover"/>
        <Image src={img3} alt="" className="w-full h-auto object-cover"/>
      </div>

      <p className="text-gray-600 leading-7 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit sapien. Tempor lectus ornare quis mi vel. Nibh euismod donec elit posuere lobortis consequat faucibus aliquam metus. Ornare consequat, vulputate sit maecenas mauris urna sed fringilla. Urna fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus. Facilisis quis vulputate sem gravida lacus, justo placerat.
      </p>

      <p className="text-gray-600 leading-7 mb-10">
        She'd years darkness days. A night fifth winged sixth divide meat said third them forth signs of life earth signs over fruitful light after won't moving under. Thing yielding upon seed. Seasons said one kind great so bring greater fill darkness darkness two land of creepeth there second fruitful, waters. Make don't void years Gathering gathering divide fill.
      </p>

      <div className="flex gap-4 text-sm font-medium">
        <a href="#" className="px-4 py-2 border rounded bg-blue-800 text-white hover:bg-gray-400 hover:text-black">
          Share on Facebook
        </a>
        <a href="#" className="px-4 py-2 border rounded bg-blue-500 text-white hover:bg-gray-400 hover:text-black-500">
          Share on Twitter
        </a>
        <a href="#" className="px-4 py-2 border rounded bg-red-500 text-white hover:bg-gray-400 hover:text-black">
          Share on Pinterest
        </a>
        <a href="#" className="px-4 py-2 border rounded bg-black text-white hover:bg-gray-400 hover:text-black">
          +
        </a>
      </div>

    </div>
  )
}

export default page