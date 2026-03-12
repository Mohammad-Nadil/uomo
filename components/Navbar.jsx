import React from "react";
import Container from "./Container";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

export const NavLinks = ({ title, link, className, children }) => {
  return (
    <li className={`text-sm font-medium relative ${className}`}>
      <Link href={link}>{title}</Link>
      {children}
    </li>
  );
};

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

  const subMenu = [
    {
      title: "shop pages",
      subMenus: [
        "default",
        "topbar",
        "collapse",
        "simple",
        "mansory",
        "default",
        "images left",
        "image grid",
        "image slider",
        "images stacked",
      ],
    },
    {
      title: "other pages",
      subMenus: [
        "collection",
        "lookBook",
        "categories page",
        "shopping page",
        "wishlist",
        "order tracking",
        "checkout",
      ],
    },
    {
      title: "elements",
      subMenus: [
        "accordion",
        "pricing table",
        "google maps",
        "message box",
        "progress bars",
        "charts",
        "icon box",
        "products tabs",
        "products grid",
        "tabs",
        "video players",
        "team",
      ],
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
            <NavLinks link={"/"} title={"home"}>
              <div className={`top-full left-0  absolute z-50 flex  gap-44`}>
                {subMenu.map((item, index) => (
                  <ul className="w-max flex flex-col gap-y-2">
                    <p className="font-medium text-sm text-secondary uppercase ">
                      {item.title}
                    </p>
                    {item.subMenus.map((item, indes) => (
                      <li className="text-primary leading-normal cursor-pointer w-fit h-auto text-sm capitalize relative before:w-0 before:duration-300 hover:before:w-full before:h-0.5 before:absolute before:top-full before:left-0 before:bg-primary  before:z-10 ">
                        {item}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </NavLinks>
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
