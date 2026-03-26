import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";

const ProductCard = ({ item = {},  }) => {
  return (
    <div className="flex-1 group">
      <div className="relative bg-gray-200 aspect-4/5 mb-3 overflow-hidden">
        <button className="absolute top-2 left-2 z-10 w-6 h-6 bg-white flex items-center justify-center text-gray-500 hover:text-red-600  shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-200">
          <IoCloseOutline size={16} />
        </button>

        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover  "
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>

      <div className="flex items-center justify-between mb-0.5">
        <p className="text-xs text-gray-400">{item.category}</p>
        <button className="text-gray-400 hover:text-red-600 transition-colors">
          <AiOutlineHeart size={16} />
        </button>
      </div>
      <p className="text-sm text-gray-800 font-medium leading-snug mb-0.5">
        {item.name}
      </p>
      <p className="text-sm text-gray-800">{item.price}</p>
    </div>
  );
};

export default ProductCard;
