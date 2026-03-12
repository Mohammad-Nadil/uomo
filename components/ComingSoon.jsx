import React from 'react'

const ComingSoon = () => {
  return (
    <>
      <section class="min-h-screen flex flex-col justify-center items-center text-center px-4">
    <h1 class="text-5xl font-extrabold md:text-7xl text-gray-900 mb-4">COMING SOON</h1>
    <p class="text-gray-500 max-w-xl mb-10">Sorry, we couldn't find the page you where looking for. We suggest that you return to home page.</p>
    <div class="flex gap-6 md:gap-10 text-center mb-12">
        <div>
            <p class="text-3xl md:text-4xl font-semibold">05</p>
            <span class="text-sm text-gray-500 font-bold">DAYS</span>
        </div>
        <div class="text-3xl font-bold">:</div>
        <div>
            <p class="text-3xl md:text-4xl font-semibold">07</p>
            <span class="text-sm text-gray-500 font-bold">HOURS</span>
        </div> <div class="text-3xl font-bold">:</div>
        <div> <p class="text-3xl md:text-4xl font-semibold">09</p>
            <span class="text-sm text-gray-500 font-bold">MINS</span>
        </div> <div class="text-3xl font-bold">:</div>
        <div> <p class="text-3xl md:text-4xl font-semibold">03</p>
            <span class="text-sm text-gray-500 font-bold">SEC</span>
        </div>
    </div>
    <div class="w-full max-w-xl flex flex-col md:flex-row gap-4">
     <input type="email" placeholder="Your email address" class="flex-1 border border-gray-300 px-5 py-3 outline-none" />
      <button class="bg-black text-white px-8 py-3 hover:bg-gray-800 transition"> JOIN </button> 
    </div>
  </section>
    </>
  )
}

export default ComingSoon