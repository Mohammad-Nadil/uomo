import React from 'react';

const orders = [
  {
    id: '#2418',
    date: 'October 27, 2020',
    status: 'On hold',
    total: '$1,200.65 for 3 items',
  },
  {
    id: '#2418',
    date: 'October 27, 2020',
    status: 'On hold',
    total: '$1,200.65 for 3 items',
  },
  {
    id: '#2418',
    date: 'October 27, 2020',
    status: 'On hold',
    total: '$1,200.65 for 3 items',
  },
  {
    id: '#2418',
    date: 'October 27, 2020',
    status: 'On hold',
    total: '$1,200.65 for 3 items',
  },
];

const OrdersPage = () => {
  return (
    <div className="w-full">
      <div className=" bg-gray-100 px-4 py-3 grid grid-cols-7">
        <span className="col-span-1 text-xs font-semibold tracking-widest uppercase text-gray-600 ">
          Order
        </span>
        <span className="col-span-2 text-xs font-semibold tracking-widest uppercase text-gray-600">
          Date
        </span>
        <span className="col-span-1 text-xs font-semibold tracking-widest uppercase text-gray-600">
          Status
        </span>
        <span className="col-span-2 text-xs font-semibold tracking-widest uppercase text-gray-600">
          Total
        </span>
        <span className="col-span-1 text-xs font-semibold tracking-widest uppercase text-gray-600 ">
          Actions
        </span>
      </div>

      {orders.map((order, i) => (
        <div
          key={i}
          className=" grid grid-cols-7 items-center px-4 py-4 border-b border-gray-100"
        >
          <span className="grid col-span-1">
            <a
              href="#"
              className="text-gray-700 underline hover:text-red-600 transition-colors font-medium text-sm"
            >
              {order.id}
            </a>
          </span>
          <span className="grid col-span-2 text-sm text-gray-600">
            {order.date}
          </span>
          <span className="grid col-span-1 text-sm text-gray-600">
            {order.status}
          </span>
          <span className="grid col-span-2 text-sm text-gray-600">
            {order.total}
          </span>
          <span className="grid col-span-1">
            <button className="w-4/5  bg-gray-900 text-white text-xs font-bold tracking-widest uppercase px-6 py-4 hover:bg-red-600 transition-colors duration-200">
              VIEW
            </button>
          </span>
        </div>
      ))}
    </div>
  );
};

export default OrdersPage;
