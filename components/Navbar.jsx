import React from "react";
import Container from "./Container";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

const Navbar = () => {
  const menus = [
    {
      title: "home",
    },
    {
      title: "shop",
    },
    {
      title: "collection",
    },
    {
      title: "journal",
    },
    {
      title: "lookbook",
    },
    {
      title: "pages",
    },
  ];

  return (
    <nav>
      <Container className={`py-7.5 flex items-center justify-between`}>
        <div className="main flex items-center gap-x-14">
          <div className="logo">
            <Image src={logo} alt="logo" />
          </div>
          <ul className="menu flex gap-x-11 items-center capitalize">
            {menus.map((item, index) => (
              <li key={index} className="text-sm font-medium">
                <Link href={item.title}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="btns flex gap-x-7.5 text-xl">
          <div className="hover:cursor-pointer">
            <CiSearch />
          </div>
          <div className="hover:cursor-pointer">
            <CiUser />
          </div>
          <div className="hover:cursor-pointer">
            <CiHeart />
          </div>
          <div className="hover:cursor-pointer">
            <IoBagOutline />
          </div>
          <div className="hover:cursor-pointer">
            <HiOutlineBars3CenterLeft />
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
