import React from "react";

const ComingSoon = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-extrabold md:text-7xl text-gray-900 mb-4">
          COMING SOON
        </h1>
        <p className="text-gray-500 max-w-xl mb-10">
          Sorry, we couldn't find the page you where looking for. We suggest
          that you return to home page.
        </p>
        <div className="flex gap-6 md:gap-10 text-center mb-12">
          <div>
            <p className="text-3xl md:text-4xl font-semibold">05</p>
            <span className="text-sm text-gray-500 font-bold">DAYS</span>
          </div>
          <div className="text-3xl font-bold">:</div>
          <div>
            <p className="text-3xl md:text-4xl font-semibold">07</p>
            <span className="text-sm text-gray-500 font-bold">HOURS</span>
          </div>
          <div className="text-3xl font-bold">:</div>
          <div>
            <p className="text-3xl md:text-4xl font-semibold">09</p>
            <span className="text-sm text-gray-500 font-bold">MINS</span>
          </div>
          <div className="text-3xl font-bold">:</div>
          <div>
            <p className="text-3xl md:text-4xl font-semibold">03</p>
            <span className="text-sm text-gray-500 font-bold">SEC</span>
          </div>
        </div>
        <div className="w-full max-w-xl flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 border border-gray-300 px-5 py-3 outline-none"
          />
          <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition">
            JOIN
          </button>
        </div>
      </section>
    </>
  );
};

export default ComingSoon;
