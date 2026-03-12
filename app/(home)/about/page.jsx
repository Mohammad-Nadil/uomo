import React from 'react'
import aboutImg from "@/public/images/about-bannar.png"
import about2 from "@/public/images/about2.png"
import Image from 'next/image'
import { Headset, ShieldCheck, TruckElectric } from 'lucide-react'

const page = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <h1 className="text-center text-2xl font-semibold uppercase mb-8">
        About Uomo
      </h1>
      <div className="mb-10">
        <Image src={aboutImg} alt="" className="w-full object-cover"/>
      </div>
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-lg font-semibold uppercase mb-4">
          Our Story
        </h2>

        <p className="text-gray-600 leading-7 mb-4">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <p className="text-gray-600 leading-7">
          Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-10 max-w-3xl mx-auto mb-14">

        <div>
          <h3 className="font-semibold mb-2">Our Mission</h3>
          <p className="text-gray-600 text-sm leading-6">
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Our Vision</h3>
          <p className="text-gray-600 text-sm leading-6">
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">

        <Image src={about2} alt="" className="w-full object-cover"/>

        <div>
          <h2 className="font-semibold uppercase mb-4">
            The Company
          </h2>

          <p className="text-gray-600 leading-7 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras. Eget fames tincidunt leo, sed vitae, pretium interdum. Non massa, imperdiet nunc sit sapien. Tempor lectus ornare quis mi vel. 
          </p>

          <p className="text-gray-600 leading-7">
            Nibh euismod donec elit posuere lobortis consequat faucibus aliquam metus. Ornare consequat, vulputate sit maecenas mauris urna sed fringilla. Urna fermentum iaculis pharetra, maecenas dui nullam nullam rhoncus. Facilisis quis vulputate sem gravida lacus, justo placerat.
          </p>
        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-10 border-t pt-10">

        <div className="flex items-start gap-4">
          <TruckElectric className="text-gray-700"/>
          <div>
            <h3 className="font-semibold text-sm uppercase">
              Fast and Free Delivery
            </h3>
            <p className="text-gray-500 text-sm">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Headset className="text-gray-700"/>
          <div>
            <h3 className="font-semibold text-sm uppercase">
              24/7 Customer Support
            </h3>
            <p className="text-gray-500 text-sm">
              Friendly 24/7 customer support
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <ShieldCheck className="text-gray-700"/>
          <div>
            <h3 className="font-semibold text-sm uppercase">
              Money Back Guarantee
            </h3>
            <p className="text-gray-500 text-sm">
              We return money within 30 days
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default page