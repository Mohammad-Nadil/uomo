"use client";
import React, { useState } from "react";
import Container from "./Container";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import Image from "next/image";
import placeholder from "@/public/images/img1.png";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Search, User } from "lucide-react";
import CustomInput from "./CustomInp";

export const NavLinks = ({ title, link, className, children }) => {
  return (
    <li
      className={`text-xs md:text-sm font-medium relative group custom-underline ${className}`}
    >
      <Link href={link}>{title}</Link>
      {children}
    </li>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const mobileMenus = [
    {
      title: "home",
      subMenus: ["default", "home minimal", "home modern"],
    },
    {
      title: "shop",
      subMenus: ["shop main", "shop list", "product detail"],
    },
    {
      title: "collection",
      subMenus: ["new arrivals", "best sellers", "limited edition"],
    },
    {
      title: "journal",
      subMenus: ["blog default", "single post", "featured articles"],
    },
    {
      title: "lookbook",
      subMenus: ["lookbook grid", "lookbook masonry", "editor picks"],
    },
    {
      title: "pages",
      subMenus: ["about us", "contact us", "faq", "store location", "404 page"],
    },
  ];
  const subMenusHome = [
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
  const subMenusPage = [
    {
      title: "",
      subMenus: [
        "about",
        "contact us",
        "store location",
        "faq",
        "coming soon",
        "404 page",
      ],
    },
  ];
  const subMenusJournal = [
    {
      title: "blog styles",
      subMenus: [
        "alternative",
        "small images",
        "blog chess",
        "mansory grid",
        "infinit scrolling feature",
        "with background",
        "blog flat",
        "default flat",
        "blog mask",
      ],
    },
    {
      title: "single post ",
      subMenus: [
        "standart post",
        "image post",
        "video post",
        "audio post",
        "gallery post",
      ],
    },
    {
      title: "navigation",
      subMenus: ["simple", "image background"],
    },
  ];
  const languages = [
    "United Kingdom | English",
    "United States | English",
    "Bangla | বাংলা",
    "Arabic | العربية",
    "Urdu | اردو",
  ];
  const currencies = ["USD", "EUR", "BDT"];

  return (
    <nav className="overflow-x-clip sticky top-0 z-999 bg-white">
      <Container
        className={`h-14 sm:h-auto md:py-5 2xl:py-7.5 flex items-center justify-between`}
      >
        <div
          onClick={() => setOpen(!open)}
          className="menu sm:hidden text-2xl "
        >
          <HiOutlineBars3CenterLeft />
        </div>
        <div className="main flex items-center gap-6 xl:gap-x-14">
          <div className="logo ">
            <Image src={logo} alt="logo" />
          </div>
          <ul className="menu hidden sm:flex gap-3 md:gap-5 xl:gap-x-11 items-center capitalize">
            <NavLinks
              link={"/"}
              title={"home"}
              className={"static! hover:before:w-0!"}
            >
              <div
                className={`bottom-0 w-full px-3 pb-10 translate-y-full left-1/2 -translate-x-1/2  absolute z-50  opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 bg-white`}
              >
                <Container className="flex justify-between  xl:gap-44 ">
                  {subMenusHome.map((item, index) => (
                    <ul key={index} className="w-max flex flex-col gap-y-2">
                      <p className="font-medium text-sm text-secondary uppercase  ">
                        {item.title}
                      </p>
                      {item.subMenus.map((item, index) => (
                        <li
                          key={index}
                          className="text-primary leading-normal cursor-pointer w-fit h-auto text-xs md:text-sm capitalize relative custom-underline "
                        >
                          <Link href={"/"}>{item}</Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                  <div className="card hidden sm:block  relative w-60 lg:w-100 aspect-square xl:aspect-41/45">
                    <Image
                      className="absolute -z-10"
                      fill
                      src={placeholder}
                      alt="placeholder"
                    />
                    <div className="text h-full w-full p-7.5 flex flex-col items-start justify-end gap-y-2  ">
                      <h2 className="text-2xl font-medium text-primary">
                        new <br /> horizon
                      </h2>
                      <Link
                        href={"/"}
                        className="text-primary  cursor-pointer w-fit text-sm capitalize relative custom-underline "
                      >
                        shop now
                      </Link>
                    </div>
                  </div>
                </Container>
              </div>
            </NavLinks>
            <NavLinks link={"/"} title={"shop"} />
            <NavLinks link={"/"} title={"collection"} />
            <NavLinks
              link={"/"}
              title={"journal"}
              className={" hover:before:w-40"}
            >
              <div
                className={`top-[200%] left-0 -translate-x-1/2 lg:translate-x-0  px-3 pb-10 absolute z-50 flex  gap-20 xl:gap-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 bg-white`}
              >
                {subMenusJournal.map((item, index) => (
                  <ul key={index} className="w-max flex flex-col gap-y-2">
                    <p className="font-medium text-sm text-secondary uppercase  ">
                      {item.title}
                    </p>
                    {item.subMenus.map((item, index) => (
                      <li
                        key={index}
                        className="text-primary leading-normal cursor-pointer w-fit h-auto text-xs md:text-sm capitalize relative custom-underline "
                      >
                        <Link href={"/"}>{item}</Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </NavLinks>
            <NavLinks link={"/"} title={"lookbook"} />
            <NavLinks
              link={"/"}
              title={"pages"}
              className={" hover:before:w-40"}
            >
              <div
                className={`top-[200%] left-0  px-3 pb-10 absolute z-50 flex  gap-20 xl:gap-44 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-300 bg-white`}
              >
                {subMenusPage.map((item, index) => (
                  <ul key={index} className="w-max flex flex-col gap-y-2">
                    <p className="font-medium text-sm text-secondary uppercase  ">
                      {item.title}
                    </p>
                    {item.subMenus.map((item, index) => (
                      <li
                        key={index}
                        className="text-primary leading-normal cursor-pointer w-fit h-auto text-xs md:text-sm capitalize relative custom-underline  "
                      >
                        <Link href={"/"}>{item}</Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </NavLinks>
          </ul>
        </div>
        <div className="btns flex gap-3 md:gap-5 xl:gap-x-7.5 text-2xl">
          <div className="hover:cursor-pointer hidden sm:block">
            <div onClick={() => setShowSearch(!showSearch)} className="">
              <CiSearch />
            </div>
            <div className={``}>
              <Container>
                <p className="text-sm text-secondary uppercase">
                  what are you looking for ?
                </p>
                <div className="input">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search"
                    className="w-full border-b border-secondary outline-0 placeholder:text-sm text-sm py-2"
                  />
                </div>
              </Container>
            </div>
          </div>
          <Link
            href={"/dashboard"}
            className="hover:cursor-pointer hidden sm:block"
          >
            <CiUser />
          </Link>
          <div className="hover:cursor-pointer hidden sm:block">
            <CiHeart />
          </div>
          <div className="hover:cursor-pointer relative">
            <IoBagOutline />
            <span className="absolute top-full left-full -translate-x-4/5 -translate-y-1/2 sm:-translate-1/2  w-4 aspect-square text-[10px] sm:text-xs flex items-center justify-center rounded-full bg-accent text-white">
              0
            </span>
          </div>
          <div className="hover:cursor-pointer hidden sm:block">
            <HiOutlineBars3CenterLeft />
          </div>
        </div>
      </Container>

      <div
        className={`mobile sm:hidden absolute top-12 min-h-[calc(100dvh-3rem)] w-full px-5 z-999 bg-white flex flex-col pb-5 
      ${open ? "translate-x-0" : "-translate-x-full"} transition-all duration-300`}
      >
        <CustomInput label="search products..." name={"search"}>
          <Search className="absolute right-0 top-1/2 -translate-1/2" />
        </CustomInput>
        <Accordion
          type="single"
          collapsible
          defaultValue="home"
          className=" gap-0"
        >
          {mobileMenus.map((menu) => (
            <AccordionItem
              key={menu.title}
              value={menu.title}
              className={"border-b-0!"}
            >
              <AccordionTrigger className="capitalize  text-primary text-xl font-medium ">
                {menu.title}
              </AccordionTrigger>

              {menu.subMenus && (
                <AccordionContent>
                  <ul className="flex flex-col gap-2  border-b border-secondary/50 pb-3">
                    {menu.subMenus.map((subMenu, index) => (
                      <li
                        key={index}
                        className="text-primary cursor-pointer w-full capitalize "
                      >
                        <Link href={"/"} className="no-underline!">
                          {subMenu}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
        <div className="flex-1 flex flex-col gap-y-3.5 justify-end">
          <div className="myAccount flex items-center gap-x-3.5 uppercase">
            <User />
            <h1 className="text-primary text-sm font-medium">my account</h1>
          </div>
          <div className="language flex items-center gap-x-7 capitalize">
            <h2 className="text-sm text-secondary ">language</h2>
            <select
              name="language"
              id="language"
              className="outline-none text-sm text-primary "
            >
              {languages.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="currency capitalize flex items-center gap-x-7">
            <h2>currency</h2>
            <select
              name="currency"
              id="currency"
              className="outline-none text-sm text-primary "
            >
              {currencies.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className="social flex items-center gap-9 ">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map(
              (Icon, index) => (
                <Icon
                  key={index}
                  className="text-xl text-secondary hover:text-primary duration-300"
                />
              ),
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
