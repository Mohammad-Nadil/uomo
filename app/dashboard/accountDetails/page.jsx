"use client";

import { useState } from "react";

const navItems = [
  { label: "DASHBOARD", id: "dashboard" },
  { label: "ORDERS", id: "orders" },
  { label: "DOWNLOADS", id: "downloads" },
  { label: "ADDRESSES", id: "addresses" },
  { label: "ACCOUNT DETAILS", id: "account-details" },
  { label: "WISHLIST", id: "wishlist" },
  { label: "LOGOUT", id: "logout" },
];

export default function MyAccountPage() {
  const [active, setActive] = useState("orders");
  const username = "alifn58";

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-5xl mx-auto px-6 py-12">
      
        <h1
          className="text-2xl font-extrabold tracking-tight text-gray-900 mb-10 uppercase"
       
        >
          My Account
        </h1>

        <div className="flex gap-16">
   
          <nav className="w-44 shrink-0">
            <ul className="space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActive(item.id)}
                    className={`text-xs font-semibold tracking-widest uppercase transition-colors duration-150 text-left
                      ${
                        active === item.id
                          ? "text-red-600 border-b-2 border-red-600 pb-0.5 "
                          : "text-gray-500 hover:text-gray-900"
                      }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex-1 pt-0.5">
            <p className="text-sm text-gray-700 leading-relaxed">
              Hello{" "}
              <span className="font-bold text-gray-900">{username}</span>{" "}
              <span>(not</span>
              <span className="font-bold text-gray-900"> {username}?</span>{" "}
              <button className="text-gray-500 underline hover:text-red-600 transition-colors text-sm">
                Log out
              </button>
              <span className="text-gray-400">)</span>
            </p>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-xl">
              From your account dashboard you can view your{" "}
              <a
                href="#"
                className="underline text-gray-700 hover:text-red-600 transition-colors"
              >
                recent orders
              </a>
              , manage your{" "}
              <a
                href="#"
                className="underline text-gray-700 hover:text-red-600 transition-colors"
              >
                shipping and billing addresses
              </a>
              , and{" "}
              <a
                href="#"
                className="underline text-gray-700 hover:text-red-600 transition-colors"
              >
                edit your password and account details
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
