import Image from "next/image";
import React from "react";
import Icon1 from "@/public/icons/shipping.png";
import Icon2 from "@/public/icons/headphone.png";
import Icon3 from "@/public/icons/shield.png";
import Icon4 from "@/public/icons/gift.png";

const features = [
  {
    icon: Icon1,
    title: "Fast and Free Delivery",
    desc: "Free delivery for all orders over $140",
  },
  {
    icon: Icon2,
    title: "24/7 Customer Support",
    desc: "Friendly 24/7 customer support",
  },
  {
    icon: Icon3,
    title: "Money Back Guarantee",
    desc: "We return money within 30 days",
  },
  {
    icon: Icon4,
    title: "Member Gifts",
    desc: "Discount coupons weekends",
  },
];

const Icons = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
          <div key={index} className="flex gap-3">
            <Image src={item.icon} alt={item.title} className="w-8 h-8" />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Icons;
