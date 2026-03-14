import React from 'react'

export default function address() {
  const address = {
    name: "Daniel Robinson",
    street: "1418 River Drive, Suite 35 Cottonhall, CA 9622",
    country: "United States",
    email: "sale@uomo.com",
    phone: "+1 246-345-0695",
  };

  return (
    <div className="w-full">

   
      <p className="text-sm text-gray-500 mb-8">
        The following addresses will be used on the checkout page by default.
      </p>


      <div className="flex gap-16">


        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-sm font-bold tracking-widest uppercase text-gray-900">
              Billing Address
            </h2>
            <a href="#" className="text-xs font-semibold tracking-widest uppercase text-gray-600 underline hover:text-red-600 transition-colors">
              Edit
            </a>
          </div>

          <p className="text-sm text-gray-700">{address.name}</p>
          <p className="text-sm text-gray-700">{address.street}</p>
          <p className="text-sm text-gray-700 mb-4">{address.country}</p>
          <p className="text-sm text-gray-700">{address.email}</p>
          <p className="text-sm text-gray-700">{address.phone}</p>
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <h2 className="text-sm font-bold tracking-widest uppercase text-gray-900">
              Shipping Address
            </h2>
            <a href="#" className="text-xs font-semibold tracking-widest uppercase text-gray-600 underline hover:text-red-600 transition-colors">
              Edit
            </a>
          </div>

          <p className="text-sm text-gray-700">{address.name}</p>
          <p className="text-sm text-gray-700">{address.street}</p>
          <p className="text-sm text-gray-700 mb-4">{address.country}</p>
          <p className="text-sm text-gray-700">{address.email}</p>
          <p className="text-sm text-gray-700">{address.phone}</p>
        </div>

      </div>
    </div>
  );
}