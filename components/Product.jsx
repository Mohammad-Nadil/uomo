"use client";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";
import Image from "next/image";

const Product = ({ catagory, itemName, itemPrice, discountPrice }) => {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <>
      <div className="w-75 relative group">
        <div className="relative overflow-hidden">
          <Image
            src={"/images/product.png"}
            alt="vv"
            width={300}
            height={400}
          />
          {/* Badge Start */}

          {/* Badge End */}

          {/* Add To Cart Start */}
          <div className="w-70 bg-white pt-4 pb-2.5 text-center mx-auto absolute bottom-[10%] left-1/2 -translate-x-1/2 translate-y-[50%] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 ease-in-out duration-500">
            <h2 className="text-sm font-medium text-primary">ADD TO CART</h2>
          </div>
          {/* Add To Cart End*/}
        </div>

        {/* Product Description Start */}
        <div className="mt-3.5">
          <div className="flex justify-between items-center">
            <p className="text-sm text-second">{catagory}</p>

            <div
              onClick={() => setIsLiked(!isLiked)}
              className="cursor-pointer"
            >
              {isLiked ? (
                <FaHeart className="text-red cursor-pointer" size={14} />
              ) : (
                <FaHeart className="text-second cursor-pointer" size={14} />
              )}
            </div>
          </div>
          <p className="text-base font-medium text-primary pt-0.5">
            {itemName}
          </p>
          <div className="flex gap-2 items-center">
            {discountPrice ? (
              <>
                <p className="text-base text-second line-through">
                  ${itemPrice}
                </p>
                <p className="text-base font-medium text-red ">
                  ${discountPrice}
                </p>
              </>
            ) : (
              <p className="text-base text-primary">${itemPrice}</p>
            )}
          </div>
        </div>
        {/* Product Description End */}
      </div>
    </>
  );
};

export default Product;
