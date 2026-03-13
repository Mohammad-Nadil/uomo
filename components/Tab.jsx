import Link from "next/link";
import React from "react";
import { FaHome, FaRegUserCircle } from "react-icons/fa";
import Container from "./Container";
import { Icon } from "lucide-react";
import { IoHomeOutline } from "react-icons/io5";
import { PiCoatHanger } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";

const Tab = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      link: "/",
      icon: IoHomeOutline,
    },
    {
      id: 2,
      title: "shop",
      link: "/shop",
      icon: PiCoatHanger,
    },
    {
      id: 3,
      title: "wishlist",
      link: "/",
      icon: CiHeart ,
    },
    {
      id: 4,
      title: "User",
      link: "/",
      icon: FaRegUserCircle ,
    },
  ];
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 w-screen  bg-white z-50">
      <Container className="flex items-center justify-around  w-full py-3">
        {links.map((item, index) => (
          <Link
            href={"/"}
            key={index}
            className="no-underline capitalize text-primary flex flex-col justify-center items-center"
          >
            <item.icon className="text-xl" />
            <span className="text-sm ">home</span>
          </Link>
        ))}
      </Container>
    </div>
  );
};

export default Tab;
