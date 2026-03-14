"use client";
import CustomInp from "@/components/CustomInp";
import React, { useState } from "react";

const Page = () => {
  
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-125 px-5 py-10 mx-auto">
        
        {/*  (LOGIN / REGISTER) */}
        <div className="flex justify-center gap-x-12 mb-10 border-b border-gray-100">
          <button
            onClick={() => setIsLogin(true)}
            className={`pb-2 text-sm font-semibold tracking-widest transition-all ${
              isLogin ? "border-b-2 border-black text-black" : "text-gray-400"
            }`}
          >
            LOGIN
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`pb-2 text-sm font-semibold tracking-widest transition-all ${
              !isLogin ? "border-b-2 border-black text-black" : "text-gray-400"
            }`}
          >
            REGISTER
          </button>
        </div>

        {/* --- Login Form --- */}
        {isLogin && (
          <div className="space-y-6">
            <CustomInp label="Username or email address *" type="text" />
            <CustomInp label="Password *" type="password" />
            
            <div className="flex items-center justify-between text-xs text-gray-500">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded" />
                <span>Remember me</span>
              </label>
              <a href="#" className="underline text-primary">Lost password?</a>
            </div>

            <button className="w-full bg-[#222] text-white py-4 text-sm font-bold tracking-widest hover:bg-black transition-colors uppercase">
              Log In
            </button>

            <p className="text-center text-sm text-gray-600 mt-6">
              No account yet?{" "}
              <span 
                onClick={() => setIsLogin(false)} 
                className="text-black border-b border-black cursor-pointer pb-0.5"
              >
                Create Account
              </span>
            </p>
          </div>
        )}

        {/* --- Register Form --- */}
        {!isLogin && (
          <div className="space-y-6">
            <CustomInp label="Username" type="text" />
            <CustomInp label="Email address *" type="email" />
            <CustomInp label="Password *" type="password" />
            
            <p className="text-[13px] text-gray-500 leading-relaxed py-2">
              Your personal data will be used to support your experience throughout this website, 
              to manage access to your account, and for other purposes described in our 
              privacy policy.
            </p>

            <button className="w-full bg-[#222] text-white py-4 text-sm font-bold tracking-widest hover:bg-black transition-colors uppercase">
              Register
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Page;